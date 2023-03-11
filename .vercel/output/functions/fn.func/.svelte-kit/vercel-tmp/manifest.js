export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","img/.DS_Store","img/404.svg","img/500.svg","img/arrowDown.svg","img/close.svg","img/error.svg","img/fb-icon.svg","img/flexibility.svg","img/human.svg","img/insta-icon.svg","img/lang.svg","img/logo.png","img/ltShape.svg","img/mail-icon.svg","img/phone-icon.svg","img/quality.svg","img/tree.svg","mstile-150x150.png","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.76179ea5.js","imports":["_app/immutable/entry/start.76179ea5.js","_app/immutable/chunks/index.e2337eb8.js","_app/immutable/chunks/singletons.1b520899.js","_app/immutable/chunks/index.31d77d74.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.fd260dc0.js","imports":["_app/immutable/entry/app.fd260dc0.js","_app/immutable/chunks/index.e2337eb8.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/arborist-service",
				pattern: /^\/arborist-service\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/rope-access-service",
				pattern: /^\/rope-access-service\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
