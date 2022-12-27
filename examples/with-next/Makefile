build:
	npm run build

dev:
	npm run dev

install:
	cd ../.. && yarn build
	rm -Rf ./.next ./node_modules ./package-lock.json
	npm i
	npm link ../../dist

start:
	npm run build
	npm start
