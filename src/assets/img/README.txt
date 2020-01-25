CONVERT JPG/PNG TO WEBP:
cwebp image.png -q 90 -alpha_q 100 -m 6 -o image.webp

REMOVE UNUSED CSS:
purgecss --css build/static/css/*.css --content build/static/index.html build/static/js/*.js --out build/static/css