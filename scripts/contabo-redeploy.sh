#!/bin/bash
set -euo pipefail
echo "=== extract ==="
mkdir -p /opt/hawkbytes-website
cp -a /opt/hawkbytes-website/contabo-run.sh /tmp/contabo-run.sh.bak 2>/dev/null || true
cp -a /opt/hawkbytes-website/contabo-build.sh /tmp/contabo-build.sh.bak 2>/dev/null || true
cd /opt/hawkbytes-website
tar -xzf /tmp/hawkbytes-website-deploy.tgz
if [ -f /tmp/contabo-run.sh.bak ]; then cp -a /tmp/contabo-run.sh.bak /opt/hawkbytes-website/contabo-run.sh; fi
if [ -f /tmp/contabo-build.sh.bak ]; then cp -a /tmp/contabo-build.sh.bak /opt/hawkbytes-website/contabo-build.sh; fi

python3 - <<'PY'
from pathlib import Path
p = Path('/opt/hawkbytes-website/next.config.ts')
t = p.read_text()
if 'output: "standalone"' not in t and "output: 'standalone'" not in t:
    t = t.replace('const nextConfig: NextConfig = {', 'const nextConfig: NextConfig = {\n  output: "standalone",')
    p.write_text(t)
    print('patched standalone')
else:
    print('standalone ok')
print(p.read_text())
PY

ls -la /opt/hawkbytes-website | head -25
echo "=== files count ==="
find /opt/hawkbytes-website -type f | wc -l
test -f /opt/hawkbytes-website/lib/i18n/dictionaries/en.ts && echo i18n_ok
test -f /opt/hawkbytes-website/Dockerfile && echo dockerfile_ok

echo "=== docker build ==="
cd /opt/hawkbytes-website
docker build -t hawkbytes-website:latest .

echo "=== restart container ==="
docker rm -f hawkbytes-web 2>/dev/null || true

ENV_FILE=/opt/hawkbytes-website/.env.production
if [ ! -f "$ENV_FILE" ]; then
  echo "MISSING $ENV_FILE — create it with RESEND_* and CAPTCHA_SECRET before deploy"
  exit 1
fi

docker run -d \
  --name hawkbytes-web \
  --restart unless-stopped \
  --network social-media-crossposter_smc \
  --env-file "$ENV_FILE" \
  -e NODE_ENV=production \
  -e PORT=3000 \
  -e HOSTNAME=0.0.0.0 \
  hawkbytes-website:latest

sleep 4
docker ps --filter name=hawkbytes-web
echo "=== logs ==="
docker logs hawkbytes-web --tail 50

echo "=== health checks ==="
curl -sS -m 20 -o /dev/null -w "HTTP_HOST=%{http_code}\n" -H "Host: hawkbytes.cloud" http://127.0.0.1/ || true
curl -sS -m 20 -o /dev/null -w "HTTPS=%{http_code}\n" https://hawkbytes.cloud/ || true
curl -sS -m 20 https://hawkbytes.cloud/ | head -c 500 || true
echo
echo DEPLOY_OK
