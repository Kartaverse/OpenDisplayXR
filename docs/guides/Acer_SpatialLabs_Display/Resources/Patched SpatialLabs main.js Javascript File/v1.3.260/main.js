/*! For license information please see main.js.LICENSE.txt */
require("source-map-support/source-map-support.js").install(), module.exports = function(e) {
	var t = {};

	function __webpack_require__(n) {
		if (t[n]) return t[n].exports;
		var i = t[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return e[n].call(i.exports, i, i.exports, __webpack_require__), i.l = !0, i.exports
	}
	return __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
		__webpack_require__.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, __webpack_require__.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, __webpack_require__.t = function(e, t) {
		if (1 & t && (e = __webpack_require__(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var i in e) __webpack_require__.d(n, i, function(t) {
				return e[t]
			}.bind(null, i));
		return n
	}, __webpack_require__.n = function(e) {
		var t = e && e.__esModule ? function getDefault() {
			return e.default
		} : function getModuleExports() {
			return e
		};
		return __webpack_require__.d(t, "a", t), t
	}, __webpack_require__.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 94)
}([function(e, t) {
	e.exports = require("path")
}, function(e, t) {
	e.exports = require("electron")
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.newError = t.asArray = t.CURRENT_APP_PACKAGE_FILE_NAME = t.CURRENT_APP_INSTALLER_FILE_NAME = t.XElement = t.parseXml = t.ProgressCallbackTransform = t.UUID = t.parseDn = t.githubUrl = t.getS3LikeProviderBaseUrl = t.configureRequestUrl = t.parseJson = t.safeStringifyJson = t.configureRequestOptionsFromUrl = t.configureRequestOptions = t.safeGetHeader = t.DigestTransform = t.HttpExecutor = t.createHttpError = t.HttpError = t.CancellationError = t.CancellationToken = void 0;
	var i = n(70);
	Object.defineProperty(t, "CancellationToken", {
		enumerable: !0,
		get: function() {
			return i.CancellationToken
		}
	}), Object.defineProperty(t, "CancellationError", {
		enumerable: !0,
		get: function() {
			return i.CancellationError
		}
	});
	var r = n(72);
	Object.defineProperty(t, "HttpError", {
		enumerable: !0,
		get: function() {
			return r.HttpError
		}
	}), Object.defineProperty(t, "createHttpError", {
		enumerable: !0,
		get: function() {
			return r.createHttpError
		}
	}), Object.defineProperty(t, "HttpExecutor", {
		enumerable: !0,
		get: function() {
			return r.HttpExecutor
		}
	}), Object.defineProperty(t, "DigestTransform", {
		enumerable: !0,
		get: function() {
			return r.DigestTransform
		}
	}), Object.defineProperty(t, "safeGetHeader", {
		enumerable: !0,
		get: function() {
			return r.safeGetHeader
		}
	}), Object.defineProperty(t, "configureRequestOptions", {
		enumerable: !0,
		get: function() {
			return r.configureRequestOptions
		}
	}), Object.defineProperty(t, "configureRequestOptionsFromUrl", {
		enumerable: !0,
		get: function() {
			return r.configureRequestOptionsFromUrl
		}
	}), Object.defineProperty(t, "safeStringifyJson", {
		enumerable: !0,
		get: function() {
			return r.safeStringifyJson
		}
	}), Object.defineProperty(t, "parseJson", {
		enumerable: !0,
		get: function() {
			return r.parseJson
		}
	}), Object.defineProperty(t, "configureRequestUrl", {
		enumerable: !0,
		get: function() {
			return r.configureRequestUrl
		}
	});
	var o = n(115);
	Object.defineProperty(t, "getS3LikeProviderBaseUrl", {
		enumerable: !0,
		get: function() {
			return o.getS3LikeProviderBaseUrl
		}
	}), Object.defineProperty(t, "githubUrl", {
		enumerable: !0,
		get: function() {
			return o.githubUrl
		}
	});
	var s = n(116);
	Object.defineProperty(t, "parseDn", {
		enumerable: !0,
		get: function() {
			return s.parseDn
		}
	});
	var a = n(117);
	Object.defineProperty(t, "UUID", {
		enumerable: !0,
		get: function() {
			return a.UUID
		}
	});
	var c = n(75);
	Object.defineProperty(t, "ProgressCallbackTransform", {
		enumerable: !0,
		get: function() {
			return c.ProgressCallbackTransform
		}
	});
	var l = n(118);
	Object.defineProperty(t, "parseXml", {
		enumerable: !0,
		get: function() {
			return l.parseXml
		}
	}), Object.defineProperty(t, "XElement", {
		enumerable: !0,
		get: function() {
			return l.XElement
		}
	}), t.CURRENT_APP_INSTALLER_FILE_NAME = "installer.exe", t.CURRENT_APP_PACKAGE_FILE_NAME = "package.7z", t.asArray = function asArray(e) {
		return null == e ? [] : Array.isArray(e) ? e : [e]
	}, t.newError = function newError(e, t) {
		const n = new Error(e);
		return n.code = t, n
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.LogIt = void 0;
	const i = n(1),
		r = n(0);
	class LogIt {
		constructor() {
			this.log = n(42), this.fs = n(5), this.logConfig()
		}
		static getInstance() {
			return LogIt.instance || (LogIt.instance = new LogIt), LogIt.instance
		}
		logConfig() {
			const e = new Date,
				t = e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate() + ("_" + e.getHours() + "-" + e.getMinutes() + "-" + e.getSeconds()) + ".log",
				n = i.app.getPath("userData").concat("\\logs");
			this.fs.existsSync(n) || this.fs.mkdirSync(n);
			const o = r.join(i.app.getPath("userData"), "logs", t);
			this.log.transports.file.format = "{y}-{m}-{d} {h}:{i}:{s}:{ms} - {text}", this.log.transports.file.maxSize = 5242880, this.log.transports.file.file = o, this.log.transports.file.streamConfig = {
				flags: "w"
			}, this.log.transports.file.stream = this.fs.createWriteStream(o)
		}
		writeLog(e, t = 0) {
			switch (t) {
				case 0:
					this.log.silly(e);
					break;
				case 1:
					this.log.error(e);
					break;
				case 2:
					this.log.warn(e);
					break;
				case 3:
					this.log.info(e);
					break;
				case 4:
					this.log.verbose(e);
					break;
				case 5:
					this.log.debug(e);
					break;
				default:
					this.log.info(e)
			}
		}
	}
	t.LogIt = LogIt
}, function(e, t, n) {
	const i = n(37),
		{
			MAX_LENGTH: r,
			MAX_SAFE_INTEGER: o
		} = n(36),
		{
			re: s,
			t: a
		} = n(26),
		c = n(38),
		{
			compareIdentifiers: l
		} = n(53);
	class SemVer {
		constructor(e, t) {
			if (t = c(t), e instanceof SemVer) {
				if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
				e = e.version
			} else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
			if (e.length > r) throw new TypeError(`version is longer than ${r} characters`);
			i("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
			const n = e.trim().match(t.loose ? s[a.LOOSE] : s[a.FULL]);
			if (!n) throw new TypeError("Invalid Version: " + e);
			if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > o || this.major < 0) throw new TypeError("Invalid major version");
			if (this.minor > o || this.minor < 0) throw new TypeError("Invalid minor version");
			if (this.patch > o || this.patch < 0) throw new TypeError("Invalid patch version");
			n[4] ? this.prerelease = n[4].split(".").map(e => {
				if (/^[0-9]+$/.test(e)) {
					const t = +e;
					if (t >= 0 && t < o) return t
				}
				return e
			}) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
		}
		format() {
			return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
		}
		toString() {
			return this.version
		}
		compare(e) {
			if (i("SemVer.compare", this.version, this.options, e), !(e instanceof SemVer)) {
				if ("string" == typeof e && e === this.version) return 0;
				e = new SemVer(e, this.options)
			}
			return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
		}
		compareMain(e) {
			return e instanceof SemVer || (e = new SemVer(e, this.options)), l(this.major, e.major) || l(this.minor, e.minor) || l(this.patch, e.patch)
		}
		comparePre(e) {
			if (e instanceof SemVer || (e = new SemVer(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
			if (!this.prerelease.length && e.prerelease.length) return 1;
			if (!this.prerelease.length && !e.prerelease.length) return 0;
			let t = 0;
			do {
				const n = this.prerelease[t],
					r = e.prerelease[t];
				if (i("prerelease compare", t, n, r), void 0 === n && void 0 === r) return 0;
				if (void 0 === r) return 1;
				if (void 0 === n) return -1;
				if (n !== r) return l(n, r)
			} while (++t)
		}
		compareBuild(e) {
			e instanceof SemVer || (e = new SemVer(e, this.options));
			let t = 0;
			do {
				const n = this.build[t],
					r = e.build[t];
				if (i("prerelease compare", t, n, r), void 0 === n && void 0 === r) return 0;
				if (void 0 === r) return 1;
				if (void 0 === n) return -1;
				if (n !== r) return l(n, r)
			} while (++t)
		}
		inc(e, t) {
			switch (e) {
				case "premajor":
					this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
					break;
				case "preminor":
					this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
					break;
				case "prepatch":
					this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
					break;
				case "prerelease":
					0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
					break;
				case "major":
					0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
					break;
				case "minor":
					0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
					break;
				case "patch":
					0 === this.prerelease.length && this.patch++, this.prerelease = [];
					break;
				case "pre":
					if (0 === this.prerelease.length) this.prerelease = [0];
					else {
						let e = this.prerelease.length;
						for (; --e >= 0;) "number" == typeof this.prerelease[e] && (this.prerelease[e]++, e = -2); - 1 === e && this.prerelease.push(0)
					}
					t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
					break;
				default:
					throw new Error("invalid increment argument: " + e)
			}
			return this.format(), this.raw = this.version, this
		}
	}
	e.exports = SemVer
}, function(e, t) {
	e.exports = require("fs")
}, function(e, t, n) {
	var i, r, o = n(5),
		s = n(121),
		a = n(123),
		c = n(124),
		l = n(47);

	function publishQueue(e, t) {
		Object.defineProperty(e, i, {
			get: function() {
				return t
			}
		})
	}
	"function" == typeof Symbol && "function" == typeof Symbol.for ? (i = Symbol.for("graceful-fs.queue"), r = Symbol.for("graceful-fs.previous")) : (i = "___graceful-fs.queue", r = "___graceful-fs.previous");
	var u, d = function noop() {};
	if (l.debuglog ? d = l.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (d = function() {
			var e = l.format.apply(l, arguments);
			e = "GFS4: " + e.split(/\n/).join("\nGFS4: "), console.error(e)
		}), !o[i]) {
		var h = global[i] || [];
		publishQueue(o, h), o.close = function(e) {
			function close(t, n) {
				return e.call(o, t, (function(e) {
					e || resetQueue(), "function" == typeof n && n.apply(this, arguments)
				}))
			}
			return Object.defineProperty(close, r, {
				value: e
			}), close
		}(o.close), o.closeSync = function(e) {
			function closeSync(t) {
				e.apply(o, arguments), resetQueue()
			}
			return Object.defineProperty(closeSync, r, {
				value: e
			}), closeSync
		}(o.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", (function() {
			d(o[i]), n(76).equal(o[i].length, 0)
		}))
	}

	function patch(e) {
		s(e), e.gracefulify = patch, e.createReadStream = function createReadStream(t, n) {
			return new e.ReadStream(t, n)
		}, e.createWriteStream = function createWriteStream(t, n) {
			return new e.WriteStream(t, n)
		};
		var t = e.readFile;
		e.readFile = function readFile(e, n, i) {
			"function" == typeof n && (i = n, n = null);
			return function go$readFile(e, n, i, r) {
				return t(e, n, (function(t) {
					!t || "EMFILE" !== t.code && "ENFILE" !== t.code ? "function" == typeof i && i.apply(this, arguments) : enqueue([go$readFile, [e, n, i], t, r || Date.now(), Date.now()])
				}))
			}(e, n, i)
		};
		var n = e.writeFile;
		e.writeFile = function writeFile(e, t, i, r) {
			"function" == typeof i && (r = i, i = null);
			return function go$writeFile(e, t, i, r, o) {
				return n(e, t, i, (function(n) {
					!n || "EMFILE" !== n.code && "ENFILE" !== n.code ? "function" == typeof r && r.apply(this, arguments) : enqueue([go$writeFile, [e, t, i, r], n, o || Date.now(), Date.now()])
				}))
			}(e, t, i, r)
		};
		var i = e.appendFile;
		i && (e.appendFile = function appendFile(e, t, n, r) {
			"function" == typeof n && (r = n, n = null);
			return function go$appendFile(e, t, n, r, o) {
				return i(e, t, n, (function(i) {
					!i || "EMFILE" !== i.code && "ENFILE" !== i.code ? "function" == typeof r && r.apply(this, arguments) : enqueue([go$appendFile, [e, t, n, r], i, o || Date.now(), Date.now()])
				}))
			}(e, t, n, r)
		});
		var r = e.copyFile;
		r && (e.copyFile = function copyFile(e, t, n, i) {
			"function" == typeof n && (i = n, n = 0);
			return function go$copyFile(e, t, n, i, o) {
				return r(e, t, n, (function(r) {
					!r || "EMFILE" !== r.code && "ENFILE" !== r.code ? "function" == typeof i && i.apply(this, arguments) : enqueue([go$copyFile, [e, t, n, i], r, o || Date.now(), Date.now()])
				}))
			}(e, t, n, i)
		});
		var o = e.readdir;
		if (e.readdir = function readdir(e, t, n) {
				"function" == typeof t && (n = t, t = null);
				return function go$readdir(e, t, n, i) {
					return o(e, t, (function(r, o) {
						!r || "EMFILE" !== r.code && "ENFILE" !== r.code ? (o && o.sort && o.sort(), "function" == typeof n && n.call(this, r, o)) : enqueue([go$readdir, [e, t, n], r, i || Date.now(), Date.now()])
					}))
				}(e, t, n)
			}, "v0.8" === process.version.substr(0, 4)) {
			var c = a(e);
			ReadStream = c.ReadStream, WriteStream = c.WriteStream
		}
		var l = e.ReadStream;
		l && (ReadStream.prototype = Object.create(l.prototype), ReadStream.prototype.open = function ReadStream$open() {
			var e = this;
			open(e.path, e.flags, e.mode, (function(t, n) {
				t ? (e.autoClose && e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n), e.read())
			}))
		});
		var u = e.WriteStream;
		u && (WriteStream.prototype = Object.create(u.prototype), WriteStream.prototype.open = function WriteStream$open() {
			var e = this;
			open(e.path, e.flags, e.mode, (function(t, n) {
				t ? (e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n))
			}))
		}), Object.defineProperty(e, "ReadStream", {
			get: function() {
				return ReadStream
			},
			set: function(e) {
				ReadStream = e
			},
			enumerable: !0,
			configurable: !0
		}), Object.defineProperty(e, "WriteStream", {
			get: function() {
				return WriteStream
			},
			set: function(e) {
				WriteStream = e
			},
			enumerable: !0,
			configurable: !0
		});
		var d = ReadStream;
		Object.defineProperty(e, "FileReadStream", {
			get: function() {
				return d
			},
			set: function(e) {
				d = e
			},
			enumerable: !0,
			configurable: !0
		});
		var h = WriteStream;

		function ReadStream(e, t) {
			return this instanceof ReadStream ? (l.apply(this, arguments), this) : ReadStream.apply(Object.create(ReadStream.prototype), arguments)
		}

		function WriteStream(e, t) {
			return this instanceof WriteStream ? (u.apply(this, arguments), this) : WriteStream.apply(Object.create(WriteStream.prototype), arguments)
		}
		Object.defineProperty(e, "FileWriteStream", {
			get: function() {
				return h
			},
			set: function(e) {
				h = e
			},
			enumerable: !0,
			configurable: !0
		});
		var p = e.open;

		function open(e, t, n, i) {
			return "function" == typeof n && (i = n, n = null),
				function go$open(e, t, n, i, r) {
					return p(e, t, n, (function(o, s) {
						!o || "EMFILE" !== o.code && "ENFILE" !== o.code ? "function" == typeof i && i.apply(this, arguments) : enqueue([go$open, [e, t, n, i], o, r || Date.now(), Date.now()])
					}))
				}(e, t, n, i)
		}
		return e.open = open, e
	}

	function enqueue(e) {
		d("ENQUEUE", e[0].name, e[1]), o[i].push(e), retry()
	}

	function resetQueue() {
		for (var e = Date.now(), t = 0; t < o[i].length; ++t) o[i][t].length > 2 && (o[i][t][3] = e, o[i][t][4] = e);
		retry()
	}

	function retry() {
		if (clearTimeout(u), u = void 0, 0 !== o[i].length) {
			var e = o[i].shift(),
				t = e[0],
				n = e[1],
				r = e[2],
				s = e[3],
				a = e[4];
			if (void 0 === s) d("RETRY", t.name, n), t.apply(null, n);
			else if (Date.now() - s >= 6e4) {
				d("TIMEOUT", t.name, n);
				var c = n.pop();
				"function" == typeof c && c.call(null, r)
			} else {
				var l = Date.now() - a,
					h = Math.max(a - s, 1);
				l >= Math.min(1.2 * h, 100) ? (d("RETRY", t.name, n), t.apply(null, n.concat([s]))) : o[i].push(e)
			}
			void 0 === u && (u = setTimeout(retry, 0))
		}
	}
	global[i] || publishQueue(global, o[i]), e.exports = patch(c(o)), process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !o.__patched && (e.exports = patch(o), o.__patched = !0)
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Util = void 0;
	const r = n(1),
		o = (n(43), n(63), n(20)),
		s = n(14),
		a = n(5),
		c = (n(44).default, n(21)),
		l = n(22),
		u = n(13),
		d = n(29),
		h = n(3),
		p = n(15),
		f = n(32),
		g = n(0),
		m = n(45);
	var b;
	! function(e) {
		e[e.StopKey = 0] = "StopKey", e[e.FailedMessage = 1] = "FailedMessage", e[e.GoButton = 2] = "GoButton", e[e.AltTab = 3] = "AltTab", e[e.CheckFullScreen = 4] = "CheckFullScreen", e[e.Esc = 5] = "Esc", e[e.RemoveHDMI = 6] = "RemoveHDMI", e[e.RemoveUSB = 7] = "RemoveUSB", e[e.WinKey = 8] = "WinKey", e[e.AIInitialing = 9] = "AIInitialing"
	}(b || (b = {}));
	class Util {
		constructor() {
			this.bIn3DView = !1, this._env = c.Env.getInstance(), this._window = l.Window.getInstance(), this._i18n = d.I18n.getInstance(), this._log = h.LogIt.getInstance(), this._admin = p.Admin.getInstance(), this._widgetRoot = g.join(r.app.getPath("appData"), "SpatialLabs"), this._osdWindow = m.OSDWindow.getInstance(), this._regObjArray = new Array, this._isPowerPlugged = !0, this._isStress = !1, this._msixFlag = !0, this._deviceFlag = !0, this.mainWindow = null
		}
		static getInstance() {
			return Util.instance || (Util.instance = new Util), Util.instance
		}
		setMainWindow(e) {
			this.mainWindow = e
		}
		isMsixFlag() {
			return this._msixFlag
		}
		setMsixFlag(e) {
			this._msixFlag = e, this._log.writeLog("setMsixFlag: " + e)
		}
		isDeviceFlag() {
			return this._deviceFlag
		}
		setDeviceFlag(e) {
			this._deviceFlag = e, this._log.writeLog("setDeviceFlag: " + e)
		}
		isForegroudInFullscreen() {
			let e = !this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Fullscreen_Detection") || this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Fullscreen_Detection");
			return o.isForegroudInFullscreen() || !Boolean(Number(e))
		}
		isFullscreenDetection() {
			let e = !this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Fullscreen_Detection") || this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Fullscreen_Detection");
			return Boolean(Number(e))
		}
		isFocusDetection() {
			let e = !this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Focus_Detection") || this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Focus_Detection");
			return Boolean(Number(e))
		}
		getDetectInterval() {
			let e = Number(this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Detection_Interval"));
			return 0 == e && (e = 5), e
		}
		getDeviceType() {
			let e = Number(this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Device_Type"));
			return 0 == e ? "SPARKS" : 1 == e ? "ZSPACE" : 2 == e ? "DS1P" : 3 == e ? "DS1C" : 4 == e ? "EVOQUE_GLA" : "NA"
		}
		isIRCameraDevice() {
			let e = !1;
			const t = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Main_Monitor"),
				n = this._admin.getModelNumber();
			return "ACR0002" !== t && "ACR0003" !== t && "Aspire A3D15-71GM" !== n || (e = !0), e
		}
		getMainMonitor() {
			return this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Main_Monitor")
		}
		getGASyncInterval() {
			let e = Number(this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "GASync_Interval"));
			return 0 == e && (e = 604800), e
		}
		is3DView() {
			return this.bIn3DView
		}
		sendKeyboardEvent(e) {
			return o.sendKeyboardEvent(e)
		}
		isFocusTutorial() {
			const e = u.getCurrent();
			return !(!e || "tutorial" !== e.name)
		}
		start3DView() {
			if (this._log.writeLog("enter start3DView"), !this.bIn3DView && o.startSLDSSession()) {
				this._log.writeLog("startSLDSSession");
				try {
					const e = u.get("floating");
					e && e.object.hide()
				} catch (e) {}
				this.bIn3DView = !0, r.globalShortcut.register("Alt + " + this._admin.getStopCombinationKey(), () => {
					this.stop3DViewStopKey()
				}), setTimeout(() => {
					this.isStereoGeneration() && (r.globalShortcut.register("Alt + " + this.getDepthKey(this._admin.getAddDepthCombinationKey()), () => {
						this._osdWindow.adjustDepth("+")
					}), r.globalShortcut.register("Alt + " + this.getDepthKey(this._admin.getSubDepthCombinationKey()), () => {
						this._osdWindow.adjustDepth("-")
					}), r.globalShortcut.register("Alt + " + this._admin.getAddConvergenceCombinationKey(), () => {
						this._osdWindow.adjustConvergence("+")
					}), r.globalShortcut.register("Alt + " + this._admin.getSubConvergenceCombinationKey(), () => {
						this._osdWindow.adjustConvergence("-")
					}), r.globalShortcut.register("Ctrl + " + this._admin.getSwitchOSDCombinationKey(), () => {
						this._osdWindow.showStatus(!0)
					}))
				}, 1e3), this.isStressTest() && setTimeout(() => {
					this.stop3DViewStopKey()
				}, this.getDelayExit3D())
			}
		}
		closeOSD() {
			this._osdWindow.close()
		}
		showStereoInfo() {
			this._osdWindow.showStereoInfo()
		}
		getDepthKey(e) {
			return "+" === e ? "numadd" : "-" === e ? "numsub" : e
		}
		enter3DView() {
			this._log.writeLog("bIn3DView: " + this.bIn3DView), this.close3DHint(), o.isHackerKeyPressed() || this.isForegroudInFullscreen() ? this.start3DView() : this.showNotFullScreen()
		}
		stop3DViewStopKey() {
			this.bIn3DView && this.stop3DView(b.StopKey)
		}
		stop3DViewFailedMessage() {
			this.stop3DView(b.FailedMessage)
		}
		stop3DViewEsc() {
			this.bIn3DView && this.stop3DView(b.Esc)
		}
		stop3DViewWinKey() {
			this.bIn3DView && this.stop3DView(b.WinKey)
		}
		stop3DViewAIInitialing() {
			this.bIn3DView && this.stop3DView(b.AIInitialing)
		}
		stop3DViewAltTab() {
			this.bIn3DView && this.stop3DView(b.AltTab)
		}
		stop3DViewCheckFullScreen() {
			this.bIn3DView && this.stop3DView(b.CheckFullScreen)
		}
		stop3DViewRemoveHDMI() {
			this.bIn3DView && this.stop3DView(b.RemoveHDMI)
		}
		stop3DViewRemoveUSB() {
			this.bIn3DView && this.stop3DView(b.RemoveUSB)
		}
		stop3DView(e) {
			try {
				const e = u.get("floating");
				e && e.object.show()
			} catch (e) {}
			this.bIn3DView = !1, this._activePID = void 0, clearInterval(this._detectForegroundInterval), o.stopSLDSSession(e), this._log.writeLog("stopSLDSSession: " + e), r.globalShortcut.unregister("Alt + " + this._admin.getStopCombinationKey()), r.globalShortcut.unregister("Alt + " + this.getDepthKey(this._admin.getAddDepthCombinationKey())), r.globalShortcut.unregister("Alt + " + this.getDepthKey(this._admin.getSubDepthCombinationKey())), r.globalShortcut.unregister("Alt + " + this._admin.getAddConvergenceCombinationKey()), r.globalShortcut.unregister("Alt + " + this._admin.getSubConvergenceCombinationKey()), r.globalShortcut.unregister("Ctrl + " + this._admin.getSwitchOSDCombinationKey()), this._osdWindow.close();
			const t = u.get("main");
			t && t.object && t.object.webContents && t.object.webContents.send("refresh-settings"), this.setStereoGeneration(this._admin.isStereoGeneration()), this.isStressTest() && setTimeout(() => i(this, void 0, void 0, (function*() {
				this._stressCount++, this._log.writeLog("stress test: " + this._stressCount), this.enter3DView()
			})), this.getDelayEnter3D())
		}
		showNotFullScreen() {
			this.showToast({
				title: this._i18n.__("Cannot_Enable_3D_Mode"),
				message: this._i18n.__("Make_Sure_In_Full_Screen")
			})
		}
		showAIInitialing() {
			this.showToast({
				title: this._i18n.__("Conversion_Mode_Initializing"),
				message: this._i18n.__("Please_Wait_3D")
			})
		}
		showMessageBox(e) {
			const t = this._env.getLocalUrl(),
				n = this._window.createWindow({
					url: t + "#/message",
					width: 420,
					height: 200,
					resizable: !1,
					frame: !1,
					show: !1,
					transparent: !0,
					alwaysOnTop: !0,
					center: !0
				});
			u.get(n).object.data = e, this._window.bringWinToTop(n)
		}
		showToast(e) {
			this.close3DHint();
			let t;
			t = o.isForegroudInFullscreen() ? r.screen.getPrimaryDisplay().bounds : r.screen.getPrimaryDisplay().workAreaSize;
			const n = t.width - 440 - 20,
				i = t.height - 132 - 20,
				s = this._env.getLocalUrl(),
				a = this._window.createWindow({
					url: s + "#/toast",
					width: 440,
					height: 132,
					x: n,
					y: i,
					resizable: !1,
					frame: !1,
					show: !1,
					transparent: !0,
					alwaysOnTop: !0,
					focusable: !1
				}),
				c = u.get(a);
			c.object.data = e, c.object.setAlwaysOnTop(!0, "screen")
		}
		show3DHint(e) {
			let t = u.get("go-info");
			if (t && t.object) return;
			this.closeToast();
			const n = r.screen.getPrimaryDisplay().bounds,
				i = n.width - 440 - 20,
				o = n.height - 164 - 20,
				s = this._env.getLocalUrl(),
				a = this._window.createWindow({
					url: s + "#/go-info",
					width: 440,
					height: 164,
					x: i,
					y: o,
					resizable: !1,
					frame: !1,
					show: !1,
					transparent: !0,
					alwaysOnTop: !0,
					focusable: !1
				});
			t = u.get(a), t.object.enable3D = e, t.object.setAlwaysOnTop(!0, "screen")
		}
		close3DHint() {
			let e = u.get("go-info");
			e && e.object && e.object.close()
		}
		closeToast() {
			let e = u.get("toast");
			e && e.object && e.object.close()
		}
		pressGo() {
			this.isForegroudInFullscreen() ? this.show3DHint(!0) : this.showNotFullScreen()
		}
		openExternal(e) {
			r.shell.openExternal(e)
		}
		browsePageBySysBrowser(e) {
			const t = function getChromePath() {
				return o.getRegistryValue(2, "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\chrome.exe", "")
			}();
			if (t && "" !== t) {
				if (a.existsSync(t)) {
					let n = [];
					n.push(e.url), void 0 === s.spawn(t, n, {
						detached: !0,
						stdio: "ignore"
					}) && r.shell.openExternal(e.url)
				}
			} else r.shell.openExternal(e.url)
		}
		checkRegistryKey(e) {
			const t = "SOFTWARE\\DEVPLANET9\\" + e;
			return o.getRegistryValue(1, t, "")
		}
		shortenUpdateTimeWithKey() {
			return o.getRegistryValue(1, "SOFTWARE\\DEVPLANET9\\ShortenUpdateTime", "")
		}
		getRegistryValue(e, t) {
			let n = "",
				i = ["/c", "chcp", "65001>nul", "&&", "REG", "QUERY", e, "/v", t],
				r = s.spawnSync("CMD", i);
			if (!r.error) {
				n = String(r.stdout).replace(/\r\n/g, "").split("    ").pop()
			}
			return n
		}
		pipe(e, t = "") {
			const n = f.connect("\\\\.\\pipe\\SLECPipe", () => {
				console.log("Client: on connection");
				const i = {
						cmd: e,
						type: t
					},
					r = JSON.stringify(i);
				n.write(r), n.on("data", e => {
					this._log.writeLog("pipe result: " + e.toString()), n.end()
				})
			});
			n.on("error", e => {
				this._log.writeLog("pipe error: " + e.message)
			})
		}
		runAsAdmin(e, t) {
			let n = 0,
				i = null;
			return new Promise((r, o) => {
				i = f.connect("\\\\.\\pipe\\spatiallabspipe"), i.on("connect", () => {
					console.log("Client: on connection");
					const n = {
							cmd: "Launch",
							exe: e,
							args: t
						},
						o = JSON.stringify(n) + "\r\n";
					i.write(o), i.on("data", e => {
						const t = JSON.parse(e.toString());
						r(t), i.end()
					})
				}), i.on("error", e => {
					n++, n >= 3 ? (o(e), i.end()) : i.connect("\\\\.\\pipe\\spatiallabspipe")
				})
			})
		}
		writeReg(e) {
			this._retry = 0, Array.prototype.push.apply(this._regObjArray, e), this._regInterval || (this._regInterval = setInterval(() => {
				0 === this._regObjArray.length ? (clearInterval(this._regInterval), this._regInterval = void 0) : this._isRegPush || (this._retry >= 3 ? (this._regObjArray.splice(0, this._regObjArray.length), this._retry = 0) : this.pushReg(this._regObjArray.slice()))
			}, 500))
		}
		pushReg(e) {
			return i(this, void 0, void 0, (function*() {
				this._log.writeLog("regObjs: " + JSON.stringify(e, void 0, 2)), this._isRegPush = !0;
				const t = new Array;
				t.push("Windows Registry Editor Version 5.00"), e.forEach(e => {
					t.push(`[${e.key}]`), e.value.forEach(e => {
						t.push(e)
					})
				}), a.existsSync(this._widgetRoot) || a.mkdirSync(this._widgetRoot, {
					recursive: !0
				});
				const n = g.resolve("" + this._widgetRoot, "tmp.reg");
				try {
					a.writeFileSync(n, t.join("\r\n")), yield this.runAsAdmin("reg.exe", `import "${n}"`).then(t => {
						this._regObjArray.splice(0, e.length), this._isRegPush = !1
					}).catch(e => {
						this._retry++, this._isRegPush = !1, this._log.writeLog("runAsAdmin fail: " + e)
					})
				} catch (e) {
					console.error(e), this._retry++, this._isRegPush = !1
				}
			}))
		}
		getDelayEnter3D() {
			let e = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "DelayEnter3D");
			return e || (e = "3000"), Number(e)
		}
		getDelayExit3D() {
			let e = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "DelayExit3D");
			return e || (e = "5000"), Number(e)
		}
		getDepthLevels() {
			const e = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\SpatialLabsDisplayService", "SBSGenLevels");
			return Number(e)
		}
		getDepth() {
			const e = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\SpatialLabsDisplayService", "SBSGenStrength");
			return Number(e)
		}
		setDepth(e, t = !0) {
			return i(this, void 0, void 0, (function*() {
				const n = [{
					key: "HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\SpatialLabsDisplayService",
					value: ['"SBSGenStrength"=dword:' + e.toString(16)]
				}];
				yield this.pushReg(n), o.sendMessageToSLDS(2034, e, 0), t && setTimeout(() => {
					this._osdWindow.getStatusWin() && (this._osdWindow.getStatusWin().webContents.send("update-value"), this._log.writeLog("update-value depth: " + e))
				}, 1e3)
			}))
		}
		getConvergence() {
			const e = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\SpatialLabsDisplayService", "ConvergencePlane");
			return Number(e)
		}
		setConvergence(e, t = !0) {
			return i(this, void 0, void 0, (function*() {
				const n = [{
					key: "HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\SpatialLabsDisplayService",
					value: ['"ConvergencePlane"=dword:' + e.toString(16)]
				}];
				yield this.pushReg(n), o.sendMessageToSLDS(2035, e, 0), t && setTimeout(() => {
					this._osdWindow.getStatusWin() && (this._osdWindow.getStatusWin().webContents.send("update-value"), this._log.writeLog("update-value convergencesetConvergence: " + e))
				}, 1e3)
			}))
		}
		setDepthRange(e) {
			o.sendMessageToSLDS(2036, e, 0)
		}
		isStereoGeneration() {
			const e = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\SpatialLabsDisplayService", "StereoGeneration");
			return Boolean(Number(e))
		}
		setStereoGeneration(e) {
			return i(this, void 0, void 0, (function*() {
				const t = [{
					key: "HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\SpatialLabsDisplayService",
					value: ['"StereoGeneration"=dword:' + Number(e)]
				}];
				yield this.pushReg(t)
			}))
		}
		setMonitorDetection(e, t) {
			return i(this, void 0, void 0, (function*() {
				const n = Number(e),
					i = new Array;
				i.push("Windows Registry Editor Version 5.00"), i.push("[HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs]"), i.push('"Monitor_Detection"=dword:' + n), "" !== t && i.push(`"Main_Monitor"="${t}"`), a.existsSync(this._widgetRoot) || a.mkdirSync(this._widgetRoot, {
					recursive: !0
				});
				const r = g.resolve("" + this._widgetRoot, "tmp.reg");
				try {
					a.writeFileSync(r, i.join("\r\n")), yield this.runAsAdmin("reg.exe", `import "${r}"`).catch(e => {
						this._log.writeLog("runAsAdmin: " + e)
					})
				} catch (e) {
					console.error(e)
				}
			}))
		}
		getConversionMode() {
			const e = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\SpatialLabsDisplayService", "SLDSSettingMode");
			return Number(e)
		}
		setConversionMode(e) {
			return i(this, void 0, void 0, (function*() {
				const t = [{
					key: "HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\SpatialLabsDisplayService",
					value: ['"SLDSSettingMode"=dword:' + e.toString(16)]
				}];
				yield this.pushReg(t), o.sendMessageToSLDS(2045, 0, 0)
			}))
		}
		setPowerAdaptorPlugged(e) {
			this._isPowerPlugged = e;
			const t = u.get("main");
			t && t.object && t.object.webContents && t.object.webContents.send("update-power")
		}
		isPowerAdaptorPlugged(e = !1) {
			if (e) {
				let e = ["-command", '(Get-WmiObject -Class BatteryStatus -Namespace root\\wmi -ComputerName "localhost").PowerOnLine'],
					t = s.spawnSync("powershell", e);
				if (!t.error) {
					const e = String(t.stdout);
					this._log.writeLog("isPowerAdaptorPlugged: " + e), e.startsWith("False") && (this._isPowerPlugged = !1)
				}
			}
			return this._isPowerPlugged
		}
		openDisplaySettings() {
			s.exec("start ms-settings:display")
		}
		getPublicUrl(e = !1) {
			let t = "";
			const n = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "STAGING");
			return Boolean(Number(n)) && (t = "https://d2lugipnt3lgwh.cloudfront.net/SpatialLabs%20Experience%20Center%20DS1C"), t
		}
		isDepthRangeMode() {
			const e = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "DEPTH_RANGE_MODE");
			return Boolean(Number(e))
		}
		isConvergence() {
			const e = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "CONVERGENCE");
			return Boolean(Number(e))
		}
		isStressTest(e = !0) {
			if (e) return this._isStress;
			const t = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "STRESS_TEST");
			return Boolean(Number(t))
		}
		setStressTest(e) {
			this._isStress = e, this._stressCount = 0
		}
		cameraLedControl(e) {
			this._log.writeLog("IR CHK: " + e);
			const t = g.join(g.dirname(r.app.getPath("exe")), "win32/TrackingCameraLedControl.exe"),
				n = Number(e);
			try {
				s.exec(`"${t}" ${n}`)
			} catch (e) {
				this._log.writeLog("child_process: " + e)
			}
		}
		irCameraDetect() {
			if (!this._isIRCameraDetect && this.isIRCameraDevice() && this._admin.isUltraLowLight()) {
				const e = "C:/ProgramData/Simulated Reality/Eye Tracker/Log";
				if (a.existsSync(e)) {
					const t = a.readdirSync(e);
					if (t) {
						const n = t.pop();
						this._log.writeLog("detect Eye Tracker log: " + n), this._isIRCameraDetect = !0;
						const i = g.join(e, n);
						let r;
						a.watchFile(i, {
							interval: 3e3
						}, (e, t) => {
							this._admin.isUltraLowLight() && (this._log.writeLog(n + " is be changed"), a.readFile(i, "utf8", (e, t) => {
								if (e) this._log.writeLog("readFile error： : " + e);
								else {
									const e = t.matchAll(/I\d{8}.*?] Enabling Camera..\r\n/g),
										n = Array.from(e).reverse();
									n && n.length > 0 && n[0][0] && this._srSessionLog !== n[0][0] && (this._srSessionLog = n[0][0], this.cameraLedControl(!0))
								}
							}))
						}), r = setInterval(() => {
							const t = a.readdirSync(e);
							if (t) {
								const e = t.pop();
								n !== e && (this._log.writeLog("new Eye Tracker log generate"), clearInterval(r), a.unwatchFile(i), this._isIRCameraDetect = !1, this.irCameraDetect())
							}
						}, 5e3)
					}
				}
			}
		}
		printAllWindows() {
			this._log.writeLog("printAllWindows"), u.windows && (this._log.writeLog("windows: " + Object.keys(u.windows).length), this._log.writeLog(JSON.stringify(u.windows, void 0, 2))), this._window.WinMap && (this._log.writeLog("WinMap: " + this._window.WinMap.size), this._log.writeLog(JSON.stringify(Array.from(this._window.WinMap), void 0, 2)));
			const e = r.BrowserWindow.getFocusedWindow(),
				t = r.BrowserWindow.getAllWindows();
			e && this._log.writeLog("FocusedWindow: " + JSON.stringify(e, void 0, 2)), t && (this._log.writeLog("AllWindows: " + t.length), this._log.writeLog(JSON.stringify(t, void 0, 2)))
		}
	}
	t.Util = Util
}, function(e, t, n) {
	"use strict";
	t.fromCallback = function(e) {
		return Object.defineProperty((function(...t) {
			if ("function" != typeof t[t.length - 1]) return new Promise((n, i) => {
				e.call(this, ...t, (e, t) => null != e ? i(e) : n(t))
			});
			e.apply(this, t)
		}), "name", {
			value: e.name
		})
	}, t.fromPromise = function(e) {
		return Object.defineProperty((function(...t) {
			const n = t[t.length - 1];
			if ("function" != typeof n) return e.apply(this, t);
			e.apply(this, t.slice(0, -1)).then(e => n(null, e), n)
		}), "name", {
			value: e.name
		})
	}
}, function(e, t, n) {
	const i = n(4);
	e.exports = (e, t, n) => new i(e, n).compare(new i(t, n))
}, function(e, t, n) {
	class Range {
		constructor(e, t) {
			if (t = r(t), e instanceof Range) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new Range(e.raw, t);
			if (e instanceof o) return this.raw = e.value, this.set = [
				[e]
			], this.format(), this;
			if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(e => this.parseRange(e.trim())).filter(e => e.length), !this.set.length) throw new TypeError("Invalid SemVer Range: " + e);
			if (this.set.length > 1) {
				const e = this.set[0];
				if (this.set = this.set.filter(e => !isNullSet(e[0])), 0 === this.set.length) this.set = [e];
				else if (this.set.length > 1)
					for (const e of this.set)
						if (1 === e.length && isAny(e[0])) {
							this.set = [e];
							break
						}
			}
			this.format()
		}
		format() {
			return this.range = this.set.map(e => e.join(" ").trim()).join("||").trim(), this.range
		}
		toString() {
			return this.range
		}
		parseRange(e) {
			e = e.trim();
			const t = `parseRange:${Object.keys(this.options).join(",")}:${e}`,
				n = i.get(t);
			if (n) return n;
			const r = this.options.loose,
				a = r ? c[l.HYPHENRANGELOOSE] : c[l.HYPHENRANGE];
			e = e.replace(a, hyphenReplace(this.options.includePrerelease)), s("hyphen replace", e), e = e.replace(c[l.COMPARATORTRIM], u), s("comparator trim", e, c[l.COMPARATORTRIM]), e = (e = (e = e.replace(c[l.TILDETRIM], d)).replace(c[l.CARETTRIM], h)).split(/\s+/).join(" ");
			const p = r ? c[l.COMPARATORLOOSE] : c[l.COMPARATOR],
				f = e.split(" ").map(e => parseComparator(e, this.options)).join(" ").split(/\s+/).map(e => replaceGTE0(e, this.options)).filter(this.options.loose ? e => !!e.match(p) : () => !0).map(e => new o(e, this.options)),
				g = (f.length, new Map);
			for (const e of f) {
				if (isNullSet(e)) return [e];
				g.set(e.value, e)
			}
			g.size > 1 && g.has("") && g.delete("");
			const m = [...g.values()];
			return i.set(t, m), m
		}
		intersects(e, t) {
			if (!(e instanceof Range)) throw new TypeError("a Range is required");
			return this.set.some(n => isSatisfiable(n, t) && e.set.some(e => isSatisfiable(e, t) && n.every(n => e.every(e => n.intersects(e, t)))))
		}
		test(e) {
			if (!e) return !1;
			if ("string" == typeof e) try {
				e = new a(e, this.options)
			} catch (e) {
				return !1
			}
			for (let t = 0; t < this.set.length; t++)
				if (testSet(this.set[t], e, this.options)) return !0;
			return !1
		}
	}
	e.exports = Range;
	const i = new(n(160))({
			max: 1e3
		}),
		r = n(38),
		o = n(40),
		s = n(37),
		a = n(4),
		{
			re: c,
			t: l,
			comparatorTrimReplace: u,
			tildeTrimReplace: d,
			caretTrimReplace: h
		} = n(26),
		isNullSet = e => "<0.0.0-0" === e.value,
		isAny = e => "" === e.value,
		isSatisfiable = (e, t) => {
			let n = !0;
			const i = e.slice();
			let r = i.pop();
			for (; n && i.length;) n = i.every(e => r.intersects(e, t)), r = i.pop();
			return n
		},
		parseComparator = (e, t) => (s("comp", e, t), e = replaceCarets(e, t), s("caret", e), e = replaceTildes(e, t), s("tildes", e), e = replaceXRanges(e, t), s("xrange", e), e = replaceStars(e, t), s("stars", e), e),
		isX = e => !e || "x" === e.toLowerCase() || "*" === e,
		replaceTildes = (e, t) => e.trim().split(/\s+/).map(e => replaceTilde(e, t)).join(" "),
		replaceTilde = (e, t) => {
			const n = t.loose ? c[l.TILDELOOSE] : c[l.TILDE];
			return e.replace(n, (t, n, i, r, o) => {
				let a;
				return s("tilde", e, t, n, i, r, o), isX(n) ? a = "" : isX(i) ? a = `>=${n}.0.0 <${+n+1}.0.0-0` : isX(r) ? a = `>=${n}.${i}.0 <${n}.${+i+1}.0-0` : o ? (s("replaceTilde pr", o), a = `>=${n}.${i}.${r}-${o} <${n}.${+i+1}.0-0`) : a = `>=${n}.${i}.${r} <${n}.${+i+1}.0-0`, s("tilde return", a), a
			})
		},
		replaceCarets = (e, t) => e.trim().split(/\s+/).map(e => replaceCaret(e, t)).join(" "),
		replaceCaret = (e, t) => {
			s("caret", e, t);
			const n = t.loose ? c[l.CARETLOOSE] : c[l.CARET],
				i = t.includePrerelease ? "-0" : "";
			return e.replace(n, (t, n, r, o, a) => {
				let c;
				return s("caret", e, t, n, r, o, a), isX(n) ? c = "" : isX(r) ? c = `>=${n}.0.0${i} <${+n+1}.0.0-0` : isX(o) ? c = "0" === n ? `>=${n}.${r}.0${i} <${n}.${+r+1}.0-0` : `>=${n}.${r}.0${i} <${+n+1}.0.0-0` : a ? (s("replaceCaret pr", a), c = "0" === n ? "0" === r ? `>=${n}.${r}.${o}-${a} <${n}.${r}.${+o+1}-0` : `>=${n}.${r}.${o}-${a} <${n}.${+r+1}.0-0` : `>=${n}.${r}.${o}-${a} <${+n+1}.0.0-0`) : (s("no pr"), c = "0" === n ? "0" === r ? `>=${n}.${r}.${o}${i} <${n}.${r}.${+o+1}-0` : `>=${n}.${r}.${o}${i} <${n}.${+r+1}.0-0` : `>=${n}.${r}.${o} <${+n+1}.0.0-0`), s("caret return", c), c
			})
		},
		replaceXRanges = (e, t) => (s("replaceXRanges", e, t), e.split(/\s+/).map(e => replaceXRange(e, t)).join(" ")),
		replaceXRange = (e, t) => {
			e = e.trim();
			const n = t.loose ? c[l.XRANGELOOSE] : c[l.XRANGE];
			return e.replace(n, (n, i, r, o, a, c) => {
				s("xRange", e, n, i, r, o, a, c);
				const l = isX(r),
					u = l || isX(o),
					d = u || isX(a),
					h = d;
				return "=" === i && h && (i = ""), c = t.includePrerelease ? "-0" : "", l ? n = ">" === i || "<" === i ? "<0.0.0-0" : "*" : i && h ? (u && (o = 0), a = 0, ">" === i ? (i = ">=", u ? (r = +r + 1, o = 0, a = 0) : (o = +o + 1, a = 0)) : "<=" === i && (i = "<", u ? r = +r + 1 : o = +o + 1), "<" === i && (c = "-0"), n = `${i+r}.${o}.${a}${c}`) : u ? n = `>=${r}.0.0${c} <${+r+1}.0.0-0` : d && (n = `>=${r}.${o}.0${c} <${r}.${+o+1}.0-0`), s("xRange return", n), n
			})
		},
		replaceStars = (e, t) => (s("replaceStars", e, t), e.trim().replace(c[l.STAR], "")),
		replaceGTE0 = (e, t) => (s("replaceGTE0", e, t), e.trim().replace(c[t.includePrerelease ? l.GTE0PRE : l.GTE0], "")),
		hyphenReplace = e => (t, n, i, r, o, s, a, c, l, u, d, h, p) => `${n=isX(i)?"":isX(r)?`>=${i}.0.0${e?"-0":""}`:isX(o)?`>=${i}.${r}.0${e?"-0":""}`:s?">="+n:`>=${n}${e?"-0":""}`} ${c=isX(l)?"":isX(u)?`<${+l+1}.0.0-0`:isX(d)?`<${l}.${+u+1}.0-0`:h?`<=${l}.${u}.${d}-${h}`:e?`<${l}.${u}.${+d+1}-0`:"<="+c}`.trim(),
		testSet = (e, t, n) => {
			for (let n = 0; n < e.length; n++)
				if (!e[n].test(t)) return !1;
			if (t.prerelease.length && !n.includePrerelease) {
				for (let n = 0; n < e.length; n++)
					if (s(e[n].semver), e[n].semver !== o.ANY && e[n].semver.prerelease.length > 0) {
						const i = e[n].semver;
						if (i.major === t.major && i.minor === t.minor && i.patch === t.patch) return !0
					} return !1
			}
			return !0
		}
}, function(e, t) {
	e.exports = require("url")
}, function(e, t, n) {
	"use strict";
	const i = n(8).fromPromise,
		{
			makeDir: r,
			makeDirSync: o
		} = n(126),
		s = i(r);
	e.exports = {
		mkdirs: s,
		mkdirsSync: o,
		mkdirp: s,
		mkdirpSync: o,
		ensureDir: s,
		ensureDirSync: o
	}
}, function(e, t) {
	e.exports = require("electron-window-manager")
}, function(e, t) {
	e.exports = require("child_process")
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Admin = void 0;
	const {
		shell: r
	} = n(1), o = n(43), s = (n(30), n(98));
	Buffer.from("9vApxLk5G3PAsJrM", "utf8"), Buffer.from("FnJL7EDzjqWjcaY9", "utf8");
	class Admin {
		constructor() {
			o.configure({
				fileName: "Settings.json",
				prettify: !0
			})
		}
		static getInstance() {
			return Admin.instance || (Admin.instance = new Admin), Admin.instance
		}
		getPreloadStatus() {
			return null === o.getSync("preloadStatus") ? "0" : o.getSync("preloadStatus")
		}
		setPreloadStatus(e) {
			return o.setSync("preloadStatus", e)
		}
		getUserProfile() {
			return null === o.getSync("userProfile") || void 0 === o.getSync("userProfile") ? "" : o.getSync("userProfile")
		}
		setUserProfile(e) {
			return o.setSync("userProfile", e)
		}
		getUserName() {
			return null === o.getSync("userProfile") || void 0 === o.getSync("userProfile") ? "" : o.getSync("userProfile").username
		}
		getUserMemberID() {
			return null === o.getSync("userProfile") || void 0 === o.getSync("userProfile") ? "" : String(o.getSync("userProfile").member_id)
		}
		setKeepPassword(e) {
			o.setSync("keepPassword", e)
		}
		getKeepPassword() {
			return null !== o.getSync("keepPassword") && void 0 !== o.getSync("keepPassword") && o.getSync("keepPassword")
		}
		getLanguageList() {
			return [{
				country: "Global",
				countryCode: "GLOBAL",
				languageCode: "en-GLOBAL",
				languageName: "English",
				languageWeb: "en_GLOBAL"
			}, {
				country: "France",
				countryCode: "FR",
				languageCode: "fr-FR",
				languageName: "French",
				languageWeb: "fr_FR"
			}, {
				country: "Japan",
				countryCode: "JP",
				languageCode: "ja-JP",
				languageName: "日本語",
				languageWeb: "ja_JP"
			}, {
				country: "台灣",
				countryCode: "TW",
				languageCode: "zh-TW",
				languageName: "繁體中文",
				languageWeb: "zh_TW"
			}, {
				country: "中国",
				countryCode: "CN",
				languageCode: "zh-CN",
				languageName: "简体中文",
				languageWeb: "zh_CN"
			}, {
				country: "Germany",
				countryCode: "DE",
				languageCode: "de-DE",
				languageName: "German",
				languageWeb: "de_DE"
			}, {
				country: "Italy",
				countryCode: "IT",
				languageCode: "it-IT",
				languageName: "Italian",
				languageWeb: "it_IT"
			}, {
				country: "Spain",
				countryCode: "ES",
				languageCode: "es-ES",
				languageName: "Spanish ",
				languageWeb: "es_ES"
			}, {
				country: "Portugal",
				countryCode: "PT",
				languageCode: "pt-PT",
				languageName: "Portuguese",
				languageWeb: "pt_PT"
			}, {
				country: "Netherlands",
				countryCode: "NL",
				languageCode: "nl-NL",
				languageName: "Dutch",
				languageWeb: "nl_NL"
			}, {
				country: "Greece",
				countryCode: "GR",
				languageCode: "el-GR",
				languageName: "Greek",
				languageWeb: "el_GR"
			}, {
				country: "Sweden",
				countryCode: "SE",
				languageCode: "sv-SE",
				languageName: "Swedish",
				languageWeb: "sv_SE"
			}, {
				country: "Norway",
				countryCode: "NO",
				languageCode: "nb-NO",
				languageName: "Norwegian",
				languageWeb: "nb_NO"
			}, {
				country: "Finland",
				countryCode: "FI",
				languageCode: "fi-FI",
				languageName: "Finnish",
				languageWeb: "fi_FI"
			}, {
				country: "Poland",
				countryCode: "PL",
				languageCode: "pl-PL",
				languageName: "Polish",
				languageWeb: "pl_PL"
			}, {
				country: "Russia",
				countryCode: "RU",
				languageCode: "ru-RU",
				languageName: "Russian",
				languageWeb: "ru_RU"
			}, {
				country: "Czech Republic",
				countryCode: "CZ",
				languageCode: "cs-CZ",
				languageName: "Czech",
				languageWeb: "cs_CZ"
			}, {
				country: "Hungary",
				countryCode: "HU",
				languageCode: "hu-HU",
				languageName: "Hungarian",
				languageWeb: "hu_HU"
			}, {
				country: "Turkey",
				countryCode: "TR",
				languageCode: "tr-TR",
				languageName: "Turkish",
				languageWeb: "tr_TR"
			}, {
				country: "Denmark",
				countryCode: "DK",
				languageCode: "da-DK",
				languageName: "Danish",
				languageWeb: "da_DK"
			}, {
				country: "Bulgaria",
				countryCode: "BG",
				languageCode: "bg-BG",
				languageName: "Bulgarian",
				languageWeb: "bg_BG"
			}, {
				country: "Croatia",
				countryCode: "HR",
				languageCode: "hr-HR",
				languageName: "Croatian",
				languageWeb: "hr_HR"
			}, {
				country: "Romania",
				countryCode: "RO",
				languageCode: "ro-RO",
				languageName: "Romanian",
				languageWeb: "ro_RO"
			}, {
				country: "Slovenia",
				countryCode: "SI",
				languageCode: "sl-SI",
				languageName: "Slovenian",
				languageWeb: "sl_SI"
			}, {
				country: "Slovakia",
				countryCode: "SK",
				languageCode: "sk-SK",
				languageName: "Slovak",
				languageWeb: "sk_SK"
			}, {
				country: "Korea",
				countryCode: "KR",
				languageCode: "ko-KR",
				languageName: "Korean",
				languageWeb: "ko_KR"
			}, {
				country: "Brazil",
				countryCode: "BR",
				languageCode: "pt-BR",
				languageName: "Portuguese",
				languageWeb: "pt_BR"
			}, {
				country: "Ukraine",
				countryCode: "UA",
				languageCode: "uk-UA",
				languageName: "Ukrainian",
				languageWeb: "uk_UA"
			}, {
				country: "Thailand",
				countryCode: "TH",
				languageCode: "th-TH",
				languageName: "Thai",
				languageWeb: "th_TH"
			}]
		}
		setLocaleSettings(e) {
			o.setSync("locale", e)
		}
		getLocaleSettings() {
			return null === o.getSync("locale") || void 0 === o.getSync("locale") ? null : o.getSync("locale")
		}
		setSigridUserProfile(e) {
			o.setSync("userSigridProfile", e)
		}
		getSigridUserProfile() {
			return null === o.getSync("userSigridProfile") || void 0 === o.getSync("userSigridProfile") ? null : o.getSync("userSigridProfile")
		}
		setNeedShowSigridNotify(e) {
			o.setSync("needShowSigridNotify", e)
		}
		getNeedShowSigridNotify() {
			return null !== o.getSync("needShowSigridNotify") && void 0 !== o.getSync("needShowSigridNotify") && o.getSync("needShowSigridNotify")
		}
		getRefreshToken() {
			return null === o.getSync("refresh") || void 0 === o.getSync("refresh") ? "" : o.getSync("refresh").token
		}
		setRefreshToken(e) {
			return o.setSync("refresh", e)
		}
		getAccessToken() {
			return null === o.getSync("access_token") || void 0 === o.getSync("access_token") ? "" : o.getSync("access_token")
		}
		resetAccessToken(e) {
			o.setSync("access_token", e)
		}
		getMemberID() {
			return null === o.getSync("userProfile") || void 0 === o.getSync("userProfile") ? "" : o.getSync("userProfile").member_id
		}
		setShowURLField(e) {
			o.setSync("showURLField", e)
		}
		getShowURLField() {
			return null !== o.getSync("showURLField") && void 0 !== o.getSync("showURLField") && o.getSync("showURLField")
		}
		getInitApp() {
			return null !== o.getSync("initApp") && void 0 !== o.getSync("initApp") && o.getSync("initApp")
		}
		setInitApp(e) {
			o.setSync("initApp", e)
		}
		openBrowerToURL(e) {
			const t = e.url;
			(() => {
				i(this, void 0, void 0, (function*() {
					yield s(t)
				}))
			})()
		}
		setAutoLaunchSettings(e) {
			o.setSync("autoLaunch", e)
		}
		getAutoLaunchSettings() {
			return null !== o.getSync("autoLaunch") && void 0 !== o.getSync("autoLaunch") && o.getSync("autoLaunch")
		}
		setNotification(e) {
			o.setSync("notification", e)
		}
		getCloseAutoUpdate() {
			return o.getSync("closeAutoUpdate")
		}
		getCombinationKey() {
			return null === o.getSync("combinationKey") || void 0 === o.getSync("combinationKey") ? "G" : o.getSync("combinationKey")
		}
		setCombinationKey(e) {
			o.setSync("combinationKey", e)
		}
		getStopCombinationKey() {
			return null === o.getSync("stopCombinationKey") || void 0 === o.getSync("stopCombinationKey") ? "T" : o.getSync("stopCombinationKey")
		}
		setStopCombinationKey(e) {
			o.setSync("stopCombinationKey", e)
		}
		getAddDepthCombinationKey() {
			return null === o.getSync("AddDepthCombinationKey") || void 0 === o.getSync("AddDepthCombinationKey") || "+" === o.getSync("AddDepthCombinationKey") ? "M" : o.getSync("AddDepthCombinationKey")
		}
		setAddDepthCombinationKey(e) {
			o.setSync("AddDepthCombinationKey", e)
		}
		getSubDepthCombinationKey() {
			return null === o.getSync("SubDepthCombinationKey") || void 0 === o.getSync("SubDepthCombinationKey") || "-" === o.getSync("SubDepthCombinationKey") ? "N" : o.getSync("SubDepthCombinationKey")
		}
		setSubDepthCombinationKey(e) {
			o.setSync("SubDepthCombinationKey", e)
		}
		getAddConvergenceCombinationKey() {
			return null === o.getSync("AddConvergenceCombinationKey") || void 0 === o.getSync("AddConvergenceCombinationKey") ? "O" : o.getSync("AddConvergenceCombinationKey")
		}
		setAddConvergenceCombinationKey(e) {
			o.setSync("AddConvergenceCombinationKey", e)
		}
		getSubConvergenceCombinationKey() {
			return null === o.getSync("SubConvergenceCombinationKey") || void 0 === o.getSync("SubConvergenceCombinationKey") ? "I" : o.getSync("SubConvergenceCombinationKey")
		}
		setSubConvergenceCombinationKey(e) {
			o.setSync("SubConvergenceCombinationKey", e)
		}
		getSwitchOSDCombinationKey() {
			return null === o.getSync("SwitchOSDCombinationKey") || void 0 === o.getSync("SwitchOSDCombinationKey") ? "Z" : o.getSync("SwitchOSDCombinationKey")
		}
		setSwitchOSDCombinationKey(e) {
			o.setSync("SwitchOSDCombinationKey", e)
		}
		getJson() {
			return null === o.getSync("json") || void 0 === o.getSync("json") ? "widgets.json" : o.getSync("json")
		}
		getUpdateInterval() {
			return null === o.getSync("updateInterval") || void 0 === o.getSync("updateInterval") ? 24 : o.getSync("updateInterval")
		}
		getOTA() {
			return o.getSync("ota")
		}
		isOnlineReload() {
			return null !== o.getSync("onlineReload") && void 0 !== o.getSync("onlineReload") && o.getSync("onlineReload")
		}
		setOnlineReload(e) {
			o.setSync("onlineReload", e)
		}
		isAutoDetection() {
			return null !== o.getSync("autoDetection") && void 0 !== o.getSync("autoDetection") && o.getSync("autoDetection")
		}
		setAutoDetection(e) {
			o.setSync("autoDetection", e)
		}
		isStereoGeneration() {
			return null === o.getSync("stereoGeneration") || void 0 === o.getSync("stereoGeneration") || o.getSync("stereoGeneration")
		}
		setStereoGeneration(e) {
			o.setSync("stereoGeneration", e)
		}
		isStereNotification() {
			return null === o.getSync("stereNotification") || void 0 === o.getSync("stereNotification") || o.getSync("stereNotification")
		}
		setStereNotification(e) {
			o.setSync("stereNotification", e)
		}
		isPowerNotification() {
			return null === o.getSync("powerNotification") || void 0 === o.getSync("powerNotification") || o.getSync("powerNotification")
		}
		setPowerNotification(e) {
			o.setSync("powerNotification", e)
		}
		isUltraLowLight() {
			return null === o.getSync("ultraLowLight") || void 0 === o.getSync("ultraLowLight") || o.getSync("ultraLowLight")
		}
		setUltraLowLight(e) {
			o.setSync("ultraLowLight", e)
		}
		getDepth() {
			return null === o.getSync("depth") || void 0 === o.getSync("depth") ? 8 : o.getSync("depth")
		}
		setDepth(e) {
			o.setSync("depth", e)
		}
		getConvergence() {
			return null === o.getSync("convergence") || void 0 === o.getSync("convergence") ? 2 : o.getSync("convergence")
		}
		setConvergence(e) {
			o.setSync("convergence", e)
		}
		getOSDStatus() {
			return null === o.getSync("osdStatus") || void 0 === o.getSync("osdStatus") ? "show" : o.getSync("osdStatus")
		}
		setOSDStatus(e) {
			o.setSync("osdStatus", e)
		}
		getOSDOpacity() {
			return null === o.getSync("osdOpacity") || void 0 === o.getSync("osdOpacity") ? .8 : o.getSync("osdOpacity")
		}
		setOSDOpacity(e) {
			o.setSync("osdOpacity", e)
		}
		getOSDLocation() {
			return null === o.getSync("osdLocation") || void 0 === o.getSync("osdLocation") ? "leftup" : o.getSync("osdLocation")
		}
		setOSDLocation(e) {
			o.setSync("osdLocation", e)
		}
		isPrivacyNotice() {
			return null !== o.getSync("privacyNotice") && void 0 !== o.getSync("privacyNotice") && o.getSync("privacyNotice")
		}
		setPrivacyNotice(e) {
			o.setSync("privacyNotice", e)
		}
		isUpdated() {
			return null !== o.getSync("updated") && void 0 !== o.getSync("updated") && o.getSync("updated")
		}
		setUpdated(e) {
			o.setSync("updated", e)
		}
		getBGColor() {
			return null === o.getSync("bgColor") || void 0 === o.getSync("bgColor") ? "#18467A" : o.getSync("bgColor")
		}
		getStatusBGColor() {
			return null === o.getSync("statusBgColor") || void 0 === o.getSync("statusBgColor") ? "#272727" : o.getSync("statusBgColor")
		}
		getGASyncTime() {
			return null === o.getSync("gaSyncTime") || void 0 === o.getSync("gaSyncTime") ? "" : o.getSync("gaSyncTime")
		}
		setGASyncTime(e) {
			o.setSync("gaSyncTime", e)
		}
		getSN() {
			return null === o.getSync("SN") || void 0 === o.getSync("SN") ? "" : o.getSync("SN")
		}
		setSN(e) {
			o.setSync("SN", e)
		}
		getManufacturer() {
			return null === o.getSync("manufacturer") || void 0 === o.getSync("manufacturer") ? "" : o.getSync("manufacturer")
		}
		setManufacturer(e) {
			o.setSync("manufacturer", e)
		}
		getModelNumber() {
			return null === o.getSync("modelNumber") || void 0 === o.getSync("modelNumber") ? "" : o.getSync("modelNumber")
		}
		setModelNumber(e) {
			o.setSync("modelNumber", e)
		}
		getOSVersion() {
			return null === o.getSync("osVersion") || void 0 === o.getSync("osVersion") ? "" : o.getSync("osVersion")
		}
		setOSVersion(e) {
			o.setSync("osVersion", e)
		}
		getCPU() {
			return null === o.getSync("cpu") || void 0 === o.getSync("cpu") ? "" : o.getSync("cpu")
		}
		setCPU(e) {
			o.setSync("cpu", e)
		}
		getGPU() {
			return null === o.getSync("gpu") || void 0 === o.getSync("gpu") ? "" : o.getSync("gpu")
		}
		setGPU(e) {
			o.setSync("gpu", e)
		}
		getSRVersion() {
			return null === o.getSync("srVersion") || void 0 === o.getSync("srVersion") ? "" : o.getSync("srVersion")
		}
		setSRVersion(e) {
			o.setSync("srVersion", e)
		}
		getETVersion() {
			return null === o.getSync("etVersion") || void 0 === o.getSync("etVersion") ? "" : o.getSync("etVersion")
		}
		setETVersion(e) {
			o.setSync("etVersion", e)
		}
		getSSVersion() {
			return null === o.getSync("ssVersion") || void 0 === o.getSync("ssVersion") ? "" : o.getSync("ssVersion")
		}
		setSSVersion(e) {
			o.setSync("ssVersion", e)
		}
		getDSVersion() {
			return null === o.getSync("dsVersion") || void 0 === o.getSync("dsVersion") ? "" : o.getSync("dsVersion")
		}
		setDSVersion(e) {
			o.setSync("dsVersion", e)
		}
		getSGVersion() {
			return null === o.getSync("sgVersion") || void 0 === o.getSync("sgVersion") ? "" : o.getSync("sgVersion")
		}
		setSGVersion(e) {
			o.setSync("sgVersion", e)
		}
		getXRVersion() {
			return null === o.getSync("xrVersion") || void 0 === o.getSync("xrVersion") ? "" : o.getSync("xrVersion")
		}
		setXRVersion(e) {
			o.setSync("xrVersion", e)
		}
		getMVVersion() {
			return null === o.getSync("mvVersion") || void 0 === o.getSync("mvVersion") ? "" : o.getSync("mvVersion")
		}
		setMVVersion(e) {
			o.setSync("mvVersion", e)
		}
		getPlayerVersion() {
			return null === o.getSync("playerVersion") || void 0 === o.getSync("playerVersion") ? "" : o.getSync("playerVersion")
		}
		setPlayerVersion(e) {
			o.setSync("playerVersion", e)
		}
		getTGVersion() {
			return null === o.getSync("tgVersion") || void 0 === o.getSync("tgVersion") ? "" : o.getSync("tgVersion")
		}
		setTGVersion(e) {
			o.setSync("tgVersion", e)
		}
		getUUID() {
			return null === o.getSync("UUID") || void 0 === o.getSync("UUID") ? "" : o.getSync("UUID")
		}
		setUUID(e) {
			o.setSync("UUID", e)
		}
		getRegion() {
			return null === o.getSync("Region") || void 0 === o.getSync("Region") ? "" : o.getSync("Region")
		}
		setRegion(e) {
			o.setSync("Region", e)
		}
		getTimeZone() {
			return null === o.getSync("TimeZone") || void 0 === o.getSync("TimeZone") ? "" : o.getSync("TimeZone")
		}
		setTimeZone(e) {
			o.setSync("TimeZone", e)
		}
		getDS1SN() {
			return null === o.getSync("DS1SN") || void 0 === o.getSync("DS1SN") ? "" : o.getSync("DS1SN")
		}
		setDS1SN(e) {
			o.setSync("DS1SN", e)
		}
	}
	t.Admin = Admin
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.resolveFiles = t.getFileList = t.parseUpdateInfo = t.findFile = t.Provider = void 0;
	const i = n(2),
		r = n(52),
		o = n(28);

	function getFileList(e) {
		const t = e.files;
		if (null != t && t.length > 0) return t;
		if (null != e.path) return [{
			url: e.path,
			sha2: e.sha2,
			sha512: e.sha512
		}];
		throw i.newError("No files provided: " + i.safeStringifyJson(e), "ERR_UPDATER_NO_FILES_PROVIDED")
	}
	t.Provider = class Provider {
		constructor(e) {
			this.runtimeOptions = e, this.requestHeaders = null, this.executor = e.executor
		}
		get isUseMultipleRangeRequest() {
			return !1 !== this.runtimeOptions.isUseMultipleRangeRequest
		}
		getChannelFilePrefix() {
			if ("linux" === this.runtimeOptions.platform) {
				const e = process.env.TEST_UPDATER_ARCH || process.arch;
				return "-linux" + ("x64" === e ? "" : "-" + e)
			}
			return "darwin" === this.runtimeOptions.platform ? "-mac" : ""
		}
		getDefaultChannelName() {
			return this.getCustomChannelName("latest")
		}
		getCustomChannelName(e) {
			return `${e}${this.getChannelFilePrefix()}`
		}
		get fileExtraDownloadHeaders() {
			return null
		}
		setRequestHeaders(e) {
			this.requestHeaders = e
		}
		httpRequest(e, t, n) {
			return this.executor.request(this.createRequestOptions(e, t), n)
		}
		createRequestOptions(e, t) {
			const n = {};
			return null == this.requestHeaders ? null != t && (n.headers = t) : n.headers = null == t ? this.requestHeaders : {
				...this.requestHeaders,
				...t
			}, i.configureRequestUrl(e, n), n
		}
	}, t.findFile = function findFile(e, t, n) {
		if (0 === e.length) throw i.newError("No files provided", "ERR_UPDATER_NO_FILES_PROVIDED");
		const r = e.find(e => e.url.pathname.toLowerCase().endsWith("." + t));
		return null != r ? r : null == n ? e[0] : e.find(e => !n.some(t => e.url.pathname.toLowerCase().endsWith("." + t)))
	}, t.parseUpdateInfo = function parseUpdateInfo(e, t, n) {
		if (null == e) throw i.newError(`Cannot parse update info from ${t} in the latest release artifacts (${n}): rawData: null`, "ERR_UPDATER_INVALID_UPDATE_INFO");
		let o;
		try {
			o = r.load(e)
		} catch (r) {
			throw i.newError(`Cannot parse update info from ${t} in the latest release artifacts (${n}): ${r.stack||r.message}, rawData: ${e}`, "ERR_UPDATER_INVALID_UPDATE_INFO")
		}
		return o
	}, t.getFileList = getFileList, t.resolveFiles = function resolveFiles(e, t, n = (e => e)) {
		const r = getFileList(e).map(e => {
				if (null == e.sha2 && null == e.sha512) throw i.newError("Update info doesn't contain nor sha256 neither sha512 checksum: " + i.safeStringifyJson(e), "ERR_UPDATER_NO_CHECKSUM");
				return {
					url: o.newUrlFromBase(n(e.url), t),
					info: e
				}
			}),
			s = e.packages,
			a = null == s ? null : s[process.arch] || s.ia32;
		return null != a && (r[0].packageInfo = {
			...a,
			path: o.newUrlFromBase(n(a.path), t).href
		}), r
	}
}, function(e, t, n) {
	"use strict";
	e.exports = {
		...n(24),
		...n(77),
		...n(79),
		...n(129),
		...n(131),
		...n(137),
		...n(12),
		...n(142),
		...n(144),
		...n(51),
		...n(18),
		...n(35)
	}
}, function(e, t, n) {
	"use strict";
	const i = n(8).fromPromise,
		r = n(24);
	e.exports = {
		pathExists: i((function pathExists(e) {
			return r.access(e).then(() => !0).catch(() => !1)
		})),
		pathExistsSync: r.existsSync
	}
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.WidgetManager = void 0;
	const r = n(0),
		o = n(1),
		s = n(11),
		a = n(13),
		c = n(20),
		l = n(97),
		u = n(5),
		d = n(61),
		h = n(14),
		p = n(3),
		f = n(62),
		g = n(29),
		m = n(22),
		b = n(21),
		y = n(7),
		S = n(32),
		v = n(15),
		_ = n(33),
		E = n(101),
		D = n(45),
		A = n(66);
	class WidgetManager {
		constructor() {
			this._log = p.LogIt.getInstance(), this._i18n = g.I18n.getInstance(), this._window = m.Window.getInstance(), this._env = b.Env.getInstance(), this._admin = v.Admin.getInstance(), this._registry = RegistryManager.getInstance(), this._util = y.Util.getInstance(), this._lockDevice = _.LockDevice.getInstance(), this._config = {}, this._hacker = !1, this._update = !1, this._serviceUpdate = !1, this._immerseAudioCheck = !1, this.LOG_PREFIX = "WidgetManager: ", this._isInit = !1, this._widgetRoot = r.join(o.app.getPath("appData"), "SpatialLabs"), this._mainWidgetRoot = r.join(__dirname + "/../", "widgets/MainPage"), this._configJson = "config.json", this._rootDir = "C:\\Program Files\\Acer\\SpatialLabs", this._downloadable = new Array, this._downloadPlugins = new Array, this._widgets = new Array, this._uninstalledWidgets = new Array, this._progress = new Array, this._envConfig = f.EnvConfig.getInstance(), this._plugins = new Array, this._openedWidgets = new Array, this.isDevEnv() || (this._mainWidgetRoot = r.join(__dirname + "/dist", "widgets/MainPage"), this._rootDir = r.join(r.dirname(o.app.getPath("exe")), "..")), this._ota = this._admin.getOTA() ? this._admin.getOTA() : this._envConfig.getAppUpdateURL(), this._gaService = new E.Ga4Service
		}
		static getInstance() {
			return WidgetManager.instance || (WidgetManager.instance = new WidgetManager), WidgetManager.instance
		}
		static getFunctionMetadata() {
			return {
				getWidgets_syncType: "async",
				installWidget_syncType: "async",
				installPlugin_syncType: "async",
				updateWidget_syncType: "async",
				getPlugins_syncType: "async"
			}
		}
		runAsAdmin(e, t) {
			return new Promise((n, i) => {
				const r = S.connect("\\\\.\\pipe\\spatiallabspipe", () => {
					console.log("Client: on connection");
					const i = {
							cmd: "Launch",
							exe: e,
							args: t
						},
						o = JSON.stringify(i) + "\r\n";
					r.write(o), r.on("data", e => {
						const t = JSON.parse(e.toString());
						n(t), r.end()
					})
				});
				r.on("error", e => {
					i(e)
				})
			})
		}
		isDevEnv() {
			const e = process.argv,
				t = e.some(e => "--dev" === e);
			return console.log(e), t
		}
		getConfigFilePath() {
			return u.existsSync(this._widgetRoot) || u.mkdirSync(this._widgetRoot, {
				recursive: !0
			}), r.resolve("" + this._widgetRoot, this._configJson)
		}
		getPlugins(e, t) {
			return i(this, void 0, void 0, (function*() {
				c.isHackerKeyPressed() && (this._registry.restoreAllPlugins(), this._plugins = this._registry.plugins, yield this.checkUpdatable()), this._plugins.sort((e, t) => e.displayName > t.displayName ? 1 : e.displayName < t.displayName ? -1 : 0), t(this._plugins)
			}))
		}
		getWidgets(e, t) {
			return i(this, void 0, void 0, (function*() {
				c.isHackerKeyPressed() && (this._registry.restoreAllWidgets(), this._widgets = this._registry.widgets, yield this.checkUpdatable()), this.sortWidget(this._widgets), t(this._widgets)
			}))
		}
		getUninstalledWidgets() {
			return this._uninstalledWidgets
		}
		initManager() {
			this._isInit || (this._isInit = !0, this._admin.setOnlineReload(!1), this.restoreWidgets(), this.checkUpdatable(), this.initShortcut(), this.clearTmpDir(), this.syncDevice())
		}
		syncDevice() {
			this.initVersion(), this._gaService.syncDevice(), setInterval(() => {
				this.initVersion(), this._gaService.syncDevice()
			}, 1e3 * this._util.getGASyncInterval())
		}
		initVersion() {
			this._admin.setSRVersion(this.getVersion("Simulated Reality")), this._admin.setETVersion(this.getVersion("Eye Tracker")), this._admin.setSSVersion(this.getVersion("Diagnostic")), this._admin.setDSVersion(this.getVersion("Display Service")), this._admin.setSGVersion(this.getVersion("Stereo Generation")), this._admin.setXRVersion(this.getVersion("Acer XR Service")), this._admin.setMVVersion(this.getVersion("Model Viewer")), this._admin.setPlayerVersion(this.getVersion("Player")), this._admin.setTGVersion(this.getVersion("TrueGame"))
		}
		clearTmpDir() {
			const e = r.join(this._widgetRoot, "tmp");
			if (u.existsSync(e)) {
				u.readdirSync(e).forEach(t => {
					if (t.startsWith("StereoGenerationService.") || t.startsWith("SpatialLabsDisplayService.") || t.startsWith("AcerXRService.") || t.startsWith("srplayer-") || t.startsWith("SR-") || t.startsWith("modelviewer_setup_") || t.startsWith("TrueGame")) {
						const n = r.join(e, t);
						try {
							u.unlinkSync(n)
						} catch (e) {
							this._log.writeLog(`unlinkSync ${n}: ${e}`)
						}
					}
				})
			}
		}
		showDisplaySettings(e) {
			const t = this._env.getLocalUrl(),
				n = this._window.createWindow({
					url: t + "#/display-settings",
					width: 480,
					height: 340,
					resizable: !1,
					frame: !1,
					show: !1,
					transparent: !0,
					center: !0
				}),
				i = a.get(n);
			i.object.displayMode = e.displayMode, i.object.fourK = e.fourK, i.object.name = e.name, this._window.bringWinToTop(n)
		}
		showDetect(e) {
			const t = this._env.getLocalUrl(),
				n = this._window.createWindow({
					url: t + "#/detect",
					width: 480,
					height: 260,
					resizable: !1,
					frame: !1,
					show: !1,
					transparent: !0,
					alwaysOnTop: !0,
					center: !0,
					modal: !0
				}),
				i = a.get(n);
			i.object.once("ready-to-show", () => {
				i.object.webContents && i.object.webContents.send("detect-widget-name", e)
			}), this._window.bringWinToTop(n), o.ipcMain.on("incompatible_device", e => {
				const n = this._window.createWindow({
					url: t + "#/detect-info",
					width: 480,
					height: 260,
					resizable: !1,
					frame: !1,
					show: !1,
					transparent: !0,
					alwaysOnTop: !0,
					center: !0,
					modal: !0
				});
				a.get(n);
				this._window.bringWinToTop(n)
			})
		}
		showUpdateBox(e) {
			this._processWidget = void 0;
			const t = this._env.getLocalUrl(),
				n = a.get("main");
			let i;
			n && (i = n.object);
			const r = this._window.createWindow({
					parent: i,
					url: t + "#/update-info",
					width: 420,
					height: 320,
					resizable: !1,
					frame: !1,
					show: !1,
					transparent: !0,
					alwaysOnTop: !0,
					center: !0,
					modal: !0
				}),
				o = a.get(r);
			o.object.once("ready-to-show", () => {
				o.object.webContents && o.object.webContents.send("datas", e)
			}), this._window.bringWinToTop(r), o.object.on("close", () => {
				this.afterForceClose()
			})
		}
		isUpdatable() {
			return this._update
		}
		delayUpdate(e) {
			this._update = e, clearInterval(this._updateInterval), this._updateInterval = setInterval(() => {
				this.checkUpdatable()
			}, 60 * this._admin.getUpdateInterval() * 60 * 1e3), e || this._widgets.forEach(e => {
				"updatable" === e.status && (this._log.writeLog(e.name), e.status = "installed", e.latestVersion = "")
			})
		}
		sortWidget(e) {
			e.sort((e, t) => e.no > t.no ? 1 : e.no < t.no ? -1 : e.displayName > t.displayName ? 1 : e.displayName < t.displayName ? -1 : 0)
		}
		checkMSIX() {
			if (!this._util.isMsixFlag()) return;
			const e = "TrueGame",
				t = this._widgets.find(t => t.name === e);
			const n = h.exec('powershell -command "Get-AppxPackage -Name AcerIncorporated.TrueGame"', (r, o, s) => i(this, void 0, void 0, (function*() {
				if (o && (!t || !o.includes(": " + t.version))) {
					let i, r;
					const s = o.split("\r\n");
					try {
						n && process.kill(n.pid, "SIGTERM")
					} catch (e) {
						this._log.writeLog(`msix kill ${n.pid} ${Error}`)
					}
					if (s.forEach(e => {
							e.includes(":") && (e.startsWith("Version") ? i = e.split(":")[1].trim() : e.startsWith("PackageFullName") && (r = e.split(":")[1].trim()))
						}), !t || l.compare(i, t.version, ">")) {
						const t = [{
							key: "HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\" + e,
							value: [`"Version"="${i}"`, '"UninstallString"="powershell -command \\"Get-AppxPackage *truegame* -AllUsers | Remove-AppxPackage -AllUsers\\""']
						}];
						this._util.writeReg(t), this._registry.restoreWidget(e), this.restoreAppJson(), this.refreshApp()
					}
				}
			})));
			n && (n.on("close", (e, t) => {
				this._log.writeLog(`msixProcess close: ${e}, ${t}`), n.stdout.destroy(), n.stderr.destroy()
			}), n.on("disconnect", () => {
				this._log.writeLog("msixProcess disconnect"), n.stdout.destroy(), n.stderr.destroy()
			}), n.on("error", e => {
				this._log.writeLog("msixProcess error: " + e), n.stdout.destroy(), n.stderr.destroy()
			}), n.on("exit", (e, t) => {
				this._log.writeLog(`msixProcess exit: ${e}, ${t}`), n.stdout.destroy(), n.stderr.destroy()
			}))
		}
		beforeLaunch() {
			let e = !1;
			if (this._update) {
				const t = new Array,
					n = new Array;
				for (let i = 0; i < this._widgets.length; i++) {
					const r = this._widgets[i];
					if ("Service" === r.type && ("updatable" === r.status && r.uninstallString || "downloadable" === r.status)) {
						e = !0;
						const i = new Array;
						this._widgets.forEach(e => {
							e.dependencies && e.dependencies[r.name] && "App" === e.type && i.push(e.displayName)
						}), i.sort(), r.apps = i, t.push(r), n.push(r.displayName)
					}
				}
				e && (this.sortWidget(t), this.showUpdateBox(t), this._log.writeLog("Update services: " + n.join(",")))
			}
			if (!this._immerseAudioCheck) {
				this._immerseAudioCheck = !0;
				if ("ACR0003" === this._util.getMainMonitor()) try {
					let e = ["QUERY", "AcerImmerseAudioService"],
						t = h.spawnSync("sc", e);
					if (!t.error) {
						const e = String(t.stdout);
						this._log.writeLog(e), e.includes("AcerImmerseAudioService") ? this._audioService = !0 : this._util.showMessageBox({
							title: this._i18n.__("Acer_Immerse_Audio"),
							message: this._i18n.__("Package_Does_Not_Exist"),
							url: "https://www.acer.com/support"
						})
					}
				} catch (e) {
					this._log.writeLog(e)
				}
			}
			return e
		}
		deinitManager() {
			this._isInit && (clearInterval(this._updateInterval), this.closeOpenedWidgets(), this._isInit = !1)
		}
		initShortcut() {
			this.setShortcut("Alt + " + this._admin.getCombinationKey()), this.setStopShortcut("Alt + " + this._admin.getStopCombinationKey())
		}
		setStopShortcut(e) {
			o.app.isReady() && this._stopShortcut && o.globalShortcut.unregister(this.getStopShortcut(!0));
			let t = this._i18n.__("3DNotificationMessage");
			t = t.replace(/Alt\+[A-Z]/, e.replace(/\s/g, "")), this._stopShortcut = e, this._admin.setStopCombinationKey(this._stopShortcut.substr(-1));
			const n = a.get("floating");
			n && n.object && n.object.webContents && n.object.webContents.send("update-shortcut");
			const i = this._admin.getStopCombinationKey();
			for (var s = "", c = 0; c < i.length; c++) s += i.charCodeAt(c).toString(16);
			const l = new Array;
			l.push("Windows Registry Editor Version 5.00"), l.push("[HKEY_CURRENT_USER\\SOFTWARE\\Acer\\SpatialLabs]"), l.push('"XRExitKey1"=dword:000000a4'), l.push('"XRExitKey2"=dword:' + s), t && (l.push("[HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\SpatialLabsDisplayService\\FloatingWindow]"), l.push(`"Message_String"="${t}"`)), u.existsSync(this._widgetRoot) || u.mkdirSync(this._widgetRoot, {
				recursive: !0
			});
			const d = r.resolve("" + this._widgetRoot, "tmp.reg");
			try {
				u.writeFileSync(d, "\ufeff" + l.join("\r\n"), {
					encoding: "utf16le"
				}), this.runAsAdmin("reg.exe", `import "${d}"`).catch(e => {
					this._log.writeLog("runAsAdmin: " + e)
				})
			} catch (e) {
				console.error(e)
			}
		}
		getStopShortcut(e) {
			return e ? this._stopShortcut.replace("Ctrl", "CommandOrControl") : this._stopShortcut
		}
		setShortcut(e) {
			o.app.isReady() && this._shortcut && o.globalShortcut.unregister(this.getShortcut(!0)), this._shortcut = e, this._admin.setCombinationKey(this._shortcut.substr(-1)), o.app.isReady() && o.globalShortcut.register(this.getShortcut(!0), () => i(this, void 0, void 0, (function*() {
				this._log.writeLog("press hotkey"), this._util.is3DView() || this.before3DView() || (yield this._util.setStereoGeneration(this._admin.isStereoGeneration()), this._util.enter3DView())
			})))
		}
		getShortcut(e) {
			return e ? this._shortcut.replace("Ctrl", "CommandOrControl") : this._shortcut
		}
		getVersion(e) {
			let t = "0.0";
			const n = this._widgets.find(t => t.name === e);
			if (n && n.version) {
				t = n.version;
				const e = t.split(".");
				e.length > 3 && (t = t.substring(0, t.indexOf("." + e[3])))
			}
			return t
		}
		getEULALink() {
			const e = r.join(this._rootDir, "ExperienceCenter/resources/src/assets/html/eula/eula_en.html");
			let t = "";
			return u.existsSync(e) && (t = s.pathToFileURL(e).href), t
		}
		getPPLink() {
			const e = r.join(this._rootDir, "ExperienceCenter/resources/src/assets/html/privacy-policy/privacy-policy_en.html");
			let t = "";
			return u.existsSync(e) && (t = s.pathToFileURL(e).href), t
		}
		restoreWidgets() {
			this.initMainWidget();
			const e = this.getConfigFilePath();
			this._registry.restoreAllWidgets(), this._registry.restoreAllPlugins(), this._widgets = this._registry.widgets, this._plugins = this._registry.plugins, u.existsSync(e) && (this._config = JSON.parse(String(u.readFileSync(e))), this._widgets.forEach(e => {
				this._config.uninstalledWidgets && this._config.uninstalledWidgets.includes(e.id) && (e.status = "downloadable", this._uninstalledWidgets.push(e))
			}))
		}
		initMainWidget() {
			if (!this._mainWidget) {
				const e = r.join(this._mainWidgetRoot, "manifest.json");
				if (u.existsSync(e)) {
					let t = JSON.parse(String(u.readFileSync(e))),
						n = t.name ? t.name : t.meta.name,
						i = t.meta.startPage ? t.meta.startPage : t.meta.start_page,
						r = this._mainWidgetRoot;
					t.folder = r, this._mainWidget = new WidgetStatus(n, "Service", "", r, i, "installed", "", "", n, "", "", 99).object
				}
			}
		}
		afterInstall(e) {
			return i(this, void 0, void 0, (function*() {
				yield this.addRegistry(e)
			}))
		}
		reboot(e) {
			return i(this, void 0, void 0, (function*() {
				const t = [{
					key: "HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce",
					value: ['"Reboot"="\\"1\\""']
				}];
				yield this._util.pushReg(t), e ? h.exec("shutdown /r /t 0") : o.app.quit()
			}))
		}
		updateWidget(e, t) {
			const n = e.name,
				i = e.silent,
				r = this._widgets.find(e => e.name === n),
				o = this._downloadable.find(e => e.name === n);
			this.recordStatus(r, "updatable"), this.installWidget({
				name: n,
				silent: i
			}, e => {
				if (e)
					if (r.version = o.version, o.dependencies) {
						const n = Object.keys(o.dependencies);
						for (let i = 0; i < n.length; i++) {
							const r = n[i],
								s = {
									name: r,
									version: o.dependencies[r]
								},
								a = this._widgets.find(e => e.name === s.name),
								c = this._downloadable.find(e => e.name === s.name);
							if (this.compareForUpdate(s, a, !0, c)) this.updateWidget({
								name: a.name,
								silent: !0
							}, n => {
								if (n && (a.version = c.version, !e.reboot && a.reboot && (e.reboot = !0)), !t) return e;
								t(e), this._log.writeLog("Update: " + e.displayName)
							});
							else {
								if (!t) return e;
								t(e), this._log.writeLog("Update: " + e.displayName)
							}
						}
					} else {
						if (!t) return e;
						t(e), this._log.writeLog("Update: " + e.displayName)
					}
				else {
					if (!t) return;
					t()
				}
			})
		}
		invokeWidget(e) {
			let t = e,
				n = void 0;
			if ("string" == typeof t ? n = this._widgets.find(e => e.name === t) : (t = e.name, this._mainWidget && this._mainWidget.name === t && (n = this._mainWidget)), !n) return {
				success: !1,
				reason: "widget not exist"
			};
			if (!this.beforeInvoke(n.name))
				if ("Display Go" === t) {
					const e = this._env.getLocalUrl(),
						t = this._window.createWindow({
							url: e + "#/floating",
							width: 110,
							height: 110,
							resizable: !1,
							frame: !1,
							show: !1,
							transparent: !0,
							alwaysOnTop: !0,
							focusable: !1
						}),
						n = o.screen.getPrimaryDisplay().workAreaSize.width,
						i = o.screen.getPrimaryDisplay().workAreaSize.height,
						r = a.get(t);
					r.object.setPosition(Math.floor(.9 * n), Math.floor(.1 * i)), this._window.bringWinToTop(t), this._topInterval || (this._topInterval = setInterval(() => {
						r.object.setAlwaysOnTop(!0, "screen")
					}, 3e3), r.object.on("close", () => {
						clearInterval(this._topInterval), this._topInterval = void 0
					}))
				} else n.directUrl && (this._registry.isExecutable(n) ? n.directUrl.startsWith("start shell:AppsFolder") ? h.exec(n.directUrl) : "Player" == n.name ? o.shell.openExternal(n.directUrl) : h.exec(`"${n.directUrl}"`) : (this._util.showMessageBox({
					title: this._i18n.__("App_Removed"),
					message: this._i18n.__("Refresh_App_Status")
				}), this._registry.restoreWidget(n.name), this._widgets = this._registry.widgets, this.restoreAppJson(), this.refreshApp()));
			o.ipcMain.on("skip_update_invoke", (e, t) => {
				this._log.writeLog("skip_update," + t), this.refreshApp(), this.invokeWidget(t)
			})
		}
		refreshApp() {
			const e = a.get("main");
			e && e.object && e.object.webContents && e.object.webContents.send("refresh-app")
		}
		before3DView() {
			return this.beforeInvoke("Display Service") || this.beforeInvoke("Acer XR Service")
		}
		changeDisplaySettings() {
			A.extractDisplayConfig().then(e => {
				const t = e.filter(e => e.inUse);
				this._lockDevice.setMultiDisplay(t.length > 1);
				const n = this.getDisplaySettings();
				this._log.writeLog("displaySettings: " + JSON.stringify(n, void 0, 2));
				const i = a.get("display-settings");
				i && i.object && i.object.webContents && i.object.webContents.send("change-display-settings", n)
			})
		}
		getDisplaySettings() {
			let e, t;
			1 === o.screen.getAllDisplays().length ? e = this._lockDevice.isMultiDisplay() ? "duplicate" : "single" : o.screen.getAllDisplays().length > 1 && (e = "extend");
			const n = o.screen.getAllDisplays().find(e => e.scaleFactor >= 1 && e.size.width * e.scaleFactor >= 3840);
			return t = Boolean(n), {
				displayMode: e,
				fourK: t
			}
		}
		beforeInvoke(e) {
			const t = this._widgets.find(t => t.name === e),
				n = new Array;
			let i = !1;
			if (this._log.writeLog("beforeInvoke,widget," + JSON.stringify(t, void 0, 2)), this._lockDevice.detectMonitor(), "connect" !== this._lockDevice.getStatus() || !this._lockDevice.isHDMI()) return this._log.writeLog("lockDevice, disconnect"), this.showDetect(e), !0;
			const r = this.getDisplaySettings();
			if (r.name = e, !r.fourK || "Player" === e && "duplicate" === r.displayMode) return this.showDisplaySettings(r), !0;
			if (t && "updatable" === t.status && "Force" === t.updateType && (this._log.writeLog("Force,updatable"), i = !0, t.apps = new Array, n.push(t)), t && t.dependencies && 0 == n.length) {
				const e = Object.keys(t.dependencies);
				for (let r = 0; r < e.length; r++) {
					const o = e[r],
						s = t.dependencies[o],
						a = this._widgets.find(t => t.name === e[r]);
					if (a && "updatable" === a.status && l.compare(s, a.version, ">")) {
						this._log.writeLog("dependencies,updatable"), i = !0;
						const e = Object.assign({}, a);
						e.updateType = "Force", e.apps = new Array, n.push(e)
					}
				}
			}
			if (i && this.showUpdateBox(n), this._log.writeLog("beforeInvoke flag=" + i), t && "VideoCall" === e) {
				if (a.get("floating") || this._util.is3DView()) return D.OSDWindow.getInstance().showStereoInfo({
					title: this._i18n.__("VideoCall_Cannot_Launch"),
					message: this._i18n.__("Please_Close_DisplayGo")
				}), !0
			}
			if (t && ("Display Go" === e || "Display Service" === e)) try {
				if (h.execSync("powershell -command \"Get-Process -Name 'SpatialLabs Video Call'\"")) return D.OSDWindow.getInstance().showStereoInfo({
					title: this._i18n.__("DisplayGo_Cannot_Launch"),
					message: this._i18n.__("Please_Close_VideoCall")
				}), !0
			} catch (e) {
				this._log.writeLog("VideoCall is not exist")
			}
			return i
		}
		invokeTool() {
			this.invokeWidget("Diagnostic")
		}
		getOTA() {
			return this._ota
		}
		fetchDownloadableWidgets() {
			return this._log.writeLog("OTA: " + this._ota), new Promise((e, t) => {
				d({
					uri: `${this._ota}/${this._admin.getJson()}`,
					method: "GET",
					timeout: 1e4,
					followRedirect: !0,
					maxRedirects: 10
				}, (n, i, r) => {
					n ? t(n) : 200 !== i.statusCode ? t("Invalid status code <" + i.statusCode + ">") : e(r)
				})
			})
		}
		finishProgress(e) {
			const t = this._progress.find(t => t.name === e);
			t && this._progress.splice(this._progress.indexOf(t), 1)
		}
		setProgress(e, t) {
			const n = this._progress.find(t => t.name === e);
			if (n) n.value = t;
			else {
				const n = {
					name: e,
					value: t
				};
				this._progress.push(n)
			}
		}
		progress(e) {
			const t = this._progress.find(t => t.name === e);
			return t ? t.value : 100
		}
		installPlugin(e, t) {
			return i(this, void 0, void 0, (function*() {
				const n = e.name,
					o = e.silent,
					s = this._plugins.find(e => e.name === n),
					a = r.join(this._widgetRoot, "tmp", n + ".exe"),
					c = `${a}.${(new Date).getTime()}`;
				let l = !0;
				if (u.existsSync(a) && !o || (u.existsSync(r.dirname(a)) || u.mkdirSync(r.dirname(a)), yield this.downloadFile(c, s.downloadUrl).then(e => {
						u.renameSync(c, a)
					}).catch(e => {
						l = !1, this._log.writeLog("downloadFile: " + e), u.unlinkSync(c)
					})), l && u.existsSync(a)) try {
					this.endDownload();
					let e = "";
					if (o && s.installArgument && (e = s.installArgument), "PiStage" === n && s.uninstallString) {
						const e = s.uninstallString.replace(/"/g, "");
						let t = e;
						e.includes("/") && (t = e.substring(0, e.indexOf(" /"))), t && u.existsSync(t) && (yield this.runAsAdmin(t, "/S").catch(e => {
							this._log.writeLog("runAsAdmin: " + e)
						}))
					}
					h.exec(`"${r.join(a)}" ${e} /D=${s.installPath}`, (e, r, a) => i(this, void 0, void 0, (function*() {
						e ? (this._log.writeLog("Plugin error: " + e), y.Util.getInstance().showMessageBox({
							title: g.I18n.getInstance().__("Install_Failed")
						}), t()) : o || "updatable" !== s.status ? (yield this.addRegistry(s), setTimeout(() => {
							t(this._registry.restorePlugin(n))
						}, 500)) : t(s)
					})))
				} catch (e) {
					this._log.writeLog(`execSync ${r.join(a)}: ${e}`), y.Util.getInstance().showMessageBox({
						title: g.I18n.getInstance().__("Install_Failed")
					}), t(), u.unlinkSync(a)
				} else t()
			}))
		}
		recordStatus(e, t) {
			this._processWidget = e, this._tmpStatus = t
		}
		installWidget(e, t) {
			return i(this, void 0, void 0, (function*() {
				const n = e.name,
					o = (e.silent, this._widgets.find(e => e.name === n));
				if (this.logJson("installWidget", o), this._tmpStatus || this.recordStatus(o, "downloadable"), "installed" === o.status) return void t();
				let s = this._uninstalledWidgets.find(e => e.name === n && e.version === o.version);
				if (s) {
					o.status = "installed", this._uninstalledWidgets.indexOf(s) >= 0 && this._uninstalledWidgets.splice(this._uninstalledWidgets.indexOf(s), 1), t()
				} else {
					const e = r.join(this._widgetRoot, "tmp", o.downloadUrl.substr(o.downloadUrl.lastIndexOf("/") + 1));
					if (u.existsSync(e) || (u.existsSync(r.dirname(e)) || u.mkdirSync(r.dirname(e)), yield this.downloadFile(e, o.downloadUrl).catch(t => {
							this._log.writeLog("downloadFile: " + t), u.unlinkSync(e)
						}), this._log.writeLog("downloadFile finish")), u.existsSync(e)) try {
						if (this.endDownload(), "updatable" === o.status ? this._tmpStatus = "updating" : "downloadable" === o.status && (this._tmpStatus = "installing"), setTimeout(() => {
								try {
									p.LogIt.getInstance().writeLog("6 mins to resultCallback"), t()
								} catch (e) {}
							}, 36e4), e.endsWith(".msixbundle")) this._log.writeLog("install msixbundle"), h.exec(`powershell -command "Add-AppPackage -path '${e}'"`, (r, s, a) => i(this, void 0, void 0, (function*() {
							r ? (this._log.writeLog("msixbundle error: " + r), y.Util.getInstance().showMessageBox({
								title: g.I18n.getInstance().__("Install_Failed")
							}), t()) : (yield this.afterInstall(o), setTimeout(() => {
								const e = this._registry.restoreWidget(n);
								this.logJson("restoreWidget", e), t(e)
							}, 1e3), u.unlinkSync(e))
						})));
						else if (e.endsWith(".msi")) {
							this._log.writeLog("install msi");
							let s = !0;
							if (yield this.runAsAdmin("msiexec", `/QN /I "${r.join(e)}"`).catch(e => {
									this._tmpStatus = void 0, this._log.writeLog("runAsAdmin ERROR: " + e), this._log.writeLog("Message: " + e.message), y.Util.getInstance().showMessageBox({
										title: g.I18n.getInstance().__("Install_Failed")
									}), s = !1, e && e.message && "connect ENOENT \\\\.\\pipe\\spatiallabspipe" === e.message ? s = !0 : t()
								}), s) {
								let r = 1;
								"Display Service" === n ? r = 75 : "Stereo Generation" === n ? r = 30 : "Acer XR Service" === n && (r = 75), setTimeout(() => i(this, void 0, void 0, (function*() {
									this._tmpStatus = void 0, yield this.afterInstall(o), u.unlinkSync(e);
									const i = this._registry.restoreWidget(n);
									this.logJson("restoreWidget", i), t(i)
								})), 1e3 * r)
							}
						} else if ("Simulated Reality" === n) {
							this._log.writeLog("install Simulated Reality");
							let s = 0;
							this._audioService && (s = 1e3, this._log.writeLog("stop AcerImmerseAudioService"), yield this._util.runAsAdmin("sc", "stop AcerImmerseAudioService").catch(e => {
								this._log.writeLog("runAsAdmin: " + e)
							})), setTimeout(() => {
								this.runAsAdmin(`"${r.join(e)}"`, `${o.installArgument} /D=${o.installPath}`).then(r => {
									if (this._tmpStatus = void 0, r.result) setTimeout(() => i(this, void 0, void 0, (function*() {
										yield this.afterInstall(o);
										const e = this._registry.restoreWidget(n);
										this.logJson("restoreWidget", e), t(e)
									})), 1e3), u.unlinkSync(e);
									else {
										let e;
										e = r.exitcode && 2 == r.exitcode ? g.I18n.getInstance().__("Incompatible_Device") : g.I18n.getInstance().__("Install_Failed"), y.Util.getInstance().showMessageBox({
											title: e
										}), t()
									}
								}).catch(e => {
									this._tmpStatus = void 0, this._log.writeLog("Simulated Reality error: " + e), y.Util.getInstance().showMessageBox({
										title: g.I18n.getInstance().__("Install_Failed")
									}), t()
								})
							}, s)
						} else this._log.writeLog("install App:"), "Player" === n && (o.version.startsWith("3.") || o.latestVersion.startsWith("3.")) && u.existsSync("C:\\Program Files\\Acer\\SpatialLabs\\Player\\Installer.exe") && (this._log.writeLog("Uninstall Player"), yield this._util.runAsAdmin("C:\\Program Files\\Acer\\SpatialLabs\\Player\\Installer.exe", "/S /Remove").catch(e => {
							this._log.writeLog("runAsAdmin: " + e)
						})), h.exec(`"${r.join(e)}" ${o.installArgument} /D=${o.installPath}`, (r, s, a) => i(this, void 0, void 0, (function*() {
							this._tmpStatus = void 0, r ? (this._log.writeLog("App error: " + r), y.Util.getInstance().showMessageBox({
								title: g.I18n.getInstance().__("Install_Failed")
							}), t()) : ("VideoCall" !== n && (yield this.afterInstall(o)), setTimeout(() => {
								const e = this._registry.restoreWidget(n);
								this.logJson("restoreWidget", e), t(e)
							}, 1e3), u.unlinkSync(e), "Player" === n && ((o.version.startsWith("2.") || o.latestVersion.startsWith("2.")) && u.existsSync("C:\\Program Files\\Acer\\SpatialLabs\\Player\\Uninstall.exe") && (this._log.writeLog("Uninstall Player"), yield this._util.runAsAdmin("C:\\Program Files\\Acer\\SpatialLabs\\Player\\Uninstall.exe", "/S").catch(e => {
								this._log.writeLog("runAsAdmin: " + e)
							})), u.existsSync("C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\SpatialLabs\\SpatialLabs Player.lnk") || setTimeout(() => i(this, void 0, void 0, (function*() {
								this._log.writeLog("Create Player Shortcut"), yield this._util.runAsAdmin("C:\\Program Files\\Acer\\SpatialLabs\\ExperienceCenter\\SpatialLabs Experience Center.exe", '"--installwidgetshortcut=SpatialLabs Player|Player|c:\\Program Files\\Acer\\SpatialLabs\\ExperienceCenter\\resources\\src\\assets\\image\\apps\\player.ico"').catch(e => {
									this._log.writeLog("runAsAdmin: " + e)
								})
							})), 1e3)))
						})))
					} catch (n) {
						this._tmpStatus = void 0, this._log.writeLog(`execSync ${r.join(e)}: ${n}`), y.Util.getInstance().showMessageBox({
							title: g.I18n.getInstance().__("Install_Failed")
						}), t(), u.unlinkSync(e)
					} else t();
					this.finishProgress(n)
				}
			}))
		}
		endDownload() {
			const e = a.get("update-info") ? a.get("update-info") : a.get("main");
			e && e.object && e.object.webContents && e.object.webContents.send("download-progress", {
				length: void 0,
				size: void 0
			})
		}
		addRegistry(e) {
			return i(this, void 0, void 0, (function*() {
				this.logJson("addRegistry", e);
				const t = e.name,
					n = this._downloadable.find(e => e.name === t),
					i = n && n.icon ? n.icon : e.icon,
					s = e.displayName,
					a = n && n.executable ? n.executable : e.directUrl,
					c = (e.installPath, e.type);
				let l = n && n.uninstallString ? n.uninstallString : e.uninstallString;
				const d = e.latestVersion ? e.latestVersion : e.version,
					h = e.description,
					p = e.registryRoot ? e.registryRoot : this._registry.registryRoot;
				let f = t;
				"Add-on" === c && (f = "Add-ons\\" + t), "SketchUp" !== t || l || (l = r.join(o.app.getPath("appData"), "../Local/Programs/Acer/SpatialLabs/Add-ons/SketchUp/unins000.exe") + " /VERYSILENT /SUPPRESSMSGBOXES");
				const g = new Array;
				g.push("Windows Registry Editor Version 5.00"), g.push(`[${p}\\${f}]`), c && g.push(`"Type"="${c}"`), l && g.push(`"UninstallString"="${l.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`), d && g.push(`"Version"="${d}"`), "App" !== c && "Add-on" !== c && "Tool" !== c || (i && g.push(`"DisplayIcon"="${i.replaceAll("\\","\\\\")}"`), s && g.push(`"DisplayName"="${s}"`), a && g.push(`"Executable"="${a.replaceAll("\\","\\\\")}"`), h && g.push(`"Description"="${h}"`)), u.existsSync(this._widgetRoot) || u.mkdirSync(this._widgetRoot, {
					recursive: !0
				});
				const m = r.resolve("" + this._widgetRoot, "tmp.reg");
				try {
					"Simulated Reality" === t ? (g.push("[HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Eye Tracker]"), g.push('"DisplayName"=-'), g.push("[HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Simulated Reality]"), g.push('"DisplayName"=-'), g.push("[HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Simulated Reality Dashboard]"), g.push('"DisplayName"=-'), g.push("[HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Simulated Reality\\SR]"), g.push('"DisplayName"=-'), g.push("[HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Simulated Reality Platform]"), g.push('"DisplayName"=-'), g.push("[HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\Simulated Reality32]"), g.push('"DisplayName"=-')) : "Acer XR Service" === t ? (g.push("[HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\SpatialLabsDisplayService\\FloatingWindow]"), g.push('"DisableModelCheck"=dword:00000001')) : "Display Service" === t && (g.push("[HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\SpatialLabsDisplayService]"), g.push('"SBSGenLevels"=dword:0000000F')), this._log.writeLog("addRegistry Array : " + g), u.writeFileSync(m, "\ufeff" + g.join("\r\n"), {
						encoding: "utf16le"
					}), yield this.runAsAdmin("reg.exe", `import "${m}"`).catch(e => {
						this._log.writeLog("runAsAdmin: " + e)
					})
				} catch (e) {
					this._log.writeLog("addRegistry error: " + e), console.error(e)
				}
			}))
		}
		uninstallWidget(e) {
			return new Promise((t, n) => {
				const i = this._widgets.find(t => t.name === e);
				i ? h.exec(`"${r.join(i.uninstallString)}" /S`, (function(e, i, r) {
					e && (this._log.writeLog("uninstallWidget: " + e), n(e)), t("")
				})) : n("App is not found: " + e)
			})
		}
		getDownloadTime(e) {
			return new Promise((t, n) => {
				d(e, (e, i, r) => {
					e ? n(e) : 200 !== i.statusCode ? n("Invalid status code <" + i.statusCode + ">") : t(i.headers["content-length"])
				})
			})
		}
		isOnline() {
			return this._online
		}
		offLine() {
			this._online = !1
		}
		isInterrupt() {
			return this._interrupt
		}
		interrupt() {
			this._interrupt = !0
		}
		afterForceClose() {
			!1 === this._interrupt ? (this.interrupt(), this._processWidget && (this._processWidget.status = this._tmpStatus), this._tmpStatus = void 0) : this._processWidget && "installed" === this._processWidget.status && this._processWidget.reboot ? this.reboot(!1) : !this._processWidget || "updating" !== this._tmpStatus && "installing" !== this._tmpStatus || o.app.quit()
		}
		downloadFile(e, t) {
			let n;
			return this._online = !0, this._interrupt = !1, t && !t.startsWith("http") && (t = new URL(`${this._ota}/${t}`).href), this._downloadSize = 0, new Promise((i, r) => {
				const o = u.createWriteStream(e);
				o.on("close", () => {
					p.LogIt.getInstance().writeLog("writeStream close"), p.LogIt.getInstance().writeLog(`downloadSize: ${WidgetManager.getInstance()._downloadSize}, fileSize: ${WidgetManager.getInstance()._fileSize}`), WidgetManager.getInstance()._downloadSize >= WidgetManager.getInstance()._fileSize ? (p.LogIt.getInstance().writeLog("resolve: " + e), i(e), WidgetManager.getInstance().interrupt()) : WidgetManager.getInstance().isInterrupt() || (p.LogIt.getInstance().writeLog("offLine"), WidgetManager.getInstance().offLine()), p.LogIt.getInstance().writeLog("end of writeStream close")
				}).on("drain", () => {}).on("error", e => {
					p.LogIt.getInstance().writeLog("writeStream error: " + e), y.Util.getInstance().showMessageBox({
						title: g.I18n.getInstance().__("Disconnected"),
						message: g.I18n.getInstance().__("Disconnected_Info")
					}), r(e), o.close(), c.abort(), s && s.object && s.object.webContents && s.object.webContents.send("download-progress", {
						length: void 0,
						size: void 0
					}), clearInterval(n)
				}).on("finish", () => {
					p.LogIt.getInstance().writeLog("writeStream finish")
				}).on("open", e => {
					p.LogIt.getInstance().writeLog("writeStream open: " + e)
				}).on("pipe", e => {
					p.LogIt.getInstance().writeLog("writeStream pipe: " + e)
				}).on("ready", () => {
					p.LogIt.getInstance().writeLog("writeStream ready")
				}).on("unpipe", e => {
					p.LogIt.getInstance().writeLog("writeStream unpipe: " + e)
				});
				const s = a.get("update-info") ? a.get("update-info") : a.get("main"),
					c = d.get("" + t);
				c.on("response", (function(e) {
					p.LogIt.getInstance().writeLog("request response: " + e), e && e.statusCode && 200 != e.statusCode && (y.Util.getInstance().showMessageBox({
						title: g.I18n.getInstance().__("Disconnected"),
						message: g.I18n.getInstance().__("File_Not_Found")
					}), r("404 Not Found"), o.close(), c.abort()), WidgetManager.getInstance()._fileSize = parseInt(e.headers["content-length"]), s && s.object && s.object.webContents && (s.object.webContents.send("download-progress", {
						length: 0,
						size: WidgetManager.getInstance()._fileSize
					}), n = setInterval(() => {
						WidgetManager.getInstance().isInterrupt() && (r("Interrupt by User"), o.close(), c.abort(), clearInterval(n)), WidgetManager.getInstance().isOnline() || (y.Util.getInstance().showMessageBox({
							title: g.I18n.getInstance().__("Disconnected"),
							message: g.I18n.getInstance().__("Disconnected_Info")
						}), r("Disconnected"), o.close(), c.abort(), s && s.object && s.object.webContents && s.object.webContents.send("download-progress", {
							length: void 0,
							size: void 0
						}), clearInterval(n)), WidgetManager.getInstance()._fileSize && WidgetManager.getInstance()._downloadSize && (WidgetManager.getInstance()._downloadSize >= WidgetManager.getInstance()._fileSize ? (s && s.object && s.object.webContents && s.object.webContents.send("download-progress", {
							length: void 0,
							size: void 0
						}), clearInterval(n), o && o.close()) : s && s.object && s.object.webContents && s.object.webContents.send("download-progress", {
							length: WidgetManager.getInstance()._downloadSize,
							size: WidgetManager.getInstance()._fileSize
						}))
					}, 1e3))
				})).on("data", (function(e) {
					WidgetManager.getInstance()._downloadSize += e.length, WidgetManager.getInstance()._downloadSize >= WidgetManager.getInstance()._fileSize && (p.LogIt.getInstance().writeLog("downloadSize > fileSize"), setTimeout(() => {
						try {
							p.LogIt.getInstance().writeLog("6 mins to reject Install Timeout"), r("Install Timeout")
						} catch (e) {}
					}, 36e4))
				})).on("error", (function(e) {
					p.LogIt.getInstance().writeLog("request error: " + e), y.Util.getInstance().showMessageBox({
						title: g.I18n.getInstance().__("Disconnected"),
						message: g.I18n.getInstance().__("Disconnected_Info")
					}), r(e), o.close(), c.abort(), s && s.object && s.object.webContents && s.object.webContents.send("download-progress", {
						length: void 0,
						size: void 0
					}), clearInterval(n)
				})).on("end", (function(e) {
					p.LogIt.getInstance().writeLog("request end: " + e)
				})).on("complete", (function(e, t) {
					p.LogIt.getInstance().writeLog(`request complete: ${e}, ${t}`)
				})).on("abort", (function() {
					p.LogIt.getInstance().writeLog("request abort")
				})).on("socket", (function(e) {
					p.LogIt.getInstance().writeLog("request socket: " + e)
				})).on("request", (function(e) {
					p.LogIt.getInstance().writeLog("request request: " + e)
				})).on("close", (function() {
					p.LogIt.getInstance().writeLog("request close")
				})).on("drain", (function() {
					p.LogIt.getInstance().writeLog("request drain")
				})).pipe(o)
			})
		}
		getInitPlugins() {
			return [{
				name: "ZBrush",
				displayName: {
					en: "Zbrush Add-on",
					fr: "Module complémentaire Zbrush",
					ja: "Zbrush アドオン",
					"zh-TW": "Zbrush 附加元件",
					"zh-CN": "Zbrush 加载项",
					de: "Zbrush Add-on",
					it: "Add-on Zbrush",
					es: "Complemento Zbrush",
					"pt-PT": "Suplemento Zbrush",
					nl: "Zbrush-invoegtoepassing",
					el: "Πρόσθετο Zbrush",
					sv: "Tillägget Zbrush",
					nb: "Tilleggsprogrammet for Zbrush",
					fi: "Zbrush-lisäosa",
					pl: "Dodatek Zbrush",
					ru: "Дополнение Zbrush",
					cs: "Doplněk Zbrush",
					hu: "Zbrush kiegészítőhöz",
					tr: "Zbrush Eklentisi",
					da: "Zbrush tilføjelsesprogrammer",
					bg: "Добавка Zbrush",
					hr: "Dodatak Zbrush",
					ro: "Supliment Zbrush",
					sl: "Dodatek Zbrush",
					sk: "Doplnok Zbrush",
					ko: "Zbrush 애드온",
					"pt-BR": "Complemento do Zbrush"
				},
				type: "Add-on",
				version: "1.7.2",
				description: {
					en: "The add-on serves as a shortcut that allows you to take your 3D models in Zbrush and automatically export them to the SpatialLabs Model Viewer. You need to install the add-on for each version of your software respectively.",
					fr: "Ce module complémentaire sert de raccourci pour prendre vos modèles 3D dans Zbrush et les exporter automatiquement vers l'Afficheur de modèles SpatialLabs. Vous devez installer le module complémentaire pour chaque version de votre logiciel respectivement.",
					"zh-TW": "附加元件可做為讓您在 Zbrush 中取得 3D 模型的捷徑，並將其自動匯出到 SpatialLabs 模型檢視器。您需要分別為每個軟體版本安裝附加元件。",
					"zh-CN": "该加载项作为一个快捷方式，可让您在 Zbrush 中获取 3D 模型，并自动将其导出到 SpatialLabs 超感空间模型查看器。您需为每个版本的软件分别安装加载项。",
					de: "Das Add-on dient als Verknüpfung, mit der Sie Ihre 3D Modelle in Zbrush übernehmen und automatisch in den SpatialLabs Modellanzeige exportieren können. Sie müssen das Add-on für jede Version Ihrer Software entsprechend installieren.",
					it: "L'add-on serve da collegamento che consente di portare i modelli 3D nelle Zbrush e di esportarli automaticamente in Visualizzatore modello SpatialLabs. È necessario installare l'add-on per ciascuna versione del sofware.",
					es: "El complemento haces la función de acceso directo para que pueda tomar sus modelos 3D en Zbrush y exportarlos automáticamente al Visor de modelos de SpatialLabs. Debe instalar el complemento para cada versión de su software como corresponde.",
					"pt-PT": "O suplemento serve de atalho que lhe permite pegar nos seus modelos 3D de Zbrush e exportá-los automaticamente para o Visualizador de Modelos SpatialLabs. Tem de instalar o suplemento para cada versão do seu software, respetivamente.",
					nl: "De invoegtoepassing dient als een snelkoppeling waarmee u 3D-modellen in Zbrush kunt pakken en deze automatisch kunt exporteren naar SpatialLabs-modellenviewer. Installeer de invoegtoepassing voor elke versie van de softtware.",
					el: "Το πρόσθετο εξυπηρετεί ως συντόμευση που σας επιτρέπει να πάρετε τα μοντέλα σας 3D στο Zbrush και να τα εξάγετε αυτόματα στο Πρόγραμμα προβολής μοντέλου SpatialLabs. Απαιτείται η εγκατάσταση του πρόσθετου για κάθε έκδοση του λογισμικού σας αντίστοιχα.",
					sv: "Tillägget fungerar som en genväg som låter dig ta dina 3D-modeller i Zbrush och automatiskt exportera dem till SpatialLabs modellvisare. Du måste installera tillägget för varje version av din programvara.",
					nb: "Tilleggsprogrammet er som en snarvei som kan brukes for å ta dine 3D-modeller i Zbrush og utføre en automatisk eksportering til SpatialLabs Modellviser. Tilleggsprogrammet må installeres for hver versjon av programvaren.",
					fi: "Lisäosa toimii oikopolkuna, jonka avulla voit ottaa Zbrush -sovelluksessa olevat 3D-mallisi ja viedä ne automaattisesti SpatialLabs Mallin katseluohjelmaan. Sinun on asennettava lisäosa jokaiselle ohjelmistoversiollesi.",
					pl: "Dodatek służy jako skrót, który umożliwia pobieranie modeli 3D w Zbrush i automatyczne eksportowanie ich do SpatialLabs Przeglądarka modeli. Dodatek należy zainstalować odpowiednio dla każdej wersji oprogramowania.",
					ru: "Этот дополнительный модуль действует как ярлык и позволяет вам импортировать 3D-модели в Zbrush и автоматически экспортировать их в Средство просмотра моделей SpatialLabs. Вам нужно установить этот дополнительный модуль для каждой соответствующей версии вашего ПО.",
					cs: "Tento doplněk slouží jako zástupce, který vám umožní vzít vaše 3D modely v Zbrush a automaticky je exportovat do Prohlížeč modelu SpatialLabs. Doplněk je třeba nainstalovat pro každou verzi softwaru zvlášť.",
					hu: "A kiegészítő gyorsbillentyűként funkcionál, amely lehetővé teszi 3D modelleket készítését a Zbrush, és azok automatikus exportálását a SpatialLabs modell megtekintő programba. A szoftver adott verzióihoz telepítenie kell ezt a kiegészítőt.",
					tr: "Eklenti, 3B modellerinizi Zbrush içine almanıza ve bunları otomatik olarak SpatialLabs Model Görüntüleyici'ye aktarmanıza olanak tanıyan bir kısayol işlevi görür. Eklentiyi yazılımınızın her sürümü için sırasıyla yüklemeniz gerekir.",
					da: "Tilføjelsesprogrammet er en genvej, der giver mulighed for at tage dine 3D-modeller i Zbrush og automatisk eksportere dem til SpatialLabs modelfremviser. Du skal installere tilføjelsesprogrammet for hver version af din software.",
					bg: "Добавката служи за пряк път, който Ви дава възможност да вземете своите 3D модели от Zbrush и автоматично да ги експортирате до Визуализатор на модели SpatialLabs. Трябва да инсталирате добавката съответно за всяка версия на Вашия софтуер.",
					hr: "Dodatak služi kao prečac koji omogućava uzimanje 3D modela iz Zbrush i njihov automatski izvoz u SpatialLabs preglednik modela. Dodatak je potrebno instalirati za svaku pojedinu inačicu softvera.",
					ro: "Suplimentul are rol de comandă rapidă ce vă permite să luaţi modele 3D din Zbrush şi să le exportaţi automat în Vizualizator model SpatialLabs. Trebuie să instalaţi suplimentul pentru fiecare versiune de software.",
					sl: "Dodatek služi kot bližnjica, ki omogoča, da vzamete modele 3D iz Zbrush in jih samodejno izvozite v Prikazovalnik modelov SpatialLabs. Dodatek morate namestiti za vsako različico programske opreme.",
					sk: "Doplnok slúži ako skratka, ktorá vám umožňuje prevziať vaše 3D modely v Zbrush a automaticky ich exportovať do Prehliadača modelov SpatialLabs. Doplnok je potrebné nainštalovať pre každú verziu vášho softvéru.",
					ko: "애드온은 Zbrush에서 3D 모델을 가져와 자동으로 SpatialLabs 모델 뷰어로 내보낼 수 있는 바로 가기로 작동합니다. 소프트웨어의 각 버전에 대해 애드온을 각각 설치해야 합니다.",
					"pt-BR": "O complemento funciona como um atalho que permite que você leve seus modelos 3D no Zbrush e os exporte automaticamente para o Visualizador de Modelo SpatialLabs. É necessário instalar o complemento para cada versão de seu software respectivamente."
				},
				downloadUrl: "SpatialLabs MV addons/v1.7.2/zbrush_setup_1.7.2.exe",
				infoUrl: "https://go.acer.com/user-guide-spatiallabs",
				installArgument: "/VERYSILENT /SUPPRESSMSGBOXES",
				uninstallString: "C:\\Program Files\\Acer\\SpatialLabs\\Add-ons\\ZBrush\\unins000.exe /VERYSILENT /SUPPRESSMSGBOXES"
			}, {
				name: "SketchUp",
				displayName: {
					en: "SketchUp Add-on",
					fr: "Module complémentaire SketchUp",
					ja: "SketchUp アドオン",
					"zh-TW": "SketchUp 附加元件",
					"zh-CN": "SketchUp 加载项",
					de: "SketchUp Add-on",
					it: "Add-on SketchUp",
					es: "Complemento SketchUp",
					"pt-PT": "Suplemento SketchUp",
					nl: "SketchUp-invoegtoepassing",
					el: "Πρόσθετο SketchUp",
					sv: "Tillägget SketchUp",
					nb: "Tilleggsprogrammet for SketchUp",
					fi: "SketchUp-lisäosa",
					pl: "Dodatek SketchUp",
					ru: "Дополнение SketchUp",
					cs: "Doplněk SketchUp",
					hu: "SketchUp kiegészítőhöz",
					tr: "SketchUp Eklentisi",
					da: "SketchUp tilføjelsesprogrammer",
					bg: "Добавка SketchUp",
					hr: "Dodatak SketchUp",
					ro: "Supliment SketchUp",
					sl: "Dodatek SketchUp",
					sk: "Doplnok SketchUp",
					ko: "SketchUp 애드온",
					"pt-BR": "Complemento do SketchUp"
				},
				type: "Add-on",
				version: "1.7.2",
				description: {
					en: "The add-on serves as a shortcut that allows you to take your 3D models in SketchUp and automatically export them to the SpatialLabs Model Viewer. You need to install the add-on for each version of your software respectively.",
					fr: "Ce module complémentaire sert de raccourci pour prendre vos modèles 3D dans SketchUp et les exporter automatiquement vers l'Afficheur de modèles SpatialLabs. Vous devez installer le module complémentaire pour chaque version de votre logiciel respectivement.",
					"zh-TW": "附加元件可做為讓您在 SketchUp 中取得 3D 模型的捷徑，並將其自動匯出到 SpatialLabs 模型檢視器。您需要分別為每個軟體版本安裝附加元件。",
					"zh-CN": "该加载项作为一个快捷方式，可让您在 SketchUp 中获取 3D 模型，并自动将其导出到 SpatialLabs 超感空间模型查看器。您需为每个版本的软件分别安装加载项。",
					de: "Das Add-on dient als Verknüpfung, mit der Sie Ihre 3D Modelle in SketchUp übernehmen und automatisch in den SpatialLabs Modellanzeige exportieren können. Sie müssen das Add-on für jede Version Ihrer Software entsprechend installieren.",
					it: "L'add-on serve da collegamento che consente di portare i modelli 3D nelle SketchUp e di esportarli automaticamente in Visualizzatore modello SpatialLabs. È necessario installare l'add-on per ciascuna versione del sofware.",
					es: "El complemento haces la función de acceso directo para que pueda tomar sus modelos 3D en SketchUp y exportarlos automáticamente al Visor de modelos de SpatialLabs. Debe instalar el complemento para cada versión de su software como corresponde.",
					"pt-PT": "O suplemento serve de atalho que lhe permite pegar nos seus modelos 3D de SketchUp e exportá-los automaticamente para o Visualizador de Modelos SpatialLabs. Tem de instalar o suplemento para cada versão do seu software, respetivamente.",
					nl: "De invoegtoepassing dient als een snelkoppeling waarmee u 3D-modellen in SketchUp kunt pakken en deze automatisch kunt exporteren naar SpatialLabs-modellenviewer. Installeer de invoegtoepassing voor elke versie van de softtware.",
					el: "Το πρόσθετο εξυπηρετεί ως συντόμευση που σας επιτρέπει να πάρετε τα μοντέλα σας 3D στο SketchUp και να τα εξάγετε αυτόματα στο Πρόγραμμα προβολής μοντέλου SpatialLabs. Απαιτείται η εγκατάσταση του πρόσθετου για κάθε έκδοση του λογισμικού σας αντίστοιχα.",
					sv: "Tillägget fungerar som en genväg som låter dig ta dina 3D-modeller i SketchUp och automatiskt exportera dem till SpatialLabs modellvisare. Du måste installera tillägget för varje version av din programvara.",
					nb: "Tilleggsprogrammet er som en snarvei som kan brukes for å ta dine 3D-modeller i SketchUp og utføre en automatisk eksportering til SpatialLabs Modellviser. Tilleggsprogrammet må installeres for hver versjon av programvaren.",
					fi: "Lisäosa toimii oikopolkuna, jonka avulla voit ottaa SketchUp -sovelluksessa olevat 3D-mallisi ja viedä ne automaattisesti SpatialLabs Mallin katseluohjelmaan. Sinun on asennettava lisäosa jokaiselle ohjelmistoversiollesi.",
					pl: "Dodatek służy jako skrót, który umożliwia pobieranie modeli 3D w SketchUp i automatyczne eksportowanie ich do SpatialLabs Przeglądarka modeli. Dodatek należy zainstalować odpowiednio dla każdej wersji oprogramowania.",
					ru: "Этот дополнительный модуль действует как ярлык и позволяет вам импортировать 3D-модели в SketchUp и автоматически экспортировать их в Средство просмотра моделей SpatialLabs. Вам нужно установить этот дополнительный модуль для каждой соответствующей версии вашего ПО.",
					cs: "Tento doplněk slouží jako zástupce, který vám umožní vzít vaše 3D modely v SketchUp a automaticky je exportovat do Prohlížeč modelu SpatialLabs. Doplněk je třeba nainstalovat pro každou verzi softwaru zvlášť.",
					hu: "A kiegészítő gyorsbillentyűként funkcionál, amely lehetővé teszi 3D modelleket készítését a SketchUp, és azok automatikus exportálását a SpatialLabs modell megtekintő programba. A szoftver adott verzióihoz telepítenie kell ezt a kiegészítőt.",
					tr: "Eklenti, 3B modellerinizi SketchUp içine almanıza ve bunları otomatik olarak SpatialLabs Model Görüntüleyici'ye aktarmanıza olanak tanıyan bir kısayol işlevi görür. Eklentiyi yazılımınızın her sürümü için sırasıyla yüklemeniz gerekir.",
					da: "Tilføjelsesprogrammet er en genvej, der giver mulighed for at tage dine 3D-modeller i SketchUp og automatisk eksportere dem til SpatialLabs modelfremviser. Du skal installere tilføjelsesprogrammet for hver version af din software.",
					bg: "Добавката служи за пряк път, който Ви дава възможност да вземете своите 3D модели от SketchUp и автоматично да ги експортирате до Визуализатор на модели SpatialLabs. Трябва да инсталирате добавката съответно за всяка версия на Вашия софтуер.",
					hr: "Dodatak služi kao prečac koji omogućava uzimanje 3D modela iz SketchUp i njihov automatski izvoz u SpatialLabs preglednik modela. Dodatak je potrebno instalirati za svaku pojedinu inačicu softvera.",
					ro: "Suplimentul are rol de comandă rapidă ce vă permite să luaţi modele 3D din SketchUp şi să le exportaţi automat în Vizualizator model SpatialLabs. Trebuie să instalaţi suplimentul pentru fiecare versiune de software.",
					sl: "Dodatek služi kot bližnjica, ki omogoča, da vzamete modele 3D iz SketchUp in jih samodejno izvozite v Prikazovalnik modelov SpatialLabs. Dodatek morate namestiti za vsako različico programske opreme.",
					sk: "Doplnok slúži ako skratka, ktorá vám umožňuje prevziať vaše 3D modely v SketchUp a automaticky ich exportovať do Prehliadača modelov SpatialLabs. Doplnok je potrebné nainštalovať pre každú verziu vášho softvéru.",
					ko: "애드온은 SketchUp에서 3D 모델을 가져와 자동으로 SpatialLabs 모델 뷰어로 내보낼 수 있는 바로 가기로 작동합니다. 소프트웨어의 각 버전에 대해 애드온을 각각 설치해야 합니다.",
					"pt-BR": "O complemento funciona como um atalho que permite que você leve seus modelos 3D no SketchUp e os exporte automaticamente para o Visualizador de Modelo SpatialLabs. É necessário instalar o complemento para cada versão de seu software respectivamente."
				},
				downloadUrl: "SpatialLabs MV addons/v1.7.2/sketchup_setup_1.7.2.exe",
				infoUrl: "https://go.acer.com/user-guide-spatiallabs",
				installArgument: "/VERYSILENT /SUPPRESSMSGBOXES",
				uninstallString: "C:\\Program Files\\Acer\\SpatialLabs\\Add-ons\\SketchUp\\unins000.exe /VERYSILENT /SUPPRESSMSGBOXES"
			}, {
				name: "Autodesk Fusion 360",
				displayName: {
					en: "Fusion 360 Add-on",
					fr: "Module complémentaire Fusion 360",
					ja: "Fusion 360 アドオン",
					"zh-TW": "Fusion 360 附加元件",
					"zh-CN": "Fusion 360 加载项",
					de: "Fusion 360 Add-on",
					it: "Add-on Fusion 360",
					es: "Complemento Fusion 360",
					"pt-PT": "Suplemento Fusion 360",
					nl: "Fusion 360-invoegtoepassing",
					el: "Πρόσθετο Fusion 360",
					sv: "Tillägget Fusion 360",
					nb: "Tilleggsprogrammet for Fusion 360",
					fi: "Fusion 360 -lisäosa",
					pl: "Dodatek Fusion 360",
					ru: "Дополнение Fusion 360",
					cs: "Doplněk Fusion 360",
					hu: "Fusion 360 kiegészítőhöz",
					tr: "Fusion 360 Eklentisi",
					da: "Fusion 360 tilføjelsesprogrammer",
					bg: "Добавка Fusion 360",
					hr: "Dodatak Fusion 360",
					ro: "Supliment Fusion 360",
					sl: "Dodatek Fusion 360",
					sk: "Doplnok Fusion 360",
					ko: "Fusion 360 애드온",
					"pt-BR": "Complemento do Fusion 360"
				},
				type: "Add-on",
				version: "1.7.5",
				description: {
					en: "The add-on serves as a shortcut that allows you to take your 3D models in Fusion 360 and automatically export them to the SpatialLabs Model Viewer. You need to install the add-on for each version of your software respectively.",
					fr: "Ce module complémentaire sert de raccourci pour prendre vos modèles 3D dans Fusion 360 et les exporter automatiquement vers l'Afficheur de modèles SpatialLabs. Vous devez installer le module complémentaire pour chaque version de votre logiciel respectivement.",
					"zh-TW": "附加元件可做為讓您在 Fusion 360 中取得 3D 模型的捷徑，並將其自動匯出到 SpatialLabs 模型檢視器。您需要分別為每個軟體版本安裝附加元件。",
					"zh-CN": "该加载项作为一个快捷方式，可让您在 Fusion 360 中获取 3D 模型，并自动将其导出到 SpatialLabs 超感空间模型查看器。您需为每个版本的软件分别安装加载项。",
					de: "Das Add-on dient als Verknüpfung, mit der Sie Ihre 3D Modelle in Fusion 360 übernehmen und automatisch in den SpatialLabs Modellanzeige exportieren können. Sie müssen das Add-on für jede Version Ihrer Software entsprechend installieren.",
					it: "L'add-on serve da collegamento che consente di portare i modelli 3D nelle Fusion 360 e di esportarli automaticamente in Visualizzatore modello SpatialLabs. È necessario installare l'add-on per ciascuna versione del sofware.",
					es: "El complemento haces la función de acceso directo para que pueda tomar sus modelos 3D en Fusion 360 y exportarlos automáticamente al Visor de modelos de SpatialLabs. Debe instalar el complemento para cada versión de su software como corresponde.",
					"pt-PT": "O suplemento serve de atalho que lhe permite pegar nos seus modelos 3D de Fusion 360 e exportá-los automaticamente para o Visualizador de Modelos SpatialLabs. Tem de instalar o suplemento para cada versão do seu software, respetivamente.",
					nl: "De invoegtoepassing dient als een snelkoppeling waarmee u 3D-modellen in Fusion 360 kunt pakken en deze automatisch kunt exporteren naar SpatialLabs-modellenviewer. Installeer de invoegtoepassing voor elke versie van de softtware.",
					el: "Το πρόσθετο εξυπηρετεί ως συντόμευση που σας επιτρέπει να πάρετε τα μοντέλα σας 3D στο Fusion 360 και να τα εξάγετε αυτόματα στο Πρόγραμμα προβολής μοντέλου SpatialLabs. Απαιτείται η εγκατάσταση του πρόσθετου για κάθε έκδοση του λογισμικού σας αντίστοιχα.",
					sv: "Tillägget fungerar som en genväg som låter dig ta dina 3D-modeller i Fusion 360 och automatiskt exportera dem till SpatialLabs modellvisare. Du måste installera tillägget för varje version av din programvara.",
					nb: "Tilleggsprogrammet er som en snarvei som kan brukes for å ta dine 3D-modeller i Fusion 360 og utføre en automatisk eksportering til SpatialLabs Modellviser. Tilleggsprogrammet må installeres for hver versjon av programvaren.",
					fi: "Lisäosa toimii oikopolkuna, jonka avulla voit ottaa Fusion 360 -sovelluksessa olevat 3D-mallisi ja viedä ne automaattisesti SpatialLabs Mallin katseluohjelmaan. Sinun on asennettava lisäosa jokaiselle ohjelmistoversiollesi.",
					pl: "Dodatek służy jako skrót, który umożliwia pobieranie modeli 3D w Fusion 360 i automatyczne eksportowanie ich do SpatialLabs Przeglądarka modeli. Dodatek należy zainstalować odpowiednio dla każdej wersji oprogramowania.",
					ru: "Этот дополнительный модуль действует как ярлык и позволяет вам импортировать 3D-модели в Fusion 360 и автоматически экспортировать их в Средство просмотра моделей SpatialLabs. Вам нужно установить этот дополнительный модуль для каждой соответствующей версии вашего ПО.",
					cs: "Tento doplněk slouží jako zástupce, který vám umožní vzít vaše 3D modely v Fusion 360 a automaticky je exportovat do Prohlížeč modelu SpatialLabs. Doplněk je třeba nainstalovat pro každou verzi softwaru zvlášť.",
					hu: "A kiegészítő gyorsbillentyűként funkcionál, amely lehetővé teszi 3D modelleket készítését a Fusion 360, és azok automatikus exportálását a SpatialLabs modell megtekintő programba. A szoftver adott verzióihoz telepítenie kell ezt a kiegészítőt.",
					tr: "Eklenti, 3B modellerinizi Fusion 360 içine almanıza ve bunları otomatik olarak SpatialLabs Model Görüntüleyici'ye aktarmanıza olanak tanıyan bir kısayol işlevi görür. Eklentiyi yazılımınızın her sürümü için sırasıyla yüklemeniz gerekir.",
					da: "Tilføjelsesprogrammet er en genvej, der giver mulighed for at tage dine 3D-modeller i Fusion 360 og automatisk eksportere dem til SpatialLabs modelfremviser. Du skal installere tilføjelsesprogrammet for hver version af din software.",
					bg: "Добавката служи за пряк път, който Ви дава възможност да вземете своите 3D модели от Fusion 360 и автоматично да ги експортирате до Визуализатор на модели SpatialLabs. Трябва да инсталирате добавката съответно за всяка версия на Вашия софтуер.",
					hr: "Dodatak služi kao prečac koji omogućava uzimanje 3D modela iz Fusion 360 i njihov automatski izvoz u SpatialLabs preglednik modela. Dodatak je potrebno instalirati za svaku pojedinu inačicu softvera.",
					ro: "Suplimentul are rol de comandă rapidă ce vă permite să luaţi modele 3D din Fusion 360 şi să le exportaţi automat în Vizualizator model SpatialLabs. Trebuie să instalaţi suplimentul pentru fiecare versiune de software.",
					sl: "Dodatek služi kot bližnjica, ki omogoča, da vzamete modele 3D iz Fusion 360 in jih samodejno izvozite v Prikazovalnik modelov SpatialLabs. Dodatek morate namestiti za vsako različico programske opreme.",
					sk: "Doplnok slúži ako skratka, ktorá vám umožňuje prevziať vaše 3D modely v Fusion 360 a automaticky ich exportovať do Prehliadača modelov SpatialLabs. Doplnok je potrebné nainštalovať pre každú verziu vášho softvéru.",
					ko: "애드온은 Fusion 360에서 3D 모델을 가져와 자동으로 SpatialLabs 모델 뷰어로 내보낼 수 있는 바로 가기로 작동합니다. 소프트웨어의 각 버전에 대해 애드온을 각각 설치해야 합니다.",
					"pt-BR": "O complemento funciona como um atalho que permite que você leve seus modelos 3D no Fusion 360 e os exporte automaticamente para o Visualizador de Modelo SpatialLabs. É necessário instalar o complemento para cada versão de seu software respectivamente."
				},
				downloadUrl: "SpatialLabs MV addons/v1.7.5/fusion360_setup_1.7.5.exe",
				infoUrl: "https://go.acer.com/user-guide-spatiallabs",
				installArgument: "/VERYSILENT /SUPPRESSMSGBOXES",
				uninstallString: "C:\\Program Files\\Acer\\SpatialLabs\\Add-ons\\Autodesk Fusion 360\\unins000.exe /VERYSILENT /SUPPRESSMSGBOXES"
			}, {
				name: "Ultimaker Cura",
				displayName: {
					en: "Cura Add-on",
					fr: "Module complémentaire Cura",
					ja: "Cura アドオン",
					"zh-TW": "Cura 附加元件",
					"zh-CN": "Cura 加载项",
					de: "Cura Add-on",
					it: "Add-on Cura",
					es: "Complemento Cura",
					"pt-PT": "Suplemento Cura",
					nl: "Cura-invoegtoepassing",
					el: "Πρόσθετο Cura",
					sv: "Tillägget Cura",
					nb: "Tilleggsprogrammet for Cura",
					fi: "Cura-lisäosa",
					pl: "Dodatek Cura",
					ru: "Дополнение Cura",
					cs: "Doplněk Cura",
					hu: "Cura kiegészítőhöz",
					tr: "Cura Eklentisi",
					da: "Cura tilføjelsesprogrammer",
					bg: "Добавка Cura",
					hr: "Dodatak Cura",
					ro: "Supliment Cura",
					sl: "Dodatek Cura",
					sk: "Doplnok Cura",
					ko: "Cura 애드온",
					"pt-BR": "Complemento do Cura"
				},
				type: "Add-on",
				version: "1.7.2",
				description: {
					en: "The add-on serves as a shortcut that allows you to take your 3D models in Cura and automatically export them to the SpatialLabs Model Viewer. You need to install the add-on for each version of your software respectively.",
					fr: "Ce module complémentaire sert de raccourci pour prendre vos modèles 3D dans Cura et les exporter automatiquement vers l'Afficheur de modèles SpatialLabs. Vous devez installer le module complémentaire pour chaque version de votre logiciel respectivement.",
					"zh-TW": "附加元件可做為讓您在 Cura 中取得 3D 模型的捷徑，並將其自動匯出到 SpatialLabs 模型檢視器。您需要分別為每個軟體版本安裝附加元件。",
					"zh-CN": "该加载项作为一个快捷方式，可让您在 Cura 中获取 3D 模型，并自动将其导出到 SpatialLabs 超感空间模型查看器。您需为每个版本的软件分别安装加载项。",
					de: "Das Add-on dient als Verknüpfung, mit der Sie Ihre 3D Modelle in Cura übernehmen und automatisch in den SpatialLabs Modellanzeige exportieren können. Sie müssen das Add-on für jede Version Ihrer Software entsprechend installieren.",
					it: "L'add-on serve da collegamento che consente di portare i modelli 3D nelle Cura e di esportarli automaticamente in Visualizzatore modello SpatialLabs. È necessario installare l'add-on per ciascuna versione del sofware.",
					es: "El complemento haces la función de acceso directo para que pueda tomar sus modelos 3D en Cura y exportarlos automáticamente al Visor de modelos de SpatialLabs. Debe instalar el complemento para cada versión de su software como corresponde.",
					"pt-PT": "O suplemento serve de atalho que lhe permite pegar nos seus modelos 3D de Cura e exportá-los automaticamente para o Visualizador de Modelos SpatialLabs. Tem de instalar o suplemento para cada versão do seu software, respetivamente.",
					nl: "De invoegtoepassing dient als een snelkoppeling waarmee u 3D-modellen in Cura kunt pakken en deze automatisch kunt exporteren naar SpatialLabs-modellenviewer. Installeer de invoegtoepassing voor elke versie van de softtware.",
					el: "Το πρόσθετο εξυπηρετεί ως συντόμευση που σας επιτρέπει να πάρετε τα μοντέλα σας 3D στο Cura και να τα εξάγετε αυτόματα στο Πρόγραμμα προβολής μοντέλου SpatialLabs. Απαιτείται η εγκατάσταση του πρόσθετου για κάθε έκδοση του λογισμικού σας αντίστοιχα.",
					sv: "Tillägget fungerar som en genväg som låter dig ta dina 3D-modeller i Cura och automatiskt exportera dem till SpatialLabs modellvisare. Du måste installera tillägget för varje version av din programvara.",
					nb: "Tilleggsprogrammet er som en snarvei som kan brukes for å ta dine 3D-modeller i Cura og utføre en automatisk eksportering til SpatialLabs Modellviser. Tilleggsprogrammet må installeres for hver versjon av programvaren.",
					fi: "Lisäosa toimii oikopolkuna, jonka avulla voit ottaa Cura -sovelluksessa olevat 3D-mallisi ja viedä ne automaattisesti SpatialLabs Mallin katseluohjelmaan. Sinun on asennettava lisäosa jokaiselle ohjelmistoversiollesi.",
					pl: "Dodatek służy jako skrót, który umożliwia pobieranie modeli 3D w Cura i automatyczne eksportowanie ich do SpatialLabs Przeglądarka modeli. Dodatek należy zainstalować odpowiednio dla każdej wersji oprogramowania.",
					ru: "Этот дополнительный модуль действует как ярлык и позволяет вам импортировать 3D-модели в Cura и автоматически экспортировать их в Средство просмотра моделей SpatialLabs. Вам нужно установить этот дополнительный модуль для каждой соответствующей версии вашего ПО.",
					cs: "Tento doplněk slouží jako zástupce, který vám umožní vzít vaše 3D modely v Cura a automaticky je exportovat do Prohlížeč modelu SpatialLabs. Doplněk je třeba nainstalovat pro každou verzi softwaru zvlášť.",
					hu: "A kiegészítő gyorsbillentyűként funkcionál, amely lehetővé teszi 3D modelleket készítését a Cura, és azok automatikus exportálását a SpatialLabs modell megtekintő programba. A szoftver adott verzióihoz telepítenie kell ezt a kiegészítőt.",
					tr: "Eklenti, 3B modellerinizi Cura içine almanıza ve bunları otomatik olarak SpatialLabs Model Görüntüleyici'ye aktarmanıza olanak tanıyan bir kısayol işlevi görür. Eklentiyi yazılımınızın her sürümü için sırasıyla yüklemeniz gerekir.",
					da: "Tilføjelsesprogrammet er en genvej, der giver mulighed for at tage dine 3D-modeller i Cura og automatisk eksportere dem til SpatialLabs modelfremviser. Du skal installere tilføjelsesprogrammet for hver version af din software.",
					bg: "Добавката служи за пряк път, който Ви дава възможност да вземете своите 3D модели от Cura и автоматично да ги експортирате до Визуализатор на модели SpatialLabs. Трябва да инсталирате добавката съответно за всяка версия на Вашия софтуер.",
					hr: "Dodatak služi kao prečac koji omogućava uzimanje 3D modela iz Cura i njihov automatski izvoz u SpatialLabs preglednik modela. Dodatak je potrebno instalirati za svaku pojedinu inačicu softvera.",
					ro: "Suplimentul are rol de comandă rapidă ce vă permite să luaţi modele 3D din Cura şi să le exportaţi automat în Vizualizator model SpatialLabs. Trebuie să instalaţi suplimentul pentru fiecare versiune de software.",
					sl: "Dodatek služi kot bližnjica, ki omogoča, da vzamete modele 3D iz Cura in jih samodejno izvozite v Prikazovalnik modelov SpatialLabs. Dodatek morate namestiti za vsako različico programske opreme.",
					sk: "Doplnok slúži ako skratka, ktorá vám umožňuje prevziať vaše 3D modely v Cura a automaticky ich exportovať do Prehliadača modelov SpatialLabs. Doplnok je potrebné nainštalovať pre každú verziu vášho softvéru.",
					ko: "애드온은 Cura에서 3D 모델을 가져와 자동으로 SpatialLabs 모델 뷰어로 내보낼 수 있는 바로 가기로 작동합니다. 소프트웨어의 각 버전에 대해 애드온을 각각 설치해야 합니다.",
					"pt-BR": "O complemento funciona como um atalho que permite que você leve seus modelos 3D no Cura e os exporte automaticamente para o Visualizador de Modelo SpatialLabs. É necessário instalar o complemento para cada versão de seu software respectivamente."
				},
				downloadUrl: "SpatialLabs MV addons/v1.7.2/cura_setup_1.7.2.exe",
				infoUrl: "https://go.acer.com/user-guide-spatiallabs",
				installArgument: "/VERYSILENT /SUPPRESSMSGBOXES",
				uninstallString: "C:\\Program Files\\Acer\\SpatialLabs\\Add-ons\\Ultimaker Cura\\unins000.exe /VERYSILENT /SUPPRESSMSGBOXES"
			}, {
				name: "Blender",
				displayName: {
					en: "Blender Add-on",
					fr: "Module complémentaire Blender",
					ja: "Blender アドオン",
					"zh-TW": "Blender 附加元件",
					"zh-CN": "Blender 加载项",
					de: "Blender Add-on",
					it: "Add-on Blender",
					es: "Complemento Blender",
					"pt-PT": "Suplemento Blender",
					nl: "Blender-invoegtoepassing",
					el: "Πρόσθετο Blender",
					sv: "Tillägget Blender",
					nb: "Tilleggsprogrammet for Blender",
					fi: "Blender-lisäosa",
					pl: "Dodatek Blender",
					ru: "Дополнение Blender",
					cs: "Doplněk Blender",
					hu: "Blender kiegészítőhöz",
					tr: "Blender Eklentisi",
					da: "Blender tilføjelsesprogrammer",
					bg: "Добавка Blender",
					hr: "Dodatak Blender",
					ro: "Supliment Blender",
					sl: "Dodatek Blender",
					sk: "Doplnok Blender",
					ko: "Blender 애드온",
					"pt-BR": "Complemento do Blender"
				},
				type: "Add-on",
				version: "1.7.1",
				description: {
					en: "The add-on serves as a shortcut that allows you to take your 3D models in Blender and automatically export them to the SpatialLabs Model Viewer. You need to install the add-on for each version of your software respectively.",
					fr: "Ce module complémentaire sert de raccourci pour prendre vos modèles 3D dans Blender et les exporter automatiquement vers l'Afficheur de modèles SpatialLabs. Vous devez installer le module complémentaire pour chaque version de votre logiciel respectivement.",
					"zh-TW": "附加元件可做為讓您在 Blender 中取得 3D 模型的捷徑，並將其自動匯出到 SpatialLabs 模型檢視器。您需要分別為每個軟體版本安裝附加元件。",
					"zh-CN": "该加载项作为一个快捷方式，可让您在 Blender 中获取 3D 模型，并自动将其导出到 SpatialLabs 超感空间模型查看器。您需为每个版本的软件分别安装加载项。",
					de: "Das Add-on dient als Verknüpfung, mit der Sie Ihre 3D Modelle in Blender übernehmen und automatisch in den SpatialLabs Modellanzeige exportieren können. Sie müssen das Add-on für jede Version Ihrer Software entsprechend installieren.",
					it: "L'add-on serve da collegamento che consente di portare i modelli 3D nelle Blender e di esportarli automaticamente in Visualizzatore modello SpatialLabs. È necessario installare l'add-on per ciascuna versione del sofware.",
					es: "El complemento haces la función de acceso directo para que pueda tomar sus modelos 3D en Blender y exportarlos automáticamente al Visor de modelos de SpatialLabs. Debe instalar el complemento para cada versión de su software como corresponde.",
					"pt-PT": "O suplemento serve de atalho que lhe permite pegar nos seus modelos 3D de Blender e exportá-los automaticamente para o Visualizador de Modelos SpatialLabs. Tem de instalar o suplemento para cada versão do seu software, respetivamente.",
					nl: "De invoegtoepassing dient als een snelkoppeling waarmee u 3D-modellen in Blender kunt pakken en deze automatisch kunt exporteren naar SpatialLabs-modellenviewer. Installeer de invoegtoepassing voor elke versie van de softtware.",
					el: "Το πρόσθετο εξυπηρετεί ως συντόμευση που σας επιτρέπει να πάρετε τα μοντέλα σας 3D στο Blender και να τα εξάγετε αυτόματα στο Πρόγραμμα προβολής μοντέλου SpatialLabs. Απαιτείται η εγκατάσταση του πρόσθετου για κάθε έκδοση του λογισμικού σας αντίστοιχα.",
					sv: "Tillägget fungerar som en genväg som låter dig ta dina 3D-modeller i Blender och automatiskt exportera dem till SpatialLabs modellvisare. Du måste installera tillägget för varje version av din programvara.",
					nb: "Tilleggsprogrammet er som en snarvei som kan brukes for å ta dine 3D-modeller i Blender og utføre en automatisk eksportering til SpatialLabs Modellviser. Tilleggsprogrammet må installeres for hver versjon av programvaren.",
					fi: "Lisäosa toimii oikopolkuna, jonka avulla voit ottaa Blender -sovelluksessa olevat 3D-mallisi ja viedä ne automaattisesti SpatialLabs Mallin katseluohjelmaan. Sinun on asennettava lisäosa jokaiselle ohjelmistoversiollesi.",
					pl: "Dodatek służy jako skrót, który umożliwia pobieranie modeli 3D w Blender i automatyczne eksportowanie ich do SpatialLabs Przeglądarka modeli. Dodatek należy zainstalować odpowiednio dla każdej wersji oprogramowania.",
					ru: "Этот дополнительный модуль действует как ярлык и позволяет вам импортировать 3D-модели в Blender и автоматически экспортировать их в Средство просмотра моделей SpatialLabs. Вам нужно установить этот дополнительный модуль для каждой соответствующей версии вашего ПО.",
					cs: "Tento doplněk slouží jako zástupce, který vám umožní vzít vaše 3D modely v Blender a automaticky je exportovat do Prohlížeč modelu SpatialLabs. Doplněk je třeba nainstalovat pro každou verzi softwaru zvlášť.",
					hu: "A kiegészítő gyorsbillentyűként funkcionál, amely lehetővé teszi 3D modelleket készítését a Blender, és azok automatikus exportálását a SpatialLabs modell megtekintő programba. A szoftver adott verzióihoz telepítenie kell ezt a kiegészítőt.",
					tr: "Eklenti, 3B modellerinizi Blender içine almanıza ve bunları otomatik olarak SpatialLabs Model Görüntüleyici'ye aktarmanıza olanak tanıyan bir kısayol işlevi görür. Eklentiyi yazılımınızın her sürümü için sırasıyla yüklemeniz gerekir.",
					da: "Tilføjelsesprogrammet er en genvej, der giver mulighed for at tage dine 3D-modeller i Blender og automatisk eksportere dem til SpatialLabs modelfremviser. Du skal installere tilføjelsesprogrammet for hver version af din software.",
					bg: "Добавката служи за пряк път, който Ви дава възможност да вземете своите 3D модели от Blender и автоматично да ги експортирате до Визуализатор на модели SpatialLabs. Трябва да инсталирате добавката съответно за всяка версия на Вашия софтуер.",
					hr: "Dodatak služi kao prečac koji omogućava uzimanje 3D modela iz Blender i njihov automatski izvoz u SpatialLabs preglednik modela. Dodatak je potrebno instalirati za svaku pojedinu inačicu softvera.",
					ro: "Suplimentul are rol de comandă rapidă ce vă permite să luaţi modele 3D din Blender şi să le exportaţi automat în Vizualizator model SpatialLabs. Trebuie să instalaţi suplimentul pentru fiecare versiune de software.",
					sl: "Dodatek služi kot bližnjica, ki omogoča, da vzamete modele 3D iz Blender in jih samodejno izvozite v Prikazovalnik modelov SpatialLabs. Dodatek morate namestiti za vsako različico programske opreme.",
					sk: "Doplnok slúži ako skratka, ktorá vám umožňuje prevziať vaše 3D modely v Blender a automaticky ich exportovať do Prehliadača modelov SpatialLabs. Doplnok je potrebné nainštalovať pre každú verziu vášho softvéru.",
					ko: "애드온은 Blender에서 3D 모델을 가져와 자동으로 SpatialLabs 모델 뷰어로 내보낼 수 있는 바로 가기로 작동합니다. 소프트웨어의 각 버전에 대해 애드온을 각각 설치해야 합니다.",
					"pt-BR": "O complemento funciona como um atalho que permite que você leve seus modelos 3D no Blender e os exporte automaticamente para o Visualizador de Modelo SpatialLabs. É necessário instalar o complemento para cada versão de seu software respectivamente."
				},
				downloadUrl: "SpatialLabs MV addons/v1.7.1/blender_setup_1.7.1.exe",
				infoUrl: "https://go.acer.com/user-guide-spatiallabs",
				installArgument: "/VERYSILENT /SUPPRESSMSGBOXES",
				uninstallString: "C:\\Program Files\\Acer\\SpatialLabs\\Add-ons\\Blender\\unins000.exe /VERYSILENT /SUPPRESSMSGBOXES"
			}, {
				name: "Rhino",
				displayName: {
					en: "Rhino Add-on",
					fr: "Module complémentaire Rhino",
					ja: "Rhino アドオン",
					"zh-TW": "Rhino 附加元件",
					"zh-CN": "Rhino 加载项",
					de: "Rhino Add-on",
					it: "Add-on Rhino",
					es: "Complemento Rhino",
					"pt-PT": "Suplemento Rhino",
					nl: "Rhino-invoegtoepassing",
					el: "Πρόσθετο Rhino",
					sv: "Tillägget Rhino",
					nb: "Tilleggsprogrammet for Rhino",
					fi: "Rhino-lisäosa",
					pl: "Dodatek Rhino",
					ru: "Дополнение Rhino",
					cs: "Doplněk Rhino",
					hu: "Rhino kiegészítőhöz",
					tr: "Rhino Eklentisi",
					da: "Rhino tilføjelsesprogrammer",
					bg: "Добавка Rhino",
					hr: "Dodatak Rhino",
					ro: "Supliment Rhino",
					sl: "Dodatek Rhino",
					sk: "Doplnok Rhino",
					ko: "Rhino 애드온",
					"pt-BR": "Complemento do Rhino"
				},
				type: "Add-on",
				version: "1.7.2",
				description: {
					en: "The add-on serves as a shortcut that allows you to take your 3D models in Rhino and automatically export them to the SpatialLabs Model Viewer. You need to install the add-on for each version of your software respectively.",
					fr: "Ce module complémentaire sert de raccourci pour prendre vos modèles 3D dans Rhino et les exporter automatiquement vers l'Afficheur de modèles SpatialLabs. Vous devez installer le module complémentaire pour chaque version de votre logiciel respectivement.",
					"zh-TW": "附加元件可做為讓您在 Rhino 中取得 3D 模型的捷徑，並將其自動匯出到 SpatialLabs 模型檢視器。您需要分別為每個軟體版本安裝附加元件。",
					"zh-CN": "该加载项作为一个快捷方式，可让您在 Rhino 中获取 3D 模型，并自动将其导出到 SpatialLabs 超感空间模型查看器。您需为每个版本的软件分别安装加载项。",
					de: "Das Add-on dient als Verknüpfung, mit der Sie Ihre 3D Modelle in Rhino übernehmen und automatisch in den SpatialLabs Modellanzeige exportieren können. Sie müssen das Add-on für jede Version Ihrer Software entsprechend installieren.",
					it: "L'add-on serve da collegamento che consente di portare i modelli 3D nelle Rhino e di esportarli automaticamente in Visualizzatore modello SpatialLabs. È necessario installare l'add-on per ciascuna versione del sofware.",
					es: "El complemento haces la función de acceso directo para que pueda tomar sus modelos 3D en Rhino y exportarlos automáticamente al Visor de modelos de SpatialLabs. Debe instalar el complemento para cada versión de su software como corresponde.",
					"pt-PT": "O suplemento serve de atalho que lhe permite pegar nos seus modelos 3D de Rhino e exportá-los automaticamente para o Visualizador de Modelos SpatialLabs. Tem de instalar o suplemento para cada versão do seu software, respetivamente.",
					nl: "De invoegtoepassing dient als een snelkoppeling waarmee u 3D-modellen in Rhino kunt pakken en deze automatisch kunt exporteren naar SpatialLabs-modellenviewer. Installeer de invoegtoepassing voor elke versie van de softtware.",
					el: "Το πρόσθετο εξυπηρετεί ως συντόμευση που σας επιτρέπει να πάρετε τα μοντέλα σας 3D στο Rhino και να τα εξάγετε αυτόματα στο Πρόγραμμα προβολής μοντέλου SpatialLabs. Απαιτείται η εγκατάσταση του πρόσθετου για κάθε έκδοση του λογισμικού σας αντίστοιχα.",
					sv: "Tillägget fungerar som en genväg som låter dig ta dina 3D-modeller i Rhino och automatiskt exportera dem till SpatialLabs modellvisare. Du måste installera tillägget för varje version av din programvara.",
					nb: "Tilleggsprogrammet er som en snarvei som kan brukes for å ta dine 3D-modeller i Rhino og utføre en automatisk eksportering til SpatialLabs Modellviser. Tilleggsprogrammet må installeres for hver versjon av programvaren.",
					fi: "Lisäosa toimii oikopolkuna, jonka avulla voit ottaa Rhino -sovelluksessa olevat 3D-mallisi ja viedä ne automaattisesti SpatialLabs Mallin katseluohjelmaan. Sinun on asennettava lisäosa jokaiselle ohjelmistoversiollesi.",
					pl: "Dodatek służy jako skrót, który umożliwia pobieranie modeli 3D w Rhino i automatyczne eksportowanie ich do SpatialLabs Przeglądarka modeli. Dodatek należy zainstalować odpowiednio dla każdej wersji oprogramowania.",
					ru: "Этот дополнительный модуль действует как ярлык и позволяет вам импортировать 3D-модели в Rhino и автоматически экспортировать их в Средство просмотра моделей SpatialLabs. Вам нужно установить этот дополнительный модуль для каждой соответствующей версии вашего ПО.",
					cs: "Tento doplněk slouží jako zástupce, který vám umožní vzít vaše 3D modely v Rhino a automaticky je exportovat do Prohlížeč modelu SpatialLabs. Doplněk je třeba nainstalovat pro každou verzi softwaru zvlášť.",
					hu: "A kiegészítő gyorsbillentyűként funkcionál, amely lehetővé teszi 3D modelleket készítését a Rhino, és azok automatikus exportálását a SpatialLabs modell megtekintő programba. A szoftver adott verzióihoz telepítenie kell ezt a kiegészítőt.",
					tr: "Eklenti, 3B modellerinizi Rhino içine almanıza ve bunları otomatik olarak SpatialLabs Model Görüntüleyici'ye aktarmanıza olanak tanıyan bir kısayol işlevi görür. Eklentiyi yazılımınızın her sürümü için sırasıyla yüklemeniz gerekir.",
					da: "Tilføjelsesprogrammet er en genvej, der giver mulighed for at tage dine 3D-modeller i Rhino og automatisk eksportere dem til SpatialLabs modelfremviser. Du skal installere tilføjelsesprogrammet for hver version af din software.",
					bg: "Добавката служи за пряк път, който Ви дава възможност да вземете своите 3D модели от Rhino и автоматично да ги експортирате до Визуализатор на модели SpatialLabs. Трябва да инсталирате добавката съответно за всяка версия на Вашия софтуер.",
					hr: "Dodatak služi kao prečac koji omogućava uzimanje 3D modela iz Rhino i njihov automatski izvoz u SpatialLabs preglednik modela. Dodatak je potrebno instalirati za svaku pojedinu inačicu softvera.",
					ro: "Suplimentul are rol de comandă rapidă ce vă permite să luaţi modele 3D din Rhino şi să le exportaţi automat în Vizualizator model SpatialLabs. Trebuie să instalaţi suplimentul pentru fiecare versiune de software.",
					sl: "Dodatek služi kot bližnjica, ki omogoča, da vzamete modele 3D iz Rhino in jih samodejno izvozite v Prikazovalnik modelov SpatialLabs. Dodatek morate namestiti za vsako različico programske opreme.",
					sk: "Doplnok slúži ako skratka, ktorá vám umožňuje prevziať vaše 3D modely v Rhino a automaticky ich exportovať do Prehliadača modelov SpatialLabs. Doplnok je potrebné nainštalovať pre každú verziu vášho softvéru.",
					ko: "애드온은 Rhino에서 3D 모델을 가져와 자동으로 SpatialLabs 모델 뷰어로 내보낼 수 있는 바로 가기로 작동합니다. 소프트웨어의 각 버전에 대해 애드온을 각각 설치해야 합니다.",
					"pt-BR": "O complemento funciona como um atalho que permite que você leve seus modelos 3D no Rhino e os exporte automaticamente para o Visualizador de Modelo SpatialLabs. É necessário instalar o complemento para cada versão de seu software respectivamente."
				},
				downloadUrl: "SpatialLabs MV addons/v1.7.2/rhino_setup_1.7.2.exe",
				infoUrl: "https://go.acer.com/user-guide-spatiallabs",
				installArgument: "/VERYSILENT /SUPPRESSMSGBOXES",
				uninstallString: "C:\\Program Files\\Acer\\SpatialLabs\\Add-ons\\Rhino\\unins000.exe /VERYSILENT /SUPPRESSMSGBOXES"
			}, {
				name: "3dsMax",
				displayName: {
					en: "3ds Max Add-on",
					fr: "Module complémentaire 3ds Max",
					ja: "3ds Max アドオン",
					"zh-TW": "3ds Max 附加元件",
					"zh-CN": "3ds Max 加载项",
					de: "3ds Max Add-on",
					it: "Add-on 3ds Max",
					es: "Complemento 3ds Max",
					"pt-PT": "Suplemento 3ds Max",
					nl: "3ds Max-invoegtoepassing",
					el: "Πρόσθετο 3ds Max",
					sv: "Tillägget 3ds Max",
					nb: "Tilleggsprogrammet for 3ds Max",
					fi: "3ds Max -lisäosa",
					pl: "Dodatek 3ds Max",
					ru: "Дополнение 3ds Max",
					cs: "Doplněk 3ds Max",
					hu: "3ds Max kiegészítőhöz",
					tr: "3ds Max Eklentisi",
					da: "3ds Max tilføjelsesprogrammer",
					bg: "Добавка 3ds Max",
					hr: "Dodatak 3ds Max",
					ro: "Supliment 3ds Max",
					sl: "Dodatek 3ds Max",
					sk: "Doplnok 3ds Max",
					ko: "3ds Max 애드온",
					"pt-BR": "Complemento do 3ds Max"
				},
				type: "Add-on",
				version: "1.7.2",
				description: {
					en: "The add-on serves as a shortcut that allows you to take your 3D models in 3ds Max and automatically export them to the SpatialLabs Model Viewer. You need to install the add-on for each version of your software respectively.",
					fr: "Ce module complémentaire sert de raccourci pour prendre vos modèles 3D dans 3ds Max et les exporter automatiquement vers l'Afficheur de modèles SpatialLabs. Vous devez installer le module complémentaire pour chaque version de votre logiciel respectivement.",
					"zh-TW": "附加元件可做為讓您在 3ds Max 中取得 3D 模型的捷徑，並將其自動匯出到 SpatialLabs 模型檢視器。您需要分別為每個軟體版本安裝附加元件。",
					"zh-CN": "该加载项作为一个快捷方式，可让您在 3ds Max 中获取 3D 模型，并自动将其导出到 SpatialLabs 超感空间模型查看器。您需为每个版本的软件分别安装加载项。",
					de: "Das Add-on dient als Verknüpfung, mit der Sie Ihre 3D Modelle in 3ds Max übernehmen und automatisch in den SpatialLabs Modellanzeige exportieren können. Sie müssen das Add-on für jede Version Ihrer Software entsprechend installieren.",
					it: "L'add-on serve da collegamento che consente di portare i modelli 3D nelle 3ds Max e di esportarli automaticamente in Visualizzatore modello SpatialLabs. È necessario installare l'add-on per ciascuna versione del sofware.",
					es: "El complemento haces la función de acceso directo para que pueda tomar sus modelos 3D en 3ds Max y exportarlos automáticamente al Visor de modelos de SpatialLabs. Debe instalar el complemento para cada versión de su software como corresponde.",
					"pt-PT": "O suplemento serve de atalho que lhe permite pegar nos seus modelos 3D de 3ds Max e exportá-los automaticamente para o Visualizador de Modelos SpatialLabs. Tem de instalar o suplemento para cada versão do seu software, respetivamente.",
					nl: "De invoegtoepassing dient als een snelkoppeling waarmee u 3D-modellen in 3ds Max kunt pakken en deze automatisch kunt exporteren naar SpatialLabs-modellenviewer. Installeer de invoegtoepassing voor elke versie van de softtware.",
					el: "Το πρόσθετο εξυπηρετεί ως συντόμευση που σας επιτρέπει να πάρετε τα μοντέλα σας 3D στο 3ds Max και να τα εξάγετε αυτόματα στο Πρόγραμμα προβολής μοντέλου SpatialLabs. Απαιτείται η εγκατάσταση του πρόσθετου για κάθε έκδοση του λογισμικού σας αντίστοιχα.",
					sv: "Tillägget fungerar som en genväg som låter dig ta dina 3D-modeller i 3ds Max och automatiskt exportera dem till SpatialLabs modellvisare. Du måste installera tillägget för varje version av din programvara.",
					nb: "Tilleggsprogrammet er som en snarvei som kan brukes for å ta dine 3D-modeller i 3ds Max og utføre en automatisk eksportering til SpatialLabs Modellviser. Tilleggsprogrammet må installeres for hver versjon av programvaren.",
					fi: "Lisäosa toimii oikopolkuna, jonka avulla voit ottaa 3ds Max -sovelluksessa olevat 3D-mallisi ja viedä ne automaattisesti SpatialLabs Mallin katseluohjelmaan. Sinun on asennettava lisäosa jokaiselle ohjelmistoversiollesi.",
					pl: "Dodatek służy jako skrót, który umożliwia pobieranie modeli 3D w 3ds Max i automatyczne eksportowanie ich do SpatialLabs Przeglądarka modeli. Dodatek należy zainstalować odpowiednio dla każdej wersji oprogramowania.",
					ru: "Этот дополнительный модуль действует как ярлык и позволяет вам импортировать 3D-модели в 3ds Max и автоматически экспортировать их в Средство просмотра моделей SpatialLabs. Вам нужно установить этот дополнительный модуль для каждой соответствующей версии вашего ПО.",
					cs: "Tento doplněk slouží jako zástupce, který vám umožní vzít vaše 3D modely v 3ds Max a automaticky je exportovat do Prohlížeč modelu SpatialLabs. Doplněk je třeba nainstalovat pro každou verzi softwaru zvlášť.",
					hu: "A kiegészítő gyorsbillentyűként funkcionál, amely lehetővé teszi 3D modelleket készítését a 3ds Max, és azok automatikus exportálását a SpatialLabs modell megtekintő programba. A szoftver adott verzióihoz telepítenie kell ezt a kiegészítőt.",
					tr: "Eklenti, 3B modellerinizi 3ds Max içine almanıza ve bunları otomatik olarak SpatialLabs Model Görüntüleyici'ye aktarmanıza olanak tanıyan bir kısayol işlevi görür. Eklentiyi yazılımınızın her sürümü için sırasıyla yüklemeniz gerekir.",
					da: "Tilføjelsesprogrammet er en genvej, der giver mulighed for at tage dine 3D-modeller i 3ds Max og automatisk eksportere dem til SpatialLabs modelfremviser. Du skal installere tilføjelsesprogrammet for hver version af din software.",
					bg: "Добавката служи за пряк път, който Ви дава възможност да вземете своите 3D модели от 3ds Max и автоматично да ги експортирате до Визуализатор на модели SpatialLabs. Трябва да инсталирате добавката съответно за всяка версия на Вашия софтуер.",
					hr: "Dodatak služi kao prečac koji omogućava uzimanje 3D modela iz 3ds Max i njihov automatski izvoz u SpatialLabs preglednik modela. Dodatak je potrebno instalirati za svaku pojedinu inačicu softvera.",
					ro: "Suplimentul are rol de comandă rapidă ce vă permite să luaţi modele 3D din 3ds Max şi să le exportaţi automat în Vizualizator model SpatialLabs. Trebuie să instalaţi suplimentul pentru fiecare versiune de software.",
					sl: "Dodatek služi kot bližnjica, ki omogoča, da vzamete modele 3D iz 3ds Max in jih samodejno izvozite v Prikazovalnik modelov SpatialLabs. Dodatek morate namestiti za vsako različico programske opreme.",
					sk: "Doplnok slúži ako skratka, ktorá vám umožňuje prevziať vaše 3D modely v 3ds Max a automaticky ich exportovať do Prehliadača modelov SpatialLabs. Doplnok je potrebné nainštalovať pre každú verziu vášho softvéru.",
					ko: "애드온은 3ds Max에서 3D 모델을 가져와 자동으로 SpatialLabs 모델 뷰어로 내보낼 수 있는 바로 가기로 작동합니다. 소프트웨어의 각 버전에 대해 애드온을 각각 설치해야 합니다.",
					"pt-BR": "O complemento funciona como um atalho que permite que você leve seus modelos 3D no 3ds Max e os exporte automaticamente para o Visualizador de Modelo SpatialLabs. É necessário instalar o complemento para cada versão de seu software respectivamente."
				},
				downloadUrl: "SpatialLabs MV addons/v1.7.2/3dsMax_setup_1.7.2.exe",
				infoUrl: "https://go.acer.com/user-guide-spatiallabs",
				installArgument: "/VERYSILENT /SUPPRESSMSGBOXES",
				uninstallString: "C:\\Program Files\\Acer\\SpatialLabs\\Add-ons\\3dsMax\\unins000.exe /VERYSILENT /SUPPRESSMSGBOXES"
			}, {
				name: "Inventor",
				displayName: {
					en: "Inventor Add-on",
					fr: "Module complémentaire Inventor",
					ja: "Inventor アドオン",
					"zh-TW": "Inventor 附加元件",
					"zh-CN": "Inventor 加载项",
					de: "Inventor Add-on",
					it: "Add-on Inventor",
					es: "Complemento Inventor",
					"pt-PT": "Suplemento Inventor",
					nl: "Inventor-invoegtoepassing",
					el: "Πρόσθετο Inventor",
					sv: "Tillägget Inventor",
					nb: "Tilleggsprogrammet for Inventor",
					fi: "Inventor-lisäosa",
					pl: "Dodatki Inventor",
					ru: "Дополнение Inventor",
					cs: "Doplněk Inventor",
					hu: "Inventor kiegészítőhöz",
					tr: "Inventor Eklentisi",
					da: "Inventor tilføjelsesprogrammer",
					bg: "Добавка Inventor",
					hr: "Dodatak Inventor",
					ro: "Supliment Inventor",
					sl: "Dodatek Inventor",
					sk: "Doplnok Inventor",
					ko: "Inventor 애드온",
					"pt-BR": "Complemento do Inventor"
				},
				type: "Add-on",
				version: "1.7.2",
				description: {
					en: "The add-on serves as a shortcut that allows you to take your 3D models in Inventor and automatically export them to the SpatialLabs Model Viewer. You need to install the add-on for each version of your software respectively.",
					fr: "Ce module complémentaire sert de raccourci pour prendre vos modèles 3D dans Inventor et les exporter automatiquement vers l'Afficheur de modèles SpatialLabs. Vous devez installer le module complémentaire pour chaque version de votre logiciel respectivement.",
					"zh-TW": "附加元件可做為讓您在 Inventor 中取得 3D 模型的捷徑，並將其自動匯出到 SpatialLabs 模型檢視器。您需要分別為每個軟體版本安裝附加元件。",
					"zh-CN": "该加载项作为一个快捷方式，可让您在 Inventor 中获取 3D 模型，并自动将其导出到 SpatialLabs 超感空间模型查看器。您需为每个版本的软件分别安装加载项。",
					de: "Das Add-on dient als Verknüpfung, mit der Sie Ihre 3D Modelle in Inventor übernehmen und automatisch in den SpatialLabs Modellanzeige exportieren können. Sie müssen das Add-on für jede Version Ihrer Software entsprechend installieren.",
					it: "L'add-on serve da collegamento che consente di portare i modelli 3D nelle Inventor e di esportarli automaticamente in Visualizzatore modello SpatialLabs. È necessario installare l'add-on per ciascuna versione del sofware.",
					es: "El complemento haces la función de acceso directo para que pueda tomar sus modelos 3D en Inventor y exportarlos automáticamente al Visor de modelos de SpatialLabs. Debe instalar el complemento para cada versión de su software como corresponde.",
					"pt-PT": "O suplemento serve de atalho que lhe permite pegar nos seus modelos 3D de Inventor e exportá-los automaticamente para o Visualizador de Modelos SpatialLabs. Tem de instalar o suplemento para cada versão do seu software, respetivamente.",
					nl: "De invoegtoepassing dient als een snelkoppeling waarmee u 3D-modellen in Inventor kunt pakken en deze automatisch kunt exporteren naar SpatialLabs-modellenviewer. Installeer de invoegtoepassing voor elke versie van de softtware.",
					el: "Το πρόσθετο εξυπηρετεί ως συντόμευση που σας επιτρέπει να πάρετε τα μοντέλα σας 3D στο Inventor και να τα εξάγετε αυτόματα στο Πρόγραμμα προβολής μοντέλου SpatialLabs. Απαιτείται η εγκατάσταση του πρόσθετου για κάθε έκδοση του λογισμικού σας αντίστοιχα.",
					sv: "Tillägget fungerar som en genväg som låter dig ta dina 3D-modeller i Inventor och automatiskt exportera dem till SpatialLabs modellvisare. Du måste installera tillägget för varje version av din programvara.",
					nb: "Tilleggsprogrammet er som en snarvei som kan brukes for å ta dine 3D-modeller i Inventor og utføre en automatisk eksportering til SpatialLabs Modellviser. Tilleggsprogrammet må installeres for hver versjon av programvaren.",
					fi: "Lisäosa toimii oikopolkuna, jonka avulla voit ottaa Inventor -sovelluksessa olevat 3D-mallisi ja viedä ne automaattisesti SpatialLabs Mallin katseluohjelmaan. Sinun on asennettava lisäosa jokaiselle ohjelmistoversiollesi.",
					pl: "Dodatek służy jako skrót, który umożliwia pobieranie modeli 3D w Inventor i automatyczne eksportowanie ich do SpatialLabs Przeglądarka modeli. Dodatek należy zainstalować odpowiednio dla każdej wersji oprogramowania.",
					ru: "Этот дополнительный модуль действует как ярлык и позволяет вам импортировать 3D-модели в Inventor и автоматически экспортировать их в Средство просмотра моделей SpatialLabs. Вам нужно установить этот дополнительный модуль для каждой соответствующей версии вашего ПО.",
					cs: "Tento doplněk slouží jako zástupce, který vám umožní vzít vaše 3D modely v Inventor a automaticky je exportovat do Prohlížeč modelu SpatialLabs. Doplněk je třeba nainstalovat pro každou verzi softwaru zvlášť.",
					hu: "A kiegészítő gyorsbillentyűként funkcionál, amely lehetővé teszi 3D modelleket készítését a Inventor, és azok automatikus exportálását a SpatialLabs modell megtekintő programba. A szoftver adott verzióihoz telepítenie kell ezt a kiegészítőt.",
					tr: "Eklenti, 3B modellerinizi Inventor içine almanıza ve bunları otomatik olarak SpatialLabs Model Görüntüleyici'ye aktarmanıza olanak tanıyan bir kısayol işlevi görür. Eklentiyi yazılımınızın her sürümü için sırasıyla yüklemeniz gerekir.",
					da: "Tilføjelsesprogrammet er en genvej, der giver mulighed for at tage dine 3D-modeller i Inventor og automatisk eksportere dem til SpatialLabs modelfremviser. Du skal installere tilføjelsesprogrammet for hver version af din software.",
					bg: "Добавката служи за пряк път, който Ви дава възможност да вземете своите 3D модели от Inventor и автоматично да ги експортирате до Визуализатор на модели SpatialLabs. Трябва да инсталирате добавката съответно за всяка версия на Вашия софтуер.",
					hr: "Dodatak služi kao prečac koji omogućava uzimanje 3D modela iz Inventor i njihov automatski izvoz u SpatialLabs preglednik modela. Dodatak je potrebno instalirati za svaku pojedinu inačicu softvera.",
					ro: "Suplimentul are rol de comandă rapidă ce vă permite să luaţi modele 3D din Inventor şi să le exportaţi automat în Vizualizator model SpatialLabs. Trebuie să instalaţi suplimentul pentru fiecare versiune de software.",
					sl: "Dodatek služi kot bližnjica, ki omogoča, da vzamete modele 3D iz Inventor in jih samodejno izvozite v Prikazovalnik modelov SpatialLabs. Dodatek morate namestiti za vsako različico programske opreme.",
					sk: "Doplnok slúži ako skratka, ktorá vám umožňuje prevziať vaše 3D modely v Inventor a automaticky ich exportovať do Prehliadača modelov SpatialLabs. Doplnok je potrebné nainštalovať pre každú verziu vášho softvéru.",
					ko: "애드온은 Inventor에서 3D 모델을 가져와 자동으로 SpatialLabs 모델 뷰어로 내보낼 수 있는 바로 가기로 작동합니다. 소프트웨어의 각 버전에 대해 애드온을 각각 설치해야 합니다.",
					"pt-BR": "O complemento funciona como um atalho que permite que você leve seus modelos 3D no Inventor e os exporte automaticamente para o Visualizador de Modelo SpatialLabs. É necessário instalar o complemento para cada versão de seu software respectivamente."
				},
				downloadUrl: "SpatialLabs MV addons/v1.7.2/inventor_setup_1.7.2.exe",
				infoUrl: "https://go.acer.com/user-guide-spatiallabs",
				installArgument: "/VERYSILENT /SUPPRESSMSGBOXES",
				uninstallString: "C:\\Program Files\\Acer\\SpatialLabs\\Add-ons\\Inventor\\unins000.exe /VERYSILENT /SUPPRESSMSGBOXES"
			}, {
				name: "BlenderView",
				displayName: {
					en: "Blender Stereo",
					fr: "Blender Stereo",
					"zh-TW": "Blender Stereo",
					"zh-CN": "Blender Stereo",
					de: "Blender Stereo",
					it: "Blender Stereo",
					es: "Blender Stereo",
					"pt-PT": "Blender Stereo",
					nl: "Blender Stereo",
					el: "Blender Stereo",
					sv: "Blender Stereo",
					nb: "Blender Stereo",
					fi: "Blender Stereo",
					pl: "Blender Stereo",
					ru: "Blender Stereo",
					cs: "Blender Stereo",
					hu: "Blender Stereo",
					tr: "Blender Stereo",
					da: "Blender Stereo",
					bg: "Blender Stereo",
					hr: "Blender Stereo",
					ro: "Blender Stereo",
					sl: "Blender Stereo",
					sk: "Blender Stereo",
					ko: "Blender Stereo",
					"pt-BR": "Blender Stereo"
				},
				type: "Add-on",
				version: "1.7.4",
				description: {
					en: "The add-on serves as a shortcut that configures the Display Mode in Blender to view content in side-by-side full-screen Stereoscopic 3D Mode with SpatialLabs Go or combination key.",
					fr: "Ce module complémentaire sert de raccourci pour configurer le mode d'affichage dans Blender afin d'afficher le contenu en mode 3D stéréoscopique plein écran côte à côte avec SpatialLabs Go ou une combinaison de touches.",
					"zh-TW": "附加元件可做為在 Blender 中配置顯示模式的捷徑，透過 SpatialLabs Go 或組合鍵，即可以並排全螢幕 3D 立體視覺模式檢視內容。",
					"zh-CN": "该加载项作为一个快捷方式，可在 Blender 中配置显示模式，以通过 SpatialLabs Go 或组合键在并排全屏 3D 模式中查看内容。",
					de: "Das Add-on dient als Verknüpfung, die den Anzeigemodus in Blender so konfiguriert, dass Inhalte im stereoskopischen 3D Vollbildmodus mit SpatialLabs Go oder einer Tastenkombination nebeneinander angezeigt werden.",
					it: "L'add-on serve da collegamento per la configurazione della Modalità visualizzazione in Blender per visualizzare i contenuti affiancati in Modalità 3D stereoscopica a schermo interno con SpatialLabs Go o la combinazione di tasti.",
					es: "El complemento sirve como acceso directo que configura el Modo pantalla en Blender para ver contenido en modo 3D estereoscópico de pantalla completa de forma paraleta con SpatialLabs Go o una combinación de teclas.",
					"pt-PT": "O suplemento serve de atalho que configura o Modo de Ecră no Blender ender para visualizar conteúdos lado a lado no Modo 3D Estereoscópico em ecrã completo com SpatialLabs Go ou tecla de combinação.",
					nl: "De invoegtoepassing dient als een snelkoppeling die de Weergavemodus configureert in Blender om content naast elkaar op het volledige scherm in Stereoscopische 3D-modus weer te geven via SpatialLabs Go of met een toetscombinatie.",
					el: "Το πρόσθετο εξυπηρετεί ως συντόμευση για τη διαμόρφωση του Διάταξη οθόνης στο Blender για την προβολή περιεχομένου δίπλα-δίπλα σε πλήρη οθόνη στη Στερεοσκοπική λειτουργία 3D με το SpatialLabs Go ή ως πλήκτρο συνδυασμού.",
					sv: "Tillägget fungerar som en genväg som konfigurerar visningsläget i Blender för att visa innehåll i Stereoskopiskt 3D-läge sida vid sida med SpatialLabs Go eller kombinationstangent.",
					nb: "Tilleggsprogrammet er som en snarvei som konfigurerer Skjermmodus i Blender for å vise innhold i side-ved-side fullskjerms Stereoskopisk 3D-modus med SpatialLabs Go eller kombinasjonstast.",
					fi: "Lisäosa toimii oikopolkuna, joka määrittää Blenderin näyttötilan näyttämään sisällön rinnakkain koko näytön 3D-stereotilassa SpatialLabs Go -sovelluksella tai yhdistelmänäppäimellä.",
					pl: "Dodatek służy jako skrót, który konfiguruje tryb wyświetlania w Blender, aby wyświetlać zawartość obok siebie w pełnoekranowym trybie stereoskopowym 3D za pomocą klawisza SpatialLabs Go lub klawisza kombinacji.",
					ru: "Этот дополнительный модуль действует как ярлык и позволяет настроить режим отображения в Blender для просмотра материалов бок о бок во весь экран в режиме стереоскопического отображения 3D-материалов с помощью SpatialLabs Go или клавишной комбинации.",
					cs: "Doplněk slouží jako zástupce, který konfiguruje režim zobrazení v programu Blender pro zobrazení obsahu v celoobrazovkovém Stereoskopickém 3D režimu vedle sebe pomocí SpatialLabs Go nebo kombinované klávesy.",
					hu: "A kiegészítő gyorsbillentyűként funkcionál, amely konfigurálja a Kijelző módot a Blenderben, így a tartalmat egymás mellett, teljes képernyőn tekintheti meg Stereoscopic 3D módban a SpatialLabs Go vagy a billentyűkombináció használatával.",
					tr: "Eklenti, SpatialLabs Go veya kombinasyon tuşu ile içeriği yan yana tam ekran Stereoskopik 3B Modunda görüntülemek için Blender'daki Görüntüleme Modunu yapılandıran bir kısayol görevi görür.",
					da: "Tilføjelsesprogrammet tjener som en genvej, der konfigurerer skærmtilstanden i Blender, så det kan vise indhold i side-om-side fulskærm Stereoskopisk 3D-tilstand med SpatialLabs Go eller en tastaturkombination.",
					bg: 'Добавката служи като пряк път, който конфигурира режима на дисплея в Blender за преглед на съдържанието "страна до страна" на цял екран в Stereoscopic 3D режим със SpatialLabs Go или комбиниран клавиш.',
					hr: "Dodatak služi kao prečac koji način rada zaslona za prikazivanje konfigurira kao Blender za pregledavanje sadržaja usporedno na punom zaslonu načina rada Stereoskopskom 3D sa SpatialLabs Go ili kombiniranom tipkom.",
					ro: "Suplimentul are rol de comandă rapidă, care configurează modul de afişare în Blender, pentru a vizualiza conținut în modul 3D stereoscopic, alăturat şi pe ecranul complet, cu ajutorul SpatialLabs Go sau combinaţie de taste.",
					sl: "Dodatek služi kot bližnjica, ki konfigurira način zaslona v Blender za prikaz vsebine v celozaslonskem stereoskopskem načinu 3D eno ob drugi s programsko opremo SpatialLabs Go ali kombinirano tipko.",
					sk: "Doplnok slúži ako skratka, ktorá konfiguruje režim zobrazenia v Blenderi na zobrazenie obsahu v Stereoskopickom 3D režime na celú obrazovku vedľa seba pomocou SpatialLabs Go alebo kombinácie klávesov.",
					ko: "애드온은 SpatialLabs Go 또는 조합 키를 사용하여 사이드-바이-사이드 전체 화면 입체 3D 모드로 콘텐츠를 보기 위해 블렌더에서 디스플레이 모드를 구성하는 바로 가기로 작동합니다.",
					"pt-BR": "O complemento funciona como um atalho que configura o Modo de Exibição no Blender para visualizar o conteúdo em modo Estereoscópico 3D lado a lado em tela cheia com o SpatialLabs Go ou tecla de combinação."
				},
				downloadUrl: "SpatialLabs MV addons/v1.7.4/blender_view_setup_1.7.4.exe",
				infoUrl: "https://go.acer.com/user-guide-spatiallabs",
				icon: "C:\\Program Files\\Acer\\SpatialLabs\\ExperienceCenter\\resources\\src\\assets\\image\\apps\\go.ico",
				installArgument: "/VERYSILENT /SUPPRESSMSGBOXES",
				uninstallString: "C:\\Program Files\\Acer\\SpatialLabs\\Add-ons\\BlenderView\\unins000.exe /VERYSILENT /SUPPRESSMSGBOXES"
			}]
		}
		checkUpdatable() {
			return i(this, void 0, void 0, (function*() {
				let e;
				this._update = !0, yield this.fetchDownloadableWidgets().then(t => {
					e = t
				}).catch(e => {
					this._log.writeLog("fetchDownloadableWidgets: " + e)
				});
				try {
					if (e) {
						const t = JSON.parse(String(e));
						this._updateType = t.updateType, this._downloadable = t.widgets, this._downloadPlugins = t.plugins, this._admin.setOnlineReload(!0)
					} else this._downloadPlugins = this.getInitPlugins()
				} catch (e) {
					this._util.showMessageBox({
						title: this._i18n.__("Invalid_JSON"),
						message: this._i18n.__("Invalid_JSON_Info")
					})
				}
				this.restorePluginJson(), this.restoreAppJson();
				this._util.getMainMonitor();
				this.delayUpdate(!0)
			}))
		}
		launchTool(e) {
			const t = r.join(r.dirname(o.app.getPath("exe")), "win32/calibration");
			h.exec(`cd /D "${t}" && basic_calibration.exe`)
		}
		restoreAppJson() {
			for (let e = 0; e < this._downloadable.length; e++) {
				const t = this._downloadable[e];
				let n = this._widgets.find(e => e.name === t.name);
				if (n) this.compareForUpdate(t, n);
				else {
					const e = t.name,
						i = t.type,
						r = t.version,
						o = "downloadable",
						a = t.icon;
					let c = t.iconUrl;
					t.iconUrl && !t.iconUrl.startsWith("http") ? c = `${this._ota}/${t.iconUrl}` : a && u.existsSync(a) && (c = s.pathToFileURL(a).href);
					const l = this.getLocaleString(t.displayName);
					let d = 99;
					t.no && (d = t.no);
					n = new WidgetStatus(e, i, r, "", "", o, a, "", l, "", c, d).object, n.description = this.getLocaleString(t.description), n.downloadUrl = t.downloadUrl, n.infoUrl = t.infoUrl, n.installPath = t.installPath, n.installArgument = t.installArgument, n.dependencies = t.dependencies, n.reboot = t.reboot, n.registryRoot = t.registryRoot, n.updateType = t.updateType, this._widgets.push(n)
				}
			}
		}
		isForceUpdate() {
			return "Force" === this._updateType
		}
		getLocaleString(e) {
			const t = g.I18n.getInstance().getLocale();
			let n = "#";
			return n = e && e[t] ? e[t] : e && e.en ? e.en : e, n
		}
		restorePluginJson() {
			this._downloadPlugins.forEach(e => {
				let t = this._plugins.find(t => t.name === e.name);
				if (t) t.downloadUrl = e.downloadUrl, t.description = this.getLocaleString(e.description), t.infoUrl = e.infoUrl, t.installArgument = e.installArgument, t.type = "Add-on", t.displayName = this.getLocaleString(e.displayName), l.compare(e.version, t.version, ">") && ("downloadable" === t.status ? t.version = e.version : (t.status = "updatable", t.latestVersion = e.version, t.changeNotes = e.changeNotes));
				else {
					t = e, t.status = "downloadable";
					let n = e.iconUrl;
					n && !e.iconUrl.startsWith("http") ? n = `${this._ota}/${e.iconUrl}` : e.icon && u.existsSync(e.icon) && (n = s.pathToFileURL(e.icon).href), t.displayIcon = n, t.description = this.getLocaleString(t.description), t.displayName = this.getLocaleString(t.displayName), this._plugins.push(t)
				}
			})
		}
		compareForUpdate(e, t, n = !0, i) {
			let r = !1;
			return e && t && (e.description && (t.description = this.getLocaleString(e.description)), e.infoUrl && (t.infoUrl = e.infoUrl), e.dependencies && (t.dependencies = e.dependencies), e.displayName && (t.displayName = this.getLocaleString(e.displayName)), l.compare(e.version, t.version, ">") && (r = !0, i && (e = i), n && (t.status = "updatable", t.downloadUrl = e.downloadUrl, t.latestVersion = e.version, t.dependencies = e.dependencies, t.updateType = e.updateType, t.changeNotes = e.changeNotes, t.installPath = e.installPath, t.installArgument = e.installArgument, t.reboot = e.reboot, t.registryRoot = e.registryRoot, t.no = e.no))), r
		}
		showUpBrowserWindow(e) {
			e.isVisible() && (e.minimize(), e.restore());
			const t = e.getNativeWindowHandle();
			c.setForegroundWindowEx1(t), e.focus()
		}
		runWidget(e) {
			require(e.directUrl).run()
		}
		openBrowserWinForWidget(e, t) {
			let n = "",
				i = "",
				o = "";
			const s = t.manifest;
			if (e.hasOwnProperty("redirectUrl") && e.redirectUrl && (n = e.redirectUrl, s && s.hasOwnProperty("meta") && s.meta.hasOwnProperty("redirectUrlPrefixes"))) {
				const e = s.meta.redirectUrlPrefixes;
				Array.isArray(e) && e.forEach(e => {
					n.indexOf(e) >= 0 && (i = e)
				})
			}
			e.hasOwnProperty("queryParams") && (o = e.queryParams);
			const c = s.meta.name,
				l = s.meta.start_page;
			let d = s.window_config;
			i && s.hasOwnProperty("window_config_for_" + i) ? (d = s["window_config_for_" + i], console.log("Has special config: " + d)) : console.log("No special config: " + d);
			const h = n ? JSON.stringify({
					redirectUrl: n,
					queryParams: o
				}) : "",
				p = a.createNew(`${c}${n}`, "", "", !1, d).create();
			let f = r.join(s.folder, l);
			if (!u.existsSync(f)) {
				const e = s.meta.start_page_alternative;
				let t = r.join(s.folder, e);
				u.existsSync(t) && (f = t)
			}
			console.log("load widget filePath: " + f), p.object.loadFile(f, h ? {
				query: {
					redirectInfo: h
				}
			} : {}), p.object.isVisible() && this.showUpBrowserWindow(p.object);
			const g = {
				win: p.object,
				id: p.object.id,
				name: c,
				redirectUrl: n
			};
			this._openedWidgets.push(g), console.log(this._openedWidgets), p.object.once("ready-to-show", () => {
				"win32" !== process.platform ? p.object.show() : setTimeout(() => {
					p.object.isVisible() || (p.object.show(), this.showUpBrowserWindow(p.object))
				}, 300)
			}), p.object.on("close", () => {
				const e = this._openedWidgets.find(e => e.name === c && e.redirectUrl === n);
				if (e) {
					e.win = null;
					const t = this._openedWidgets.indexOf(e);
					this._openedWidgets.splice(t, 1), console.log(this._openedWidgets)
				}
			})
		}
		closeOpenedWidgets() {
			this._openedWidgets.slice(0).forEach(e => e.win.close())
		}
		getAcerXR() {
			const e = this._util.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Khronos\\OpenXR\\1", "ActiveRuntime");
			return e && "C:\\Program Files\\Acer\\Acer XR Service\\AcerRuntime.json" === e
		}
		enableAcerXR() {
			const e = new Array;
			e.push("Windows Registry Editor Version 5.00"), e.push("[HKEY_LOCAL_MACHINE\\SOFTWARE\\Khronos\\OpenXR\\1]"), e.push('"ActiveRuntime"="C:\\\\Program Files\\\\Acer\\\\Acer XR Service\\\\AcerRuntime.json"'), u.existsSync(this._widgetRoot) || u.mkdirSync(this._widgetRoot, {
				recursive: !0
			});
			const t = r.resolve("" + this._widgetRoot, "tmp.reg");
			try {
				u.writeFileSync(t, e.join("\r\n")), this.runAsAdmin("reg.exe", `import "${t}"`).catch(e => {
					this._log.writeLog("runAsAdmin: " + e)
				})
			} catch (e) {
				console.error(e)
			}
		}
		setWeavingType(e) {
			this._admin.setStereoGeneration(e), this._util.setStereoGeneration(e)
		}
		isReboot() {
			return !this._util.getRegistryValue("HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce", "Reboot")
		}
		logJson(e, t) {
			this._log.writeLog(`${e}: ${JSON.stringify(t,void 0,2)}`)
		}
		printJson(e) {
			console.log(JSON.stringify(e, void 0, 2))
		}
		showInfo() {
			let e = 0,
				t = 0,
				n = 0;
			this._widgets.forEach(i => {
				"downloadable" === i.status ? e++ : "installed" === i.status ? t++ : "updatable" === i.status && n++
			}), console.log("可下載： " + e), console.log("已安裝： " + t), console.log("可更新： " + n), this.printJson(this._widgets), console.log("已移除： " + this._uninstalledWidgets.length), this.printJson(this._uninstalledWidgets)
		}
		debug(e) {
			let t = e.split("@");
			switch (t[0]) {
				case "invoke":
					this.invokeWidget(t[1]);
					break;
				case "restore":
					this.restoreWidgets(), this.showInfo();
					break;
				case "print":
				case "install":
				case "uninstall":
				case "update":
					this.showInfo()
			}
		}
	}
	t.WidgetManager = WidgetManager;
	class WidgetStatus {
		constructor(e, t, n, i, r, o, s, a, c, l, u, d) {
			this.toString = () => JSON.stringify(this.object, void 0, 2), this._name = e, this._type = t, this._version = n, this._folder = i, this._directUrl = r, this._status = o, this._icon = s, this._uninstallString = a, this._displayName = c, this._description = l, this._iconUrl = u, this._no = d
		}
		get name() {
			return this._name
		}
		get type() {
			return this._type
		}
		get version() {
			return this._version
		}
		get folder() {
			return this._folder
		}
		get directUrl() {
			return this._directUrl
		}
		get status() {
			return this._status
		}
		get icon() {
			return this._icon
		}
		get uninstallString() {
			return this._uninstallString
		}
		get displayName() {
			return this._displayName
		}
		get description() {
			return this._description
		}
		get iconUrl() {
			return this._iconUrl
		}
		get no() {
			return this._no
		}
		get object() {
			return {
				name: this._name,
				type: this._type,
				version: this._version,
				folder: this._folder,
				directUrl: this.directUrl,
				status: this._status,
				icon: this._icon,
				uninstallString: this._uninstallString,
				displayName: this._displayName,
				description: this._description,
				iconUrl: this.iconUrl,
				no: this.no
			}
		}
	}
	class RegistryManager {
		constructor() {
			this._widgets = new Array, this._plugins = new Array, this._log = p.LogIt.getInstance(), this._acerApps = ["Acer XR Service", "Stereo Generation", "Display Service", "Model Viewer", "Display Go", "TrueGame", "VideoCall"], this._dimenceApps = ["Simulated Reality", "Eye Tracker", "Diagnostic", "Player"], this._acerRoot = "HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", this._dimencoRoot = "HKEY_LOCAL_MACHINE\\SOFTWARE\\Dimenco", this._pluginRoot = "HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs\\Add-ons", this._defaultIcon = "C:\\Program Files\\Acer\\SpatialLabs\\SR Platform\\bin\\Resources\\installed.ico", this._iconRoot = "C:\\Program Files\\Acer\\SpatialLabs\\ExperienceCenter\\resources\\src\\assets\\image", this._util = y.Util.getInstance()
		}
		static getInstance() {
			return RegistryManager.instance || (RegistryManager.instance = new RegistryManager), RegistryManager.instance
		}
		restoreAllWidgets() {
			this._widgets.splice(0);
			const e = this.listWidget(this._acerRoot),
				t = this.listWidget(this._dimencoRoot);
			this._acerApps.forEach(t => {
				const n = `${this._acerRoot}\\${t}`;
				e.includes(n) || e.push(n)
			}), this._dimenceApps.forEach(e => {
				const n = `${this._dimencoRoot}\\${e}`;
				t.includes(n) || t.push(n)
			}), t.forEach(e => this.initWidget(e)), e.forEach(e => this.initWidget(e))
		}
		restoreAllPlugins() {
			this._plugins.splice(0), this.listWidget(this._pluginRoot).forEach(e => this.initPlugin(e))
		}
		get registryRoot() {
			return this._acerRoot
		}
		fakeRegistry(e) {
			const t = e.name;
			"Display Go" === t ? this.initFVDFFloating(e) : "Model Viewer" === t ? this.initModelViewer(e) : "Simulated Reality" === t ? this.initSRService(e) : "Player" === t ? this.initPlayer(e) : "Eye Tracker" === t ? this.initEyeTracker(e) : "Diagnostic" === t ? this.initDiagnostic(e) : "Display Service" === t ? this.initDisplayService(e) : "Acer XR Service" === t ? this.initOpenXR(e) : "Stereo Generation" === t ? this.initStereoGeneration(e) : "TrueGame" === t ? this.initTrueGame(e) : "VideoCall" === t && this.initVideoCall(e)
		}
		listWidget(e) {
			let t = [],
				n = ["QUERY", e],
				i = h.spawnSync("REG", n);
			return i.error || (t = String(i.stdout).split("\r\n").filter(t => t.startsWith(e) && t !== e && !t.endsWith("Add-ons"))), t
		}
		restoreWidget(e) {
			let t;
			const n = this.listWidget(this._acerRoot),
				i = this.listWidget(this._dimencoRoot);
			n.find(t => t.endsWith(e)) ? t = `${this._acerRoot}\\${e}` : i.find(t => t.endsWith(e)) && (t = `${this._dimencoRoot}\\${e}`), t || (this._acerApps.includes(e) ? t = `${this._acerRoot}\\${e}` : this._dimenceApps.includes(e) && (t = `${this._dimencoRoot}\\${e}`)), t && this.initWidget(t);
			const r = this._widgets.find(t => t.name === e);
			return !t && r && this._widgets.splice(this._widgets.indexOf(r), 1), r
		}
		restorePlugin(e) {
			const t = `${this._pluginRoot}\\${e}`;
			this.initPlugin(t);
			return this._plugins.find(t => t.name === e)
		}
		initPlugin(e) {
			const t = e.substr(e.lastIndexOf("\\") + 1),
				n = this._util.getRegistryValue(e, "Version"),
				i = this._util.getRegistryValue(e, "UninstallString"),
				r = this._util.getRegistryValue(e, "DisplayName"),
				o = this._util.getRegistryValue(e, "DisplayIcon");
			this.addPlugin(t, n, i, r, o)
		}
		initWidget(e) {
			const t = {
				name: e.substr(e.lastIndexOf("\\") + 1),
				displayIcon: this._util.getRegistryValue(e, "DisplayIcon"),
				displayName: this._util.getRegistryValue(e, "DisplayName"),
				executable: this._util.getRegistryValue(e, "Executable"),
				installationPath: this._util.getRegistryValue(e, "InstallationPath"),
				type: this._util.getRegistryValue(e, "Type"),
				uninstallString: this._util.getRegistryValue(e, "UninstallString"),
				version: this._util.getRegistryValue(e, "Version"),
				description: this._util.getRegistryValue(e, "Description")
			};
			this.fakeRegistry(t), this.addWidget(t)
		}
		initSRService(e) {
			e.displayName = "" === e.displayName ? "SRService" : e.displayName, e.executable = "" === e.executable ? "C:\\Program Files\\Acer\\SpatialLabs\\SR Platform\\bin\\SRService.exe" : e.executable, e.installationPath = "" === e.installationPath ? "C:\\Program Files\\Acer\\SpatialLabs\\SR Platform" : e.installationPath, e.type = "" === e.type ? "Service" : e.type, e.uninstallString = "" === e.uninstallString ? "C:\\Program Files\\Acer\\SpatialLabs\\Uninstall.exe /S" : e.uninstallString, e.version = "" === e.version ? "0.32.7" : e.version
		}
		initEyeTracker(e) {
			e.displayName = "" === e.displayName ? "SR Eye Tracker" : e.displayName, e.executable = "" === e.executable ? "C:\\Program Files\\Acer\\SpatialLabs\\SR Eye Tracker\\bin\\SREyeTracker.exe" : e.executable, e.installationPath = "" === e.installationPath ? "C:\\Program Files\\Acer\\SpatialLabs\\SR Eye Tracker" : e.installationPath, e.type = "" === e.type ? "Service" : e.type, e.version = "" === e.version ? "1.9.5" : e.version
		}
		initDiagnostic(e) {
			e.displayName = "" === e.displayName ? "System Status" : e.displayName, e.executable = "" === e.executable ? "C:\\Program Files\\Acer\\SpatialLabs\\System Status\\bin\\System Status.exe" : e.executable, e.installationPath = "" === e.installationPath ? "C:\\Program Files\\Acer\\SpatialLabs\\System Status" : e.installationPath, e.type = "" === e.type ? "Service" : e.type, e.version = "" === e.version ? "0.9.6" : e.version
		}
		initStereoGeneration(e) {
			e.displayName = "" === e.displayName ? "Stereo Generation Service" : e.displayName, e.executable = "" === e.executable ? "C:\\Program Files\\Acer\\SpatialLabs\\Display Service\\GenerateStereo.dll" : e.executable, e.installationPath = "" === e.installationPath ? "C:\\Program Files\\Acer\\SpatialLabs\\Display Service" : e.installationPath, e.type = "" === e.type ? "Service" : e.type, e.uninstallString = "" === e.uninstallString ? "MsiExec.exe /QN /X {F5AD4452-69FA-4591-B618-C9DBA8C7A1AA}" : e.uninstallString, e.version = "" === e.version ? "0.03.2018" : e.version
		}
		initDisplayService(e) {
			e.displayName = "" === e.displayName ? "SpatialLabs Display Service" : e.displayName, e.executable = "" === e.executable ? "C:\\Program Files\\Acer\\SpatialLabs\\Display Service\\SpatialLabs Display Service.exe" : e.executable, e.installationPath = "" === e.installationPath ? "C:\\Program Files\\Acer\\SpatialLabs\\Display Service" : e.installationPath, e.type = "" === e.type ? "Service" : e.type, e.uninstallString = "" === e.uninstallString ? "MsiExec.exe /QN /X {13AC9532-35A3-45EE-99BB-5420E8AED82F}" : e.uninstallString, e.version = "" === e.version ? "0.03.2040" : e.version
		}
		initOpenXR(e) {
			e.displayName = "" === e.displayName ? "Acer XR Service" : e.displayName, e.executable = "" === e.executable ? "C:\\Program Files\\Acer\\Acer XR Service\\Acer XR Service.exe" : e.executable, e.installationPath = "" === e.installationPath ? "C:\\Program Files\\Acer\\Acer XR Service" : e.installationPath, e.type = "" === e.type ? "Service" : e.type, e.uninstallString = "" === e.uninstallString ? "MsiExec.exe /QN /X  {E52455B5-D9D1-4A1A-B55B-BF2852995085}" : e.uninstallString, e.version = "" === e.version ? "0.01.2055" : e.version
		}
		initTrueGame(e) {
			e.displayIcon = "" === e.displayIcon ? r.join(this._iconRoot, "apps", "TrueGame.ico") : e.displayIcon, e.displayName = "" === e.displayName ? g.I18n.getInstance().__("TrueGame_Display_Name") : e.displayName, e.executable = "" === e.executable ? "start shell:AppsFolder\\AcerIncorporated.TrueGame_48frkmn4z8aw4!TrueGame" : e.executable, e.type = "" === e.type ? "App" : e.type, e.uninstallString = "" === e.uninstallString ? 'powershell -command "Get-AppxPackage *truegame* -AllUsers | Remove-AppxPackage -AllUsers"' : e.uninstallString, e.version = "" === e.version ? "0.7.76.0" : e.version, e.description = "" === e.description ? g.I18n.getInstance().__("SpatialLabs_TrueGame_Desc") : e.description
		}
		initModelViewer(e) {
			e.displayName = "" === e.displayName ? g.I18n.getInstance().__("Model_Viewer_Display_Name") : e.displayName, e.description = "" === e.description ? g.I18n.getInstance().__("Model_Viewer_Desc") : e.description
		}
		initPlayer(e) {
			e.displayIcon = "" === e.displayIcon ? r.join(this._iconRoot, "apps", "player.ico") : e.displayIcon, e.displayName = "" === e.displayName ? g.I18n.getInstance().__("SpatialLabs_Player_Display_Name") : e.displayName, e.executable = "" === e.executable ? "C:\\Program Files\\Acer\\SpatialLabs\\Player\\SpatialLabs Player.exe" : e.executable, e.installationPath = "" === e.installationPath ? "C:\\Program Files\\Acer\\SpatialLabs\\Player" : e.installationPath, e.type = "" === e.type ? "App" : e.type, e.uninstallString = "" === e.uninstallString ? '"C:\\Program Files\\Acer\\SpatialLabs\\Player\\win32\\SetupLauncher.exe" "C:\\ProgramData\\Package Cache\\{b876c561-9393-4b72-a32d-8ebd647b6ce9}\\SpatialLabsPlayerSetup.exe" /uninstall /quiet' : e.uninstallString, e.version = "" === e.version ? "0.0.66" : e.version, e.description = "" === e.description ? g.I18n.getInstance().__("SpatialLabs_Player_Desc") : e.description
		}
		initFVDFFloating(e) {
			e.displayIcon = "" === e.displayIcon ? r.join(this._iconRoot, "apps", "go.ico") : e.displayIcon, e.displayName = "" === e.displayName ? g.I18n.getInstance().__("SpatialLabs_Go_Display_Name") : e.displayName, e.type = "" === e.type ? "App" : e.type, e.version = "" === e.version ? "2.1.0" : e.version, e.description = "" === e.description ? g.I18n.getInstance().__("SpatialLabs_Go_Desc") : e.description
		}
		initVideoCall(e) {
			e.displayName = "" === e.displayName ? g.I18n.getInstance().__("Video_Call_Display_Name") : e.displayName, e.description = "" === e.description ? g.I18n.getInstance().__("Video_Call_Desc") : e.description
		}
		addPlugin(e, t, n, i, r) {
			if ("" !== i && "" !== t) {
				if (n) {
					const t = (n = n.replace(/"/g, "")).substring(0, n.indexOf(" /"));
					if (t && !u.existsSync(t)) {
						const t = this._plugins.find(t => t.name === e);
						return void(t && this._plugins.splice(this._plugins.indexOf(t), 1))
					}
				}
				r && u.existsSync(r) && (r = s.pathToFileURL(r).href);
				const o = {
						name: e,
						version: t,
						status: "installed",
						downloadUrl: "",
						uninstallString: n,
						latestVersion: "",
						displayName: i,
						displayIcon: r,
						type: "Add-on"
					},
					a = this._plugins.find(t => t.name === e);
				a ? (a.version = t, a.uninstallString = n, a.status = "installed", a.latestVersion = "", a.displayIcon = r, a.type = "Add-on") : this._plugins.push(o)
			}
		}
		isExecutable(e) {
			let t = !0;
			const n = e.executable ? e.executable : e.directUrl;
			if ("App" === e.type)
				if (e.uninstallString.includes("AppxPackage")) {
					const e = h.execSync('powershell -command "Get-AppxPackage -Name AcerIncorporated.TrueGame"');
					e && 0 !== e.length || (this._log.writeLog("MSIX is not installed"), t = !1)
				} else n && !u.existsSync(n) && (t = !1);
			return t
		}
		addWidget(e) {
			const t = e.name,
				n = e.type,
				i = e.version,
				r = e.executable,
				o = e.displayIcon,
				a = e.displayName,
				c = e.uninstallString,
				l = e.description,
				d = e.installationPath,
				h = e.no;
			if (n && i && this.isExecutable(e)) {
				if ("" !== n && "" !== i) {
					let e;
					o && u.existsSync(o) && (e = s.pathToFileURL(o).href);
					const p = new WidgetStatus(t, n, i, d, r, "installed", o, c, a, l, e, h),
						f = this._widgets.find(e => e.name === t);
					f ? (f.type = n, f.version = i, f.folder = d, f.directUrl = r, f.status = "installed", f.icon = o, f.uninstallString = c, f.displayName = a, f.description = l, f.iconUrl = e, f.latestVersion = "") : this._widgets.push(p.object)
				}
			} else {
				const e = this._widgets.find(e => e.name === t);
				e && this._widgets.splice(this._widgets.indexOf(e), 1)
			}
		}
		get widgets() {
			return this._widgets
		}
		get plugins() {
			return this._plugins
		}
	}
}, function(e, t) {
	e.exports = require("cp-native")
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Env = void 0;
	const i = n(31);
	class Env {
		constructor() {}
		static getInstance() {
			return Env.instance || (Env.instance = new Env), Env.instance
		}
		getLocalUrl() {
			return i.getMainPageUrl()
		}
	}
	t.Env = Env
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Window = void 0;
	const i = n(13),
		r = n(19),
		o = n(3),
		s = n(7);
	class Window {
		constructor() {
			this.mainWin = null, this.urlToWinName = {}, this.WinMap = new Map
		}
		static getInstance() {
			return Window.instance || (Window.instance = new Window), Window.instance
		}
		setMainWindow(e) {
			this.mainWin = e
		}
		createWindow(e) {
			const t = {
				x: 100,
				y: 100,
				width: e.width ? e.width : 460,
				height: e.height ? e.height : 540,
				show: !1,
				showDevTools: !1,
				transparent: !0,
				frame: !1,
				title: "SpatialLabs Experience Center",
				resizable: !0,
				minimizable: !0,
				maximizable: !0,
				loading: !1,
				webPreferences: {
					allowRunningInsecureContent: !0,
					nodeIntegration: !0,
					webviewTag: !0,
					enableRemoteModule: !0
				}
			};
			if ((e = Object.assign(Object.assign({}, t), e)).center && (delete e.x, delete e.y), e.minWidth = Math.min(e.minWidth, 460), e.minHeight = Math.min(e.minHeight, 540), this.WinMap.has(e.url)) {
				const t = this.WinMap.get(e.url);
				this.bringWinToTop(t)
			} else {
				const t = e.url.split("/").pop(),
					n = i.createNew(t, "", e.url, !1, e).create();
				n && n.object && n.object.hide(), n.object.once("close", () => {
					n.object.hide(), this.WinMap.has(e.url) && this.WinMap.delete(e.url)
				}), n.onReady(!1, t => {
					e.showMaximized && t.object.maximize(), t.object.show()
				}), this.WinMap.set(e.url, t), e.web && n.object.loadUrl(e.url), n.object.on("closed", e => {
					o.LogIt.getInstance().writeLog(t + " closed"), s.Util.getInstance().printAllWindows()
				}), n.object.on("close", e => {
					o.LogIt.getInstance().writeLog(t + " close")
				})
			}
			return this.WinMap.get(e.url)
		}
		bringWinToTop(e) {
			const t = i.get(e);
			t && (t.object.isVisible() || t.object.show(), t.object.focus())
		}
		windowLoaded(e) {
			if (this.WinMap.has(e.url)) {
				const t = this.WinMap.get(e.url),
					n = i.get(t);
				n.object.webContents.executeJavaScript("showPage()"), n.object.webContents.send("onEvent", "page-ready")
			}
		}
		mainPageLoaded(e) {
			this.mainWin.webContents.send("onEvent", "page-ready")
		}
		closeAllWindows() {
			if (this.WinMap.forEach((e, t) => {
					this.close({
						url: t
					})
				}), 0 === this.WinMap.size) return !0
		}
		close(e) {
			if (this.WinMap.has(e.url)) {
				const t = this.WinMap.get(e.url);
				i.close(t)
			} else console.log("cannot find this window : " + e.url)
		}
		openWidget(e) {
			r.WidgetManager.getInstance().invokeWidget(e)
		}
		closeMainWindow() {
			this.mainWin.close()
		}
		hideMainWindow() {
			this.mainWin.hide()
		}
		minimizeMainWindow() {
			this.mainWin.minimize()
		}
	}
	t.Window = Window
}, function(e, t) {
	e.exports = require("stream")
}, function(e, t, n) {
	"use strict";
	const i = n(8).fromCallback,
		r = n(6),
		o = ["access", "appendFile", "chmod", "chown", "close", "copyFile", "fchmod", "fchown", "fdatasync", "fstat", "fsync", "ftruncate", "futimes", "lchmod", "lchown", "link", "lstat", "mkdir", "mkdtemp", "open", "opendir", "readdir", "readFile", "readlink", "realpath", "rename", "rm", "rmdir", "stat", "symlink", "truncate", "unlink", "utimes", "writeFile"].filter(e => "function" == typeof r[e]);
	Object.assign(t, r), o.forEach(e => {
		t[e] = i(r[e])
	}), t.realpath.native = i(r.realpath.native), t.exists = function(e, t) {
		return "function" == typeof t ? r.exists(e, t) : new Promise(t => r.exists(e, t))
	}, t.read = function(e, t, n, i, o, s) {
		return "function" == typeof s ? r.read(e, t, n, i, o, s) : new Promise((s, a) => {
			r.read(e, t, n, i, o, (e, t, n) => {
				if (e) return a(e);
				s({
					bytesRead: t,
					buffer: n
				})
			})
		})
	}, t.write = function(e, t, ...n) {
		return "function" == typeof n[n.length - 1] ? r.write(e, t, ...n) : new Promise((i, o) => {
			r.write(e, t, ...n, (e, t, n) => {
				if (e) return o(e);
				i({
					bytesWritten: t,
					buffer: n
				})
			})
		})
	}, "function" == typeof r.writev && (t.writev = function(e, t, ...n) {
		return "function" == typeof n[n.length - 1] ? r.writev(e, t, ...n) : new Promise((i, o) => {
			r.writev(e, t, ...n, (e, t, n) => {
				if (e) return o(e);
				i({
					bytesWritten: t,
					buffers: n
				})
			})
		})
	})
}, function(e, t, n) {
	"use strict";
	const i = n(24),
		r = n(0),
		o = n(47);

	function getStats(e, t, n) {
		const r = n.dereference ? e => i.stat(e, {
			bigint: !0
		}) : e => i.lstat(e, {
			bigint: !0
		});
		return Promise.all([r(e), r(t).catch(e => {
			if ("ENOENT" === e.code) return null;
			throw e
		})]).then(([e, t]) => ({
			srcStat: e,
			destStat: t
		}))
	}

	function areIdentical(e, t) {
		return t.ino && t.dev && t.ino === e.ino && t.dev === e.dev
	}

	function isSrcSubdir(e, t) {
		const n = r.resolve(e).split(r.sep).filter(e => e),
			i = r.resolve(t).split(r.sep).filter(e => e);
		return n.reduce((e, t, n) => e && i[n] === t, !0)
	}

	function errMsg(e, t, n) {
		return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`
	}
	e.exports = {
		checkPaths: function checkPaths(e, t, n, i, s) {
			o.callbackify(getStats)(e, t, i, (i, o) => {
				if (i) return s(i);
				const {
					srcStat: a,
					destStat: c
				} = o;
				if (c) {
					if (areIdentical(a, c)) {
						const i = r.basename(e),
							o = r.basename(t);
						return "move" === n && i !== o && i.toLowerCase() === o.toLowerCase() ? s(null, {
							srcStat: a,
							destStat: c,
							isChangingCase: !0
						}) : s(new Error("Source and destination must not be the same."))
					}
					if (a.isDirectory() && !c.isDirectory()) return s(new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`));
					if (!a.isDirectory() && c.isDirectory()) return s(new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`))
				}
				return a.isDirectory() && isSrcSubdir(e, t) ? s(new Error(errMsg(e, t, n))) : s(null, {
					srcStat: a,
					destStat: c
				})
			})
		},
		checkPathsSync: function checkPathsSync(e, t, n, o) {
			const {
				srcStat: s,
				destStat: a
			} = function getStatsSync(e, t, n) {
				let r;
				const o = n.dereference ? e => i.statSync(e, {
						bigint: !0
					}) : e => i.lstatSync(e, {
						bigint: !0
					}),
					s = o(e);
				try {
					r = o(t)
				} catch (e) {
					if ("ENOENT" === e.code) return {
						srcStat: s,
						destStat: null
					};
					throw e
				}
				return {
					srcStat: s,
					destStat: r
				}
			}(e, t, o);
			if (a) {
				if (areIdentical(s, a)) {
					const i = r.basename(e),
						o = r.basename(t);
					if ("move" === n && i !== o && i.toLowerCase() === o.toLowerCase()) return {
						srcStat: s,
						destStat: a,
						isChangingCase: !0
					};
					throw new Error("Source and destination must not be the same.")
				}
				if (s.isDirectory() && !a.isDirectory()) throw new Error(`Cannot overwrite non-directory '${t}' with directory '${e}'.`);
				if (!s.isDirectory() && a.isDirectory()) throw new Error(`Cannot overwrite directory '${t}' with non-directory '${e}'.`)
			}
			if (s.isDirectory() && isSrcSubdir(e, t)) throw new Error(errMsg(e, t, n));
			return {
				srcStat: s,
				destStat: a
			}
		},
		checkParentPaths: function checkParentPaths(e, t, n, o, s) {
			const a = r.resolve(r.dirname(e)),
				c = r.resolve(r.dirname(n));
			if (c === a || c === r.parse(c).root) return s();
			i.stat(c, {
				bigint: !0
			}, (i, r) => i ? "ENOENT" === i.code ? s() : s(i) : areIdentical(t, r) ? s(new Error(errMsg(e, n, o))) : checkParentPaths(e, t, c, o, s))
		},
		checkParentPathsSync: function checkParentPathsSync(e, t, n, o) {
			const s = r.resolve(r.dirname(e)),
				a = r.resolve(r.dirname(n));
			if (a === s || a === r.parse(a).root) return;
			let c;
			try {
				c = i.statSync(a, {
					bigint: !0
				})
			} catch (e) {
				if ("ENOENT" === e.code) return;
				throw e
			}
			if (areIdentical(t, c)) throw new Error(errMsg(e, n, o));
			return checkParentPathsSync(e, t, a, o)
		},
		isSrcSubdir: isSrcSubdir,
		areIdentical: areIdentical
	}
}, function(e, t, n) {
	const {
		MAX_SAFE_COMPONENT_LENGTH: i
	} = n(36), r = n(37), o = (t = e.exports = {}).re = [], s = t.src = [], a = t.t = {};
	let c = 0;
	const createToken = (e, t, n) => {
		const i = c++;
		r(i, t), a[e] = i, s[i] = t, o[i] = new RegExp(t, n ? "g" : void 0)
	};
	createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*"), createToken("NUMERICIDENTIFIERLOOSE", "[0-9]+"), createToken("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), createToken("MAINVERSION", `(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})`), createToken("MAINVERSIONLOOSE", `(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${s[a.NUMERICIDENTIFIERLOOSE]})`), createToken("PRERELEASEIDENTIFIER", `(?:${s[a.NUMERICIDENTIFIER]}|${s[a.NONNUMERICIDENTIFIER]})`), createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${s[a.NUMERICIDENTIFIERLOOSE]}|${s[a.NONNUMERICIDENTIFIER]})`), createToken("PRERELEASE", `(?:-(${s[a.PRERELEASEIDENTIFIER]}(?:\\.${s[a.PRERELEASEIDENTIFIER]})*))`), createToken("PRERELEASELOOSE", `(?:-?(${s[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[a.PRERELEASEIDENTIFIERLOOSE]})*))`), createToken("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), createToken("BUILD", `(?:\\+(${s[a.BUILDIDENTIFIER]}(?:\\.${s[a.BUILDIDENTIFIER]})*))`), createToken("FULLPLAIN", `v?${s[a.MAINVERSION]}${s[a.PRERELEASE]}?${s[a.BUILD]}?`), createToken("FULL", `^${s[a.FULLPLAIN]}$`), createToken("LOOSEPLAIN", `[v=\\s]*${s[a.MAINVERSIONLOOSE]}${s[a.PRERELEASELOOSE]}?${s[a.BUILD]}?`), createToken("LOOSE", `^${s[a.LOOSEPLAIN]}$`), createToken("GTLT", "((?:<|>)?=?)"), createToken("XRANGEIDENTIFIERLOOSE", s[a.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*"), createToken("XRANGEIDENTIFIER", s[a.NUMERICIDENTIFIER] + "|x|X|\\*"), createToken("XRANGEPLAIN", `[v=\\s]*(${s[a.XRANGEIDENTIFIER]})(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:${s[a.PRERELEASE]})?${s[a.BUILD]}?)?)?`), createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:${s[a.PRERELEASELOOSE]})?${s[a.BUILD]}?)?)?`), createToken("XRANGE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAIN]}$`), createToken("XRANGELOOSE", `^${s[a.GTLT]}\\s*${s[a.XRANGEPLAINLOOSE]}$`), createToken("COERCE", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?(?:$|[^\\d])`), createToken("COERCERTL", s[a.COERCE], !0), createToken("LONETILDE", "(?:~>?)"), createToken("TILDETRIM", `(\\s*)${s[a.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", createToken("TILDE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAIN]}$`), createToken("TILDELOOSE", `^${s[a.LONETILDE]}${s[a.XRANGEPLAINLOOSE]}$`), createToken("LONECARET", "(?:\\^)"), createToken("CARETTRIM", `(\\s*)${s[a.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", createToken("CARET", `^${s[a.LONECARET]}${s[a.XRANGEPLAIN]}$`), createToken("CARETLOOSE", `^${s[a.LONECARET]}${s[a.XRANGEPLAINLOOSE]}$`), createToken("COMPARATORLOOSE", `^${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]})$|^$`), createToken("COMPARATOR", `^${s[a.GTLT]}\\s*(${s[a.FULLPLAIN]})$|^$`), createToken("COMPARATORTRIM", `(\\s*)${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]}|${s[a.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", createToken("HYPHENRANGE", `^\\s*(${s[a.XRANGEPLAIN]})\\s+-\\s+(${s[a.XRANGEPLAIN]})\\s*$`), createToken("HYPHENRANGELOOSE", `^\\s*(${s[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[a.XRANGEPLAINLOOSE]})\\s*$`), createToken("STAR", "(<|>)?=?\\s*\\*"), createToken("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), createToken("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$")
}, function(e, t, n) {
	const {
		MAX_LENGTH: i
	} = n(36), {
		re: r,
		t: o
	} = n(26), s = n(4), a = n(38);
	e.exports = (e, t) => {
		if (t = a(t), e instanceof s) return e;
		if ("string" != typeof e) return null;
		if (e.length > i) return null;
		if (!(t.loose ? r[o.LOOSE] : r[o.FULL]).test(e)) return null;
		try {
			return new s(e, t)
		} catch (e) {
			return null
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.blockmapFiles = t.getChannelFilename = t.newUrlFromBase = t.newBaseUrl = void 0;
	const i = n(11),
		r = n(179);

	function newUrlFromBase(e, t, n = !1) {
		const r = new i.URL(e, t),
			o = t.search;
		return null != o && 0 !== o.length ? r.search = o : n && (r.search = "noCache=" + Date.now().toString(32)), r
	}
	t.newBaseUrl = function newBaseUrl(e) {
		const t = new i.URL(e);
		return t.pathname.endsWith("/") || (t.pathname += "/"), t
	}, t.newUrlFromBase = newUrlFromBase, t.getChannelFilename = function getChannelFilename(e) {
		return e + ".yml"
	}, t.blockmapFiles = function blockmapFiles(e, t, n) {
		const i = newUrlFromBase(e.pathname + ".blockmap", e);
		return [newUrlFromBase(e.pathname.replace(new RegExp(r(n), "g"), t) + ".blockmap", e), i]
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.I18n = void 0;
	const i = n(1),
		r = n(0),
		o = n(5);
	class I18n {
		constructor(e) {
			this.loadedLanguage = null, this.locale = e, this.resetLocale(e)
		}
		static getInstance() {
			if (!I18n.instance) {
				const e = i.app.getLocale();
				let t = "en";
				e && (t = "zh" === e.split("-")[0] || "pt" === e.split("-")[0] ? e : e.split("-")[0]), I18n.instance = new I18n(t)
			}
			return I18n.instance
		}
		resetLocale(e) {
			const t = r.join(__dirname, "assets/i18n");
			o.existsSync(r.join("" + t, e + ".json")) ? this.loadedLanguage = JSON.parse(o.readFileSync(r.join("" + t, e + ".json"), "utf8")) : this.loadedLanguage = JSON.parse(o.readFileSync(r.join("" + t, "en.json"), "utf8"))
		}
		__(e) {
			let t = this.loadedLanguage[e];
			return void 0 === t && (t = e), t
		}
		getLocale() {
			return this.locale
		}
	}
	t.I18n = I18n
}, function(e, t) {
	e.exports = require("crypto")
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getMainPageUrl = void 0;
	const i = n(11),
		r = n(0);
	t.getMainPageUrl = function getMainPageUrl() {
		const e = process.argv.slice(1).some(e => "--dev" === e),
			t = i.format({
				pathname: r.join(__dirname, "dist/widgets/MainPage/index.html"),
				protocol: "file",
				slashes: !0
			});
		return e ? "http://localhost:4200" : t
	}
}, function(e, t) {
	e.exports = require("net")
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.LockDevice = t.SREventType = void 0;
	const r = n(14),
		o = n(3),
		s = n(7),
		a = n(20);
	var c, l, u, d;
	! function(e) {
		e.USB_04F2_B70C = "USB:04F2:B70C", e.USB_04F2_B779 = "USB:04F2:B779", e.USB_04F2_B7F4 = "USB:04F2:B7F4"
	}(c || (c = {})),
	function(e) {
		e.USB_04D8_EB50 = "USB:04D8:EB50", e.USB_354B_0118 = "USB:354B:0118", e.USB_354B_0116 = "USB:354B:0116"
	}(l || (l = {})),
	function(e) {
		e.HDMI_ACR0000 = "DISPLAY:ACR0000", e.HDMI_ACR0001 = "DISPLAY:ACR0001", e.HDMI_ACR0002 = "DISPLAY:ACR0002", e.HDMI_ACR0003 = "DISPLAY:ACR0003", e.HDMI_ICD2708 = "DISPLAY:ICD2708"
	}(u || (u = {})),
	function(e) {
		e[e.Info = 0] = "Info", e[e.ContextInvalid = 1] = "ContextInvalid", e[e.SRUnavailable = 2] = "SRUnavailable", e[e.SRRestored = 3] = "SRRestored", e[e.USBNotConnected = 4] = "USBNotConnected", e[e.USBNotConnectedResolved = 5] = "USBNotConnectedResolved", e[e.DisplayNotConnected = 6] = "DisplayNotConnected", e[e.DisplayNotConnectedResolved = 7] = "DisplayNotConnectedResolved", e[e.Duplicated = 8] = "Duplicated", e[e.DuplicatedResolved = 9] = "DuplicatedResolved", e[e.NonNativeResolution = 10] = "NonNativeResolution", e[e.NonNativeResolutionResolved = 11] = "NonNativeResolutionResolved", e[e.DeviceConnectedAndReady = 12] = "DeviceConnectedAndReady", e[e.DeviceDisconnected = 13] = "DeviceDisconnected", e[e.LensOn = 14] = "LensOn", e[e.LensOff = 15] = "LensOff"
	}(d = t.SREventType || (t.SREventType = {}));
	class LockDevice {
		constructor() {
			this._log = o.LogIt.getInstance(), this._util = s.Util.getInstance(), this._isDetect = !0, this._usbArray = new Array, this._hdmiArray = new Array, this._mainMonitor = "", this.startDetect()
		}
		static getInstance() {
			return LockDevice.instance || (LockDevice.instance = new LockDevice), LockDevice.instance
		}
		isDevEnv() {
			const e = process.argv,
				t = e.some(e => "--dev" === e);
			return console.log(e), t
		}
		addUSB(e) {
			this._usbArray.includes(e) || (this._log.writeLog("addUSB: " + e), this._usbArray.push(e), this.detectUSB())
		}
		removeUSB(e) {
			this._usbArray.includes(e) && (this._log.writeLog("removeUSB: " + e), this._usbArray.splice(this._usbArray.indexOf(e), 1), this.detectUSB(), this._util.stop3DViewRemoveUSB())
		}
		detectUSB() {
			this._usb = !1;
			let e = !1,
				t = !1;
			(this._usbArray.includes(c.USB_04F2_B70C) || this._usbArray.includes(c.USB_04F2_B779) || this._usbArray.includes(c.USB_04F2_B7F4)) && (this._log.writeLog("CAMERA"), e = !0), (this._usbArray.includes(l.USB_04D8_EB50) || this._usbArray.includes(l.USB_354B_0118) || this._usbArray.includes(l.USB_354B_0116)) && (this._log.writeLog("LENS"), t = !0), e && t && (this._usb = !0)
		}
		addHDMI(e) {
			this._hdmiArray.includes(e) || (this._log.writeLog("addHDMI: " + e), this._hdmiArray.push(e), this.detectHDMI())
		}
		removeHDMI(e) {
			this._hdmiArray.includes(e) && (this._log.writeLog("removeHDMI: " + e), this._hdmiArray.splice(this._hdmiArray.indexOf(e), 1), this.detectHDMI(), this._util.stop3DViewRemoveHDMI())
		}
		detectHDMI() {
			this._hdmi = !1, this._mainMonitor = "", this._isDS1 = !1, this._hdmiArray.includes(u.HDMI_ACR0000) && (this._log.writeLog("ACER DS1P"), this._mainMonitor = "ACR0000", this._isDS1 = !0), this._hdmiArray.includes(u.HDMI_ACR0001) && (this._log.writeLog("ACER DS1C"), this._hdmi = !0, this._mainMonitor = "ACR0001", this._isDS1 = !0), this._hdmiArray.includes(u.HDMI_ACR0002) && (this._log.writeLog("ACER DS2P"), this._mainMonitor = "ACR0002", this._isDS1 = !0), this._hdmiArray.includes(u.HDMI_ACR0003) && (this._log.writeLog("ACER DS2C"), this._hdmi = !0, this._mainMonitor = "ACR0003", this._isDS1 = !0), this._hdmiArray.includes(u.HDMI_ICD2708) && (this._log.writeLog("ACER DS2"), this._mainMonitor = "ICD2708", this._isDS1 = !0)
		}
		detectMonitor() {
			return i(this, void 0, void 0, (function*() {
				if (this._status = "disconnect", !this._isDetect || this.isDevEnv() || a.getKeyPressed({
						keyCode: 17
					})) return this._status = "connect", this._hdmi = !0, !0;
				let e = !1;
				return this._usb && (this._status = "usbonly"), "" !== this._mainMonitor && (this._status = "hdmionly"), this._usb && "" !== this._mainMonitor && (e = !0, this._status = "connect"), yield this._util.setMonitorDetection(e, this._mainMonitor), e
			}))
		}
		getStatus() {
			return this._status
		}
		isHDMI() {
			return this._hdmi
		}
		getMainMonitor() {
			return this._mainMonitor
		}
		isDS1() {
			return this._isDS1
		}
		isMultiDisplay() {
			return this._multiDisplay
		}
		setMultiDisplay(e) {
			this._multiDisplay = e
		}
		startDetect() {
			let e, t;
			if (this._util.isDeviceFlag() && !this._util.is3DView()) {
				try {
					try {
						e && process.kill(e.pid, "SIGTERM")
					} catch (t) {
						this._log.writeLog(`usb kill ${e.pid} ${t}`)
					}
					try {
						t && process.kill(t.pid, "SIGTERM")
					} catch (e) {
						this._log.writeLog(`hdmi kill ${t.pid} ${e}`)
					}
					e = r.exec("powershell -command \"Get-PnpDevice -InstanceId 'USB\\VID_*' -Status OK | Select-Object -Property InstanceId\"", (e, t, n) => {
						if (!e) {
							const e = String(t);
							e.includes("USB\\VID_04F2&PID_B70C") ? this.addUSB(c.USB_04F2_B70C) : this.removeUSB(c.USB_04F2_B70C), e.includes("USB\\VID_04F2&PID_B779") ? this.addUSB(c.USB_04F2_B779) : this.removeUSB(c.USB_04F2_B779), e.includes("USB\\VID_04F2&PID_B7F4") ? this.addUSB(c.USB_04F2_B7F4) : this.removeUSB(c.USB_04F2_B7F4), e.includes("USB\\VID_04D8&PID_EB50") ? this.addUSB(l.USB_04D8_EB50) : this.removeUSB(l.USB_04D8_EB50), e.includes("USB\\VID_354B&PID_0118") ? this.addUSB(l.USB_354B_0118) : this.removeUSB(l.USB_354B_0118), e.includes("USB\\VID_354B&PID_0116") ? this.addUSB(l.USB_354B_0116) : this.removeUSB(l.USB_354B_0116)
						}
					}), t = r.exec("powershell -command \"Get-PnpDevice -InstanceId 'DISPLAY*' -Status OK | Select-Object -Property InstanceId\"", (e, t, n) => {
						if (!e) {
							const e = String(t);
							this._displayCount = (e.match(/DISPLAY\\/g) || []).length, e.includes("DISPLAY\\ACR0000") ? this.addHDMI(u.HDMI_ACR0000) : this.removeHDMI(u.HDMI_ACR0000), e.includes("DISPLAY\\ACR0001") ? this.addHDMI(u.HDMI_ACR0001) : this.removeHDMI(u.HDMI_ACR0001), e.includes("DISPLAY\\ACR0002") ? this.addHDMI(u.HDMI_ACR0002) : this.removeHDMI(u.HDMI_ACR0002), e.includes("DISPLAY\\ACR0003") ? this.addHDMI(u.HDMI_ACR0003) : this.removeHDMI(u.HDMI_ACR0003), e.includes("DISPLAY\\ICD2708") ? this.addHDMI(u.HDMI_ICD2708) : this.removeHDMI(u.HDMI_ICD2708)
						}
					})
				} catch (e) {
					this._log.writeLog("childProcess: " + e)
				}
				e && (e.on("close", (t, n) => {
					this._log.writeLog(`usbProcess close: ${t}, ${n}`), e.stdout.destroy(), e.stderr.destroy()
				}), e.on("disconnect", () => {
					this._log.writeLog("usbProcess disconnect"), e.stdout.destroy(), e.stderr.destroy()
				}), e.on("error", t => {
					this._log.writeLog("usbProcess error: " + t), e.stdout.destroy(), e.stderr.destroy()
				}), e.on("exit", (t, n) => {
					this._log.writeLog(`usbProcess exit: ${t}, ${n}`), e.stdout.destroy(), e.stderr.destroy()
				})), t && (t.on("close", (e, n) => {
					t.stdout.destroy(), t.stderr.destroy()
				}), t.on("disconnect", () => {
					t.stdout.destroy(), t.stderr.destroy()
				}), t.on("error", e => {
					t.stdout.destroy(), t.stderr.destroy()
				}), t.on("exit", (e, n) => {
					t.stdout.destroy(), t.stderr.destroy()
				}))
			}
		}
		checkUSB() {
			let e;
			if (this._util.isDeviceFlag() && !this._util.is3DView()) {
				try {
					try {
						e && process.kill(e.pid, "SIGTERM")
					} catch (t) {
						this._log.writeLog(`usb kill ${e.pid} ${t}`)
					}
					e = r.exec("powershell -command \"Get-PnpDevice -InstanceId 'USB\\VID_*' -Status OK | Select-Object -Property InstanceId\"", (e, t, n) => {
						if (!e) {
							const e = String(t);
							e.includes("USB\\VID_04F2&PID_B70C") ? this.addUSB(c.USB_04F2_B70C) : this.removeUSB(c.USB_04F2_B70C), e.includes("USB\\VID_04F2&PID_B779") ? this.addUSB(c.USB_04F2_B779) : this.removeUSB(c.USB_04F2_B779), e.includes("USB\\VID_04F2&PID_B7F4") ? this.addUSB(c.USB_04F2_B7F4) : this.removeUSB(c.USB_04F2_B7F4), e.includes("USB\\VID_04D8&PID_EB50") ? this.addUSB(l.USB_04D8_EB50) : this.removeUSB(l.USB_04D8_EB50), e.includes("USB\\VID_354B&PID_0118") ? this.addUSB(l.USB_354B_0118) : this.removeUSB(l.USB_354B_0118), e.includes("USB\\VID_354B&PID_0116") ? this.addUSB(l.USB_354B_0116) : this.removeUSB(l.USB_354B_0116)
						}
					})
				} catch (e) {
					this._log.writeLog("childProcess: " + e)
				}
				e && (e.on("close", (t, n) => {
					this._log.writeLog(`usbProcess close: ${t}, ${n}`), e.stdout.destroy(), e.stderr.destroy()
				}), e.on("disconnect", () => {
					this._log.writeLog("usbProcess disconnect"), e.stdout.destroy(), e.stderr.destroy()
				}), e.on("error", t => {
					this._log.writeLog("usbProcess error: " + t), e.stdout.destroy(), e.stderr.destroy()
				}), e.on("exit", (t, n) => {
					this._log.writeLog(`usbProcess exit: ${t}, ${n}`), e.stdout.destroy(), e.stderr.destroy()
				}))
			}
		}
		checkHDMI() {
			let e;
			if (this._util.isDeviceFlag() && !this._util.is3DView()) {
				try {
					try {
						e && process.kill(e.pid, "SIGTERM")
					} catch (t) {
						this._log.writeLog(`hdmi kill ${e.pid} ${t}`)
					}
					e = r.exec("powershell -command \"Get-PnpDevice -InstanceId 'DISPLAY*' -Status OK | Select-Object -Property InstanceId\"", (e, t, n) => {
						if (!e) {
							const e = String(t);
							this._displayCount = (e.match(/DISPLAY\\/g) || []).length, e.includes("DISPLAY\\ACR0000") ? this.addHDMI(u.HDMI_ACR0000) : this.removeHDMI(u.HDMI_ACR0000), e.includes("DISPLAY\\ACR0001") ? this.addHDMI(u.HDMI_ACR0001) : this.removeHDMI(u.HDMI_ACR0001), e.includes("DISPLAY\\ACR0002") ? this.addHDMI(u.HDMI_ACR0002) : this.removeHDMI(u.HDMI_ACR0002), e.includes("DISPLAY\\ACR0003") ? this.addHDMI(u.HDMI_ACR0003) : this.removeHDMI(u.HDMI_ACR0003), e.includes("DISPLAY\\ICD2708") ? this.addHDMI(u.HDMI_ICD2708) : this.removeHDMI(u.HDMI_ICD2708)
						}
					})
				} catch (e) {
					this._log.writeLog("childProcess: " + e)
				}
				e && (e.on("close", (t, n) => {
					e.stdout.destroy(), e.stderr.destroy()
				}), e.on("disconnect", () => {
					e.stdout.destroy(), e.stderr.destroy()
				}), e.on("error", t => {
					e.stdout.destroy(), e.stderr.destroy()
				}), e.on("exit", (t, n) => {
					e.stdout.destroy(), e.stderr.destroy()
				}))
			}
		}
		lazyLoading() {
			return i(this, void 0, void 0, (function*() {
				if (!this.srNative) try {
					if (this.srNative = yield Promise.resolve().then(() => n(65)), !this.srNative || 0 === Object.keys(this.srNative).length) throw new Error("The specified module could not be found.")
				} catch (e) {
					this._log.writeLog("import sr-native failed: " + e)
				}
			}))
		}
		startListener() {
			var e;
			return i(this, void 0, void 0, (function*() {
				yield this.lazyLoading();
				null === (e = this.srNative) || void 0 === e || e.startSRSystemListener(e => {
					this._log.writeLog("[mainApp] SR event: " + JSON.stringify(e)), e.eventType != d.USBNotConnected && e.eventType != d.USBNotConnectedResolved || this.checkUSB(), e.eventType != d.DisplayNotConnected && e.eventType != d.DisplayNotConnectedResolved || this.checkHDMI(), e.eventType != d.DeviceDisconnected && e.eventType != d.DeviceConnectedAndReady || this.startDetect()
				})
			}))
		}
		stopListener() {
			var e;
			return i(this, void 0, void 0, (function*() {
				yield this.lazyLoading();
				null === (e = this.srNative) || void 0 === e || e.stopSRSystemListener()
			}))
		}
	}
	t.LockDevice = LockDevice
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.UpdaterSignal = t.UPDATE_DOWNLOADED = t.DOWNLOAD_PROGRESS = t.NsisUpdater = t.MacUpdater = t.AppImageUpdater = t.Provider = t.CancellationToken = t.NoOpLogger = t.AppUpdater = void 0;
	const i = n(2);
	Object.defineProperty(t, "CancellationToken", {
		enumerable: !0,
		get: function() {
			return i.CancellationToken
		}
	});
	var r = n(49);
	Object.defineProperty(t, "AppUpdater", {
		enumerable: !0,
		get: function() {
			return r.AppUpdater
		}
	}), Object.defineProperty(t, "NoOpLogger", {
		enumerable: !0,
		get: function() {
			return r.NoOpLogger
		}
	});
	var o = n(16);
	Object.defineProperty(t, "Provider", {
		enumerable: !0,
		get: function() {
			return o.Provider
		}
	});
	var s = n(85);
	Object.defineProperty(t, "AppImageUpdater", {
		enumerable: !0,
		get: function() {
			return s.AppImageUpdater
		}
	});
	var a = n(91);
	Object.defineProperty(t, "MacUpdater", {
		enumerable: !0,
		get: function() {
			return a.MacUpdater
		}
	});
	var c = n(92);
	let l;
	Object.defineProperty(t, "NsisUpdater", {
		enumerable: !0,
		get: function() {
			return c.NsisUpdater
		}
	}), Object.defineProperty(t, "autoUpdater", {
		enumerable: !0,
		get: () => l || function doLoadAutoUpdater() {
			return l = "win32" === process.platform ? new(n(92).NsisUpdater) : "darwin" === process.platform ? new(n(91).MacUpdater) : new(n(85).AppImageUpdater), l
		}()
	}), t.DOWNLOAD_PROGRESS = "download-progress", t.UPDATE_DOWNLOADED = "update-downloaded";
	t.UpdaterSignal = class UpdaterSignal {
		constructor(e) {
			this.emitter = e
		}
		login(e) {
			addHandler(this.emitter, "login", e)
		}
		progress(e) {
			addHandler(this.emitter, t.DOWNLOAD_PROGRESS, e)
		}
		updateDownloaded(e) {
			addHandler(this.emitter, t.UPDATE_DOWNLOADED, e)
		}
		updateCancelled(e) {
			addHandler(this.emitter, "update-cancelled", e)
		}
	};

	function addHandler(e, t, n) {
		e.on(t, n)
	}
}, function(e, t, n) {
	"use strict";
	const i = n(6),
		r = n(8).fromCallback,
		o = n(130);
	e.exports = {
		remove: r((function remove(e, t) {
			if (i.rm) return i.rm(e, {
				recursive: !0,
				force: !0
			}, t);
			o(e, t)
		})),
		removeSync: function removeSync(e) {
			if (i.rmSync) return i.rmSync(e, {
				recursive: !0,
				force: !0
			});
			o.sync(e)
		}
	}
}, function(e, t) {
	const n = Number.MAX_SAFE_INTEGER || 9007199254740991;
	e.exports = {
		SEMVER_SPEC_VERSION: "2.0.0",
		MAX_LENGTH: 256,
		MAX_SAFE_INTEGER: n,
		MAX_SAFE_COMPONENT_LENGTH: 16
	}
}, function(e, t) {
	const n = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
	e.exports = n
}, function(e, t) {
	const n = ["includePrerelease", "loose", "rtl"];
	e.exports = e => e ? "object" != typeof e ? {
		loose: !0
	} : n.filter(t => e[t]).reduce((e, t) => (e[t] = !0, e), {}) : {}
}, function(e, t, n) {
	const i = n(9);
	e.exports = (e, t, n) => i(e, t, n) > 0
}, function(e, t, n) {
	const i = Symbol("SemVer ANY");
	class Comparator {
		static get ANY() {
			return i
		}
		constructor(e, t) {
			if (t = r(t), e instanceof Comparator) {
				if (e.loose === !!t.loose) return e;
				e = e.value
			}
			c("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === i ? this.value = "" : this.value = this.operator + this.semver.version, c("comp", this)
		}
		parse(e) {
			const t = this.options.loose ? o[s.COMPARATORLOOSE] : o[s.COMPARATOR],
				n = e.match(t);
			if (!n) throw new TypeError("Invalid comparator: " + e);
			this.operator = void 0 !== n[1] ? n[1] : "", "=" === this.operator && (this.operator = ""), n[2] ? this.semver = new l(n[2], this.options.loose) : this.semver = i
		}
		toString() {
			return this.value
		}
		test(e) {
			if (c("Comparator.test", e, this.options.loose), this.semver === i || e === i) return !0;
			if ("string" == typeof e) try {
				e = new l(e, this.options)
			} catch (e) {
				return !1
			}
			return a(e, this.operator, this.semver, this.options)
		}
		intersects(e, t) {
			if (!(e instanceof Comparator)) throw new TypeError("a Comparator is required");
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), "" === this.operator) return "" === this.value || new u(e.value, t).test(this.value);
			if ("" === e.operator) return "" === e.value || new u(this.value, t).test(e.semver);
			const n = !(">=" !== this.operator && ">" !== this.operator || ">=" !== e.operator && ">" !== e.operator),
				i = !("<=" !== this.operator && "<" !== this.operator || "<=" !== e.operator && "<" !== e.operator),
				r = this.semver.version === e.semver.version,
				o = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== e.operator && "<=" !== e.operator),
				s = a(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator),
				c = a(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
			return n || i || r && o || s || c
		}
	}
	e.exports = Comparator;
	const r = n(38),
		{
			re: o,
			t: s
		} = n(26),
		a = n(82),
		c = n(37),
		l = n(4),
		u = n(10)
}, function(e, t, n) {
	const i = n(10);
	e.exports = (e, t, n) => {
		try {
			t = new i(t, n)
		} catch (e) {
			return !1
		}
		return t.test(e)
	}
}, function(e, t) {
	e.exports = require("electron-log")
}, function(e, t) {
	e.exports = require("electron-settings")
}, function(e, t) {
	e.exports = require("electron-fetch")
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.OSDWindow = void 0;
	const r = n(3),
		o = n(13),
		s = n(1),
		a = n(21),
		c = n(99),
		l = n(15),
		u = n(20),
		d = n(14);
	var h;
	! function(e) {
		e[e.NOTIFICATION = 0] = "NOTIFICATION", e[e.DEPTH = 1] = "DEPTH", e[e.CONVERGENCE = 2] = "CONVERGENCE"
	}(h || (h = {}));
	class OSDWindow {
		constructor() {
			this._log = r.LogIt.getInstance(), this._env = a.Env.getInstance(), this._admin = l.Admin.getInstance()
		}
		static getInstance() {
			return OSDWindow.instance || (OSDWindow.instance = new OSDWindow), OSDWindow.instance
		}
		show(e, t, n, i = null) {
			var r;
			let a, l, d = s.screen.getPrimaryDisplay().bounds,
				p = s.screen.getPrimaryDisplay().scaleFactor,
				f = s.screen.getPrimaryDisplay().scaleFactor,
				g = !1,
				m = null === (r = this.srNative) || void 0 === r ? void 0 : r.getSRMonitorRectangle();
			if (m && m.length > 0) {
				g = !0, this._log.writeLog(`[osdWindow] SR rect: ${m[0].left}, ${m[0].top}, ${m[0].right}, ${m[0].bottom}`);
				const e = m[0].top,
					t = m[0].bottom,
					n = m[0].left,
					i = m[0].right;
				s.screen.getAllDisplays().find(r => {
					this._log.writeLog(`[osdWindow] getAllDisplays: x=${r.bounds.x}, y=${r.bounds.y}, width=${r.bounds.width}, height=${r.bounds.height}, scale=${r.scaleFactor} }`), r.bounds.width * r.scaleFactor >= i - n && r.bounds.height * r.scaleFactor >= t - e && (this._log.writeLog(`[osdWindow] SR Display: x=${r.bounds.x}, y=${r.bounds.y}, width=${r.bounds.width}, height=${r.bounds.height}, scale=${r.scaleFactor} }`), p = r.scaleFactor, d = r.bounds, d.x < 0 && (d.x = Math.round(n / f)), d.y < 0 && (d.y = Math.round(e / f)))
				})
			} else this._log.writeLog("[osdWindow] no SR monitor");
			if ("stereo-info" === e) {
				this.osdName = "osd", OSDWindow.type = h.NOTIFICATION;
				let e = d;
				g || (e = u.isForegroudInFullscreen() ? s.screen.getPrimaryDisplay().bounds : s.screen.getPrimaryDisplay().workArea);
				const i = Math.round(20 / p);
				a = e.x + e.width - t - i, l = e.y + e.height - n - i, OSDWindow.osdReady = !0;
				const r = this.getStereoInfoBounds();
				r && (a = r.x, l = r.y, t = r.width, n = r.height)
			} else if ("depth" === e) {
				this.osdName = "osd", OSDWindow.type = h.DEPTH;
				const e = Math.round(160 / p);
				a = d.x + (d.width - t) / 2, l = d.y + (d.height - n - e), OSDWindow.osdReady = !1;
				const i = this.getDepthConvergenceBounds();
				i && (a = i.x, l = i.y, t = i.width, n = i.height)
			} else if ("convergence" === e) {
				this.osdName = "osd", OSDWindow.type = h.CONVERGENCE;
				const e = Math.round(160 / p);
				a = d.x + (d.width - t) / 2, l = d.y + (d.height - n - e), OSDWindow.osdReady = !1;
				const i = this.getDepthConvergenceBounds();
				i && (a = i.x, l = i.y, t = i.width, n = i.height)
			}
			let b = !1,
				y = o.get(this.osdName);
			const S = `${this._env.getLocalUrl()}#/${e}`;
			if (y) this._url !== S && (this._url = S, y.object.loadURL(S)), "stereo-info" === e && i && i.title && i.message && (y.object.data = i, y.object.loadURL(S)), y.object.setBounds({
				x: Math.round(a),
				y: Math.round(l),
				width: t,
				height: n
			}), OSDWindow.osdRectangle = y.object.getBounds();
			else {
				const r = o.createNew(this.osdName, "", S, !1, {
					width: t,
					height: n,
					x: Math.round(a),
					y: Math.round(l),
					frame: !1,
					webPreferences: {
						offscreen: !0,
						allowRunningInsecureContent: !0,
						nodeIntegration: !0,
						webviewTag: !0,
						enableRemoteModule: !0
					}
				});
				r.create(), "stereo-info" === e && i && i.title && i.message && (r.object.data = i), r.object.loadURL(S), OSDWindow.osdRectangle = r.object.getBounds(), b = !0, this._url = S, setTimeout(() => {
					r && r.object && r.object.webContents && r.object.webContents.on("paint", (e, t, n) => {
						if (OSDWindow.osdRectangle && n.getBitmap().toString("base64").match(/\w+/)) {
							if (!OSDWindow.osdReady) return;
							r && r.object && r.object.webContents && r.object.webContents.capturePage().then(e => {
								if (OSDWindow.osdRectangle) {
									this._log.writeLog("osd rectangle=" + JSON.stringify(OSDWindow.osdRectangle)), e = e.resize({
										width: OSDWindow.osdRectangle.width,
										height: OSDWindow.osdRectangle.height
									});
									const t = {
										cmd: "ShowNotification",
										x: OSDWindow.osdRectangle.x,
										y: OSDWindow.osdRectangle.y,
										data: e.getBitmap().toString("base64"),
										w: e.getSize().width,
										h: e.getSize().height,
										timeOut: 5e3,
										bg: this._admin.getBGColor()
									};
									try {
										if (OSDWindow.osdRectangle) {
											const e = c.CPHelper.getInstance().connect();
											e.setEncoding("utf8");
											const n = JSON.stringify(t) + "\r\n";
											this._log.writeLog("ShowNotification write data"), e.write(n), delete t.data, this._log.writeLog(JSON.stringify(t))
										}
									} catch (e) {
										this._log.writeLog("show paint write data: " + e)
									}
								}
							})
						}
					})
				}, 100), s.ipcMain.on("osd_finish", e => {
					OSDWindow.osdReady = !0
				})
			}
			return this._log.writeLog(`OSDWindow show: name=${e}, x=${a}, y=${l}, width=${t}, height=${n}, flag=${b}`), b
		}
		lazyLoading() {
			return i(this, void 0, void 0, (function*() {
				if (this._log.writeLog("lazyLoading in osdWindow"), !this.srNative) {
					this._log.writeLog("srNative lazyLoading in osdWindow");
					try {
						if (this.srNative = yield Promise.resolve().then(() => n(65)), !this.srNative || 0 === Object.keys(this.srNative).length) throw new Error("The specified module could not be found.")
					} catch (e) {
						this._log.writeLog("import sr-native failed: " + e)
					}
				}
			}))
		}
		close() {
			this.closeOSD(), this.closeStatus(), setTimeout(() => {
				c.CPHelper.getInstance().close()
			}, 500)
		}
		closeOSD() {
			OSDWindow.osdRectangle = void 0;
			let e = o.get("osd");
			if (e && e.object) {
				e.object.close();
				try {
					const e = c.CPHelper.getInstance().connect(),
						t = {
							cmd: "CloseForm"
						},
						n = JSON.stringify(t) + "\r\n";
					this._log.writeLog("OSDWindow close"), e.write(n)
				} catch (e) {
					this._log.writeLog("closeOSD write data: " + e)
				}
			}
		}
		closeStatus() {
			OSDWindow.statusRectangle = void 0;
			let e = o.get("status");
			if (e && e.object) {
				e.object.close();
				try {
					const e = c.CPHelper.getInstance().connect(),
						t = {
							cmd: "CloseStatus"
						},
						n = JSON.stringify(t) + "\r\n";
					this._log.writeLog("OSDStatusWindow close"), e.write(n)
				} catch (e) {
					this._log.writeLog("closeStatus write data: " + e)
				}
			}
		}
		getWin() {
			let e;
			const t = o.get("osd");
			return t && (e = t.object), e
		}
		getStatusWin() {
			let e;
			const t = o.get("status");
			return t && (e = t.object), e
		}
		showStereoInfo(e = null) {
			this.show("stereo-info", 440, 132, e)
		}
		adjustDepth(e) {
			this.show("depth", 120, 132) ? this.getWin().once("ready-to-show", t => i(this, void 0, void 0, (function*() {
				this.getWin() && this.getWin().webContents && this.getWin().webContents.send("adjust-depth", {
					depth: e
				})
			}))) : setTimeout(() => {
				this.getWin() && this.getWin().webContents && this.getWin().webContents.send("adjust-depth", {
					depth: e
				})
			}, 10)
		}
		adjustConvergence(e) {
			this.show("convergence", 120, 132) ? this.getWin().once("ready-to-show", t => i(this, void 0, void 0, (function*() {
				this.getWin() && this.getWin().webContents && this.getWin().webContents.send("adjust-convergence", {
					convergence: e
				})
			}))) : setTimeout(() => {
				this.getWin() && this.getWin().webContents && this.getWin().webContents.send("adjust-convergence", {
					convergence: e
				})
			}, 10)
		}
		showStatus(e) {
			var t;
			const n = "status";
			let i = 168,
				r = 112,
				a = this._admin.getOSDStatus();
			const l = this._admin.getOSDOpacity();
			if (e || "hide" !== a)
				if (e && ("show" === a ? a = "enlarge" : "enlarge" === a ? a = "hide" : "hide" === a && (a = "show"), this._admin.setOSDStatus(a)), "enlarge" === a ? r = 138 : "show" === a && (r = 112), "hide" === a) this.closeStatus();
				else {
					const e = this._admin.getOSDLocation();
					let u, d, h = s.screen.getPrimaryDisplay().bounds,
						p = s.screen.getPrimaryDisplay().scaleFactor,
						f = s.screen.getPrimaryDisplay().scaleFactor,
						g = null === (t = this.srNative) || void 0 === t ? void 0 : t.getSRMonitorRectangle();
					if (g && g.length > 0) {
						this._log.writeLog(`[osdWindow] SR rect: ${g[0].left}, ${g[0].top}, ${g[0].right}, ${g[0].bottom}`);
						const e = g[0].top,
							t = g[0].bottom,
							n = g[0].left,
							i = g[0].right;
						s.screen.getAllDisplays().find(r => {
							this._log.writeLog(`[osdWindow] getAllDisplays: x=${r.bounds.x}, y=${r.bounds.y}, width=${r.bounds.width}, height=${r.bounds.height}, scale=${r.scaleFactor} }`), r.bounds.width * r.scaleFactor >= i - n && r.bounds.height * r.scaleFactor >= t - e && (this._log.writeLog(`[osdWindow] SR Display: x=${r.bounds.x}, y=${r.bounds.y}, width=${r.bounds.width}, height=${r.bounds.height}, scale=${r.scaleFactor} }`), p = r.scaleFactor, h = r.bounds, h.x < 0 && (h.x = Math.round(n / f)), h.y < 0 && (h.y = Math.round(e / f)))
						})
					} else this._log.writeLog("[osdWindow] no SR monitor");
					const m = Math.round(40 / p);
					"leftup" === e ? (u = h.x + m, d = h.y + m) : "rightup" === e ? (u = h.x + (h.width - i - m), d = h.y + m) : "leftdown" === e ? (u = h.x + 40, d = h.y + (h.height - r - m)) : "rightdown" === e && (u = h.x + (h.width - i - m), d = h.y + (h.height - r - m));
					const b = this.getDepthConvergenceBounds();
					b && (u = b.x, d = b.y, i = b.width, r = b.height);
					let y = !1,
						S = o.get(n);
					const v = `${this._env.getLocalUrl()}#/${n}`;
					if (S) this._url !== v && (this._url = v, S.object.loadURL(v)), S.object.setBounds({
						x: Math.round(u),
						y: Math.round(d),
						width: i,
						height: r
					}), OSDWindow.statusRectangle = S.object.getBounds();
					else {
						const e = o.createNew(n, "", v, !1, {
							width: i,
							height: r,
							x: Math.round(u),
							y: Math.round(d),
							frame: !1,
							webPreferences: {
								offscreen: !0,
								allowRunningInsecureContent: !0,
								nodeIntegration: !0,
								webviewTag: !0,
								enableRemoteModule: !0
							}
						});
						e.create(), e.object.loadURL(v), OSDWindow.statusRectangle = e.object.getBounds(), y = !0, this._url = v, setTimeout(() => {
							e && e.object && e.object.webContents && e.object.webContents.on("paint", (t, n, i) => {
								OSDWindow.statusRectangle && i.getBitmap().toString("base64").match(/\w+/) && e && e.object && e.object.webContents && e.object.webContents.capturePage().then(e => {
									if (OSDWindow.statusRectangle) {
										this._log.writeLog("status rectangle=" + JSON.stringify(OSDWindow.statusRectangle)), e = e.resize({
											width: OSDWindow.statusRectangle.width,
											height: OSDWindow.statusRectangle.height
										});
										const t = {
											cmd: "ShowStatus",
											x: OSDWindow.statusRectangle.x,
											y: OSDWindow.statusRectangle.y,
											data: e.getBitmap().toString("base64"),
											w: e.getSize().width,
											h: e.getSize().height,
											opacity: l,
											bg: this._admin.getStatusBGColor()
										};
										try {
											if (OSDWindow.statusRectangle) {
												const e = c.CPHelper.getInstance().connect();
												e.setEncoding("utf8");
												const n = JSON.stringify(t) + "\r\n";
												this._log.writeLog("ShowStatus write data"), e.write(n), delete t.data, this._log.writeLog(JSON.stringify(t))
											}
										} catch (e) {
											this._log.writeLog("showStatus paint write data: " + e)
										}
									}
								})
							})
						}, 100)
					}
					this._log.writeLog(`OSD Status Window show: name=${n}, x=${u}, y=${d}, width=${i}, height=${r}, flag=${y}`), y || setTimeout(() => {
						this.getStatusWin() && this.getStatusWin().webContents && (this.getStatusWin().webContents.send("switch-status", {
							status: a
						}), this._log.writeLog("switch-status: " + a))
					}, 10)
				}
		}
		getRegistryValue(e, t) {
			let n = "",
				i = ["/c", "chcp", "65001>nul", "&&", "REG", "QUERY", e, "/v", t],
				r = d.spawnSync("CMD", i);
			if (!r.error) {
				n = String(r.stdout).replace(/\r\n/g, "").split("    ").pop()
			}
			return n
		}
		getStereoInfoBounds() {
			const e = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "OSD_Bounds");
			if (e && e.includes(",")) {
				const t = e.split(",");
				if (t.length >= 4) return {
					x: Number(t[0]),
					y: Number(t[1]),
					width: Number(t[2]),
					height: Number(t[3])
				}
			}
			return null
		}
		getStatusBounds() {
			const e = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "OSD_Bounds");
			if (e && e.includes(",")) {
				const t = e.split(",");
				if (t.length >= 8) return {
					x: Number(t[4]),
					y: Number(t[5]),
					width: Number(t[6]),
					height: Number(t[7])
				}
			}
			return null
		}
		getDepthConvergenceBounds() {
			const e = this.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "OSD_Bounds");
			if (e && e.includes(",")) {
				const t = e.split(",");
				if (t.length >= 12) return {
					x: Number(t[8]),
					y: Number(t[9]),
					width: Number(t[10]),
					height: Number(t[11])
				}
			}
			return null
		}
	}
	t.OSDWindow = OSDWindow, OSDWindow.osdReady = !0
}, function(e, t) {
	e.exports = require("node-fetch")
}, function(e, t) {
	e.exports = require("util")
}, function(e, t) {
	e.exports = require("os")
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.NoOpLogger = t.AppUpdater = void 0;
	const i = n(2),
		r = n(30),
		o = n(71),
		s = n(17),
		a = n(52),
		c = n(146),
		l = n(0),
		u = n(80),
		d = n(173),
		h = n(176),
		p = n(178),
		f = n(83),
		g = n(34),
		m = n(180);
	class AppUpdater extends o.EventEmitter {
		constructor(e, t) {
			super(), this.autoDownload = !0, this.autoInstallOnAppQuit = !0, this.allowPrerelease = !1, this.fullChangelog = !1, this.allowDowngrade = !1, this._channel = null, this.downloadedUpdateHelper = null, this.requestHeaders = null, this._logger = console, this.signals = new g.UpdaterSignal(this), this._appUpdateConfigPath = null, this.clientPromise = null, this.stagingUserIdPromise = new c.Lazy(() => this.getOrCreateStagingUserId()), this.configOnDisk = new c.Lazy(() => this.loadUpdateConfig()), this.checkForUpdatesPromise = null, this.updateInfoAndProvider = null, this._testOnlyOptions = null, this.on("error", e => {
				this._logger.error("Error: " + (e.stack || e.message))
			}), null == t ? (this.app = new h.ElectronAppAdapter, this.httpExecutor = new p.ElectronHttpExecutor((e, t) => this.emit("login", e, t))) : (this.app = t, this.httpExecutor = null);
			const n = this.app.version,
				r = u.parse(n);
			if (null == r) throw i.newError(`App version is not a valid semver version: "${n}"`, "ERR_UPDATER_INVALID_VERSION");
			this.currentVersion = r, this.allowPrerelease = function hasPrereleaseComponents(e) {
				const t = u.prerelease(e);
				return null != t && t.length > 0
			}(r), null != e && (this.setFeedURL(e), "string" != typeof e && e.requestHeaders && (this.requestHeaders = e.requestHeaders))
		}
		get channel() {
			return this._channel
		}
		set channel(e) {
			if (null != this._channel) {
				if ("string" != typeof e) throw i.newError("Channel must be a string, but got: " + e, "ERR_UPDATER_INVALID_CHANNEL");
				if (0 === e.length) throw i.newError("Channel must be not an empty string", "ERR_UPDATER_INVALID_CHANNEL")
			}
			this._channel = e, this.allowDowngrade = !0
		}
		get netSession() {
			return p.getNetSession()
		}
		get logger() {
			return this._logger
		}
		set logger(e) {
			this._logger = null == e ? new NoOpLogger : e
		}
		set updateConfigPath(e) {
			this.clientPromise = null, this._appUpdateConfigPath = e, this.configOnDisk = new c.Lazy(() => this.loadUpdateConfig())
		}
		getFeedURL() {
			return "Deprecated. Do not use it."
		}
		setFeedURL(e) {
			const t = this.createProviderRuntimeOptions();
			let n;
			n = "string" == typeof e ? new f.GenericProvider({
				provider: "generic",
				url: e
			}, this, {
				...t,
				isUseMultipleRangeRequest: m.isUrlProbablySupportMultiRangeRequests(e)
			}) : m.createClient(e, this, t), this.clientPromise = Promise.resolve(n)
		}
		checkForUpdates() {
			let e = this.checkForUpdatesPromise;
			if (null != e) return this._logger.info("Checking for update (already in progress)"), e;
			const nullizePromise = () => this.checkForUpdatesPromise = null;
			return this._logger.info("Checking for update"), e = this.doCheckForUpdates().then(e => (nullizePromise(), e)).catch(e => {
				throw nullizePromise(), this.emit("error", e, "Cannot check for updates: " + (e.stack || e).toString()), e
			}), this.checkForUpdatesPromise = e, e
		}
		isUpdaterActive() {
			return !!this.app.isPackaged || (this._logger.info("Skip checkForUpdatesAndNotify because application is not packed"), !1)
		}
		checkForUpdatesAndNotify(e) {
			return this.isUpdaterActive() ? this.checkForUpdates().then(t => {
				const i = t.downloadPromise;
				return null == i ? (null != this._logger.debug && this._logger.debug("checkForUpdatesAndNotify called, downloadPromise is null"), t) : (i.then(() => {
					const i = AppUpdater.formatDownloadNotification(t.updateInfo.version, this.app.name, e);
					new(n(1).Notification)(i).show()
				}), t)
			}) : Promise.resolve(null)
		}
		static formatDownloadNotification(e, t, n) {
			return null == n && (n = {
				title: "A new update is ready to install",
				body: "{appName} version {version} has been downloaded and will be automatically installed on exit"
			}), n = {
				title: n.title.replace("{appName}", t).replace("{version}", e),
				body: n.body.replace("{appName}", t).replace("{version}", e)
			}
		}
		async isStagingMatch(e) {
			const t = e.stagingPercentage;
			let n = t;
			if (null == n) return !0;
			if (n = parseInt(n, 10), isNaN(n)) return this._logger.warn("Staging percentage is NaN: " + t), !0;
			n /= 100;
			const r = await this.stagingUserIdPromise.value,
				o = i.UUID.parse(r).readUInt32BE(12) / 4294967295;
			return this._logger.info(`Staging percentage: ${n}, percentage: ${o}, user id: ${r}`), o < n
		}
		computeFinalHeaders(e) {
			return null != this.requestHeaders && Object.assign(e, this.requestHeaders), e
		}
		async isUpdateAvailable(e) {
			const t = u.parse(e.version);
			if (null == t) throw i.newError(`This file could not be downloaded, or the latest version (from update server) does not have a valid semver version: "${e.version}"`, "ERR_UPDATER_INVALID_VERSION");
			const n = this.currentVersion;
			if (u.eq(t, n)) return !1;
			if (!await this.isStagingMatch(e)) return !1;
			const r = u.gt(t, n),
				o = u.lt(t, n);
			return !!r || this.allowDowngrade && o
		}
		async getUpdateInfoAndProvider() {
			await this.app.whenReady(), null == this.clientPromise && (this.clientPromise = this.configOnDisk.value.then(e => m.createClient(e, this, this.createProviderRuntimeOptions())));
			const e = await this.clientPromise,
				t = await this.stagingUserIdPromise.value;
			return e.setRequestHeaders(this.computeFinalHeaders({
				"x-user-staging-id": t
			})), {
				info: await e.getLatestVersion(),
				provider: e
			}
		}
		createProviderRuntimeOptions() {
			return {
				isUseMultipleRangeRequest: !0,
				platform: null == this._testOnlyOptions ? process.platform : this._testOnlyOptions.platform,
				executor: this.httpExecutor
			}
		}
		async doCheckForUpdates() {
			this.emit("checking-for-update");
			const e = await this.getUpdateInfoAndProvider(),
				t = e.info;
			if (!await this.isUpdateAvailable(t)) return this._logger.info(`Update for version ${this.currentVersion} is not available (latest version: ${t.version}, downgrade is ${this.allowDowngrade?"allowed":"disallowed"}).`), this.emit("update-not-available", t), {
				versionInfo: t,
				updateInfo: t
			};
			this.updateInfoAndProvider = e, this.onUpdateAvailable(t);
			const n = new i.CancellationToken;
			return {
				versionInfo: t,
				updateInfo: t,
				cancellationToken: n,
				downloadPromise: this.autoDownload ? this.downloadUpdate(n) : null
			}
		}
		onUpdateAvailable(e) {
			this._logger.info(`Found version ${e.version} (url: ${i.asArray(e.files).map(e=>e.url).join(", ")})`), this.emit("update-available", e)
		}
		downloadUpdate(e = new i.CancellationToken) {
			const t = this.updateInfoAndProvider;
			if (null == t) {
				const e = new Error("Please check update first");
				return this.dispatchError(e), Promise.reject(e)
			}
			this._logger.info("Downloading update from " + i.asArray(t.info.files).map(e => e.url).join(", "));
			const errorHandler = e => {
				if (!(e instanceof i.CancellationError)) try {
					this.dispatchError(e)
				} catch (e) {
					this._logger.warn("Cannot dispatch error event: " + (e.stack || e))
				}
				return e
			};
			try {
				return this.doDownloadUpdate({
					updateInfoAndProvider: t,
					requestHeaders: this.computeRequestHeaders(t.provider),
					cancellationToken: e
				}).catch(e => {
					throw errorHandler(e)
				})
			} catch (e) {
				return Promise.reject(errorHandler(e))
			}
		}
		dispatchError(e) {
			this.emit("error", e, (e.stack || e).toString())
		}
		dispatchUpdateDownloaded(e) {
			this.emit(g.UPDATE_DOWNLOADED, e)
		}
		async loadUpdateConfig() {
			return null == this._appUpdateConfigPath && (this._appUpdateConfigPath = this.app.appUpdateConfigPath), a.load(await s.readFile(this._appUpdateConfigPath, "utf-8"))
		}
		computeRequestHeaders(e) {
			const t = e.fileExtraDownloadHeaders;
			if (null != t) {
				const e = this.requestHeaders;
				return null == e ? t : {
					...t,
					...e
				}
			}
			return this.computeFinalHeaders({
				accept: "*/*"
			})
		}
		async getOrCreateStagingUserId() {
			const e = l.join(this.app.userDataPath, ".updaterId");
			try {
				const t = await s.readFile(e, "utf-8");
				if (i.UUID.check(t)) return t;
				this._logger.warn("Staging user id file exists, but content was invalid: " + t)
			} catch (e) {
				"ENOENT" !== e.code && this._logger.warn("Couldn't read staging user ID, creating a blank one: " + e)
			}
			const t = i.UUID.v5(r.randomBytes(4096), i.UUID.OID);
			this._logger.info("Generated new staging user ID: " + t);
			try {
				await s.outputFile(e, t)
			} catch (e) {
				this._logger.warn("Couldn't write out staging user ID: " + e)
			}
			return t
		}
		get isAddNoCacheQuery() {
			const e = this.requestHeaders;
			if (null == e) return !0;
			for (const t of Object.keys(e)) {
				const e = t.toLowerCase();
				if ("authorization" === e || "private-token" === e) return !1
			}
			return !0
		}
		async getOrCreateDownloadHelper() {
			let e = this.downloadedUpdateHelper;
			if (null == e) {
				const t = (await this.configOnDisk.value).updaterCacheDirName,
					n = this._logger;
				null == t && n.error("updaterCacheDirName is not specified in app-update.yml Was app build using at least electron-builder 20.34.0?");
				const i = l.join(this.app.baseCachePath, t || this.app.name);
				null != n.debug && n.debug("updater cache dir: " + i), e = new d.DownloadedUpdateHelper(i), this.downloadedUpdateHelper = e
			}
			return e
		}
		async executeDownload(e) {
			const t = e.fileInfo,
				n = {
					headers: e.downloadUpdateOptions.requestHeaders,
					cancellationToken: e.downloadUpdateOptions.cancellationToken,
					sha2: t.info.sha2,
					sha512: t.info.sha512
				};
			this.listenerCount(g.DOWNLOAD_PROGRESS) > 0 && (n.onProgress = e => this.emit(g.DOWNLOAD_PROGRESS, e));
			const r = e.downloadUpdateOptions.updateInfoAndProvider.info,
				o = r.version,
				a = t.packageInfo;
			const c = await this.getOrCreateDownloadHelper(),
				u = c.cacheDirForPendingUpdate;
			await s.ensureDir(u);
			const h = function getCacheUpdateFileName() {
				const t = decodeURIComponent(e.fileInfo.url.pathname);
				return t.endsWith("." + e.fileExtension) ? l.posix.basename(t) : "update." + e.fileExtension
			}();
			let p = l.join(u, h);
			const f = null == a ? null : l.join(u, `package-${o}${l.extname(a.path)||".7z"}`),
				done = async n => (await c.setDownloadedFile(p, f, r, t, h, n), await e.done({
					...r,
					downloadedFile: p
				}), null == f ? [p] : [p, f]), m = this._logger, b = await c.validateDownloadedPath(p, r, t, m);
			if (null != b) return p = b, await done(!1);
			const removeFileIfAny = async () => (await c.clear().catch(() => {}), await s.unlink(p).catch(() => {})), y = await d.createTempUpdateFile("temp-" + h, u, m);
			try {
				await e.task(y, n, f, removeFileIfAny), await s.rename(y, p)
			} catch (e) {
				throw await removeFileIfAny(), e instanceof i.CancellationError && (m.info("cancelled"), this.emit("update-cancelled", r)), e
			}
			return m.info(`New version ${o} has been downloaded to ${p}`), await done(!0)
		}
	}
	t.AppUpdater = AppUpdater;
	class NoOpLogger {
		info(e) {}
		warn(e) {}
		error(e) {}
	}
	t.NoOpLogger = NoOpLogger
}, function(e, t) {
	e.exports = {
		stringify: function stringify(e, {
			EOL: t = "\n",
			finalEOL: n = !0,
			replacer: i = null,
			spaces: r
		} = {}) {
			const o = n ? t : "";
			return JSON.stringify(e, i, r).replace(/\n/g, t) + o
		},
		stripBom: function stripBom(e) {
			return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "")
		}
	}
}, function(e, t, n) {
	"use strict";
	const i = n(8).fromCallback,
		r = n(6),
		o = n(0),
		s = n(12),
		a = n(18).pathExists;
	e.exports = {
		outputFile: i((function outputFile(e, t, n, i) {
			"function" == typeof n && (i = n, n = "utf8");
			const c = o.dirname(e);
			a(c, (o, a) => o ? i(o) : a ? r.writeFile(e, t, n, i) : void s.mkdirs(c, o => {
				if (o) return i(o);
				r.writeFile(e, t, n, i)
			}))
		})),
		outputFileSync: function outputFileSync(e, ...t) {
			const n = o.dirname(e);
			if (r.existsSync(n)) return r.writeFileSync(e, ...t);
			s.mkdirsSync(n), r.writeFileSync(e, ...t)
		}
	}
}, function(e, t, n) {
	"use strict";

	function isNothing(e) {
		return null == e
	}
	n.r(t), n.d(t, "CORE_SCHEMA", (function() {
		return re
	})), n.d(t, "DEFAULT_SCHEMA", (function() {
		return oe
	})), n.d(t, "FAILSAFE_SCHEMA", (function() {
		return ne
	})), n.d(t, "JSON_SCHEMA", (function() {
		return ie
	})), n.d(t, "Schema", (function() {
		return te
	})), n.d(t, "Type", (function() {
		return ee
	})), n.d(t, "YAMLException", (function() {
		return le
	})), n.d(t, "dump", (function() {
		return ce
	})), n.d(t, "load", (function() {
		return se
	})), n.d(t, "loadAll", (function() {
		return ae
	})), n.d(t, "safeDump", (function() {
		return pe
	})), n.d(t, "safeLoad", (function() {
		return de
	})), n.d(t, "safeLoadAll", (function() {
		return he
	})), n.d(t, "types", (function() {
		return ue
	}));
	var i = {
		isNothing: isNothing,
		isObject: function isObject(e) {
			return "object" == typeof e && null !== e
		},
		toArray: function toArray(e) {
			return Array.isArray(e) ? e : isNothing(e) ? [] : [e]
		},
		repeat: function repeat(e, t) {
			var n, i = "";
			for (n = 0; n < t; n += 1) i += e;
			return i
		},
		isNegativeZero: function isNegativeZero(e) {
			return 0 === e && Number.NEGATIVE_INFINITY === 1 / e
		},
		extend: function extend(e, t) {
			var n, i, r, o;
			if (t)
				for (n = 0, i = (o = Object.keys(t)).length; n < i; n += 1) e[r = o[n]] = t[r];
			return e
		}
	};

	function formatError(e, t) {
		var n = "",
			i = e.reason || "(unknown reason)";
		return e.mark ? (e.mark.name && (n += 'in "' + e.mark.name + '" '), n += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (n += "\n\n" + e.mark.snippet), i + " " + n) : i
	}

	function YAMLException$1(e, t) {
		Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = formatError(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack || ""
	}
	YAMLException$1.prototype = Object.create(Error.prototype), YAMLException$1.prototype.constructor = YAMLException$1, YAMLException$1.prototype.toString = function toString(e) {
		return this.name + ": " + formatError(this, e)
	};
	var r = YAMLException$1;

	function getLine(e, t, n, i, r) {
		var o = "",
			s = "",
			a = Math.floor(r / 2) - 1;
		return i - t > a && (t = i - a + (o = " ... ").length), n - i > a && (n = i + a - (s = " ...").length), {
			str: o + e.slice(t, n).replace(/\t/g, "→") + s,
			pos: i - t + o.length
		}
	}

	function padStart(e, t) {
		return i.repeat(" ", t - e.length) + e
	}
	var o = function makeSnippet(e, t) {
			if (t = Object.create(t || null), !e.buffer) return null;
			t.maxLength || (t.maxLength = 79), "number" != typeof t.indent && (t.indent = 1), "number" != typeof t.linesBefore && (t.linesBefore = 3), "number" != typeof t.linesAfter && (t.linesAfter = 2);
			for (var n, r = /\r?\n|\r|\0/g, o = [0], s = [], a = -1; n = r.exec(e.buffer);) s.push(n.index), o.push(n.index + n[0].length), e.position <= n.index && a < 0 && (a = o.length - 2);
			a < 0 && (a = o.length - 1);
			var c, l, u = "",
				d = Math.min(e.line + t.linesAfter, s.length).toString().length,
				h = t.maxLength - (t.indent + d + 3);
			for (c = 1; c <= t.linesBefore && !(a - c < 0); c++) l = getLine(e.buffer, o[a - c], s[a - c], e.position - (o[a] - o[a - c]), h), u = i.repeat(" ", t.indent) + padStart((e.line - c + 1).toString(), d) + " | " + l.str + "\n" + u;
			for (l = getLine(e.buffer, o[a], s[a], e.position, h), u += i.repeat(" ", t.indent) + padStart((e.line + 1).toString(), d) + " | " + l.str + "\n", u += i.repeat("-", t.indent + d + 3 + l.pos) + "^\n", c = 1; c <= t.linesAfter && !(a + c >= s.length); c++) l = getLine(e.buffer, o[a + c], s[a + c], e.position - (o[a] - o[a + c]), h), u += i.repeat(" ", t.indent) + padStart((e.line + c + 1).toString(), d) + " | " + l.str + "\n";
			return u.replace(/\n$/, "")
		},
		s = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"],
		a = ["scalar", "sequence", "mapping"];
	var c = function Type$1(e, t) {
		if (t = t || {}, Object.keys(t).forEach((function(t) {
				if (-1 === s.indexOf(t)) throw new r('Unknown option "' + t + '" is met in definition of "' + e + '" YAML type.')
			})), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
				return !0
			}, this.construct = t.construct || function(e) {
				return e
			}, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = function compileStyleAliases(e) {
				var t = {};
				return null !== e && Object.keys(e).forEach((function(n) {
					e[n].forEach((function(e) {
						t[String(e)] = n
					}))
				})), t
			}(t.styleAliases || null), -1 === a.indexOf(this.kind)) throw new r('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.')
	};

	function compileList(e, t) {
		var n = [];
		return e[t].forEach((function(e) {
			var t = n.length;
			n.forEach((function(n, i) {
				n.tag === e.tag && n.kind === e.kind && n.multi === e.multi && (t = i)
			})), n[t] = e
		})), n
	}

	function Schema$1(e) {
		return this.extend(e)
	}
	Schema$1.prototype.extend = function extend(e) {
		var t = [],
			n = [];
		if (e instanceof c) n.push(e);
		else if (Array.isArray(e)) n = n.concat(e);
		else {
			if (!e || !Array.isArray(e.implicit) && !Array.isArray(e.explicit)) throw new r("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
			e.implicit && (t = t.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit))
		}
		t.forEach((function(e) {
			if (!(e instanceof c)) throw new r("Specified list of YAML types (or a single Type object) contains a non-Type object.");
			if (e.loadKind && "scalar" !== e.loadKind) throw new r("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
			if (e.multi) throw new r("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")
		})), n.forEach((function(e) {
			if (!(e instanceof c)) throw new r("Specified list of YAML types (or a single Type object) contains a non-Type object.")
		}));
		var i = Object.create(Schema$1.prototype);
		return i.implicit = (this.implicit || []).concat(t), i.explicit = (this.explicit || []).concat(n), i.compiledImplicit = compileList(i, "implicit"), i.compiledExplicit = compileList(i, "explicit"), i.compiledTypeMap = function compileMap() {
			var e, t, n = {
				scalar: {},
				sequence: {},
				mapping: {},
				fallback: {},
				multi: {
					scalar: [],
					sequence: [],
					mapping: [],
					fallback: []
				}
			};

			function collectType(e) {
				e.multi ? (n.multi[e.kind].push(e), n.multi.fallback.push(e)) : n[e.kind][e.tag] = n.fallback[e.tag] = e
			}
			for (e = 0, t = arguments.length; e < t; e += 1) arguments[e].forEach(collectType);
			return n
		}(i.compiledImplicit, i.compiledExplicit), i
	};
	var l = Schema$1,
		u = new c("tag:yaml.org,2002:str", {
			kind: "scalar",
			construct: function(e) {
				return null !== e ? e : ""
			}
		}),
		d = new c("tag:yaml.org,2002:seq", {
			kind: "sequence",
			construct: function(e) {
				return null !== e ? e : []
			}
		}),
		h = new c("tag:yaml.org,2002:map", {
			kind: "mapping",
			construct: function(e) {
				return null !== e ? e : {}
			}
		}),
		p = new l({
			explicit: [u, d, h]
		});
	var f = new c("tag:yaml.org,2002:null", {
		kind: "scalar",
		resolve: function resolveYamlNull(e) {
			if (null === e) return !0;
			var t = e.length;
			return 1 === t && "~" === e || 4 === t && ("null" === e || "Null" === e || "NULL" === e)
		},
		construct: function constructYamlNull() {
			return null
		},
		predicate: function isNull(e) {
			return null === e
		},
		represent: {
			canonical: function() {
				return "~"
			},
			lowercase: function() {
				return "null"
			},
			uppercase: function() {
				return "NULL"
			},
			camelcase: function() {
				return "Null"
			},
			empty: function() {
				return ""
			}
		},
		defaultStyle: "lowercase"
	});
	var g = new c("tag:yaml.org,2002:bool", {
		kind: "scalar",
		resolve: function resolveYamlBoolean(e) {
			if (null === e) return !1;
			var t = e.length;
			return 4 === t && ("true" === e || "True" === e || "TRUE" === e) || 5 === t && ("false" === e || "False" === e || "FALSE" === e)
		},
		construct: function constructYamlBoolean(e) {
			return "true" === e || "True" === e || "TRUE" === e
		},
		predicate: function isBoolean(e) {
			return "[object Boolean]" === Object.prototype.toString.call(e)
		},
		represent: {
			lowercase: function(e) {
				return e ? "true" : "false"
			},
			uppercase: function(e) {
				return e ? "TRUE" : "FALSE"
			},
			camelcase: function(e) {
				return e ? "True" : "False"
			}
		},
		defaultStyle: "lowercase"
	});

	function isOctCode(e) {
		return 48 <= e && e <= 55
	}

	function isDecCode(e) {
		return 48 <= e && e <= 57
	}
	var m = new c("tag:yaml.org,2002:int", {
			kind: "scalar",
			resolve: function resolveYamlInteger(e) {
				if (null === e) return !1;
				var t, n, i = e.length,
					r = 0,
					o = !1;
				if (!i) return !1;
				if ("-" !== (t = e[r]) && "+" !== t || (t = e[++r]), "0" === t) {
					if (r + 1 === i) return !0;
					if ("b" === (t = e[++r])) {
						for (r++; r < i; r++)
							if ("_" !== (t = e[r])) {
								if ("0" !== t && "1" !== t) return !1;
								o = !0
							} return o && "_" !== t
					}
					if ("x" === t) {
						for (r++; r < i; r++)
							if ("_" !== (t = e[r])) {
								if (!(48 <= (n = e.charCodeAt(r)) && n <= 57 || 65 <= n && n <= 70 || 97 <= n && n <= 102)) return !1;
								o = !0
							} return o && "_" !== t
					}
					if ("o" === t) {
						for (r++; r < i; r++)
							if ("_" !== (t = e[r])) {
								if (!isOctCode(e.charCodeAt(r))) return !1;
								o = !0
							} return o && "_" !== t
					}
				}
				if ("_" === t) return !1;
				for (; r < i; r++)
					if ("_" !== (t = e[r])) {
						if (!isDecCode(e.charCodeAt(r))) return !1;
						o = !0
					} return !(!o || "_" === t)
			},
			construct: function constructYamlInteger(e) {
				var t, n = e,
					i = 1;
				if (-1 !== n.indexOf("_") && (n = n.replace(/_/g, "")), "-" !== (t = n[0]) && "+" !== t || ("-" === t && (i = -1), t = (n = n.slice(1))[0]), "0" === n) return 0;
				if ("0" === t) {
					if ("b" === n[1]) return i * parseInt(n.slice(2), 2);
					if ("x" === n[1]) return i * parseInt(n.slice(2), 16);
					if ("o" === n[1]) return i * parseInt(n.slice(2), 8)
				}
				return i * parseInt(n, 10)
			},
			predicate: function isInteger(e) {
				return "[object Number]" === Object.prototype.toString.call(e) && e % 1 == 0 && !i.isNegativeZero(e)
			},
			represent: {
				binary: function(e) {
					return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1)
				},
				octal: function(e) {
					return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1)
				},
				decimal: function(e) {
					return e.toString(10)
				},
				hexadecimal: function(e) {
					return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1)
				}
			},
			defaultStyle: "decimal",
			styleAliases: {
				binary: [2, "bin"],
				octal: [8, "oct"],
				decimal: [10, "dec"],
				hexadecimal: [16, "hex"]
			}
		}),
		b = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
	var y = /^[-+]?[0-9]+e/;
	var S = new c("tag:yaml.org,2002:float", {
			kind: "scalar",
			resolve: function resolveYamlFloat(e) {
				return null !== e && !(!b.test(e) || "_" === e[e.length - 1])
			},
			construct: function constructYamlFloat(e) {
				var t, n;
				return n = "-" === (t = e.replace(/_/g, "").toLowerCase())[0] ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), ".inf" === t ? 1 === n ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : ".nan" === t ? NaN : n * parseFloat(t, 10)
			},
			predicate: function isFloat(e) {
				return "[object Number]" === Object.prototype.toString.call(e) && (e % 1 != 0 || i.isNegativeZero(e))
			},
			represent: function representYamlFloat(e, t) {
				var n;
				if (isNaN(e)) switch (t) {
					case "lowercase":
						return ".nan";
					case "uppercase":
						return ".NAN";
					case "camelcase":
						return ".NaN"
				} else if (Number.POSITIVE_INFINITY === e) switch (t) {
					case "lowercase":
						return ".inf";
					case "uppercase":
						return ".INF";
					case "camelcase":
						return ".Inf"
				} else if (Number.NEGATIVE_INFINITY === e) switch (t) {
					case "lowercase":
						return "-.inf";
					case "uppercase":
						return "-.INF";
					case "camelcase":
						return "-.Inf"
				} else if (i.isNegativeZero(e)) return "-0.0";
				return n = e.toString(10), y.test(n) ? n.replace("e", ".e") : n
			},
			defaultStyle: "lowercase"
		}),
		v = p.extend({
			implicit: [f, g, m, S]
		}),
		_ = v,
		E = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
		D = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
	var A = new c("tag:yaml.org,2002:timestamp", {
		kind: "scalar",
		resolve: function resolveYamlTimestamp(e) {
			return null !== e && (null !== E.exec(e) || null !== D.exec(e))
		},
		construct: function constructYamlTimestamp(e) {
			var t, n, i, r, o, s, a, c, l = 0,
				u = null;
			if (null === (t = E.exec(e)) && (t = D.exec(e)), null === t) throw new Error("Date resolve error");
			if (n = +t[1], i = +t[2] - 1, r = +t[3], !t[4]) return new Date(Date.UTC(n, i, r));
			if (o = +t[4], s = +t[5], a = +t[6], t[7]) {
				for (l = t[7].slice(0, 3); l.length < 3;) l += "0";
				l = +l
			}
			return t[9] && (u = 6e4 * (60 * +t[10] + +(t[11] || 0)), "-" === t[9] && (u = -u)), c = new Date(Date.UTC(n, i, r, o, s, a, l)), u && c.setTime(c.getTime() - u), c
		},
		instanceOf: Date,
		represent: function representYamlTimestamp(e) {
			return e.toISOString()
		}
	});
	var k = new c("tag:yaml.org,2002:merge", {
			kind: "scalar",
			resolve: function resolveYamlMerge(e) {
				return "<<" === e || null === e
			}
		}),
		C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
	var I = new c("tag:yaml.org,2002:binary", {
			kind: "scalar",
			resolve: function resolveYamlBinary(e) {
				if (null === e) return !1;
				var t, n, i = 0,
					r = e.length,
					o = C;
				for (n = 0; n < r; n++)
					if (!((t = o.indexOf(e.charAt(n))) > 64)) {
						if (t < 0) return !1;
						i += 6
					} return i % 8 == 0
			},
			construct: function constructYamlBinary(e) {
				var t, n, i = e.replace(/[\r\n=]/g, ""),
					r = i.length,
					o = C,
					s = 0,
					a = [];
				for (t = 0; t < r; t++) t % 4 == 0 && t && (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(255 & s)), s = s << 6 | o.indexOf(i.charAt(t));
				return 0 === (n = r % 4 * 6) ? (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(255 & s)) : 18 === n ? (a.push(s >> 10 & 255), a.push(s >> 2 & 255)) : 12 === n && a.push(s >> 4 & 255), new Uint8Array(a)
			},
			predicate: function isBinary(e) {
				return "[object Uint8Array]" === Object.prototype.toString.call(e)
			},
			represent: function representYamlBinary(e) {
				var t, n, i = "",
					r = 0,
					o = e.length,
					s = C;
				for (t = 0; t < o; t++) t % 3 == 0 && t && (i += s[r >> 18 & 63], i += s[r >> 12 & 63], i += s[r >> 6 & 63], i += s[63 & r]), r = (r << 8) + e[t];
				return 0 === (n = o % 3) ? (i += s[r >> 18 & 63], i += s[r >> 12 & 63], i += s[r >> 6 & 63], i += s[63 & r]) : 2 === n ? (i += s[r >> 10 & 63], i += s[r >> 4 & 63], i += s[r << 2 & 63], i += s[64]) : 1 === n && (i += s[r >> 2 & 63], i += s[r << 4 & 63], i += s[64], i += s[64]), i
			}
		}),
		O = Object.prototype.hasOwnProperty,
		T = Object.prototype.toString;
	var x = new c("tag:yaml.org,2002:omap", {
			kind: "sequence",
			resolve: function resolveYamlOmap(e) {
				if (null === e) return !0;
				var t, n, i, r, o, s = [],
					a = e;
				for (t = 0, n = a.length; t < n; t += 1) {
					if (i = a[t], o = !1, "[object Object]" !== T.call(i)) return !1;
					for (r in i)
						if (O.call(i, r)) {
							if (o) return !1;
							o = !0
						} if (!o) return !1;
					if (-1 !== s.indexOf(r)) return !1;
					s.push(r)
				}
				return !0
			},
			construct: function constructYamlOmap(e) {
				return null !== e ? e : []
			}
		}),
		L = Object.prototype.toString;
	var N = new c("tag:yaml.org,2002:pairs", {
			kind: "sequence",
			resolve: function resolveYamlPairs(e) {
				if (null === e) return !0;
				var t, n, i, r, o, s = e;
				for (o = new Array(s.length), t = 0, n = s.length; t < n; t += 1) {
					if (i = s[t], "[object Object]" !== L.call(i)) return !1;
					if (1 !== (r = Object.keys(i)).length) return !1;
					o[t] = [r[0], i[r[0]]]
				}
				return !0
			},
			construct: function constructYamlPairs(e) {
				if (null === e) return [];
				var t, n, i, r, o, s = e;
				for (o = new Array(s.length), t = 0, n = s.length; t < n; t += 1) i = s[t], r = Object.keys(i), o[t] = [r[0], i[r[0]]];
				return o
			}
		}),
		R = Object.prototype.hasOwnProperty;
	var P = new c("tag:yaml.org,2002:set", {
			kind: "mapping",
			resolve: function resolveYamlSet(e) {
				if (null === e) return !0;
				var t, n = e;
				for (t in n)
					if (R.call(n, t) && null !== n[t]) return !1;
				return !0
			},
			construct: function constructYamlSet(e) {
				return null !== e ? e : {}
			}
		}),
		M = _.extend({
			implicit: [A, k],
			explicit: [I, x, N, P]
		}),
		U = Object.prototype.hasOwnProperty,
		j = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
		W = /[\x85\u2028\u2029]/,
		B = /[,\[\]\{\}]/,
		V = /^(?:!|!!|![a-z\-]+!)$/i,
		z = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;

	function _class(e) {
		return Object.prototype.toString.call(e)
	}

	function is_EOL(e) {
		return 10 === e || 13 === e
	}

	function is_WHITE_SPACE(e) {
		return 9 === e || 32 === e
	}

	function is_WS_OR_EOL(e) {
		return 9 === e || 32 === e || 10 === e || 13 === e
	}

	function is_FLOW_INDICATOR(e) {
		return 44 === e || 91 === e || 93 === e || 123 === e || 125 === e
	}

	function fromHexCode(e) {
		var t;
		return 48 <= e && e <= 57 ? e - 48 : 97 <= (t = 32 | e) && t <= 102 ? t - 97 + 10 : -1
	}

	function simpleEscapeSequence(e) {
		return 48 === e ? "\0" : 97 === e ? "" : 98 === e ? "\b" : 116 === e || 9 === e ? "\t" : 110 === e ? "\n" : 118 === e ? "\v" : 102 === e ? "\f" : 114 === e ? "\r" : 101 === e ? "" : 32 === e ? " " : 34 === e ? '"' : 47 === e ? "/" : 92 === e ? "\\" : 78 === e ? "" : 95 === e ? " " : 76 === e ? "\u2028" : 80 === e ? "\u2029" : ""
	}

	function charFromCodepoint(e) {
		return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10), 56320 + (e - 65536 & 1023))
	}
	for (var $ = new Array(256), H = new Array(256), G = 0; G < 256; G++) $[G] = simpleEscapeSequence(G) ? 1 : 0, H[G] = simpleEscapeSequence(G);

	function State$1(e, t) {
		this.input = e, this.filename = t.filename || null, this.schema = t.schema || M, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = []
	}

	function generateError(e, t) {
		var n = {
			name: e.filename,
			buffer: e.input.slice(0, -1),
			position: e.position,
			line: e.line,
			column: e.position - e.lineStart
		};
		return n.snippet = o(n), new r(t, n)
	}

	function throwError(e, t) {
		throw generateError(e, t)
	}

	function throwWarning(e, t) {
		e.onWarning && e.onWarning.call(null, generateError(e, t))
	}
	var q = {
		YAML: function handleYamlDirective(e, t, n) {
			var i, r, o;
			null !== e.version && throwError(e, "duplication of %YAML directive"), 1 !== n.length && throwError(e, "YAML directive accepts exactly one argument"), null === (i = /^([0-9]+)\.([0-9]+)$/.exec(n[0])) && throwError(e, "ill-formed argument of the YAML directive"), r = parseInt(i[1], 10), o = parseInt(i[2], 10), 1 !== r && throwError(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, 1 !== o && 2 !== o && throwWarning(e, "unsupported YAML version of the document")
		},
		TAG: function handleTagDirective(e, t, n) {
			var i, r;
			2 !== n.length && throwError(e, "TAG directive accepts exactly two arguments"), i = n[0], r = n[1], V.test(i) || throwError(e, "ill-formed tag handle (first argument) of the TAG directive"), U.call(e.tagMap, i) && throwError(e, 'there is a previously declared suffix for "' + i + '" tag handle'), z.test(r) || throwError(e, "ill-formed tag prefix (second argument) of the TAG directive");
			try {
				r = decodeURIComponent(r)
			} catch (t) {
				throwError(e, "tag prefix is malformed: " + r)
			}
			e.tagMap[i] = r
		}
	};

	function captureSegment(e, t, n, i) {
		var r, o, s, a;
		if (t < n) {
			if (a = e.input.slice(t, n), i)
				for (r = 0, o = a.length; r < o; r += 1) 9 === (s = a.charCodeAt(r)) || 32 <= s && s <= 1114111 || throwError(e, "expected valid JSON character");
			else j.test(a) && throwError(e, "the stream contains non-printable characters");
			e.result += a
		}
	}

	function mergeMappings(e, t, n, r) {
		var o, s, a, c;
		for (i.isObject(n) || throwError(e, "cannot merge mappings; the provided source object is unacceptable"), a = 0, c = (o = Object.keys(n)).length; a < c; a += 1) s = o[a], U.call(t, s) || (t[s] = n[s], r[s] = !0)
	}

	function storeMappingPair(e, t, n, i, r, o, s, a, c) {
		var l, u;
		if (Array.isArray(r))
			for (l = 0, u = (r = Array.prototype.slice.call(r)).length; l < u; l += 1) Array.isArray(r[l]) && throwError(e, "nested arrays are not supported inside keys"), "object" == typeof r && "[object Object]" === _class(r[l]) && (r[l] = "[object Object]");
		if ("object" == typeof r && "[object Object]" === _class(r) && (r = "[object Object]"), r = String(r), null === t && (t = {}), "tag:yaml.org,2002:merge" === i)
			if (Array.isArray(o))
				for (l = 0, u = o.length; l < u; l += 1) mergeMappings(e, t, o[l], n);
			else mergeMappings(e, t, o, n);
		else e.json || U.call(n, r) || !U.call(t, r) || (e.line = s || e.line, e.lineStart = a || e.lineStart, e.position = c || e.position, throwError(e, "duplicated mapping key")), "__proto__" === r ? Object.defineProperty(t, r, {
			configurable: !0,
			enumerable: !0,
			writable: !0,
			value: o
		}) : t[r] = o, delete n[r];
		return t
	}

	function readLineBreak(e) {
		var t;
		10 === (t = e.input.charCodeAt(e.position)) ? e.position++ : 13 === t ? (e.position++, 10 === e.input.charCodeAt(e.position) && e.position++) : throwError(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1
	}

	function skipSeparationSpace(e, t, n) {
		for (var i = 0, r = e.input.charCodeAt(e.position); 0 !== r;) {
			for (; is_WHITE_SPACE(r);) 9 === r && -1 === e.firstTabInLine && (e.firstTabInLine = e.position), r = e.input.charCodeAt(++e.position);
			if (t && 35 === r)
				do {
					r = e.input.charCodeAt(++e.position)
				} while (10 !== r && 13 !== r && 0 !== r);
			if (!is_EOL(r)) break;
			for (readLineBreak(e), r = e.input.charCodeAt(e.position), i++, e.lineIndent = 0; 32 === r;) e.lineIndent++, r = e.input.charCodeAt(++e.position)
		}
		return -1 !== n && 0 !== i && e.lineIndent < n && throwWarning(e, "deficient indentation"), i
	}

	function testDocumentSeparator(e) {
		var t, n = e.position;
		return !(45 !== (t = e.input.charCodeAt(n)) && 46 !== t || t !== e.input.charCodeAt(n + 1) || t !== e.input.charCodeAt(n + 2) || (n += 3, 0 !== (t = e.input.charCodeAt(n)) && !is_WS_OR_EOL(t)))
	}

	function writeFoldedLines(e, t) {
		1 === t ? e.result += " " : t > 1 && (e.result += i.repeat("\n", t - 1))
	}

	function readBlockSequence(e, t) {
		var n, i, r = e.tag,
			o = e.anchor,
			s = [],
			a = !1;
		if (-1 !== e.firstTabInLine) return !1;
		for (null !== e.anchor && (e.anchorMap[e.anchor] = s), i = e.input.charCodeAt(e.position); 0 !== i && (-1 !== e.firstTabInLine && (e.position = e.firstTabInLine, throwError(e, "tab characters must not be used in indentation")), 45 === i) && is_WS_OR_EOL(e.input.charCodeAt(e.position + 1));)
			if (a = !0, e.position++, skipSeparationSpace(e, !0, -1) && e.lineIndent <= t) s.push(null), i = e.input.charCodeAt(e.position);
			else if (n = e.line, composeNode(e, t, 3, !1, !0), s.push(e.result), skipSeparationSpace(e, !0, -1), i = e.input.charCodeAt(e.position), (e.line === n || e.lineIndent > t) && 0 !== i) throwError(e, "bad indentation of a sequence entry");
		else if (e.lineIndent < t) break;
		return !!a && (e.tag = r, e.anchor = o, e.kind = "sequence", e.result = s, !0)
	}

	function readTagProperty(e) {
		var t, n, i, r, o = !1,
			s = !1;
		if (33 !== (r = e.input.charCodeAt(e.position))) return !1;
		if (null !== e.tag && throwError(e, "duplication of a tag property"), 60 === (r = e.input.charCodeAt(++e.position)) ? (o = !0, r = e.input.charCodeAt(++e.position)) : 33 === r ? (s = !0, n = "!!", r = e.input.charCodeAt(++e.position)) : n = "!", t = e.position, o) {
			do {
				r = e.input.charCodeAt(++e.position)
			} while (0 !== r && 62 !== r);
			e.position < e.length ? (i = e.input.slice(t, e.position), r = e.input.charCodeAt(++e.position)) : throwError(e, "unexpected end of the stream within a verbatim tag")
		} else {
			for (; 0 !== r && !is_WS_OR_EOL(r);) 33 === r && (s ? throwError(e, "tag suffix cannot contain exclamation marks") : (n = e.input.slice(t - 1, e.position + 1), V.test(n) || throwError(e, "named tag handle cannot contain such characters"), s = !0, t = e.position + 1)), r = e.input.charCodeAt(++e.position);
			i = e.input.slice(t, e.position), B.test(i) && throwError(e, "tag suffix cannot contain flow indicator characters")
		}
		i && !z.test(i) && throwError(e, "tag name cannot contain such characters: " + i);
		try {
			i = decodeURIComponent(i)
		} catch (t) {
			throwError(e, "tag name is malformed: " + i)
		}
		return o ? e.tag = i : U.call(e.tagMap, n) ? e.tag = e.tagMap[n] + i : "!" === n ? e.tag = "!" + i : "!!" === n ? e.tag = "tag:yaml.org,2002:" + i : throwError(e, 'undeclared tag handle "' + n + '"'), !0
	}

	function readAnchorProperty(e) {
		var t, n;
		if (38 !== (n = e.input.charCodeAt(e.position))) return !1;
		for (null !== e.anchor && throwError(e, "duplication of an anchor property"), n = e.input.charCodeAt(++e.position), t = e.position; 0 !== n && !is_WS_OR_EOL(n) && !is_FLOW_INDICATOR(n);) n = e.input.charCodeAt(++e.position);
		return e.position === t && throwError(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0
	}

	function composeNode(e, t, n, r, o) {
		var s, a, c, l, u, d, h, p, f, g = 1,
			m = !1,
			b = !1;
		if (null !== e.listener && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, s = a = c = 4 === n || 3 === n, r && skipSeparationSpace(e, !0, -1) && (m = !0, e.lineIndent > t ? g = 1 : e.lineIndent === t ? g = 0 : e.lineIndent < t && (g = -1)), 1 === g)
			for (; readTagProperty(e) || readAnchorProperty(e);) skipSeparationSpace(e, !0, -1) ? (m = !0, c = s, e.lineIndent > t ? g = 1 : e.lineIndent === t ? g = 0 : e.lineIndent < t && (g = -1)) : c = !1;
		if (c && (c = m || o), 1 !== g && 4 !== n || (p = 1 === n || 2 === n ? t : t + 1, f = e.position - e.lineStart, 1 === g ? c && (readBlockSequence(e, f) || function readBlockMapping(e, t, n) {
				var i, r, o, s, a, c, l, u = e.tag,
					d = e.anchor,
					h = {},
					p = Object.create(null),
					f = null,
					g = null,
					m = null,
					b = !1,
					y = !1;
				if (-1 !== e.firstTabInLine) return !1;
				for (null !== e.anchor && (e.anchorMap[e.anchor] = h), l = e.input.charCodeAt(e.position); 0 !== l;) {
					if (b || -1 === e.firstTabInLine || (e.position = e.firstTabInLine, throwError(e, "tab characters must not be used in indentation")), i = e.input.charCodeAt(e.position + 1), o = e.line, 63 !== l && 58 !== l || !is_WS_OR_EOL(i)) {
						if (s = e.line, a = e.lineStart, c = e.position, !composeNode(e, n, 2, !1, !0)) break;
						if (e.line === o) {
							for (l = e.input.charCodeAt(e.position); is_WHITE_SPACE(l);) l = e.input.charCodeAt(++e.position);
							if (58 === l) is_WS_OR_EOL(l = e.input.charCodeAt(++e.position)) || throwError(e, "a whitespace character is expected after the key-value separator within a block mapping"), b && (storeMappingPair(e, h, p, f, g, null, s, a, c), f = g = m = null), y = !0, b = !1, r = !1, f = e.tag, g = e.result;
							else {
								if (!y) return e.tag = u, e.anchor = d, !0;
								throwError(e, "can not read an implicit mapping pair; a colon is missed")
							}
						} else {
							if (!y) return e.tag = u, e.anchor = d, !0;
							throwError(e, "can not read a block mapping entry; a multiline key may not be an implicit key")
						}
					} else 63 === l ? (b && (storeMappingPair(e, h, p, f, g, null, s, a, c), f = g = m = null), y = !0, b = !0, r = !0) : b ? (b = !1, r = !0) : throwError(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, l = i;
					if ((e.line === o || e.lineIndent > t) && (b && (s = e.line, a = e.lineStart, c = e.position), composeNode(e, t, 4, !0, r) && (b ? g = e.result : m = e.result), b || (storeMappingPair(e, h, p, f, g, m, s, a, c), f = g = m = null), skipSeparationSpace(e, !0, -1), l = e.input.charCodeAt(e.position)), (e.line === o || e.lineIndent > t) && 0 !== l) throwError(e, "bad indentation of a mapping entry");
					else if (e.lineIndent < t) break
				}
				return b && storeMappingPair(e, h, p, f, g, null, s, a, c), y && (e.tag = u, e.anchor = d, e.kind = "mapping", e.result = h), y
			}(e, f, p)) || function readFlowCollection(e, t) {
				var n, i, r, o, s, a, c, l, u, d, h, p, f = !0,
					g = e.tag,
					m = e.anchor,
					b = Object.create(null);
				if (91 === (p = e.input.charCodeAt(e.position))) s = 93, l = !1, o = [];
				else {
					if (123 !== p) return !1;
					s = 125, l = !0, o = {}
				}
				for (null !== e.anchor && (e.anchorMap[e.anchor] = o), p = e.input.charCodeAt(++e.position); 0 !== p;) {
					if (skipSeparationSpace(e, !0, t), (p = e.input.charCodeAt(e.position)) === s) return e.position++, e.tag = g, e.anchor = m, e.kind = l ? "mapping" : "sequence", e.result = o, !0;
					f ? 44 === p && throwError(e, "expected the node content, but found ','") : throwError(e, "missed comma between flow collection entries"), h = null, a = c = !1, 63 === p && is_WS_OR_EOL(e.input.charCodeAt(e.position + 1)) && (a = c = !0, e.position++, skipSeparationSpace(e, !0, t)), n = e.line, i = e.lineStart, r = e.position, composeNode(e, t, 1, !1, !0), d = e.tag, u = e.result, skipSeparationSpace(e, !0, t), p = e.input.charCodeAt(e.position), !c && e.line !== n || 58 !== p || (a = !0, p = e.input.charCodeAt(++e.position), skipSeparationSpace(e, !0, t), composeNode(e, t, 1, !1, !0), h = e.result), l ? storeMappingPair(e, o, b, d, u, h, n, i, r) : a ? o.push(storeMappingPair(e, null, b, d, u, h, n, i, r)) : o.push(u), skipSeparationSpace(e, !0, t), 44 === (p = e.input.charCodeAt(e.position)) ? (f = !0, p = e.input.charCodeAt(++e.position)) : f = !1
				}
				throwError(e, "unexpected end of the stream within a flow collection")
			}(e, p) ? b = !0 : (a && function readBlockScalar(e, t) {
				var n, r, o, s, a, c = 1,
					l = !1,
					u = !1,
					d = t,
					h = 0,
					p = !1;
				if (124 === (s = e.input.charCodeAt(e.position))) r = !1;
				else {
					if (62 !== s) return !1;
					r = !0
				}
				for (e.kind = "scalar", e.result = ""; 0 !== s;)
					if (43 === (s = e.input.charCodeAt(++e.position)) || 45 === s) 1 === c ? c = 43 === s ? 3 : 2 : throwError(e, "repeat of a chomping mode identifier");
					else {
						if (!((o = 48 <= (a = s) && a <= 57 ? a - 48 : -1) >= 0)) break;
						0 === o ? throwError(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : u ? throwError(e, "repeat of an indentation width identifier") : (d = t + o - 1, u = !0)
					} if (is_WHITE_SPACE(s)) {
					do {
						s = e.input.charCodeAt(++e.position)
					} while (is_WHITE_SPACE(s));
					if (35 === s)
						do {
							s = e.input.charCodeAt(++e.position)
						} while (!is_EOL(s) && 0 !== s)
				}
				for (; 0 !== s;) {
					for (readLineBreak(e), e.lineIndent = 0, s = e.input.charCodeAt(e.position);
						(!u || e.lineIndent < d) && 32 === s;) e.lineIndent++, s = e.input.charCodeAt(++e.position);
					if (!u && e.lineIndent > d && (d = e.lineIndent), is_EOL(s)) h++;
					else {
						if (e.lineIndent < d) {
							3 === c ? e.result += i.repeat("\n", l ? 1 + h : h) : 1 === c && l && (e.result += "\n");
							break
						}
						for (r ? is_WHITE_SPACE(s) ? (p = !0, e.result += i.repeat("\n", l ? 1 + h : h)) : p ? (p = !1, e.result += i.repeat("\n", h + 1)) : 0 === h ? l && (e.result += " ") : e.result += i.repeat("\n", h) : e.result += i.repeat("\n", l ? 1 + h : h), l = !0, u = !0, h = 0, n = e.position; !is_EOL(s) && 0 !== s;) s = e.input.charCodeAt(++e.position);
						captureSegment(e, n, e.position, !1)
					}
				}
				return !0
			}(e, p) || function readSingleQuotedScalar(e, t) {
				var n, i, r;
				if (39 !== (n = e.input.charCodeAt(e.position))) return !1;
				for (e.kind = "scalar", e.result = "", e.position++, i = r = e.position; 0 !== (n = e.input.charCodeAt(e.position));)
					if (39 === n) {
						if (captureSegment(e, i, e.position, !0), 39 !== (n = e.input.charCodeAt(++e.position))) return !0;
						i = e.position, e.position++, r = e.position
					} else is_EOL(n) ? (captureSegment(e, i, r, !0), writeFoldedLines(e, skipSeparationSpace(e, !1, t)), i = r = e.position) : e.position === e.lineStart && testDocumentSeparator(e) ? throwError(e, "unexpected end of the document within a single quoted scalar") : (e.position++, r = e.position);
				throwError(e, "unexpected end of the stream within a single quoted scalar")
			}(e, p) || function readDoubleQuotedScalar(e, t) {
				var n, i, r, o, s, a, c;
				if (34 !== (a = e.input.charCodeAt(e.position))) return !1;
				for (e.kind = "scalar", e.result = "", e.position++, n = i = e.position; 0 !== (a = e.input.charCodeAt(e.position));) {
					if (34 === a) return captureSegment(e, n, e.position, !0), e.position++, !0;
					if (92 === a) {
						if (captureSegment(e, n, e.position, !0), is_EOL(a = e.input.charCodeAt(++e.position))) skipSeparationSpace(e, !1, t);
						else if (a < 256 && $[a]) e.result += H[a], e.position++;
						else if ((s = 120 === (c = a) ? 2 : 117 === c ? 4 : 85 === c ? 8 : 0) > 0) {
							for (r = s, o = 0; r > 0; r--)(s = fromHexCode(a = e.input.charCodeAt(++e.position))) >= 0 ? o = (o << 4) + s : throwError(e, "expected hexadecimal character");
							e.result += charFromCodepoint(o), e.position++
						} else throwError(e, "unknown escape sequence");
						n = i = e.position
					} else is_EOL(a) ? (captureSegment(e, n, i, !0), writeFoldedLines(e, skipSeparationSpace(e, !1, t)), n = i = e.position) : e.position === e.lineStart && testDocumentSeparator(e) ? throwError(e, "unexpected end of the document within a double quoted scalar") : (e.position++, i = e.position)
				}
				throwError(e, "unexpected end of the stream within a double quoted scalar")
			}(e, p) ? b = !0 : ! function readAlias(e) {
				var t, n, i;
				if (42 !== (i = e.input.charCodeAt(e.position))) return !1;
				for (i = e.input.charCodeAt(++e.position), t = e.position; 0 !== i && !is_WS_OR_EOL(i) && !is_FLOW_INDICATOR(i);) i = e.input.charCodeAt(++e.position);
				return e.position === t && throwError(e, "name of an alias node must contain at least one character"), n = e.input.slice(t, e.position), U.call(e.anchorMap, n) || throwError(e, 'unidentified alias "' + n + '"'), e.result = e.anchorMap[n], skipSeparationSpace(e, !0, -1), !0
			}(e) ? function readPlainScalar(e, t, n) {
				var i, r, o, s, a, c, l, u, d = e.kind,
					h = e.result;
				if (is_WS_OR_EOL(u = e.input.charCodeAt(e.position)) || is_FLOW_INDICATOR(u) || 35 === u || 38 === u || 42 === u || 33 === u || 124 === u || 62 === u || 39 === u || 34 === u || 37 === u || 64 === u || 96 === u) return !1;
				if ((63 === u || 45 === u) && (is_WS_OR_EOL(i = e.input.charCodeAt(e.position + 1)) || n && is_FLOW_INDICATOR(i))) return !1;
				for (e.kind = "scalar", e.result = "", r = o = e.position, s = !1; 0 !== u;) {
					if (58 === u) {
						if (is_WS_OR_EOL(i = e.input.charCodeAt(e.position + 1)) || n && is_FLOW_INDICATOR(i)) break
					} else if (35 === u) {
						if (is_WS_OR_EOL(e.input.charCodeAt(e.position - 1))) break
					} else {
						if (e.position === e.lineStart && testDocumentSeparator(e) || n && is_FLOW_INDICATOR(u)) break;
						if (is_EOL(u)) {
							if (a = e.line, c = e.lineStart, l = e.lineIndent, skipSeparationSpace(e, !1, -1), e.lineIndent >= t) {
								s = !0, u = e.input.charCodeAt(e.position);
								continue
							}
							e.position = o, e.line = a, e.lineStart = c, e.lineIndent = l;
							break
						}
					}
					s && (captureSegment(e, r, o, !1), writeFoldedLines(e, e.line - a), r = o = e.position, s = !1), is_WHITE_SPACE(u) || (o = e.position + 1), u = e.input.charCodeAt(++e.position)
				}
				return captureSegment(e, r, o, !1), !!e.result || (e.kind = d, e.result = h, !1)
			}(e, p, 1 === n) && (b = !0, null === e.tag && (e.tag = "?")) : (b = !0, null === e.tag && null === e.anchor || throwError(e, "alias node should not have any properties")), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : 0 === g && (b = c && readBlockSequence(e, f))), null === e.tag) null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
		else if ("?" === e.tag) {
			for (null !== e.result && "scalar" !== e.kind && throwError(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), l = 0, u = e.implicitTypes.length; l < u; l += 1)
				if ((h = e.implicitTypes[l]).resolve(e.result)) {
					e.result = h.construct(e.result), e.tag = h.tag, null !== e.anchor && (e.anchorMap[e.anchor] = e.result);
					break
				}
		} else if ("!" !== e.tag) {
			if (U.call(e.typeMap[e.kind || "fallback"], e.tag)) h = e.typeMap[e.kind || "fallback"][e.tag];
			else
				for (h = null, l = 0, u = (d = e.typeMap.multi[e.kind || "fallback"]).length; l < u; l += 1)
					if (e.tag.slice(0, d[l].tag.length) === d[l].tag) {
						h = d[l];
						break
					} h || throwError(e, "unknown tag !<" + e.tag + ">"), null !== e.result && h.kind !== e.kind && throwError(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + h.kind + '", not "' + e.kind + '"'), h.resolve(e.result, e.tag) ? (e.result = h.construct(e.result, e.tag), null !== e.anchor && (e.anchorMap[e.anchor] = e.result)) : throwError(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")
		}
		return null !== e.listener && e.listener("close", e), null !== e.tag || null !== e.anchor || b
	}

	function readDocument(e) {
		var t, n, i, r, o = e.position,
			s = !1;
		for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = Object.create(null), e.anchorMap = Object.create(null); 0 !== (r = e.input.charCodeAt(e.position)) && (skipSeparationSpace(e, !0, -1), r = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || 37 !== r));) {
			for (s = !0, r = e.input.charCodeAt(++e.position), t = e.position; 0 !== r && !is_WS_OR_EOL(r);) r = e.input.charCodeAt(++e.position);
			for (i = [], (n = e.input.slice(t, e.position)).length < 1 && throwError(e, "directive name must not be less than one character in length"); 0 !== r;) {
				for (; is_WHITE_SPACE(r);) r = e.input.charCodeAt(++e.position);
				if (35 === r) {
					do {
						r = e.input.charCodeAt(++e.position)
					} while (0 !== r && !is_EOL(r));
					break
				}
				if (is_EOL(r)) break;
				for (t = e.position; 0 !== r && !is_WS_OR_EOL(r);) r = e.input.charCodeAt(++e.position);
				i.push(e.input.slice(t, e.position))
			}
			0 !== r && readLineBreak(e), U.call(q, n) ? q[n](e, n, i) : throwWarning(e, 'unknown document directive "' + n + '"')
		}
		skipSeparationSpace(e, !0, -1), 0 === e.lineIndent && 45 === e.input.charCodeAt(e.position) && 45 === e.input.charCodeAt(e.position + 1) && 45 === e.input.charCodeAt(e.position + 2) ? (e.position += 3, skipSeparationSpace(e, !0, -1)) : s && throwError(e, "directives end mark is expected"), composeNode(e, e.lineIndent - 1, 4, !1, !0), skipSeparationSpace(e, !0, -1), e.checkLineBreaks && W.test(e.input.slice(o, e.position)) && throwWarning(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && testDocumentSeparator(e) ? 46 === e.input.charCodeAt(e.position) && (e.position += 3, skipSeparationSpace(e, !0, -1)) : e.position < e.length - 1 && throwError(e, "end of the stream or a document separator is expected")
	}

	function loadDocuments(e, t) {
		t = t || {}, 0 !== (e = String(e)).length && (10 !== e.charCodeAt(e.length - 1) && 13 !== e.charCodeAt(e.length - 1) && (e += "\n"), 65279 === e.charCodeAt(0) && (e = e.slice(1)));
		var n = new State$1(e, t),
			i = e.indexOf("\0");
		for (-1 !== i && (n.position = i, throwError(n, "null byte is not allowed in input")), n.input += "\0"; 32 === n.input.charCodeAt(n.position);) n.lineIndent += 1, n.position += 1;
		for (; n.position < n.length - 1;) readDocument(n);
		return n.documents
	}
	var Y = {
			loadAll: function loadAll$1(e, t, n) {
				null !== t && "object" == typeof t && void 0 === n && (n = t, t = null);
				var i = loadDocuments(e, n);
				if ("function" != typeof t) return i;
				for (var r = 0, o = i.length; r < o; r += 1) t(i[r])
			},
			load: function load$1(e, t) {
				var n = loadDocuments(e, t);
				if (0 !== n.length) {
					if (1 === n.length) return n[0];
					throw new r("expected a single document in the stream, but found more")
				}
			}
		},
		K = Object.prototype.toString,
		X = Object.prototype.hasOwnProperty,
		J = {
			0: "\\0",
			7: "\\a",
			8: "\\b",
			9: "\\t",
			10: "\\n",
			11: "\\v",
			12: "\\f",
			13: "\\r",
			27: "\\e",
			34: '\\"',
			92: "\\\\",
			133: "\\N",
			160: "\\_",
			8232: "\\L",
			8233: "\\P"
		},
		Z = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"],
		Q = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

	function encodeHex(e) {
		var t, n, o;
		if (t = e.toString(16).toUpperCase(), e <= 255) n = "x", o = 2;
		else if (e <= 65535) n = "u", o = 4;
		else {
			if (!(e <= 4294967295)) throw new r("code point within a string may not be greater than 0xFFFFFFFF");
			n = "U", o = 8
		}
		return "\\" + n + i.repeat("0", o - t.length) + t
	}

	function State(e) {
		this.schema = e.schema || M, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = i.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = function compileStyleMap(e, t) {
			var n, i, r, o, s, a, c;
			if (null === t) return {};
			for (n = {}, r = 0, o = (i = Object.keys(t)).length; r < o; r += 1) s = i[r], a = String(t[s]), "!!" === s.slice(0, 2) && (s = "tag:yaml.org,2002:" + s.slice(2)), (c = e.compiledTypeMap.fallback[s]) && X.call(c.styleAliases, a) && (a = c.styleAliases[a]), n[s] = a;
			return n
		}(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = '"' === e.quotingType ? 2 : 1, this.forceQuotes = e.forceQuotes || !1, this.replacer = "function" == typeof e.replacer ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null
	}

	function indentString(e, t) {
		for (var n, r = i.repeat(" ", t), o = 0, s = -1, a = "", c = e.length; o < c;) - 1 === (s = e.indexOf("\n", o)) ? (n = e.slice(o), o = c) : (n = e.slice(o, s + 1), o = s + 1), n.length && "\n" !== n && (a += r), a += n;
		return a
	}

	function generateNextLine(e, t) {
		return "\n" + i.repeat(" ", e.indent * t)
	}

	function isWhitespace(e) {
		return 32 === e || 9 === e
	}

	function isPrintable(e) {
		return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && 8232 !== e && 8233 !== e || 57344 <= e && e <= 65533 && 65279 !== e || 65536 <= e && e <= 1114111
	}

	function isNsCharOrWhitespace(e) {
		return isPrintable(e) && 65279 !== e && 13 !== e && 10 !== e
	}

	function isPlainSafe(e, t, n) {
		var i = isNsCharOrWhitespace(e),
			r = i && !isWhitespace(e);
		return (n ? i : i && 44 !== e && 91 !== e && 93 !== e && 123 !== e && 125 !== e) && 35 !== e && !(58 === t && !r) || isNsCharOrWhitespace(t) && !isWhitespace(t) && 35 === e || 58 === t && r
	}

	function codePointAt(e, t) {
		var n, i = e.charCodeAt(t);
		return i >= 55296 && i <= 56319 && t + 1 < e.length && (n = e.charCodeAt(t + 1)) >= 56320 && n <= 57343 ? 1024 * (i - 55296) + n - 56320 + 65536 : i
	}

	function needIndentIndicator(e) {
		return /^\n* /.test(e)
	}

	function chooseScalarStyle(e, t, n, i, r, o, s, a) {
		var c, l = 0,
			u = null,
			d = !1,
			h = !1,
			p = -1 !== i,
			f = -1,
			g = function isPlainSafeFirst(e) {
				return isPrintable(e) && 65279 !== e && !isWhitespace(e) && 45 !== e && 63 !== e && 58 !== e && 44 !== e && 91 !== e && 93 !== e && 123 !== e && 125 !== e && 35 !== e && 38 !== e && 42 !== e && 33 !== e && 124 !== e && 61 !== e && 62 !== e && 39 !== e && 34 !== e && 37 !== e && 64 !== e && 96 !== e
			}(codePointAt(e, 0)) && function isPlainSafeLast(e) {
				return !isWhitespace(e) && 58 !== e
			}(codePointAt(e, e.length - 1));
		if (t || s)
			for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
				if (!isPrintable(l = codePointAt(e, c))) return 5;
				g = g && isPlainSafe(l, u, a), u = l
			} else {
				for (c = 0; c < e.length; l >= 65536 ? c += 2 : c++) {
					if (10 === (l = codePointAt(e, c))) d = !0, p && (h = h || c - f - 1 > i && " " !== e[f + 1], f = c);
					else if (!isPrintable(l)) return 5;
					g = g && isPlainSafe(l, u, a), u = l
				}
				h = h || p && c - f - 1 > i && " " !== e[f + 1]
			}
		return d || h ? n > 9 && needIndentIndicator(e) ? 5 : s ? 2 === o ? 5 : 2 : h ? 4 : 3 : !g || s || r(e) ? 2 === o ? 5 : 2 : 1
	}

	function writeScalar(e, t, n, i, o) {
		e.dump = function() {
			if (0 === t.length) return 2 === e.quotingType ? '""' : "''";
			if (!e.noCompatMode && (-1 !== Z.indexOf(t) || Q.test(t))) return 2 === e.quotingType ? '"' + t + '"' : "'" + t + "'";
			var s = e.indent * Math.max(1, n),
				a = -1 === e.lineWidth ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - s),
				c = i || e.flowLevel > -1 && n >= e.flowLevel;
			switch (chooseScalarStyle(t, c, e.indent, a, (function testAmbiguity(t) {
					return function testImplicitResolving(e, t) {
						var n, i;
						for (n = 0, i = e.implicitTypes.length; n < i; n += 1)
							if (e.implicitTypes[n].resolve(t)) return !0;
						return !1
					}(e, t)
				}), e.quotingType, e.forceQuotes && !i, o)) {
				case 1:
					return t;
				case 2:
					return "'" + t.replace(/'/g, "''") + "'";
				case 3:
					return "|" + blockHeader(t, e.indent) + dropEndingNewline(indentString(t, s));
				case 4:
					return ">" + blockHeader(t, e.indent) + dropEndingNewline(indentString(function foldString(e, t) {
						var n, i, r = /(\n+)([^\n]*)/g,
							o = (a = e.indexOf("\n"), a = -1 !== a ? a : e.length, r.lastIndex = a, foldLine(e.slice(0, a), t)),
							s = "\n" === e[0] || " " === e[0];
						var a;
						for (; i = r.exec(e);) {
							var c = i[1],
								l = i[2];
							n = " " === l[0], o += c + (s || n || "" === l ? "" : "\n") + foldLine(l, t), s = n
						}
						return o
					}(t, a), s));
				case 5:
					return '"' + function escapeString(e) {
						for (var t, n = "", i = 0, r = 0; r < e.length; i >= 65536 ? r += 2 : r++) i = codePointAt(e, r), !(t = J[i]) && isPrintable(i) ? (n += e[r], i >= 65536 && (n += e[r + 1])) : n += t || encodeHex(i);
						return n
					}(t) + '"';
				default:
					throw new r("impossible error: invalid scalar style")
			}
		}()
	}

	function blockHeader(e, t) {
		var n = needIndentIndicator(e) ? String(t) : "",
			i = "\n" === e[e.length - 1];
		return n + (i && ("\n" === e[e.length - 2] || "\n" === e) ? "+" : i ? "" : "-") + "\n"
	}

	function dropEndingNewline(e) {
		return "\n" === e[e.length - 1] ? e.slice(0, -1) : e
	}

	function foldLine(e, t) {
		if ("" === e || " " === e[0]) return e;
		for (var n, i, r = / [^ ]/g, o = 0, s = 0, a = 0, c = ""; n = r.exec(e);)(a = n.index) - o > t && (i = s > o ? s : a, c += "\n" + e.slice(o, i), o = i + 1), s = a;
		return c += "\n", e.length - o > t && s > o ? c += e.slice(o, s) + "\n" + e.slice(s + 1) : c += e.slice(o), c.slice(1)
	}

	function writeBlockSequence(e, t, n, i) {
		var r, o, s, a = "",
			c = e.tag;
		for (r = 0, o = n.length; r < o; r += 1) s = n[r], e.replacer && (s = e.replacer.call(n, String(r), s)), (writeNode(e, t + 1, s, !0, !0, !1, !0) || void 0 === s && writeNode(e, t + 1, null, !0, !0, !1, !0)) && (i && "" === a || (a += generateNextLine(e, t)), e.dump && 10 === e.dump.charCodeAt(0) ? a += "-" : a += "- ", a += e.dump);
		e.tag = c, e.dump = a || "[]"
	}

	function detectType(e, t, n) {
		var i, o, s, a, c, l;
		for (s = 0, a = (o = n ? e.explicitTypes : e.implicitTypes).length; s < a; s += 1)
			if (((c = o[s]).instanceOf || c.predicate) && (!c.instanceOf || "object" == typeof t && t instanceof c.instanceOf) && (!c.predicate || c.predicate(t))) {
				if (n ? c.multi && c.representName ? e.tag = c.representName(t) : e.tag = c.tag : e.tag = "?", c.represent) {
					if (l = e.styleMap[c.tag] || c.defaultStyle, "[object Function]" === K.call(c.represent)) i = c.represent(t, l);
					else {
						if (!X.call(c.represent, l)) throw new r("!<" + c.tag + '> tag resolver accepts not "' + l + '" style');
						i = c.represent[l](t, l)
					}
					e.dump = i
				}
				return !0
			} return !1
	}

	function writeNode(e, t, n, i, o, s, a) {
		e.tag = null, e.dump = n, detectType(e, n, !1) || detectType(e, n, !0);
		var c, l = K.call(e.dump),
			u = i;
		i && (i = e.flowLevel < 0 || e.flowLevel > t);
		var d, h, p = "[object Object]" === l || "[object Array]" === l;
		if (p && (h = -1 !== (d = e.duplicates.indexOf(n))), (null !== e.tag && "?" !== e.tag || h || 2 !== e.indent && t > 0) && (o = !1), h && e.usedDuplicates[d]) e.dump = "*ref_" + d;
		else {
			if (p && h && !e.usedDuplicates[d] && (e.usedDuplicates[d] = !0), "[object Object]" === l) i && 0 !== Object.keys(e.dump).length ? (! function writeBlockMapping(e, t, n, i) {
				var o, s, a, c, l, u, d = "",
					h = e.tag,
					p = Object.keys(n);
				if (!0 === e.sortKeys) p.sort();
				else if ("function" == typeof e.sortKeys) p.sort(e.sortKeys);
				else if (e.sortKeys) throw new r("sortKeys must be a boolean or a function");
				for (o = 0, s = p.length; o < s; o += 1) u = "", i && "" === d || (u += generateNextLine(e, t)), c = n[a = p[o]], e.replacer && (c = e.replacer.call(n, a, c)), writeNode(e, t + 1, a, !0, !0, !0) && ((l = null !== e.tag && "?" !== e.tag || e.dump && e.dump.length > 1024) && (e.dump && 10 === e.dump.charCodeAt(0) ? u += "?" : u += "? "), u += e.dump, l && (u += generateNextLine(e, t)), writeNode(e, t + 1, c, !0, l) && (e.dump && 10 === e.dump.charCodeAt(0) ? u += ":" : u += ": ", d += u += e.dump));
				e.tag = h, e.dump = d || "{}"
			}(e, t, e.dump, o), h && (e.dump = "&ref_" + d + e.dump)) : (! function writeFlowMapping(e, t, n) {
				var i, r, o, s, a, c = "",
					l = e.tag,
					u = Object.keys(n);
				for (i = 0, r = u.length; i < r; i += 1) a = "", "" !== c && (a += ", "), e.condenseFlow && (a += '"'), s = n[o = u[i]], e.replacer && (s = e.replacer.call(n, o, s)), writeNode(e, t, o, !1, !1) && (e.dump.length > 1024 && (a += "? "), a += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), writeNode(e, t, s, !1, !1) && (c += a += e.dump));
				e.tag = l, e.dump = "{" + c + "}"
			}(e, t, e.dump), h && (e.dump = "&ref_" + d + " " + e.dump));
			else if ("[object Array]" === l) i && 0 !== e.dump.length ? (e.noArrayIndent && !a && t > 0 ? writeBlockSequence(e, t - 1, e.dump, o) : writeBlockSequence(e, t, e.dump, o), h && (e.dump = "&ref_" + d + e.dump)) : (! function writeFlowSequence(e, t, n) {
				var i, r, o, s = "",
					a = e.tag;
				for (i = 0, r = n.length; i < r; i += 1) o = n[i], e.replacer && (o = e.replacer.call(n, String(i), o)), (writeNode(e, t, o, !1, !1) || void 0 === o && writeNode(e, t, null, !1, !1)) && ("" !== s && (s += "," + (e.condenseFlow ? "" : " ")), s += e.dump);
				e.tag = a, e.dump = "[" + s + "]"
			}(e, t, e.dump), h && (e.dump = "&ref_" + d + " " + e.dump));
			else {
				if ("[object String]" !== l) {
					if ("[object Undefined]" === l) return !1;
					if (e.skipInvalid) return !1;
					throw new r("unacceptable kind of an object to dump " + l)
				}
				"?" !== e.tag && writeScalar(e, e.dump, t, s, u)
			}
			null !== e.tag && "?" !== e.tag && (c = encodeURI("!" === e.tag[0] ? e.tag.slice(1) : e.tag).replace(/!/g, "%21"), c = "!" === e.tag[0] ? "!" + c : "tag:yaml.org,2002:" === c.slice(0, 18) ? "!!" + c.slice(18) : "!<" + c + ">", e.dump = c + " " + e.dump)
		}
		return !0
	}

	function getDuplicateReferences(e, t) {
		var n, i, r = [],
			o = [];
		for (function inspectNode(e, t, n) {
				var i, r, o;
				if (null !== e && "object" == typeof e)
					if (-1 !== (r = t.indexOf(e))) - 1 === n.indexOf(r) && n.push(r);
					else if (t.push(e), Array.isArray(e))
					for (r = 0, o = e.length; r < o; r += 1) inspectNode(e[r], t, n);
				else
					for (i = Object.keys(e), r = 0, o = i.length; r < o; r += 1) inspectNode(e[i[r]], t, n)
			}(e, r, o), n = 0, i = o.length; n < i; n += 1) t.duplicates.push(r[o[n]]);
		t.usedDuplicates = new Array(i)
	}

	function renamed(e, t) {
		return function() {
			throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.")
		}
	}
	var ee = c,
		te = l,
		ne = p,
		ie = v,
		re = _,
		oe = M,
		se = Y.load,
		ae = Y.loadAll,
		ce = {
			dump: function dump$1(e, t) {
				var n = new State(t = t || {});
				n.noRefs || getDuplicateReferences(e, n);
				var i = e;
				return n.replacer && (i = n.replacer.call({
					"": i
				}, "", i)), writeNode(n, 0, i, !0, !0) ? n.dump + "\n" : ""
			}
		}.dump,
		le = r,
		ue = {
			binary: I,
			float: S,
			map: h,
			null: f,
			pairs: N,
			set: P,
			timestamp: A,
			bool: g,
			int: m,
			merge: k,
			omap: x,
			seq: d,
			str: u
		},
		de = renamed("safeLoad", "load"),
		he = renamed("safeLoadAll", "loadAll"),
		pe = renamed("safeDump", "dump"),
		fe = {
			Type: ee,
			Schema: te,
			FAILSAFE_SCHEMA: ne,
			JSON_SCHEMA: ie,
			CORE_SCHEMA: re,
			DEFAULT_SCHEMA: oe,
			load: se,
			loadAll: ae,
			dump: ce,
			YAMLException: le,
			types: ue,
			safeLoad: de,
			safeLoadAll: he,
			safeDump: pe
		};
	t.default = fe
}, function(e, t) {
	const n = /^[0-9]+$/,
		compareIdentifiers = (e, t) => {
			const i = n.test(e),
				r = n.test(t);
			return i && r && (e = +e, t = +t), e === t ? 0 : i && !r ? -1 : r && !i ? 1 : e < t ? -1 : 1
		};
	e.exports = {
		compareIdentifiers: compareIdentifiers,
		rcompareIdentifiers: (e, t) => compareIdentifiers(t, e)
	}
}, function(e, t, n) {
	const i = n(9);
	e.exports = (e, t, n) => 0 === i(e, t, n)
}, function(e, t, n) {
	const i = n(4);
	e.exports = (e, t, n) => {
		const r = new i(e, n),
			o = new i(t, n);
		return r.compare(o) || r.compareBuild(o)
	}
}, function(e, t, n) {
	const i = n(9);
	e.exports = (e, t, n) => i(e, t, n) < 0
}, function(e, t, n) {
	const i = n(9);
	e.exports = (e, t, n) => i(e, t, n) >= 0
}, function(e, t, n) {
	const i = n(9);
	e.exports = (e, t, n) => i(e, t, n) <= 0
}, function(e, t, n) {
	const i = n(4),
		r = n(40),
		{
			ANY: o
		} = r,
		s = n(10),
		a = n(41),
		c = n(39),
		l = n(56),
		u = n(58),
		d = n(57);
	e.exports = (e, t, n, h) => {
		let p, f, g, m, b;
		switch (e = new i(e, h), t = new s(t, h), n) {
			case ">":
				p = c, f = u, g = l, m = ">", b = ">=";
				break;
			case "<":
				p = l, f = d, g = c, m = "<", b = "<=";
				break;
			default:
				throw new TypeError('Must provide a hilo val of "<" or ">"')
		}
		if (a(e, t, h)) return !1;
		for (let n = 0; n < t.set.length; ++n) {
			const i = t.set[n];
			let s = null,
				a = null;
			if (i.forEach(e => {
					e.semver === o && (e = new r(">=0.0.0")), s = s || e, a = a || e, p(e.semver, s.semver, h) ? s = e : g(e.semver, a.semver, h) && (a = e)
				}), s.operator === m || s.operator === b) return !1;
			if ((!a.operator || a.operator === m) && f(e, a.semver)) return !1;
			if (a.operator === b && g(e, a.semver)) return !1
		}
		return !0
	}
}, function(e, t, n) {
	"use strict";
	var i;
	Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.computeOperations = t.OperationKind = void 0,
		function(e) {
			e[e.COPY = 0] = "COPY", e[e.DOWNLOAD = 1] = "DOWNLOAD"
		}(i = t.OperationKind || (t.OperationKind = {})), t.computeOperations = function computeOperations(e, t, n) {
			const r = buildBlockFileMap(e.files),
				o = buildBlockFileMap(t.files);
			let s = null;
			const a = t.files[0],
				c = [],
				l = a.name,
				u = r.get(l);
			if (null == u) throw new Error(`no file ${l} in old blockmap`);
			const d = o.get(l);
			let h = 0;
			const {
				checksumToOffset: p,
				checksumToOldSize: f
			} = function buildChecksumMap(e, t, n) {
				const i = new Map,
					r = new Map;
				let o = t;
				for (let t = 0; t < e.checksums.length; t++) {
					const s = e.checksums[t],
						a = e.sizes[t],
						c = r.get(s);
					if (void 0 === c) i.set(s, o), r.set(s, a);
					else if (null != n.debug) {
						const e = c === a ? "(same size)" : `(size: ${c}, this size: ${a})`;
						n.debug(`${s} duplicated in blockmap ${e}, it doesn't lead to broken differential downloader, just corresponding block will be skipped)`)
					}
					o += a
				}
				return {
					checksumToOffset: i,
					checksumToOldSize: r
				}
			}(r.get(l), u.offset, n);
			let g = a.offset;
			for (let e = 0; e < d.checksums.length; g += d.sizes[e], e++) {
				const t = d.sizes[e],
					r = d.checksums[e];
				let o = p.get(r);
				null != o && f.get(r) !== t && (n.warn(`Checksum ("${r}") matches, but size differs (old: ${f.get(r)}, new: ${t})`), o = void 0), void 0 === o ? (h++, null != s && s.kind === i.DOWNLOAD && s.end === g ? s.end += t : (s = {
					kind: i.DOWNLOAD,
					start: g,
					end: g + t
				}, validateAndAdd(s, c, r, e))) : null != s && s.kind === i.COPY && s.end === o ? s.end += t : (s = {
					kind: i.COPY,
					start: o,
					end: o + t
				}, validateAndAdd(s, c, r, e))
			}
			return h > 0 && n.info(`File${"file"===a.name?"":" "+a.name} has ${h} changed blocks`), c
		};
	const r = "true" === process.env.DIFFERENTIAL_DOWNLOAD_PLAN_BUILDER_VALIDATE_RANGES;

	function validateAndAdd(e, t, n, o) {
		if (r && 0 !== t.length) {
			const r = t[t.length - 1];
			if (r.kind === e.kind && e.start < r.end && e.start > r.start) {
				const t = [r.start, r.end, e.start, e.end].reduce((e, t) => e < t ? e : t);
				throw new Error(`operation (block index: ${o}, checksum: ${n}, kind: ${i[e.kind]}) overlaps previous operation (checksum: ${n}):\nabs: ${r.start} until ${r.end} and ${e.start} until ${e.end}\nrel: ${r.start-t} until ${r.end-t} and ${e.start-t} until ${e.end-t}`)
			}
		}
		t.push(e)
	}

	function buildBlockFileMap(e) {
		const t = new Map;
		for (const n of e) t.set(n.name, n);
		return t
	}
}, function(e, t) {
	e.exports = require("request")
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.EnvConfig = void 0;
	const i = n(7),
		r = n(100);
	class EnvConfig extends r.EnvConfigBase {
		constructor() {
			super();
			const e = i.Util.getInstance().getPublicUrl(!0);
			e && (this.appUpdateURL = e)
		}
		static getInstance() {
			return EnvConfig.instance || (EnvConfig.instance = new EnvConfig, EnvConfig.instance.appUpdateURL.includes("khhulic2.synology.me") && (process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0")), EnvConfig.instance
		}
		getAppUpdateURL() {
			return this.appUpdateURL
		}
	}
	t.EnvConfig = EnvConfig
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Util2 = void 0;
	n(0);
	class Util2 {
		constructor() {
			this.gameInject = null, this.eNotify = null
		}
		static getInstance() {
			return Util2.instance || (Util2.instance = new Util2), Util2.instance
		}
		setGameInject(e) {
			this.gameInject = e
		}
		_initConfig(e, t) {
			null == this.eNotify && (this.eNotify = n(64)), e && this.eNotify.setupConfig(e), this.eNotify.setConfig({
				displayTime: 6e3,
				maxVisibleNotifications: 1
			}), this.eNotify.config.defaultWindow.webPreferences.offscreen = !0, t ? this.eNotify.config.defaultStyleClose.display = "none" : delete this.eNotify.config.defaultStyleClose.display
		}
		_initErrorWinConfig(e, t) {
			null == this.eNotify && (this.eNotify = n(64)), e && this.eNotify.setupConfig(e), this.eNotify.setConfig({
				displayTime: 5e3,
				width: 350,
				maxVisibleNotifications: 1
			}), this.eNotify.config.defaultWindow.webPreferences.offscreen = !0, t ? this.eNotify.config.defaultStyleClose.display = "none" : delete this.eNotify.config.defaultStyleClose.display
		}
		showErrorNotify(e) {
			return this._initErrorWinConfig(null, !1), this.eNotify.config.defaultWindow.webPreferences.offscreen = !1, this.eNotify.notify({
				title: e.title,
				text: e.body,
				onShowFunc: e => {},
				onCloseFunc: e => {}
			}), !0
		}
	}
	t.Util2 = Util2
}, function(e, t) {
	e.exports = require("dd-notify")
}, function(e, t) {
	e.exports = require("sr-native")
}, function(e, t) {
	e.exports = require("win32-displayconfig")
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Info = void 0;
	const {
		app: i
	} = n(1);
	n(43);
	class Info {
		constructor() {}
		static getInstance() {
			return Info.instance || (Info.instance = new Info), Info.instance
		}
		getVersion(e) {
			return i.getVersion()
		}
		isDev() {
			return process.argv.slice(1).some(e => "--dev" === e)
		}
	}
	t.Info = Info
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Notify = void 0;
	const i = n(13);
	class Notify {
		static getInstance() {
			return Notify.instance || (Notify.instance = new Notify), Notify.instance
		}
		closeCurrentWindow() {
			i.closeCurrent()
		}
	}
	t.Notify = Notify
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.SaveLog = void 0;
	const i = n(3);
	class SaveLog {
		constructor() {}
		static getInstance() {
			return SaveLog.instance || (SaveLog.instance = new SaveLog), SaveLog.instance
		}
		writeLog(e) {
			i.LogIt.getInstance().writeLog(`[${e.widgetName}] ${e.logContent}`)
		}
	}
	t.SaveLog = SaveLog
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.CancellationError = t.CancellationToken = void 0;
	const i = n(71);
	class CancellationToken extends i.EventEmitter {
		constructor(e) {
			super(), this.parentCancelHandler = null, this._parent = null, this._cancelled = !1, null != e && (this.parent = e)
		}
		get cancelled() {
			return this._cancelled || null != this._parent && this._parent.cancelled
		}
		set parent(e) {
			this.removeParentCancelHandler(), this._parent = e, this.parentCancelHandler = () => this.cancel(), this._parent.onCancel(this.parentCancelHandler)
		}
		cancel() {
			this._cancelled = !0, this.emit("cancel")
		}
		onCancel(e) {
			this.cancelled ? e() : this.once("cancel", e)
		}
		createPromise(e) {
			if (this.cancelled) return Promise.reject(new CancellationError);
			const finallyHandler = () => {
				if (null != t) try {
					this.removeListener("cancel", t), t = null
				} catch (e) {}
			};
			let t = null;
			return new Promise((n, i) => {
				let r = null;
				t = () => {
					try {
						null != r && (r(), r = null)
					} finally {
						i(new CancellationError)
					}
				}, this.cancelled ? t() : (this.onCancel(t), e(n, i, e => {
					r = e
				}))
			}).then(e => (finallyHandler(), e)).catch(e => {
				throw finallyHandler(), e
			})
		}
		removeParentCancelHandler() {
			const e = this._parent;
			null != e && null != this.parentCancelHandler && (e.removeListener("cancel", this.parentCancelHandler), this.parentCancelHandler = null)
		}
		dispose() {
			try {
				this.removeParentCancelHandler()
			} finally {
				this.removeAllListeners(), this._parent = null
			}
		}
	}
	t.CancellationToken = CancellationToken;
	class CancellationError extends Error {
		constructor() {
			super("cancelled")
		}
	}
	t.CancellationError = CancellationError
}, function(e, t) {
	e.exports = require("events")
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.safeStringifyJson = t.configureRequestOptions = t.safeGetHeader = t.DigestTransform = t.configureRequestUrl = t.configureRequestOptionsFromUrl = t.HttpExecutor = t.parseJson = t.HttpError = t.createHttpError = void 0;
	const i = n(30),
		r = n(109),
		o = n(5),
		s = n(23),
		a = n(11),
		c = n(70),
		l = n(2),
		u = n(75),
		d = r.default("electron-builder");

	function createHttpError(e, t = null) {
		return new HttpError(e.statusCode || -1, `${e.statusCode} ${e.statusMessage}` + (null == t ? "" : "\n" + JSON.stringify(t, null, "  ")) + "\nHeaders: " + safeStringifyJson(e.headers), t)
	}
	t.createHttpError = createHttpError;
	const h = new Map([
		[429, "Too many requests"],
		[400, "Bad request"],
		[403, "Forbidden"],
		[404, "Not found"],
		[405, "Method not allowed"],
		[406, "Not acceptable"],
		[408, "Request timeout"],
		[413, "Request entity too large"],
		[500, "Internal server error"],
		[502, "Bad gateway"],
		[503, "Service unavailable"],
		[504, "Gateway timeout"],
		[505, "HTTP version not supported"]
	]);
	class HttpError extends Error {
		constructor(e, t = "HTTP error: " + (h.get(e) || e), n = null) {
			super(t), this.statusCode = e, this.description = n, this.name = "HttpError", this.code = "HTTP_ERROR_" + e
		}
	}
	t.HttpError = HttpError, t.parseJson = function parseJson(e) {
		return e.then(e => null == e || 0 === e.length ? null : JSON.parse(e))
	};
	class HttpExecutor {
		constructor() {
			this.maxRedirects = 10
		}
		request(e, t = new c.CancellationToken, n) {
			configureRequestOptions(e);
			const i = null == n ? void 0 : Buffer.from(JSON.stringify(n));
			return null != i && (e.method = "post", e.headers["Content-Type"] = "application/json", e.headers["Content-Length"] = i.length), this.doApiRequest(e, t, e => {
				e.end(i)
			})
		}
		doApiRequest(e, t, n, i = 0) {
			return d.enabled && d("Request: " + safeStringifyJson(e)), t.createPromise((r, o, s) => {
				const a = this.createRequest(e, s => {
					try {
						this.handleResponse(s, e, t, r, o, i, n)
					} catch (e) {
						o(e)
					}
				});
				this.addErrorAndTimeoutHandlers(a, o), this.addRedirectHandlers(a, e, o, i, e => {
					this.doApiRequest(e, t, n, i).then(r).catch(o)
				}), n(a, o), s(() => a.abort())
			})
		}
		addRedirectHandlers(e, t, n, i, r) {}
		addErrorAndTimeoutHandlers(e, t) {
			this.addTimeOutHandler(e, t), e.on("error", t), e.on("aborted", () => {
				t(new Error("Request has been aborted by the server"))
			})
		}
		handleResponse(e, t, n, i, r, o, s) {
			if (d.enabled && d(`Response: ${e.statusCode} ${e.statusMessage}, request options: ${safeStringifyJson(t)}`), 404 === e.statusCode) return void r(createHttpError(e, `method: ${t.method||"GET"} url: ${t.protocol||"https:"}//${t.hostname}${t.port?":"+t.port:""}${t.path}\n\nPlease double check that your authentication token is correct. Due to security reasons actual status maybe not reported, but 404.\n`));
			if (204 === e.statusCode) return void i();
			const a = safeGetHeader(e, "location");
			if (null != a) return o > this.maxRedirects ? void r(this.createMaxRedirectError()) : void this.doApiRequest(HttpExecutor.prepareRedirectUrlOptions(a, t), n, s, o).then(i).catch(r);
			e.setEncoding("utf8");
			let c = "";
			e.on("error", r), e.on("data", e => c += e), e.on("end", () => {
				try {
					if (null != e.statusCode && e.statusCode >= 400) {
						const t = safeGetHeader(e, "content-type"),
							n = null != t && (Array.isArray(t) ? null != t.find(e => e.includes("json")) : t.includes("json"));
						r(createHttpError(e, n ? JSON.parse(c) : c))
					} else i(0 === c.length ? null : c)
				} catch (e) {
					r(e)
				}
			})
		}
		async downloadToBuffer(e, t) {
			return await t.cancellationToken.createPromise((n, i, r) => {
				let o = null;
				const s = {
					headers: t.headers || void 0,
					redirect: "manual"
				};
				configureRequestUrl(e, s), configureRequestOptions(s), this.doDownload(s, {
					destination: null,
					options: t,
					onCancel: r,
					callback: e => {
						null == e ? n(o) : i(e)
					},
					responseHandler: (e, t) => {
						const n = safeGetHeader(e, "content-length");
						let i = -1;
						if (null != n) {
							const e = parseInt(n, 10);
							if (e > 0) {
								if (e > 524288e3) return void t(new Error("Maximum allowed size is 500 MB"));
								o = Buffer.alloc(e), i = 0
							}
						}
						e.on("data", e => {
							if (-1 !== i) e.copy(o, i), i += e.length;
							else if (null == o) o = e;
							else {
								if (o.length > 524288e3) return void t(new Error("Maximum allowed size is 500 MB"));
								o = Buffer.concat([o, e])
							}
						}), e.on("end", () => {
							null != o && -1 !== i && i !== o.length ? t(new Error(`Received data length ${i} is not equal to expected ${o.length}`)) : t(null)
						})
					}
				}, 0)
			})
		}
		doDownload(e, t, n) {
			const i = this.createRequest(e, i => {
				if (i.statusCode >= 400) return void t.callback(new Error(`Cannot download "${e.protocol||"https:"}//${e.hostname}${e.path}", status ${i.statusCode}: ${i.statusMessage}`));
				i.on("error", t.callback);
				const r = safeGetHeader(i, "location");
				null == r ? null == t.responseHandler ? function configurePipes(e, t) {
					if (! function checkSha2(e, t, n) {
							if (null != e && null != t && e !== t) return n(new Error(`checksum mismatch: expected ${t} but got ${e} (X-Checksum-Sha2 header)`)), !1;
							return !0
						}(safeGetHeader(t, "X-Checksum-Sha2"), e.options.sha2, e.callback)) return;
					const n = [];
					if (null != e.options.onProgress) {
						const i = safeGetHeader(t, "content-length");
						null != i && n.push(new u.ProgressCallbackTransform(parseInt(i, 10), e.options.cancellationToken, e.options.onProgress))
					}
					const i = e.options.sha512;
					null != i ? n.push(new DigestTransform(i, "sha512", 128 !== i.length || i.includes("+") || i.includes("Z") || i.includes("=") ? "base64" : "hex")) : null != e.options.sha2 && n.push(new DigestTransform(e.options.sha2, "sha256", "hex"));
					const r = o.createWriteStream(e.destination);
					n.push(r);
					let s = t;
					for (const t of n) t.on("error", t => {
						e.options.cancellationToken.cancelled || e.callback(t)
					}), s = s.pipe(t);
					r.on("finish", () => {
						r.close(e.callback)
					})
				}(t, i) : t.responseHandler(i, t.callback) : n < this.maxRedirects ? this.doDownload(HttpExecutor.prepareRedirectUrlOptions(r, e), t, n++) : t.callback(this.createMaxRedirectError())
			});
			this.addErrorAndTimeoutHandlers(i, t.callback), this.addRedirectHandlers(i, e, t.callback, n, e => {
				this.doDownload(e, t, n++)
			}), i.end()
		}
		createMaxRedirectError() {
			return new Error(`Too many redirects (> ${this.maxRedirects})`)
		}
		addTimeOutHandler(e, t) {
			e.on("socket", n => {
				n.setTimeout(6e4, () => {
					e.abort(), t(new Error("Request timed out"))
				})
			})
		}
		static prepareRedirectUrlOptions(e, t) {
			const n = configureRequestOptionsFromUrl(e, {
					...t
				}),
				i = n.headers;
			if (null != i && null != i.authorization && i.authorization.startsWith("token")) {
				const t = new a.URL(e);
				(t.hostname.endsWith(".amazonaws.com") || t.searchParams.has("X-Amz-Credential")) && delete i.authorization
			}
			return n
		}
	}

	function configureRequestOptionsFromUrl(e, t) {
		const n = configureRequestOptions(t);
		return configureRequestUrl(new a.URL(e), n), n
	}

	function configureRequestUrl(e, t) {
		t.protocol = e.protocol, t.hostname = e.hostname, e.port ? t.port = e.port : t.port && delete t.port, t.path = e.pathname + e.search
	}
	t.HttpExecutor = HttpExecutor, t.configureRequestOptionsFromUrl = configureRequestOptionsFromUrl, t.configureRequestUrl = configureRequestUrl;
	class DigestTransform extends s.Transform {
		constructor(e, t = "sha512", n = "base64") {
			super(), this.expected = e, this.algorithm = t, this.encoding = n, this._actual = null, this.isValidateOnEnd = !0, this.digester = i.createHash(t)
		}
		get actual() {
			return this._actual
		}
		_transform(e, t, n) {
			this.digester.update(e), n(null, e)
		}
		_flush(e) {
			if (this._actual = this.digester.digest(this.encoding), this.isValidateOnEnd) try {
				this.validate()
			} catch (t) {
				return void e(t)
			}
			e(null)
		}
		validate() {
			if (null == this._actual) throw l.newError("Not finished yet", "ERR_STREAM_NOT_FINISHED");
			if (this._actual !== this.expected) throw l.newError(`${this.algorithm} checksum mismatch, expected ${this.expected}, got ${this._actual}`, "ERR_CHECKSUM_MISMATCH");
			return null
		}
	}

	function safeGetHeader(e, t) {
		const n = e.headers[t];
		return null == n ? null : Array.isArray(n) ? 0 === n.length ? null : n[n.length - 1] : n
	}

	function configureRequestOptions(e, t, n) {
		null != n && (e.method = n), e.headers = {
			...e.headers
		};
		const i = e.headers;
		return null != t && (i.authorization = t.startsWith("Basic") ? t : "token " + t), null == i["User-Agent"] && (i["User-Agent"] = "electron-builder"), null != n && "GET" !== n && null != i["Cache-Control"] || (i["Cache-Control"] = "no-cache"), null == e.protocol && null != process.versions.electron && (e.protocol = "https:"), e
	}

	function safeStringifyJson(e, t) {
		return JSON.stringify(e, (e, n) => e.endsWith("authorization") || e.endsWith("Password") || e.endsWith("PASSWORD") || e.endsWith("Token") || e.includes("password") || e.includes("token") || null != t && t.has(e) ? "<stripped sensitive data>" : n, 2)
	}
	t.DigestTransform = DigestTransform, t.safeGetHeader = safeGetHeader, t.configureRequestOptions = configureRequestOptions, t.safeStringifyJson = safeStringifyJson
}, function(e, t, n) {
	e.exports = function setup(e) {
		function createDebug(e) {
			let t, n, i, r = null;

			function debug(...e) {
				if (!debug.enabled) return;
				const n = debug,
					i = Number(new Date),
					r = i - (t || i);
				n.diff = r, n.prev = t, n.curr = i, t = i, e[0] = createDebug.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
				let o = 0;
				e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, i) => {
					if ("%%" === t) return "%";
					o++;
					const r = createDebug.formatters[i];
					if ("function" == typeof r) {
						const i = e[o];
						t = r.call(n, i), e.splice(o, 1), o--
					}
					return t
				}), createDebug.formatArgs.call(n, e);
				(n.log || createDebug.log).apply(n, e)
			}
			return debug.namespace = e, debug.useColors = createDebug.useColors(), debug.color = createDebug.selectColor(e), debug.extend = extend, debug.destroy = createDebug.destroy, Object.defineProperty(debug, "enabled", {
				enumerable: !0,
				configurable: !1,
				get: () => null !== r ? r : (n !== createDebug.namespaces && (n = createDebug.namespaces, i = createDebug.enabled(e)), i),
				set: e => {
					r = e
				}
			}), "function" == typeof createDebug.init && createDebug.init(debug), debug
		}

		function extend(e, t) {
			const n = createDebug(this.namespace + (void 0 === t ? ":" : t) + e);
			return n.log = this.log, n
		}

		function toNamespace(e) {
			return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
		}
		return createDebug.debug = createDebug, createDebug.default = createDebug, createDebug.coerce = function coerce(e) {
			if (e instanceof Error) return e.stack || e.message;
			return e
		}, createDebug.disable = function disable() {
			const e = [...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map(e => "-" + e)].join(",");
			return createDebug.enable(""), e
		}, createDebug.enable = function enable(e) {
			let t;
			createDebug.save(e), createDebug.namespaces = e, createDebug.names = [], createDebug.skips = [];
			const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
				i = n.length;
			for (t = 0; t < i; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? createDebug.skips.push(new RegExp("^" + e.substr(1) + "$")) : createDebug.names.push(new RegExp("^" + e + "$")))
		}, createDebug.enabled = function enabled(e) {
			if ("*" === e[e.length - 1]) return !0;
			let t, n;
			for (t = 0, n = createDebug.skips.length; t < n; t++)
				if (createDebug.skips[t].test(e)) return !1;
			for (t = 0, n = createDebug.names.length; t < n; t++)
				if (createDebug.names[t].test(e)) return !0;
			return !1
		}, createDebug.humanize = n(111), createDebug.destroy = function destroy() {
			console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
		}, Object.keys(e).forEach(t => {
			createDebug[t] = e[t]
		}), createDebug.names = [], createDebug.skips = [], createDebug.formatters = {}, createDebug.selectColor = function selectColor(e) {
			let t = 0;
			for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
			return createDebug.colors[Math.abs(t) % createDebug.colors.length]
		}, createDebug.enable(createDebug.load()), createDebug
	}
}, function(e, t) {
	e.exports = require("tty")
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.ProgressCallbackTransform = void 0;
	const i = n(23);
	class ProgressCallbackTransform extends i.Transform {
		constructor(e, t, n) {
			super(), this.total = e, this.cancellationToken = t, this.onProgress = n, this.start = Date.now(), this.transferred = 0, this.delta = 0, this.nextUpdate = this.start + 1e3
		}
		_transform(e, t, n) {
			if (this.cancellationToken.cancelled) return void n(new Error("cancelled"), null);
			this.transferred += e.length, this.delta += e.length;
			const i = Date.now();
			i >= this.nextUpdate && this.transferred !== this.total && (this.nextUpdate = i + 1e3, this.onProgress({
				total: this.total,
				delta: this.delta,
				transferred: this.transferred,
				percent: this.transferred / this.total * 100,
				bytesPerSecond: Math.round(this.transferred / ((i - this.start) / 1e3))
			}), this.delta = 0), n(null, e)
		}
		_flush(e) {
			this.cancellationToken.cancelled ? e(new Error("cancelled")) : (this.onProgress({
				total: this.total,
				delta: this.delta,
				transferred: this.total,
				percent: 100,
				bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
			}), this.delta = 0, e(null))
		}
	}
	t.ProgressCallbackTransform = ProgressCallbackTransform
}, function(e, t) {
	e.exports = require("assert")
}, function(e, t, n) {
	"use strict";
	e.exports = {
		copySync: n(125)
	}
}, function(e, t, n) {
	"use strict";
	const i = n(6);
	e.exports = {
		utimesMillis: function utimesMillis(e, t, n, r) {
			i.open(e, "r+", (e, o) => {
				if (e) return r(e);
				i.futimes(o, t, n, e => {
					i.close(o, t => {
						r && r(e || t)
					})
				})
			})
		},
		utimesMillisSync: function utimesMillisSync(e, t, n) {
			const r = i.openSync(e, "r+");
			return i.futimesSync(r, t, n), i.closeSync(r)
		}
	}
}, function(e, t, n) {
	"use strict";
	const i = n(8).fromCallback;
	e.exports = {
		copy: i(n(128))
	}
}, function(e, t, n) {
	const i = n(26);
	e.exports = {
		re: i.re,
		src: i.src,
		tokens: i.t,
		SEMVER_SPEC_VERSION: n(36).SEMVER_SPEC_VERSION,
		SemVer: n(4),
		compareIdentifiers: n(53).compareIdentifiers,
		rcompareIdentifiers: n(53).rcompareIdentifiers,
		parse: n(27),
		valid: n(147),
		clean: n(148),
		inc: n(149),
		diff: n(150),
		major: n(151),
		minor: n(152),
		patch: n(153),
		prerelease: n(154),
		compare: n(9),
		rcompare: n(155),
		compareLoose: n(156),
		compareBuild: n(55),
		sort: n(157),
		rsort: n(158),
		gt: n(39),
		lt: n(56),
		eq: n(54),
		neq: n(81),
		gte: n(57),
		lte: n(58),
		cmp: n(82),
		coerce: n(159),
		Comparator: n(40),
		Range: n(10),
		satisfies: n(41),
		toComparators: n(163),
		maxSatisfying: n(164),
		minSatisfying: n(165),
		minVersion: n(166),
		validRange: n(167),
		outside: n(59),
		gtr: n(168),
		ltr: n(169),
		intersects: n(170),
		simplifyRange: n(171),
		subset: n(172)
	}
}, function(e, t, n) {
	const i = n(9);
	e.exports = (e, t, n) => 0 !== i(e, t, n)
}, function(e, t, n) {
	const i = n(54),
		r = n(81),
		o = n(39),
		s = n(57),
		a = n(56),
		c = n(58);
	e.exports = (e, t, n, l) => {
		switch (t) {
			case "===":
				return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
			case "!==":
				return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
			case "":
			case "=":
			case "==":
				return i(e, n, l);
			case "!=":
				return r(e, n, l);
			case ">":
				return o(e, n, l);
			case ">=":
				return s(e, n, l);
			case "<":
				return a(e, n, l);
			case "<=":
				return c(e, n, l);
			default:
				throw new TypeError("Invalid operator: " + t)
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.GenericProvider = void 0;
	const i = n(2),
		r = n(28),
		o = n(16);
	class GenericProvider extends o.Provider {
		constructor(e, t, n) {
			super(n), this.configuration = e, this.updater = t, this.baseUrl = r.newBaseUrl(this.configuration.url)
		}
		get channel() {
			const e = this.updater.channel || this.configuration.channel;
			return null == e ? this.getDefaultChannelName() : this.getCustomChannelName(e)
		}
		async getLatestVersion() {
			const e = r.getChannelFilename(this.channel),
				t = r.newUrlFromBase(e, this.baseUrl, this.updater.isAddNoCacheQuery);
			for (let n = 0;; n++) try {
				return o.parseUpdateInfo(await this.httpRequest(t), e, t)
			} catch (t) {
				if (t instanceof i.HttpError && 404 === t.statusCode) throw i.newError(`Cannot find channel "${e}" update info: ${t.stack||t.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
				if ("ECONNREFUSED" === t.code && n < 3) {
					await new Promise((e, t) => {
						try {
							setTimeout(e, 1e3 * n)
						} catch (e) {
							t(e)
						}
					});
					continue
				}
				throw t
			}
		}
		resolveFiles(e) {
			return o.resolveFiles(e, this.baseUrl)
		}
	}
	t.GenericProvider = GenericProvider
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.computeReleaseNotes = t.GitHubProvider = t.BaseGitHubProvider = void 0;
	const i = n(2),
		r = n(80),
		o = n(11),
		s = n(28),
		a = n(16),
		c = /\/tag\/v?([^/]+)$/;
	class BaseGitHubProvider extends a.Provider {
		constructor(e, t, n) {
			super({
				...n,
				isUseMultipleRangeRequest: !1
			}), this.options = e, this.baseUrl = s.newBaseUrl(i.githubUrl(e, t));
			const r = "github.com" === t ? "api.github.com" : t;
			this.baseApiUrl = s.newBaseUrl(i.githubUrl(e, r))
		}
		computeGithubBasePath(e) {
			const t = this.options.host;
			return null != t && "github.com" !== t && "api.github.com" !== t ? "/api/v3" + e : e
		}
	}
	t.BaseGitHubProvider = BaseGitHubProvider;

	function getNoteValue(e) {
		const t = e.elementValueOrEmpty("content");
		return "No content." === t ? "" : t
	}

	function computeReleaseNotes(e, t, n, i) {
		if (!t) return getNoteValue(i);
		const o = [];
		for (const t of n.getElements("entry")) {
			const n = /\/tag\/v?([^/]+)$/.exec(t.element("link").attribute("href"))[1];
			r.lt(e, n) && o.push({
				version: n,
				note: getNoteValue(t)
			})
		}
		return o.sort((e, t) => r.rcompare(e.version, t.version))
	}
	t.GitHubProvider = class GitHubProvider extends BaseGitHubProvider {
		constructor(e, t, n) {
			super(e, "github.com", n), this.options = e, this.updater = t
		}
		async getLatestVersion() {
			const e = new i.CancellationToken,
				t = await this.httpRequest(s.newUrlFromBase(this.basePath + ".atom", this.baseUrl), {
					accept: "application/xml, application/atom+xml, text/xml, */*"
				}, e),
				n = i.parseXml(t);
			let r, o = n.element("entry", !1, "No published versions on GitHub");
			try {
				if (this.updater.allowPrerelease) r = c.exec(o.element("link").attribute("href"))[1];
				else {
					r = await this.getLatestVersionString(e);
					for (const e of n.getElements("entry"))
						if (c.exec(e.element("link").attribute("href"))[1] === r) {
							o = e;
							break
						}
				}
			} catch (e) {
				throw i.newError(`Cannot parse releases feed: ${e.stack||e.message},\nXML:\n${t}`, "ERR_UPDATER_INVALID_RELEASE_FEED")
			}
			if (null == r) throw i.newError("No published versions on GitHub", "ERR_UPDATER_NO_PUBLISHED_VERSIONS");
			const l = s.getChannelFilename(this.getDefaultChannelName()),
				u = s.newUrlFromBase(this.getBaseDownloadPath(r, l), this.baseUrl),
				d = this.createRequestOptions(u);
			let h;
			try {
				h = await this.executor.request(d, e)
			} catch (e) {
				if (!this.updater.allowPrerelease && e instanceof i.HttpError && 404 === e.statusCode) throw i.newError(`Cannot find ${l} in the latest release artifacts (${u}): ${e.stack||e.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
				throw e
			}
			const p = a.parseUpdateInfo(h, l, u);
			return null == p.releaseName && (p.releaseName = o.elementValueOrEmpty("title")), null == p.releaseNotes && (p.releaseNotes = computeReleaseNotes(this.updater.currentVersion, this.updater.fullChangelog, n, o)), p
		}
		async getLatestVersionString(e) {
			const t = this.options,
				n = null == t.host || "github.com" === t.host ? s.newUrlFromBase(this.basePath + "/latest", this.baseUrl) : new o.URL(this.computeGithubBasePath(`/repos/${t.owner}/${t.repo}/releases`) + "/latest", this.baseApiUrl);
			try {
				const t = await this.httpRequest(n, {
					Accept: "application/json"
				}, e);
				if (null == t) return null;
				const i = JSON.parse(t);
				return i.tag_name.startsWith("v") ? i.tag_name.substring(1) : i.tag_name
			} catch (e) {
				throw i.newError(`Unable to find latest version on GitHub (${n}), please ensure a production release exists: ${e.stack||e.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND")
			}
		}
		get basePath() {
			return `/${this.options.owner}/${this.options.repo}/releases`
		}
		resolveFiles(e) {
			return a.resolveFiles(e, this.baseUrl, t => this.getBaseDownloadPath(e.version, t.replace(/ /g, "-")))
		}
		getBaseDownloadPath(e, t) {
			return `${this.basePath}/download/${!1===this.options.vPrefixedTagName?"":"v"}${e}/${t}`
		}
	}, t.computeReleaseNotes = computeReleaseNotes
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.AppImageUpdater = void 0;
	const i = n(2),
		r = n(14),
		o = n(17),
		s = n(5),
		a = n(0),
		c = n(86),
		l = n(87),
		u = n(34),
		d = n(16);
	class AppImageUpdater extends c.BaseUpdater {
		constructor(e, t) {
			super(e, t)
		}
		isUpdaterActive() {
			return null == process.env.APPIMAGE ? (null == process.env.SNAP ? this._logger.warn("APPIMAGE env is not defined, current application is not an AppImage") : this._logger.info("SNAP env is defined, updater is disabled"), !1) : super.isUpdaterActive()
		}
		doDownloadUpdate(e) {
			const t = e.updateInfoAndProvider.provider,
				n = d.findFile(t.resolveFiles(e.updateInfoAndProvider.info), "AppImage");
			return this.executeDownload({
				fileExtension: "AppImage",
				fileInfo: n,
				downloadUpdateOptions: e,
				task: async (r, s) => {
					const a = process.env.APPIMAGE;
					if (null == a) throw i.newError("APPIMAGE env is not defined", "ERR_UPDATER_OLD_FILE_NOT_FOUND");
					let c = !1;
					try {
						const i = {
							newUrl: n.url,
							oldFile: a,
							logger: this._logger,
							newFile: r,
							isUseMultipleRangeRequest: t.isUseMultipleRangeRequest,
							requestHeaders: e.requestHeaders,
							cancellationToken: e.cancellationToken
						};
						this.listenerCount(u.DOWNLOAD_PROGRESS) > 0 && (i.onProgress = e => this.emit(u.DOWNLOAD_PROGRESS, e)), await new l.FileWithEmbeddedBlockMapDifferentialDownloader(n.info, this.httpExecutor, i).download()
					} catch (e) {
						this._logger.error("Cannot download differentially, fallback to full download: " + (e.stack || e)), c = "linux" === process.platform
					}
					c && await this.httpExecutor.download(n.url, r, s), await o.chmod(r, 493)
				}
			})
		}
		doInstall(e) {
			const t = process.env.APPIMAGE;
			if (null == t) throw i.newError("APPIMAGE env is not defined", "ERR_UPDATER_OLD_FILE_NOT_FOUND");
			let n;
			s.unlinkSync(t);
			const o = a.basename(t);
			n = a.basename(e.installerPath) !== o && /\d+\.\d+\.\d+/.test(o) ? a.join(a.dirname(t), a.basename(e.installerPath)) : t, r.execFileSync("mv", ["-f", e.installerPath, n]), n !== t && this.emit("appimage-filename-updated", n);
			const c = {
				...process.env,
				APPIMAGE_SILENT_INSTALL: "true"
			};
			return e.isForceRunAfter ? r.spawn(n, [], {
				detached: !0,
				stdio: "ignore",
				env: c
			}).unref() : (c.APPIMAGE_EXIT_AFTER_INSTALL = "true", r.execFileSync(n, [], {
				env: c
			})), !0
		}
	}
	t.AppImageUpdater = AppImageUpdater
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.BaseUpdater = void 0;
	const i = n(49);
	class BaseUpdater extends i.AppUpdater {
		constructor(e, t) {
			super(e, t), this.quitAndInstallCalled = !1, this.quitHandlerAdded = !1
		}
		quitAndInstall(e = !1, t = !1) {
			this._logger.info("Install on explicit quitAndInstall");
			this.install(e, !e || t) ? setImmediate(() => {
				this.app.quit()
			}) : this.quitAndInstallCalled = !1
		}
		executeDownload(e) {
			return super.executeDownload({
				...e,
				done: e => (this.dispatchUpdateDownloaded(e), this.addQuitHandler(), Promise.resolve())
			})
		}
		install(e, t) {
			if (this.quitAndInstallCalled) return this._logger.warn("install call ignored: quitAndInstallCalled is set to true"), !1;
			const n = this.downloadedUpdateHelper,
				i = null == n ? null : n.file,
				r = null == n ? null : n.downloadedFileInfo;
			if (null == i || null == r) return this.dispatchError(new Error("No valid update available, can't quit and install")), !1;
			this.quitAndInstallCalled = !0;
			try {
				return this._logger.info(`Install: isSilent: ${e}, isForceRunAfter: ${t}`), this.doInstall({
					installerPath: i,
					isSilent: e,
					isForceRunAfter: t,
					isAdminRightsRequired: r.isAdminRightsRequired
				})
			} catch (e) {
				return this.dispatchError(e), !1
			}
		}
		addQuitHandler() {
			!this.quitHandlerAdded && this.autoInstallOnAppQuit && (this.quitHandlerAdded = !0, this.app.onQuit(e => {
				this.quitAndInstallCalled ? this._logger.info("Update installer has already been triggered. Quitting application.") : this.autoInstallOnAppQuit ? 0 === e ? (this._logger.info("Auto install update on quit"), this.install(!0, !1)) : this._logger.info("Update will be not installed on quit because application is quitting with exit code " + e) : this._logger.info("Update will not be installed on quit because autoInstallOnAppQuit is set to false.")
			}))
		}
	}
	t.BaseUpdater = BaseUpdater
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.FileWithEmbeddedBlockMapDifferentialDownloader = void 0;
	const i = n(17),
		r = n(88),
		o = n(90);
	class FileWithEmbeddedBlockMapDifferentialDownloader extends r.DifferentialDownloader {
		async download() {
			const e = this.blockAwareFileInfo,
				t = e.size,
				n = t - (e.blockMapSize + 4);
			this.fileMetadataBuffer = await this.readRemoteBytes(n, t - 1);
			const r = readBlockMap(this.fileMetadataBuffer.slice(0, this.fileMetadataBuffer.length - 4));
			await this.doDownload(await async function readEmbeddedBlockMapData(e) {
				const t = await i.open(e, "r");
				try {
					const e = (await i.fstat(t)).size,
						n = Buffer.allocUnsafe(4);
					await i.read(t, n, 0, n.length, e - n.length);
					const r = Buffer.allocUnsafe(n.readUInt32BE(0));
					return await i.read(t, r, 0, r.length, e - n.length - r.length), await i.close(t), readBlockMap(r)
				} catch (e) {
					throw await i.close(t), e
				}
			}(this.options.oldFile), r)
		}
	}

	function readBlockMap(e) {
		return JSON.parse(o.inflateRawSync(e).toString())
	}
	t.FileWithEmbeddedBlockMapDifferentialDownloader = FileWithEmbeddedBlockMapDifferentialDownloader
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.DifferentialDownloader = void 0;
	const i = n(2),
		r = n(17),
		o = n(5),
		s = n(89),
		a = n(11),
		c = n(60),
		l = n(184),
		u = n(185);

	function formatBytes(e, t = " KB") {
		return new Intl.NumberFormat("en").format((e / 1024).toFixed(2)) + t
	}
	t.DifferentialDownloader = class DifferentialDownloader {
		constructor(e, t, n) {
			this.blockAwareFileInfo = e, this.httpExecutor = t, this.options = n, this.fileMetadataBuffer = null, this.logger = n.logger
		}
		createRequestOptions() {
			const e = {
				headers: {
					...this.options.requestHeaders,
					accept: "*/*"
				}
			};
			return i.configureRequestUrl(this.options.newUrl, e), i.configureRequestOptions(e), e
		}
		doDownload(e, t) {
			if (e.version !== t.version) throw new Error(`version is different (${e.version} - ${t.version}), full download is required`);
			const n = this.logger,
				i = c.computeOperations(e, t, n);
			null != n.debug && n.debug(JSON.stringify(i, null, 2));
			let r = 0,
				o = 0;
			for (const e of i) {
				const t = e.end - e.start;
				e.kind === c.OperationKind.DOWNLOAD ? r += t : o += t
			}
			const s = this.blockAwareFileInfo.size;
			if (r + o + (null == this.fileMetadataBuffer ? 0 : this.fileMetadataBuffer.length) !== s) throw new Error(`Internal error, size mismatch: downloadSize: ${r}, copySize: ${o}, newSize: ${s}`);
			return n.info(`Full: ${formatBytes(s)}, To download: ${formatBytes(r)} (${Math.round(r/(s/100))}%)`), this.downloadFile(i)
		}
		downloadFile(e) {
			const t = [],
				closeFiles = () => Promise.all(t.map(e => r.close(e.descriptor).catch(t => {
					this.logger.error(`cannot close file "${e.path}": ${t}`)
				})));
			return this.doDownloadFile(e, t).then(closeFiles).catch(e => closeFiles().catch(t => {
				try {
					this.logger.error("cannot close files: " + t)
				} catch (e) {
					try {
						console.error(e)
					} catch (e) {}
				}
				throw e
			}).then(() => {
				throw e
			}))
		}
		async doDownloadFile(e, t) {
			const n = await r.open(this.options.oldFile, "r");
			t.push({
				descriptor: n,
				path: this.options.oldFile
			});
			const d = await r.open(this.options.newFile, "w");
			t.push({
				descriptor: d,
				path: this.options.newFile
			});
			const h = o.createWriteStream(this.options.newFile, {
				fd: d
			});
			await new Promise((r, o) => {
				const d = [];
				let p = void 0;
				if (!this.options.isUseMultipleRangeRequest && this.options.onProgress) {
					const t = [];
					let n = 0;
					for (const i of e) i.kind === c.OperationKind.DOWNLOAD && (t.push(i.end - i.start), n += i.end - i.start);
					const i = {
						expectedByteCounts: t,
						grandTotal: n
					};
					p = new u.ProgressDifferentialDownloadCallbackTransform(i, this.options.cancellationToken, this.options.onProgress), d.push(p)
				}
				const f = new i.DigestTransform(this.blockAwareFileInfo.sha512);
				f.isValidateOnEnd = !1, d.push(f), h.on("finish", () => {
					h.close(() => {
						t.splice(1, 1);
						try {
							f.validate()
						} catch (e) {
							return void o(e)
						}
						r(void 0)
					})
				}), d.push(h);
				let g = null;
				for (const e of d) e.on("error", o), g = null == g ? e : g.pipe(e);
				const m = d[0];
				let b;
				if (this.options.isUseMultipleRangeRequest) return b = l.executeTasksUsingMultipleRangeRequests(this, e, m, n, o), void b(0);
				let y = 0,
					S = null;
				this.logger.info("Differential download: " + this.options.newUrl);
				const v = this.createRequestOptions();
				v.redirect = "manual", b = t => {
					var r, l;
					if (t >= e.length) return null != this.fileMetadataBuffer && m.write(this.fileMetadataBuffer), void m.end();
					const u = e[t++];
					if (u.kind === c.OperationKind.COPY) return p && p.beginFileCopy(), void s.copyData(u, m, n, o, () => b(t));
					const d = `bytes=${u.start}-${u.end-1}`;
					v.headers.range = d, null === (l = null === (r = this.logger) || void 0 === r ? void 0 : r.debug) || void 0 === l || l.call(r, "download range: " + d), p && p.beginRangeDownload();
					const h = this.httpExecutor.createRequest(v, e => {
						e.statusCode >= 400 && o(i.createHttpError(e)), e.pipe(m, {
							end: !1
						}), e.once("end", () => {
							p && p.endRangeDownload(), 100 == ++y ? (y = 0, setTimeout(() => b(t), 1e3)) : b(t)
						})
					});
					h.on("redirect", (e, t, n) => {
						this.logger.info("Redirect to " + function removeQuery(e) {
							const t = e.indexOf("?");
							return t < 0 ? e : e.substring(0, t)
						}(n)), S = n, i.configureRequestUrl(new a.URL(S), v), h.followRedirect()
					}), this.httpExecutor.addErrorAndTimeoutHandlers(h, o), h.end()
				}, b(0)
			})
		}
		async readRemoteBytes(e, t) {
			const n = Buffer.allocUnsafe(t + 1 - e),
				i = this.createRequestOptions();
			i.headers.range = `bytes=${e}-${t}`;
			let r = 0;
			if (await this.request(i, e => {
					e.copy(n, r), r += e.length
				}), r !== n.length) throw new Error(`Received data length ${r} is not equal to expected ${n.length}`);
			return n
		}
		request(e, t) {
			return new Promise((n, i) => {
				const r = this.httpExecutor.createRequest(e, e => {
					l.checkIsRangesSupported(e, i) && (e.on("data", t), e.on("end", () => n()))
				});
				this.httpExecutor.addErrorAndTimeoutHandlers(r, i), r.end()
			})
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.DataSplitter = t.copyData = void 0;
	const i = n(2),
		r = n(5),
		o = n(23),
		s = n(60),
		a = Buffer.from("\r\n\r\n");
	var c;

	function copyData(e, t, n, i, o) {
		const s = r.createReadStream("", {
			fd: n,
			autoClose: !1,
			start: e.start,
			end: e.end - 1
		});
		s.on("error", i), s.once("end", o), s.pipe(t, {
			end: !1
		})
	}! function(e) {
		e[e.INIT = 0] = "INIT", e[e.HEADER = 1] = "HEADER", e[e.BODY = 2] = "BODY"
	}(c || (c = {})), t.copyData = copyData;
	class DataSplitter extends o.Writable {
		constructor(e, t, n, i, r, o) {
			super(), this.out = e, this.options = t, this.partIndexToTaskIndex = n, this.partIndexToLength = r, this.finishHandler = o, this.partIndex = -1, this.headerListBuffer = null, this.readState = c.INIT, this.ignoreByteCount = 0, this.remainingPartDataCount = 0, this.actualPartLength = 0, this.boundaryLength = i.length + 4, this.ignoreByteCount = this.boundaryLength - 2
		}
		get isFinished() {
			return this.partIndex === this.partIndexToLength.length
		}
		_write(e, t, n) {
			this.isFinished ? console.error(`Trailing ignored data: ${e.length} bytes`) : this.handleData(e).then(n).catch(n)
		}
		async handleData(e) {
			let t = 0;
			if (0 !== this.ignoreByteCount && 0 !== this.remainingPartDataCount) throw i.newError("Internal error", "ERR_DATA_SPLITTER_BYTE_COUNT_MISMATCH");
			if (this.ignoreByteCount > 0) {
				const n = Math.min(this.ignoreByteCount, e.length);
				this.ignoreByteCount -= n, t = n
			} else if (this.remainingPartDataCount > 0) {
				const n = Math.min(this.remainingPartDataCount, e.length);
				this.remainingPartDataCount -= n, await this.processPartData(e, 0, n), t = n
			}
			if (t !== e.length) {
				if (this.readState === c.HEADER) {
					const n = this.searchHeaderListEnd(e, t);
					if (-1 === n) return;
					t = n, this.readState = c.BODY, this.headerListBuffer = null
				}
				for (;;) {
					if (this.readState === c.BODY) this.readState = c.INIT;
					else {
						this.partIndex++;
						let n = this.partIndexToTaskIndex.get(this.partIndex);
						if (null == n) {
							if (!this.isFinished) throw i.newError("taskIndex is null", "ERR_DATA_SPLITTER_TASK_INDEX_IS_NULL");
							n = this.options.end
						}
						const r = 0 === this.partIndex ? this.options.start : this.partIndexToTaskIndex.get(this.partIndex - 1) + 1;
						if (r < n) await this.copyExistingData(r, n);
						else if (r > n) throw i.newError("prevTaskIndex must be < taskIndex", "ERR_DATA_SPLITTER_TASK_INDEX_ASSERT_FAILED");
						if (this.isFinished) return this.onPartEnd(), void this.finishHandler();
						if (t = this.searchHeaderListEnd(e, t), -1 === t) return void(this.readState = c.HEADER)
					}
					const n = this.partIndexToLength[this.partIndex],
						r = t + n,
						o = Math.min(r, e.length);
					if (await this.processPartStarted(e, t, o), this.remainingPartDataCount = n - (o - t), this.remainingPartDataCount > 0) return;
					if (t = r + this.boundaryLength, t >= e.length) return void(this.ignoreByteCount = this.boundaryLength - (e.length - r))
				}
			}
		}
		copyExistingData(e, t) {
			return new Promise((n, i) => {
				const w = () => {
					if (e === t) return void n();
					const r = this.options.tasks[e];
					r.kind === s.OperationKind.COPY ? copyData(r, this.out, this.options.oldFileFd, i, () => {
						e++, w()
					}) : i(new Error("Task kind must be COPY"))
				};
				w()
			})
		}
		searchHeaderListEnd(e, t) {
			const n = e.indexOf(a, t);
			if (-1 !== n) return n + a.length;
			const i = 0 === t ? e : e.slice(t);
			return null == this.headerListBuffer ? this.headerListBuffer = i : this.headerListBuffer = Buffer.concat([this.headerListBuffer, i]), -1
		}
		onPartEnd() {
			const e = this.partIndexToLength[this.partIndex - 1];
			if (this.actualPartLength !== e) throw i.newError(`Expected length: ${e} differs from actual: ${this.actualPartLength}`, "ERR_DATA_SPLITTER_LENGTH_MISMATCH");
			this.actualPartLength = 0
		}
		processPartStarted(e, t, n) {
			return 0 !== this.partIndex && this.onPartEnd(), this.processPartData(e, t, n)
		}
		processPartData(e, t, n) {
			this.actualPartLength += n - t;
			const i = this.out;
			return i.write(0 === t && e.length === n ? e : e.slice(t, n)) ? Promise.resolve() : new Promise((e, t) => {
				i.on("error", t), i.once("drain", () => {
					i.removeListener("error", t), e()
				})
			})
		}
	}
	t.DataSplitter = DataSplitter
}, function(e, t) {
	e.exports = require("zlib")
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.MacUpdater = void 0;
	const i = n(2),
		r = n(17),
		o = n(5),
		s = n(186),
		a = n(49),
		c = n(16);
	class MacUpdater extends a.AppUpdater {
		constructor(e, t) {
			super(e, t), this.nativeUpdater = n(1).autoUpdater, this.squirrelDownloadedUpdate = !1, this.nativeUpdater.on("error", e => {
				this._logger.warn(e), this.emit("error", e)
			}), this.nativeUpdater.on("update-downloaded", () => {
				this.squirrelDownloadedUpdate = !0
			})
		}
		doDownloadUpdate(e) {
			let t = e.updateInfoAndProvider.provider.resolveFiles(e.updateInfoAndProvider.info);
			const isArm64 = e => e.url.pathname.includes("arm64");
			t.some(isArm64) && (t = t.filter(e => "arm64" === process.arch === isArm64(e)));
			const n = c.findFile(t, "zip", ["pkg", "dmg"]);
			if (null == n) throw i.newError("ZIP file not provided: " + i.safeStringifyJson(t), "ERR_UPDATER_ZIP_FILE_NOT_FOUND");
			const a = s.createServer();

			function getServerUrl() {
				return "http://127.0.0.1:" + a.address().port
			}
			return a.on("close", () => {
				this._logger.info(`Proxy server for native Squirrel.Mac is closed (was started to download ${n.url.href})`)
			}), this.executeDownload({
				fileExtension: "zip",
				fileInfo: n,
				downloadUpdateOptions: e,
				task: (e, t) => this.httpExecutor.download(n.url, e, t),
				done: async e => {
					const t = e.downloadedFile;
					let i = n.info.size;
					return null == i && (i = (await r.stat(t)).size), await new Promise((n, r) => {
						const s = `/${Date.now()}-${Math.floor(9999*Math.random())}.zip`;
						a.on("request", (e, c) => {
							const l = e.url;
							if (this._logger.info(l + " requested"), "/" === l) {
								const e = Buffer.from(`{ "url": "${getServerUrl()}${s}" }`);
								return c.writeHead(200, {
									"Content-Type": "application/json",
									"Content-Length": e.length
								}), void c.end(e)
							}
							if (!l.startsWith(s)) return this._logger.warn(l + " requested, but not supported"), c.writeHead(404), void c.end();
							this._logger.info(`${s} requested by Squirrel.Mac, pipe ${t}`);
							let u = !1;
							c.on("finish", () => {
								try {
									setImmediate(() => a.close())
								} finally {
									u || (this.nativeUpdater.removeListener("error", r), n([]))
								}
							});
							const d = o.createReadStream(t);
							d.on("error", e => {
								try {
									c.end()
								} catch (e) {
									this._logger.warn("cannot end response: " + e)
								}
								u = !0, this.nativeUpdater.removeListener("error", r), r(new Error(`Cannot pipe "${t}": ${e}`))
							}), c.writeHead(200, {
								"Content-Type": "application/zip",
								"Content-Length": i
							}), d.pipe(c)
						}), a.listen(0, "127.0.0.1", () => {
							this.nativeUpdater.setFeedURL({
								url: getServerUrl(),
								headers: {
									"Cache-Control": "no-cache"
								}
							}), this.dispatchUpdateDownloaded(e), this.autoInstallOnAppQuit ? (this.nativeUpdater.once("error", r), this.nativeUpdater.checkForUpdates()) : n([])
						})
					})
				}
			})
		}
		quitAndInstall() {
			this.squirrelDownloadedUpdate ? this.nativeUpdater.quitAndInstall() : (this.nativeUpdater.on("update-downloaded", () => {
				this.nativeUpdater.quitAndInstall()
			}), this.nativeUpdater.checkForUpdates())
		}
	}
	t.MacUpdater = MacUpdater
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.NsisUpdater = void 0;
	const i = n(2),
		r = n(14),
		o = n(0),
		s = n(86),
		a = n(87),
		c = n(187),
		l = n(34),
		u = n(28),
		d = n(16),
		h = n(17),
		p = n(188),
		f = n(11),
		g = n(90);
	class NsisUpdater extends s.BaseUpdater {
		constructor(e, t) {
			super(e, t)
		}
		doDownloadUpdate(e) {
			const t = e.updateInfoAndProvider.provider,
				n = d.findFile(t.resolveFiles(e.updateInfoAndProvider.info), "exe");
			return this.executeDownload({
				fileExtension: "exe",
				downloadUpdateOptions: e,
				fileInfo: n,
				task: async (r, o, s, a) => {
					const c = n.packageInfo,
						l = null != c && null != s;
					(l || await this.differentialDownloadInstaller(n, e, r, t)) && await this.httpExecutor.download(n.url, r, o);
					const u = await this.verifySignature(r);
					if (null != u) throw await a(), i.newError(`New version ${e.updateInfoAndProvider.info.version} is not signed by the application owner: ${u}`, "ERR_UPDATER_INVALID_SIGNATURE");
					if (l && await this.differentialDownloadWebPackage(e, c, s, t)) try {
						await this.httpExecutor.download(new f.URL(c.path), s, {
							headers: e.requestHeaders,
							cancellationToken: e.cancellationToken,
							sha512: c.sha512
						})
					} catch (e) {
						try {
							await h.unlink(s)
						} catch (e) {}
						throw e
					}
				}
			})
		}
		async verifySignature(e) {
			let t;
			try {
				if (t = (await this.configOnDisk.value).publisherName, null == t) return null
			} catch (e) {
				if ("ENOENT" === e.code) return null;
				throw e
			}
			return await p.verifySignature(Array.isArray(t) ? t : [t], e, this._logger)
		}
		doInstall(e) {
			const t = ["--updated"];
			e.isSilent && t.push("/S"), e.isForceRunAfter && t.push("--force-run");
			const n = null == this.downloadedUpdateHelper ? null : this.downloadedUpdateHelper.packageFile;
			null != n && t.push("--package-file=" + n);
			const callUsingElevation = () => {
				_spawn(o.join(process.resourcesPath, "elevate.exe"), [e.installerPath].concat(t)).catch(e => this.dispatchError(e))
			};
			return e.isAdminRightsRequired ? (this._logger.info("isAdminRightsRequired is set to true, run installer using elevate.exe"), callUsingElevation(), !0) : (_spawn(e.installerPath, t).catch(e => {
				const t = e.code;
				this._logger.info(`Cannot run installer: error code: ${t}, error message: "${e.message}", will be executed again using elevate if EACCES"`), "UNKNOWN" === t || "EACCES" === t ? callUsingElevation() : this.dispatchError(e)
			}), !0)
		}
		async differentialDownloadInstaller(e, t, n, r) {
			try {
				if (null != this._testOnlyOptions && !this._testOnlyOptions.isUseDifferentialDownload) return !0;
				const s = u.blockmapFiles(e.url, t.updateInfoAndProvider.info.version, this.app.version);
				this._logger.info(`Download block maps (old: "${s[0]}", new: ${s[1]})`);
				const downloadBlockMap = async e => {
					const n = await this.httpExecutor.downloadToBuffer(e, {
						headers: t.requestHeaders,
						cancellationToken: t.cancellationToken
					});
					if (null == n || 0 === n.length) throw new Error(`Blockmap "${e.href}" is empty`);
					try {
						return JSON.parse(g.gunzipSync(n).toString())
					} catch (t) {
						throw new Error(`Cannot parse blockmap "${e.href}", error: ${t}, raw data: ${n}`)
					}
				}, a = {
					newUrl: e.url,
					oldFile: o.join(this.downloadedUpdateHelper.cacheDir, i.CURRENT_APP_INSTALLER_FILE_NAME),
					logger: this._logger,
					newFile: n,
					isUseMultipleRangeRequest: r.isUseMultipleRangeRequest,
					requestHeaders: t.requestHeaders,
					cancellationToken: t.cancellationToken
				};
				this.listenerCount(l.DOWNLOAD_PROGRESS) > 0 && (a.onProgress = e => this.emit(l.DOWNLOAD_PROGRESS, e));
				const d = await Promise.all(s.map(e => downloadBlockMap(e)));
				return await new c.GenericDifferentialDownloader(e.info, this.httpExecutor, a).download(d[0], d[1]), !1
			} catch (e) {
				if (this._logger.error("Cannot download differentially, fallback to full download: " + (e.stack || e)), null != this._testOnlyOptions) throw e;
				return !0
			}
		}
		async differentialDownloadWebPackage(e, t, n, r) {
			if (null == t.blockMapSize) return !0;
			try {
				const s = {
					newUrl: new f.URL(t.path),
					oldFile: o.join(this.downloadedUpdateHelper.cacheDir, i.CURRENT_APP_PACKAGE_FILE_NAME),
					logger: this._logger,
					newFile: n,
					requestHeaders: this.requestHeaders,
					isUseMultipleRangeRequest: r.isUseMultipleRangeRequest,
					cancellationToken: e.cancellationToken
				};
				this.listenerCount(l.DOWNLOAD_PROGRESS) > 0 && (s.onProgress = e => this.emit(l.DOWNLOAD_PROGRESS, e)), await new a.FileWithEmbeddedBlockMapDifferentialDownloader(t, this.httpExecutor, s).download()
			} catch (e) {
				return this._logger.error("Cannot download differentially, fallback to full download: " + (e.stack || e)), "win32" === process.platform
			}
			return !1
		}
	}
	async function _spawn(e, t) {
		return new Promise((n, i) => {
			try {
				const o = r.spawn(e, t, {
					detached: !0,
					stdio: "ignore"
				});
				o.on("error", e => {
					i(e)
				}), o.unref(), void 0 !== o.pid && n(!0)
			} catch (e) {
				i(e)
			}
		})
	}
	t.NsisUpdater = NsisUpdater
}, function(e, t) {
	e.exports = require("rxjs")
}, function(e, t, n) {
	e.exports = n(95)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	const i = n(1),
		r = n(96).MainApp.getInstance();
	r.checkAndInstallWidgetShortcut(r.args) || r.init() || i.app.quit()
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.MainApp = void 0;
	const r = n(19),
		o = n(62),
		s = n(1),
		a = n(0),
		c = n(11),
		l = n(3),
		u = n(103),
		d = n(104),
		h = n(15),
		p = n(21),
		f = n(67),
		g = n(68),
		m = n(69),
		b = n(7),
		y = n(63),
		S = n(22),
		v = n(13),
		_ = n(107),
		E = n(189),
		D = n(190),
		A = n(5),
		k = n(20),
		C = n(29),
		I = n(31),
		O = n(33),
		T = n(191),
		x = n(192),
		L = n(45),
		N = n(66);
	class MainApp {
		constructor() {
			this.SMRoot = "C:/ProgramData/Microsoft/Windows/Start Menu/Programs/SpatialLabs", this.winManager = v.init({
				devMode: !0,
				onLoadFailure: e => {
					console.error(e)
				}
			}), this.args = process.argv.slice(1), this.serve = this.args.some(e => "--dev" === e), this.isFullscreen = !1, this.enableAutoDetectSBS = !0, this._quit = !1, this._enable3D = !1, this.convergence = 2, this.depthRange = 1, s.app.disableHardwareAcceleration()
		}
		static getInstance() {
			return MainApp.instance || (MainApp.instance = new MainApp), MainApp.instance
		}
		init() {
			if (!s.app.requestSingleInstanceLock()) return !1;
			s.app.on("second-instance", (e, t, n) => {
				t.includes("--quit") ? (console.log("quit app!"), s.app.quit()) : (this.checkAndRunWidget(t), this.checkAndRunTool(t), this.checkShortcut(t))
			});
			return !this.args.find(e => e.startsWith("--quit")) && ("win32" === process.platform && s.app.setAppUserModelId("tw.com.acer.spatiallabs"), s.app.on("window-all-closed", e => {
				e.preventDefault()
			}), s.app.on("quit", () => {
				console.log("on app quit!!!");
				k.destroyMessageCenter();
				this.lockDevice.stopListener(), u.deleteTrayIfNeed()
			}), this.onReady(), !0)
		}
		onPreload() {
			const e = k.getRegistryValueEx(2, "SOFTWARE\\Acer\\SpatialLabs", "Preload");
			return this.admin.setPreloadStatus(e), "1" === e
		}
		onReady() {
			s.app.on("ready", () => i(this, void 0, void 0, (function*() {
				try {
					this._i18n = C.I18n.getInstance(), this.env = p.Env.getInstance(), this.info = f.Info.getInstance(), this.notify = g.Notify.getInstance(), this.saveLog = m.SaveLog.getInstance(), this.util = b.Util.getInstance(), this.util2 = y.Util2.getInstance(), this._window = S.Window.getInstance(), this.admin = h.Admin.getInstance(), this.widgetManger = r.WidgetManager.getInstance(), this.envConfig = o.EnvConfig.getInstance(), this.lockDevice = O.LockDevice.getInstance(), this.netService = T.NetService.getInstance(), this.zmqService = x.ZMQService.getInstance(), this._osdWindow = L.OSDWindow.getInstance(), d.ddshInit(), this.widgetManger.initManager(), this.mainWindow = new D.MainWindow, this.update = new _.UpdateManager(this.mainWindow), this.util.isPowerAdaptorPlugged(!0), this.LogSys = l.LogIt.getInstance(), this.update.registerUpdateChannel(), u.createTray(this.update, this.openMainWindow.bind(this)), yield this.initSetLanguage(), this.LogSys.writeLog("args: " + JSON.stringify(this.args, void 0, 2)), this.checkAndRunWidget(this.args), this.checkAndRunTool(this.args), yield this.checkShortcut(this.args), this.registerKey(), this._quit || this.createMessageCenter(), s.screen && (s.screen.on("display-metrics-changed", (e, t, n) => {
						if (this.LogSys.writeLog(`display-metrics-changed: ${t.bounds.width} X ${t.bounds.height}`), this.mainWindow.isMainShow) {
							const e = this.mainWindow.mainWindow.setup.width,
								t = this.mainWindow.mainWindow.setup.height;
							this.mainWindow.getWindow().setSize(e, t), this.LogSys.writeLog("MainWindow Resize")
						}
						this._window.WinMap && this._window.WinMap.size > 0 && this._window.WinMap.forEach((e, t) => {
							const n = v.get(e),
								i = n.setup.resizable;
							i || n.object.setResizable(!0);
							const r = n.setup.width,
								o = n.setup.height;
							n.object.setSize(r, o), i || n.object.setResizable(!1), this.LogSys.writeLog(`Window ${e} Resize`)
						}), this.widgetManger.changeDisplaySettings()
					}), s.screen.on("display-added", (e, t) => {
						this.LogSys.writeLog("display-added: " + JSON.stringify(t, void 0, 2)), this.widgetManger.changeDisplaySettings()
					}), s.screen.on("display-removed", (e, t) => {
						this.LogSys.writeLog("display-removed: " + JSON.stringify(t, void 0, 2)), this.widgetManger.changeDisplaySettings()
					})), N.extractDisplayConfig().then(e => {
						const t = e.filter(e => e.inUse);
						this.lockDevice.setMultiDisplay(t.length > 1)
					}), s.powerMonitor && (s.powerMonitor.on("on-ac", () => {
						this.util.setPowerAdaptorPlugged(!0)
					}), s.powerMonitor.on("on-battery", () => {
						this.util.setPowerAdaptorPlugged(!1), this.admin.isPowerNotification() && this.util.showToast({
							title: this._i18n.__("AC_Unplugged_Title"),
							message: this._i18n.__("AC_Unplugged_Info")
						})
					}), s.powerMonitor.on("suspend", () => {
						this.LogSys.writeLog("powerMonitor suspend"), this.util.printAllWindows()
					}), s.powerMonitor.on("resume", () => {
						this.LogSys.writeLog("powerMonitor resume"), this.util.printAllWindows()
					}))
				} catch (e) {
					console.error(e)
				}
			})))
		}
		createMessageCenter() {
			k.createMessageCenter(e => i(this, void 0, void 0, (function*() {
				console.log("Got message: " + e), 2044 === e.message && (this.LogSys.writeLog("AI is initializing"), this.util.showAIInitialing(), this.util.stop3DViewAIInitialing()), this.util.is3DView() && 4024 === e.message && (this.LogSys.writeLog("showStereoInfo"), this.admin.isStereNotification() && this.util.showStereoInfo(), this.util.isStereoGeneration() && this._osdWindow.showStatus(!1)), 1025 === e.message && (this.LogSys.writeLog("receive WM_SLDS_SERVICE_FAILED"), this.util.stop3DViewFailedMessage())
			})));
			s.ipcMain.on("open_setting", e => {
				this.openMainWindow(I.getMainPageUrl() + "#/dashboard/setting")
			}), this.netService.start(), this.zmqService.run(), this.util.irCameraDetect(), setTimeout(() => i(this, void 0, void 0, (function*() {
				this.LogSys.writeLog('"srNative lazyLoading in mainApp"'), yield this.lockDevice.startListener(), yield this._osdWindow.lazyLoading()
			})), 1e3)
		}
		registerKey() {
			E.register("CmdOrCtrl+F12", (function() {
				const e = v.getCurrent();
				e && e.toggleDevTools()
			})), s.globalShortcut.register(this.widgetManger.getShortcut(!0), () => i(this, void 0, void 0, (function*() {
				this.LogSys.writeLog("press hotkey"), this.util.is3DView() || this.widgetManger.before3DView() || (yield this.util.setStereoGeneration(this.admin.isStereoGeneration()), this.util.enter3DView())
			}))), this.util.isDepthRangeMode() && (s.globalShortcut.register("Alt + D", () => {
				this.depthRange < 2 && (this.depthRange++, this.util.setConvergence(this.depthRange))
			}), s.globalShortcut.register("Alt + F", () => {
				this.depthRange > 0 && (this.depthRange--, this.util.setConvergence(this.depthRange))
			})), this.util.isConvergence() && (s.globalShortcut.register("Alt + I", () => {
				this._osdWindow.adjustConvergence("+"), this.convergence < 4 && (this.convergence++, this.util.setConvergence(this.convergence))
			}), s.globalShortcut.register("Alt + O", () => {
				this._osdWindow.adjustConvergence("-"), this.convergence > 0 && (this.convergence--, this.util.setConvergence(this.convergence))
			})), this.util.isStressTest(!1) && (s.globalShortcut.register("Alt + Q", () => i(this, void 0, void 0, (function*() {
				this.util.setStressTest(!0), this.widgetManger.before3DView() || (yield this.util.setStereoGeneration(this.admin.isStereoGeneration()), this.util.enter3DView())
			}))), s.globalShortcut.register("Alt + E", () => i(this, void 0, void 0, (function*() {
				this.util.setStressTest(!1)
			}))))
		}
		checkShortcut(e) {
			return i(this, void 0, void 0, (function*() {
				e.find(e => e.startsWith("--updated")) && this.admin.setUpdated(!0);
				const t = e.find(e => e.startsWith("--fromshortcut")),
					n = e.find(e => e.startsWith("--invokewidget"));
				if (t)
					if (this.widgetManger.isReboot() || this.serve) t && !n && (yield this.openMainWindow());
					else {
						b.Util.getInstance().showMessageBox({
							title: this._i18n.__("Reboot"),
							message: this._i18n.__("Reboot_Info")
						});
						v.get("message").object.on("closed", () => {
							s.app.quit()
						}), this._quit = !0
					}
				else this.onPreload() && this.openMainWindow()
			}))
		}
		checkAndRunWidget(e) {
			const t = e.find(e => e.startsWith("--invokewidget"));
			if (t) {
				const e = t.split("=");
				2 === e.length && this.widgetManger.isReboot() && this.widgetManger.invokeWidget(e[1])
			}
		}
		checkAndRunTool(e) {
			const t = e.find(e => e.startsWith("--invoketool"));
			if (t) {
				2 === t.split("=").length && this.widgetManger.invokeTool()
			}
		}
		checkAndInstallWidgetShortcut(e) {
			const t = e.find(e => e.startsWith("--installwidgetshortcut"));
			if (t) {
				const e = t.split("=");
				if (2 === e.length) {
					const t = e[1].split("|"),
						n = t[0],
						i = t[1],
						r = t[2];
					A.existsSync(this.SMRoot) || A.mkdirSync(this.SMRoot);
					const o = new Array;
					o.push("--fromshortcut"), "" !== i && o.push("--invokewidget=" + i);
					let c = s.app.getPath("exe");
					c = c ? c.replace("ExperienceCenterTmp", "ExperienceCenter") : "C:/Program Files/Acer/SpatialLabs/ExperienceCenter/SpatialLabs Experience Center.exe";
					const l = this.serve ? "C:/Program Files/Acer/SpatialLabs/ExperienceCenter/SpatialLabs Experience Center.exe" : c,
						u = k.createShortcut(l, `"${o.join('" "')}"`, a.join(this.SMRoot, n + ".lnk"), r);
					return console.log("createDesktopShortcut result: " + u), s.app.quit(), !0
				}
			}
			return !1
		}
		showSplashScreen() {
			const e = a.join(__dirname, "assets/html/splashScreen.html"),
				t = c.format({
					pathname: e,
					protocol: "file:",
					slashes: !0
				});
			this.splash = v.createNew("main", "main-page", "main-page", !1, {
				width: 400,
				height: 400,
				transparent: !0,
				frame: !1,
				alwaysOnTop: !0
			}), this.splash.loadURL(t), this.splash.show()
		}
		initSetLanguage() {
			const e = s.app.getLocale(),
				t = this.admin.getLanguageList(),
				n = t.filter(t => {
					if (t.languageCode.startsWith("zh") || t.languageCode.startsWith("pt")) {
						if (t.languageCode === e) return t.languageCode
					} else if (t.languageCode.split("-")[0] === e.split("-")[0]) return t.languageCode
				});
			return new Promise((e, i) => {
				n.length ? this.admin.setLocaleSettings(n[0]) : this.admin.setLocaleSettings(t[0]), this.LogSys.writeLog("" + JSON.stringify(this.admin.getLocaleSettings())), e(n[0])
			})
		}
		openMainWindow(e) {
			return i(this, void 0, void 0, (function*() {
				try {
					this.mainWindow.mainWindow && this.mainWindow.mainWindow.object ? (this.mainWindow.openPage(e), this.mainWindow.winToFront()) : (yield u.updateAction(!1), this.update.isUpdating || this.mainWindow.create(e))
				} catch (t) {
					this.LogSys.writeLog("openMainWindow: error: " + t.message), this.mainWindow.mainWindow && this.mainWindow.mainWindow.object ? (this.mainWindow.openPage(e), this.mainWindow.winToFront()) : this.mainWindow.create(e)
				}
			}))
		}
	}
	t.MainApp = MainApp
}, function(e, t) {
	e.exports = require("compare-versions")
}, function(e, t) {
	e.exports = require("open")
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.CPHelper = void 0;
	const i = n(32),
		r = n(3);
	class CPHelper {
		constructor() {
			this._log = r.LogIt.getInstance()
		}
		static getInstance() {
			return CPHelper.instance || (CPHelper.instance = new CPHelper), CPHelper.instance
		}
		connect() {
			return CPHelper.socket && !CPHelper.socket.destroyed || (CPHelper.socket = i.connect(CPHelper.PIPE_PATH), CPHelper.socket.on("close", e => {
				this._log.writeLog("CPHelper socket close: " + e), this.close()
			})), CPHelper.socket
		}
		close() {
			if (CPHelper.socket && !CPHelper.socket.destroyed) try {
				this._log.writeLog("CPHelper socket end"), CPHelper.socket.end()
			} catch (e) {
				this._log.writeLog("CPHelper close fail: " + e)
			} finally {
				CPHelper.socket.destroy()
			}
		}
		sendCommand(e) {
			const t = i.connect(CPHelper.PIPE_PATH, () => {
				const n = JSON.stringify(e) + "\r\n";
				t.write(n), t.on("close", e => {
					t.end()
				}), t.end()
			})
		}
	}
	t.CPHelper = CPHelper, CPHelper.PIPE_NAME = "spatiallabsnotifypipe", CPHelper.PIPE_PATH = "\\\\.\\pipe\\" + CPHelper.PIPE_NAME
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.EnvConfigBase = void 0;
	t.EnvConfigBase = class EnvConfigBase {
		constructor() {
			this.appUpdateURL = "https://d3kbld5mjap5ss.cloudfront.net/SpatialLabs%20Experience%20Center%20DS1C"
		}
	}
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Ga4Service = void 0;
	const {
		app: r
	} = n(1), o = n(3), s = n(15), a = n(102), c = n(7), l = n(46);
	t.Ga4Service = class Ga4Service {
		constructor() {
			this._gaUtil = a.GAUtil.getInstance(), this._log = o.LogIt.getInstance(), this._admin = s.Admin.getInstance(), this._util = c.Util.getInstance(), this.G_Id = "G-ENVV8DG192", this.apiKey = "hVPjksRfSbKC7-RkCrrO8w", this.machineGuid = "unknown_id", this.gaServerURL = "https://www.google-analytics.com/mp/collect", this.gaTestServerURL = "https://www.google-analytics.com/debug/mp/collect", this.machineGuid = this._admin.getUUID()
		}
		syncDevice() {
			this._admin.isPrivacyNotice() && this.isSyncable() && (this.sendEvent(), this._admin.setGASyncTime(this.syncTime.toJSON()))
		}
		isSyncable() {
			let e = !1;
			const t = this._admin.getGASyncTime();
			this.syncTime = new Date;
			const n = new Date(t).getTime();
			return (!t || this.syncTime.getTime() - n >= 1e3 * this._util.getGASyncInterval()) && (e = !0), e
		}
		sendEvent() {
			const e = {
				name: this._gaUtil.getSNProduct().replaceAll(" ", "_"),
				params: {
					DeviceManufacture: this._admin.getManufacturer(),
					ModelNumber: this._admin.getModelNumber(),
					WindowsVersion: this._admin.getOSVersion(),
					CPUModel: this._admin.getCPU(),
					GPUModel: this._admin.getGPU(),
					Region: this._admin.getRegion(),
					TimeZone: this._admin.getTimeZone(),
					SLECVersion: r.getVersion(),
					DSVersion: this._admin.getDSVersion(),
					SGVersion: this._admin.getSGVersion(),
					XRVersion: this._admin.getXRVersion(),
					PlayerVersion: this._admin.getPlayerVersion(),
					MVVersion: this._admin.getMVVersion(),
					SRVersion: this._admin.getSRVersion(),
					ETVersion: this._admin.getETVersion(),
					SSVersion: this._admin.getSSVersion(),
					TGVersion: this._admin.getTGVersion(),
					CheckInTime: this.syncTime.toJSON()
				}
			};
			this._log.writeLog("GA_START"), this.GA_SendEvent([e]), this._log.writeLog("GA_END")
		}
		AppStart(e, t) {
			const n = {
					name: "Startup_VER_" + e.split(".").join("_"),
					params: {}
				},
				i = {
					name: "Startup_MOD_" + t,
					params: {}
				};
			this.GA_SendEvent([n, i])
		}
		GA_SendEvent(e) {
			return i(this, void 0, void 0, (function*() {
				let t = {
					client_id: this.machineGuid,
					events: e
				};
				var n = `${this.gaServerURL}?measurement_id=${this.G_Id}&api_secret=${this.apiKey}`,
					i = yield l("" + n, {
						method: "POST",
						body: JSON.stringify(t)
					});
				i.ok ? this._log.writeLog(JSON.stringify(t)) : i.json().then(e => console.log("GA Respoonse", e)).catch(e => {
					console.log("GA Error", e)
				})
			}))
		}
		GA_Test_SendEvent(e) {
			return i(this, void 0, void 0, (function*() {
				var t = `${this.gaTestServerURL}?measurement_id=${this.G_Id}&api_secret=${this.apiKey}`;
				yield l("" + t, {
					method: "POST",
					body: JSON.stringify(e)
				}).then(e => e.json()).then(e => console.log(e)).catch(e => {
					console.log(e)
				})
			}))
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.GAUtil = void 0;
	const {
		app: i
	} = n(1), r = (n(20), n(14)), o = n(15), s = n(3), a = n(7);
	class GAUtil {
		constructor() {
			if (this._admin = o.Admin.getInstance(), this._log = s.LogIt.getInstance(), this._util = a.Util.getInstance(), this.product = "DS1C", this.SN = this._admin.getSN(), this.SN || (this.SN = this.getCimObject("win32_bios", "SerialNumber"), this.SN && this._admin.setSN(this.SN)), this._log.writeLog("SN: " + this.SN), this.manufacture = this._admin.getManufacturer(), this.manufacture || (this.manufacture = this.getCimObject("Win32_ComputerSystem", "Manufacturer"), this.manufacture && this._admin.setManufacturer(this.manufacture)), this._log.writeLog("Manufacturer: " + this.manufacture), this.modelNumber = this._admin.getModelNumber(), this.modelNumber || (this.modelNumber = this.getCimObject("Win32_ComputerSystem", "Model"), this.modelNumber && this._admin.setModelNumber(this.modelNumber)), this._log.writeLog("ModelNumber: " + this.modelNumber), this.osVersion = this._admin.getOSVersion(), this.osVersion || (this.osVersion = this.getCimObject("Win32_OperatingSystem", "Version"), this.osVersion && this._admin.setOSVersion(this.osVersion)), this._log.writeLog("OSVersion: " + this.osVersion), this.cpu = this._admin.getCPU(), this.cpu || (this.cpu = this.getCimObject("Win32_Processor", "Name"), this.cpu && this._admin.setCPU(this.cpu)), this._log.writeLog("CPU: " + this.cpu), this.gpu = this._admin.getGPU(), this.gpu || (this.gpu = this.getCimObject("win32_VideoController", "Name"), this.gpu && this._admin.setGPU(this.gpu)), this._log.writeLog("GPU: " + this.gpu), this.UUID = this._admin.getUUID(), !this.UUID) {
				let e = ["-command", "(Get-CimInstance -Class Win32_ComputerSystemProduct).UUID"],
					t = r.spawnSync("powershell", e);
				if (!t.error) {
					const e = String(t.stdout);
					this.UUID = e.replace("\r\n", "")
				}
				this.UUID && this._admin.setUUID(this.UUID)
			}
			if (this._log.writeLog("UUID: " + this.UUID), this.region = this._admin.getRegion(), !this.region) {
				let e = ["-command", "[System.Globalization.RegionInfo]::CurrentRegion", "|", "Select", "TwoLetterISORegionName"],
					t = r.spawnSync("powershell", e);
				if (!t.error) {
					const e = String(t.stdout);
					this.region = e.replace("\r\n\r\n\r\n", "").split("\r\n").pop(), this.region = this.region.trim()
				}
				this.region && this._admin.setRegion(this.region)
			}
			if (this._log.writeLog("Region: " + this.region), this.timeZone = this._admin.getTimeZone(), !this.timeZone) {
				let e = ["-command", "[System.TimeZoneInfo]::Local", "|", "Select", "DisplayName"],
					t = r.spawnSync("powershell", e);
				if (!t.error) {
					const e = String(t.stdout);
					this.timeZone = e.replace("\r\n\r\n\r\n", "").split("\r\n").pop()
				}
				this.timeZone && this._admin.setTimeZone(this.timeZone)
			}
			if (this._log.writeLog("TimeZone: " + this.timeZone), this.DS1SN = this._admin.getDS1SN(), !this.DS1SN) {
				const e = this._util.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Main_Monitor_SN").trim(),
					t = this._util.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Main_Monitor");
				e.includes("DS1 Not Found") || 22 != e.length || (this.DS1SN = `${t}${e.substring(0,18)}`), this.DS1SN && this._admin.setDS1SN(this.DS1SN)
			}
			this._log.writeLog("DS1SN: " + this.DS1SN)
		}
		static getInstance() {
			return GAUtil.instance || (GAUtil.instance = new GAUtil), GAUtil.instance
		}
		getCimObject(e, t) {
			let n = "",
				i = ["-command", "Get-CimInstance", e, "|", "Select", t],
				o = r.spawnSync("powershell", i);
			if (!o.error) {
				n = String(o.stdout).replace("\r\n\r\n\r\n", "").split("\r\n").pop()
			}
			return n
		}
		getVersion() {
			return "EC_" + i.getVersion().replaceAll(".", "_")
		}
		getSNVersion() {
			return `${this.getVersion()}_${this.SN}`
		}
		getDevice() {
			return "D_" + this._util.getDeviceType()
		}
		getSNDevice() {
			return `${this.getDevice()}_${this.SN}`
		}
		getProduct() {
			return "SW_" + this.product
		}
		getSNProduct() {
			let e;
			return e = this.product.startsWith("DS1") && this.DS1SN ? this.DS1SN : this.SN, `${this.getProduct()}_${e}`
		}
		getSRVersion() {
			return "SR_" + this._admin.getSRVersion().replaceAll(".", "_")
		}
		getSNSRVersion() {
			return `${this.getSRVersion()}_${this.SN}`
		}
		getDSVersion() {
			return `${this.SN}_${this._admin.getDSVersion().replaceAll(".","_")}`
		}
		getSGVersion() {
			return `${this.SN}_${this._admin.getSGVersion().replaceAll(".","_")}`
		}
		getXRVersion() {
			return `${this.SN}_${this._admin.getXRVersion().replaceAll(".","_")}`
		}
	}
	t.GAUtil = GAUtil
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.connectionStatus_now = t.deleteTrayIfNeed = t.updateAction = t.createTray = void 0;
	const r = n(1),
		o = n(29),
		s = n(0),
		a = n(19),
		c = n(31),
		l = n(7),
		u = n(3);
	let d = null,
		h = !1;
	n(42);
	let p;
	const f = u.LogIt.getInstance(),
		g = n(61);

	function updateAction(e) {
		return i(this, void 0, void 0, (function*() {
			f.writeLog("enter updateAction");
			try {
				p.createProgressBar(), yield function testConnection() {
					return new Promise((e, t) => {
						g({
							uri: a.WidgetManager.getInstance().getOTA() + "/widgets.json",
							method: "GET",
							timeout: 5e3,
							followRedirect: !1,
							maxRedirects: 0
						}, (n, i, r) => {
							n ? (f.writeLog(JSON.stringify(n, void 0, 2)), t(n)) : e(r)
						})
					})
				}().catch(e => {
					throw new Error(e)
				}), f.writeLog("updateAction: createProgressBar"), (a.WidgetManager.getInstance().isUpdatable() || e) && (f.writeLog("updateAction: isUpdatable"), yield p.getVersion(), f.writeLog("updateAction: getVersion"), p.isUpdateAvailable && !p.isUpdating && (f.writeLog("updateAction: isUpdateAvailable: true"), setTimeout(() => {
					f.writeLog(`reply-process percent: 0, ${p.newVersion}, ${!a.WidgetManager.getInstance().isForceUpdate()}`), p.progressBar.webContents.send("reply-process", {
						percent: 0,
						version: p.newVersion,
						skip: !a.WidgetManager.getInstance().isForceUpdate()
					})
				}, 1e3), p.isUpdating = !0)), p.isUpdating || (p.closeProgressBar(), f.writeLog("updateAction: closeProgressBar"))
			} catch (e) {
				throw p.isUpdating = !1, f.writeLog("updateAction: error: " + e.message), p.closeProgressBar(), new Error(e)
			}
			return p.isUpdateAvailable
		}))
	}
	t.createTray = (e, t) => {
		p = e;
		const n = o.I18n.getInstance();
		d = new r.Tray(r.nativeImage.createFromPath("" + s.join(__dirname, "assets/image/favicon.ico")));
		const u = [{
			type: "normal",
			label: n.__("SpatialLabsDispalyExperienceCenter"),
			click() {
				return i(this, void 0, void 0, (function*() {
					yield t()
				}))
			}
		}, {
			type: "normal",
			label: n.__("SpatialLabsDispalyGo"),
			click() {
				a.WidgetManager.getInstance().invokeWidget("Display Go")
			}
		}, {
			type: "separator"
		}, {
			type: "normal",
			label: n.__("CheckNewVersion"),
			click: () => i(void 0, void 0, void 0, (function*() {
				try {
					yield updateAction(!0), p.isUpdating || (l.Util.getInstance().showMessageBox({
						title: n.__("No_Update_Available")
					}), p.closeProgressBar())
				} catch (e) {
					e.message.endsWith("ESOCKETTIMEDOUT") ? l.Util.getInstance().showMessageBox({
						title: n.__("Low_Connectivity")
					}) : l.Util.getInstance().showMessageBox({
						title: n.__("No_Update_Available")
					})
				}
			}))
		}];
		"ACR0003" === l.Util.getInstance().getMainMonitor() && u.push({
			type: "separator"
		}, {
			type: "normal",
			label: n.__("Calibration_Tool"),
			click: () => {
				a.WidgetManager.getInstance().launchTool("Calibration Tool")
			}
		}), u.push({
			type: "separator"
		}, {
			type: "normal",
			label: n.__("Settings"),
			click: () => {
				t(c.getMainPageUrl() + "#/dashboard/setting")
			}
		});
		const h = r.Menu.buildFromTemplate(u);
		d.setToolTip(n.__("SpatialLabsDispalyExperienceCenter")), d.setContextMenu(h), d.on("click", () => i(void 0, void 0, void 0, (function*() {
			yield t()
		})))
	}, t.updateAction = updateAction, t.deleteTrayIfNeed = () => {
		null !== d && d.destroy()
	}, t.connectionStatus_now = function connectionStatus_now(e) {
		h = e
	}
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.ddshInit = void 0;
	const r = n(1),
		o = n(15),
		s = n(21),
		a = n(67),
		c = n(68),
		l = n(69),
		u = n(7),
		d = n(22),
		h = n(105),
		p = n(19),
		f = n(33),
		g = n(106);

	function getAllFuncs(e) {
		let t = [],
			n = e;
		do {
			t = t.concat(Object.getOwnPropertyNames(n))
		} while (n = Object.getPrototypeOf(n));
		return t.sort().filter((function(t, n, i) {
			if (t !== i[n + 1] && "function" == typeof e[t]) return !0
		}))
	}
	t.ddshInit = function ddshInit() {
		const e = {
			admin: {
				module: getAllFuncs(o.Admin.prototype),
				instance: o.Admin.getInstance(),
				adminOnly: !0
			},
			httpUtility: {
				module: getAllFuncs(h.httpUtility.prototype),
				moduleMetadata: h.httpUtility.getFunctionMetadata(),
				instance: h.httpUtility.getInstance(),
				adminOnly: !0
			},
			info: {
				module: getAllFuncs(a.Info.prototype),
				instance: a.Info.getInstance(),
				adminOnly: !1
			},
			notify: {
				module: getAllFuncs(c.Notify.prototype),
				instance: c.Notify.getInstance(),
				adminOnly: !1
			},
			util: {
				module: getAllFuncs(u.Util.prototype),
				instance: u.Util.getInstance(),
				adminOnly: !1
			},
			window: {
				module: getAllFuncs(d.Window.prototype),
				instance: d.Window.getInstance(),
				adminOnly: !1
			},
			savelog: {
				module: getAllFuncs(l.SaveLog.prototype),
				instance: l.SaveLog.getInstance(),
				adminOnly: !1
			},
			env: {
				module: getAllFuncs(s.Env.prototype),
				instance: s.Env.getInstance(),
				adminOnly: !1
			},
			widgetManager: {
				module: getAllFuncs(p.WidgetManager.prototype),
				moduleMetadata: p.WidgetManager.getFunctionMetadata(),
				instance: p.WidgetManager.getInstance(),
				adminOnly: !1
			},
			detect: {
				module: getAllFuncs(f.LockDevice.prototype),
				instance: f.LockDevice.getInstance(),
				adminOnly: !1
			}
		};
		r.ipcMain.on("call", (t, n, r, o) => i(this, void 0, void 0, (function*() {
			const i = e[n],
				s = yield i.instance[r](o);
			t.returnValue = s
		}))), r.ipcMain.on("registAsyncCall", (t, n, o, s, a) => i(this, void 0, void 0, (function*() {
			var i = e[n],
				s = !1;
			i.instance[o] && a && (r.ipcMain.once(`asyncCall_${n}_${o}_${a}`, (e, t) => {
				const r = `asyncCall_${n}_${o}_${a}_reply`;
				i.instance[o](t, t => {
					e.sender.send(r, t)
				})
			}), s = !0), t.returnValue = s
		}))), r.ipcMain.on("getAllFuns", (t, n) => {
			const i = process.argv.slice(1).some(e => "--dev" === e),
				r = "file:" === new g(n.href).protocol,
				o = [];
			for (let t in e) {
				const n = e[t];
				if (!n.adminOnly || n.adminOnly && (r || i))
					for (let e in n.module) {
						var s = n.moduleMetadata && n.moduleMetadata.hasOwnProperty(n.module[e] + "_syncType") ? n.moduleMetadata[n.module[e] + "_syncType"] : "sync";
						s = n.module.hasOwnProperty("syncType") ? n.syncType : s;
						const i = n.module[e];
						o.push(t + "&" + i + "&" + s)
					}
			}
			t.returnValue = o
		})
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.httpUtility = void 0;
	class httpUtility {
		constructor() {}
		static getInstance() {
			return httpUtility.instance || (httpUtility.instance = new httpUtility), httpUtility.instance
		}
		static getFunctionMetadata() {
			return {
				fetch_syncType: "async",
				fetchWtJson_syncType: "async",
				fetchWoJson_syncType: "async"
			}
		}
		fetch(e, t) {
			const i = {},
				r = n(44).default,
				o = n(46),
				s = {};
			e.method && (s.method = e.method), e.body && (s.body = e.body), e.headers && (s.headers = new o.Headers(e.headers)), r(e.url, s).then(e => e.json()).then(e => {
				i.res = e, t(i)
			}).catch(e => {
				i.error = e.toString(), t(i)
			})
		}
		fetchWtJson(e, t) {
			this.fetch(e, t)
		}
		fetchWoJson(e, t) {
			const i = {},
				r = n(44).default,
				o = n(46),
				s = {};
			e.method && (s.method = e.method), e.body && (s.body = e.body), e.headers && (s.headers = new o.Headers(e.headers)), r(e.url, s).then(e => {
				i.res = e, t(i)
			}).catch(e => {
				i.error = e.toString(), t(i)
			})
		}
	}
	t.httpUtility = httpUtility
}, function(e, t) {
	e.exports = require("url-parse")
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.UpdateManager = void 0;
	const r = n(194),
		o = n(108),
		s = n(1),
		a = n(93),
		c = n(13),
		l = n(29),
		u = n(7),
		d = n(21),
		h = n(22),
		p = n(3),
		f = n(0),
		g = n(5),
		m = n(19);
	var b;
	! function(e) {
		e[e.onlyGetVersion = 0] = "onlyGetVersion", e[e.timerUpdate = 1] = "timerUpdate", e[e.autoUpdate = 2] = "autoUpdate", e[e.onceUpdate = 3] = "onceUpdate"
	}(b || (b = {}));
	class UpdateManager extends o.UpdateBase {
		constructor(e) {
			super(), this.util = u.Util.getInstance(), this.timerValue = this.util.shortenUpdateTimeWithKey() ? 6e4 * this.util.shortenUpdateTimeWithKey() : 864e5, this.i18nx = l.I18n.getInstance(), this._env = d.Env.getInstance(), this._window = h.Window.getInstance(), this.logSys = p.LogIt.getInstance(), this.widgetManager = m.WidgetManager.getInstance(), this.clearTmpDir(), this.onCheckingUpdate(), this.onUpdateAvailable(), this.onUpdateNotAvailable(), this.onDownloadProgress(), this.onDownloaded(), this.onError(), this.mainWindow = e
		}
		checkForUpdate(e) {
			return this.logSys.writeLog("enter checkForUpdate: " + e.type), "checking-for-update" === e.type ? (this.logSys.writeLog("checkForUpdate"), a.of(e)) : a.of(e)
		}
		updateAvailable(e) {
			if (this.logSys.writeLog("enter updateAvailable: " + e.type), "update-available" === e.type) {
				switch (this.logSys.writeLog("updateAvailable: " + this.actionType.toString()), this.actionType) {
					case b.onlyGetVersion:
						break;
					case b.timerUpdate:
						this.isForceUpdate(e);
						break;
					case b.autoUpdate:
						this.downloadNewVersion()
				}
				return a.of(e)
			}
			return a.of(e)
		}
		updateNotAvailable(e) {
			return this.logSys.writeLog("enter updateNotAvailable: " + e.type), "update-not-available" === e.type ? (this.logSys.writeLog("updateNotAvailable"), this.mainWindow.mainWindow && this.mainWindow.mainWindow.object ? (this.mainWindow.openPage(), this.mainWindow.winToFront()) : this.mainWindow.create(), a.of(e)) : a.of(e)
		}
		downliadProgress(e) {
			return this.logSys.writeLog("enter downliadProgress: " + e.type), "download-progress" === e.type ? (clearTimeout(this.downloadTimeout), this.downloadTimeout = setTimeout(() => {
				p.LogIt.getInstance().writeLog("6 mins to stop download"), this.isUpdating = !1, this.progressBar.webContents.send("reply-process", void 0), this.progressBar.close(), u.Util.getInstance().showMessageBox({
					title: this.i18nx.__("Low_Connectivity")
				});
				c.get("message").object.on("closed", () => {
					s.app.quit()
				})
			}, 36e4), this.logSys.writeLog("downliadProgress"), console.log("download-progress", e), this.progressBar.webContents.send("reply-process", e), a.of(e)) : a.of(e)
		}
		updateDownload(e) {
			return this.logSys.writeLog("enter updateDownload: " + e.type), "update-downloaded" === e.type ? (this.isUpdating = !1, this.logSys.writeLog("updateDownload"), e.percent = 100, this.progressBar.webContents.send("reply-process", e), this.progressBar.close(), clearTimeout(this.downloadTimeout), this.downloadTimeout = void 0, this.mainWindow.mainWindow && this.mainWindow.mainWindow.object ? (this.mainWindow.openPage(), this.mainWindow.winToFront()) : this.mainWindow.create(), this.actionInstall(), a.of(e)) : a.of(e)
		}
		catchError(e) {
			return this.logSys.writeLog("catchError: err: " + JSON.stringify(e, void 0, 2)), this.isUpdating = !1, a.of(e)
		}
		timerUpdate() {
			return setTimeout(() => {
				this.setSubscriber(this.openUpdate().subscribe(console.log)), this.actionType = b.timerUpdate, this.actionCheckUpdate()
			}, this.timerValue)
		}
		autoUpdate() {
			return i(this, void 0, void 0, (function*() {
				return this.isUpdating = !0, this.actionType = b.autoUpdate, this.setSubscriber(this.openUpdate().subscribe()), yield this.actionCheckUpdate()
			}))
		}
		getVersion() {
			return i(this, void 0, void 0, (function*() {
				this.actionType = b.onlyGetVersion;
				const e = yield this.actionCheckUpdate(), t = this.currentVersion;
				return this.newVersion = e.versionInfo.version, {
					currentVersion: t,
					newVersion: e.versionInfo.version
				}
			}))
		}
		askVersionData(e, t) {
			return i(this, void 0, void 0, (function*() {
				const t = yield this.getVersion();
				this.event = null, this.event = e, this.event.reply("reply-update", t)
			}))
		}
		setProcessReply(e, t) {
			this.event = null, this.event = e
		}
		isForceUpdate(e) {
			return i(this, void 0, void 0, (function*() {
				const t = s.BrowserWindow.getAllWindows();
				e.forceUpdate ? t.forEach(e => i(this, void 0, void 0, (function*() {
					if (e.isFocused()) this.forceUpdate();
					else {
						const e = new s.Notification({
							title: this.i18nx.__("UpdateAvailable_Title"),
							body: this.i18nx.__("UpdateAvailable_Notify")
						});
						e.show(), e.on("click", () => {
							this.forceUpdate()
						})
					}
				}))) : t.forEach(e => i(this, void 0, void 0, (function*() {
					if (e.isFocused()) this.notForceUpdate();
					else {
						const e = new s.Notification({
							title: this.i18nx.__("UpdateAvailable_Title"),
							body: this.i18nx.__("UpdateAvailable_Notify")
						});
						e.show(), e.on("click", () => {
							this.notForceUpdate()
						})
					}
				})))
			}))
		}
		openAskUpdate(e) {
			return i(this, void 0, void 0, (function*() {
				return yield s.dialog.showMessageBox(null, e)
			}))
		}
		forceUpdate() {
			return i(this, void 0, void 0, (function*() {
				0 === (yield this.openAskUpdate({
					type: "question",
					buttons: [this.i18nx.__("Update")],
					title: this.i18nx.__("UpdateAvailable_Title"),
					message: this.i18nx.__("UpdateAvailable_ForceUpdate")
				})).response && this.downloadNewVersion()
			}))
		}
		notForceUpdate() {
			return i(this, void 0, void 0, (function*() {
				const e = yield this.openAskUpdate({
					type: "question",
					buttons: [this.i18nx.__("Update"), this.i18nx.__("Later")],
					title: this.i18nx.__("UpdateAvailable_Title"),
					message: this.i18nx.__("UpdateAvailable_NoForceUpdate")
				});
				0 === e.response ? this.downloadNewVersion() : 1 === e.response && (this.openAskUpdate({
					type: "question",
					buttons: [this.i18nx.__("IGotit")],
					message: this.i18nx.__("UpdateAvailable_ForceUpdate")
				}), this.subscriber.unsubscribe(), this.timerUpdate())
			}))
		}
		registerUpdateChannel() {
			s.ipcMain.on("ask-update", (e, t) => {
				switch (t) {
					case "getVersion":
						this.askVersionData(e, t);
						break;
					case "actionDownload":
						this.downloadNewVersion();
						break;
					default:
						console.log(e, t)
				}
			})
		}
		openUpdate() {
			return this.subject.pipe(r.concatMap(e => this.checkForUpdate(e)), r.concatMap(e => this.updateAvailable(e)), r.concatMap(e => this.updateNotAvailable(e)), r.concatMap(e => this.downliadProgress(e)), r.concatMap(e => this.updateDownload(e)), r.catchError(e => this.catchError(e)))
		}
		unSubscribeSubjectUpdate() {
			this.subject.unsubscribe()
		}
		setSubscriber(e) {
			this.subscriber && this.subscriber.unsubscribe(), this.subscriber = null, this.subscriber = e
		}
		createProgressBar(e) {
			const t = "processBar";
			let n = c.get(t);
			if (!n) {
				const e = this._env.getLocalUrl();
				this._window.createWindow({
					url: e + "#/processBar",
					width: 480,
					height: 320,
					resizable: !1,
					frame: !1,
					show: !1,
					transparent: !0,
					center: !0
				});
				n = c.get(t), s.ipcMain.on("skip_main_update", e => i(this, void 0, void 0, (function*() {
					this.logSys.writeLog("skip_main_update"), this.isUpdating = !1, this.widgetManager.delayUpdate(!1), this.progressBar.close(), this.mainWindow.create()
				}))), s.ipcMain.on("install_main_update", e => i(this, void 0, void 0, (function*() {
					this.logSys.writeLog("install_main_update"), yield this.autoUpdate()
				})))
			}
			n.object.percentage = e, this.progressBar = n.object, this._window.bringWinToTop(t), n.object.on("close", () => {
				this.isUpdating && s.app.quit()
			})
		}
		closeProgressBar() {
			let e = c.get("processBar");
			e && e.object.close()
		}
		clearTmpDir() {
			let e = !0;
			const t = f.join(s.app.getPath("exe"), "../..");
			let n = "RMDIR /Q /S";
			return ["ExperienceCenterTmp", "TempDir"].forEach(i => {
				const r = f.join(t, i);
				g.existsSync(r) && (e = !1, n += ` "${r}"`)
			}), e || this.clearInterval || (this.clearInterval = setInterval(() => {
				this.clearTmpDir() ? clearInterval(this.clearInterval) : (this.logSys.writeLog("Temp dir: " + n), this.util.runAsAdmin("cmd.exe", `/c "${n}"`).catch(e => {
					this.logSys.writeLog("clearTmpDir Error: " + e)
				}))
			}, 18e4)), e
		}
	}
	t.UpdateManager = UpdateManager
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.UpdateBase = void 0;
	const r = n(34),
		o = n(93),
		s = n(7);
	t.UpdateBase = class UpdateBase {
		constructor() {
			this.subject = new o.Subject, this.currentVersion = r.autoUpdater.currentVersion.version, this.isDev = process.argv.some(e => "--dev" === e), this.isUpdating = !1, this.isUpdateAvailable = !1;
			const e = n(42);
			r.autoUpdater.logger = e, r.autoUpdater.autoDownload = !1, r.autoUpdater.channel = this.isDev ? "beta" : "fv_latest", r.autoUpdater.allowDowngrade = !1;
			const t = s.Util.getInstance().getPublicUrl();
			t && r.autoUpdater.setFeedURL(t)
		}
		downloadNewVersion() {
			return i(this, void 0, void 0, (function*() {
				return yield r.autoUpdater.downloadUpdate()
			}))
		}
		actionCheckUpdate() {
			return i(this, void 0, void 0, (function*() {
				return yield r.autoUpdater.checkForUpdates()
			}))
		}
		actionInstall() {
			this.isUpdating = !1, this.isDev ? console.log("stop actionInstall due to dev mode!!") : r.autoUpdater.quitAndInstall(!0, !0)
		}
		onCheckingUpdate(e) {
			r.autoUpdater.on("checking-for-update", e => {
				this.subject.next(Object.assign({
					type: "checking-for-update"
				}, e))
			})
		}
		onUpdateAvailable(e) {
			r.autoUpdater.on("update-available", e => {
				this.isUpdateAvailable = !0, this.subject.next(Object.assign({
					type: "update-available"
				}, e))
			})
		}
		onUpdateNotAvailable(e) {
			r.autoUpdater.on("update-not-available", e => {
				this.isUpdateAvailable = !1, this.subject.next(Object.assign({
					type: "update-not-available"
				}, e))
			})
		}
		onDownloadProgress(e) {
			r.autoUpdater.on("download-progress", e => {
				this.subject.next(Object.assign({
					type: "download-progress"
				}, e))
			})
		}
		onDownloaded(e) {
			r.autoUpdater.on("update-downloaded", e => {
				this.subject.next(Object.assign({
					type: "update-downloaded"
				}, e))
			})
		}
		onError() {
			r.autoUpdater.on("error", e => {
				this.subject.error({
					type: "error",
					err: e
				})
			})
		}
	}
}, function(e, t, n) {
	"undefined" == typeof process || "renderer" === process.type || !0 === process.browser || process.__nwjs ? e.exports = n(110) : e.exports = n(112)
}, function(e, t, n) {
	t.formatArgs = function formatArgs(t) {
		if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
		const n = "color: " + this.color;
		t.splice(1, 0, n, "color: inherit");
		let i = 0,
			r = 0;
		t[0].replace(/%[a-zA-Z%]/g, e => {
			"%%" !== e && (i++, "%c" === e && (r = i))
		}), t.splice(r, 0, n)
	}, t.save = function save(e) {
		try {
			e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
		} catch (e) {}
	}, t.load = function load() {
		let e;
		try {
			e = t.storage.getItem("debug")
		} catch (e) {}!e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG);
		return e
	}, t.useColors = function useColors() {
		if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
		if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
		return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
	}, t.storage = function localstorage() {
		try {
			return localStorage
		} catch (e) {}
	}(), t.destroy = (() => {
		let e = !1;
		return () => {
			e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
		}
	})(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {}), e.exports = n(73)(t);
	const {
		formatters: i
	} = e.exports;
	i.j = function(e) {
		try {
			return JSON.stringify(e)
		} catch (e) {
			return "[UnexpectedJSONParseError]: " + e.message
		}
	}
}, function(e, t) {
	var n = 1e3,
		i = 6e4,
		r = 60 * i,
		o = 24 * r;

	function plural(e, t, n, i) {
		var r = t >= 1.5 * n;
		return Math.round(e / n) + " " + i + (r ? "s" : "")
	}
	e.exports = function(e, t) {
		t = t || {};
		var s = typeof e;
		if ("string" === s && e.length > 0) return function parse(e) {
			if ((e = String(e)).length > 100) return;
			var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
			if (!t) return;
			var s = parseFloat(t[1]);
			switch ((t[2] || "ms").toLowerCase()) {
				case "years":
				case "year":
				case "yrs":
				case "yr":
				case "y":
					return 315576e5 * s;
				case "weeks":
				case "week":
				case "w":
					return 6048e5 * s;
				case "days":
				case "day":
				case "d":
					return s * o;
				case "hours":
				case "hour":
				case "hrs":
				case "hr":
				case "h":
					return s * r;
				case "minutes":
				case "minute":
				case "mins":
				case "min":
				case "m":
					return s * i;
				case "seconds":
				case "second":
				case "secs":
				case "sec":
				case "s":
					return s * n;
				case "milliseconds":
				case "millisecond":
				case "msecs":
				case "msec":
				case "ms":
					return s;
				default:
					return
			}
		}(e);
		if ("number" === s && isFinite(e)) return t.long ? function fmtLong(e) {
			var t = Math.abs(e);
			if (t >= o) return plural(e, t, o, "day");
			if (t >= r) return plural(e, t, r, "hour");
			if (t >= i) return plural(e, t, i, "minute");
			if (t >= n) return plural(e, t, n, "second");
			return e + " ms"
		}(e) : function fmtShort(e) {
			var t = Math.abs(e);
			if (t >= o) return Math.round(e / o) + "d";
			if (t >= r) return Math.round(e / r) + "h";
			if (t >= i) return Math.round(e / i) + "m";
			if (t >= n) return Math.round(e / n) + "s";
			return e + "ms"
		}(e);
		throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
	}
}, function(e, t, n) {
	const i = n(74),
		r = n(47);
	t.init = function init(e) {
		e.inspectOpts = {};
		const n = Object.keys(t.inspectOpts);
		for (let i = 0; i < n.length; i++) e.inspectOpts[n[i]] = t.inspectOpts[n[i]]
	}, t.log = function log(...e) {
		return process.stderr.write(r.format(...e) + "\n")
	}, t.formatArgs = function formatArgs(n) {
		const {
			namespace: i,
			useColors: r
		} = this;
		if (r) {
			const t = this.color,
				r = "[3" + (t < 8 ? t : "8;5;" + t),
				o = `  ${r};1m${i} [0m`;
			n[0] = o + n[0].split("\n").join("\n" + o), n.push(r + "m+" + e.exports.humanize(this.diff) + "[0m")
		} else n[0] = function getDate() {
			if (t.inspectOpts.hideDate) return "";
			return (new Date).toISOString() + " "
		}() + i + " " + n[0]
	}, t.save = function save(e) {
		e ? process.env.DEBUG = e : delete process.env.DEBUG
	}, t.load = function load() {
		return process.env.DEBUG
	}, t.useColors = function useColors() {
		return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : i.isatty(process.stderr.fd)
	}, t.destroy = r.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."), t.colors = [6, 2, 3, 4, 5, 1];
	try {
		const e = n(113);
		e && (e.stderr || e).level >= 2 && (t.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221])
	} catch (e) {}
	t.inspectOpts = Object.keys(process.env).filter(e => /^debug_/i.test(e)).reduce((e, t) => {
		const n = t.substring(6).toLowerCase().replace(/_([a-z])/g, (e, t) => t.toUpperCase());
		let i = process.env[t];
		return i = !!/^(yes|on|true|enabled)$/i.test(i) || !/^(no|off|false|disabled)$/i.test(i) && ("null" === i ? null : Number(i)), e[n] = i, e
	}, {}), e.exports = n(73)(t);
	const {
		formatters: o
	} = e.exports;
	o.o = function(e) {
		return this.inspectOpts.colors = this.useColors, r.inspect(e, this.inspectOpts).split("\n").map(e => e.trim()).join(" ")
	}, o.O = function(e) {
		return this.inspectOpts.colors = this.useColors, r.inspect(e, this.inspectOpts)
	}
}, function(e, t, n) {
	"use strict";
	const i = n(48),
		r = n(74),
		o = n(114),
		{
			env: s
		} = process;
	let a;

	function translateLevel(e) {
		return 0 !== e && {
			level: e,
			hasBasic: !0,
			has256: e >= 2,
			has16m: e >= 3
		}
	}

	function supportsColor(e, t) {
		if (0 === a) return 0;
		if (o("color=16m") || o("color=full") || o("color=truecolor")) return 3;
		if (o("color=256")) return 2;
		if (e && !t && void 0 === a) return 0;
		const n = a || 0;
		if ("dumb" === s.TERM) return n;
		if ("win32" === process.platform) {
			const e = i.release().split(".");
			return Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1
		}
		if ("CI" in s) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some(e => e in s) || "codeship" === s.CI_NAME ? 1 : n;
		if ("TEAMCITY_VERSION" in s) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(s.TEAMCITY_VERSION) ? 1 : 0;
		if ("truecolor" === s.COLORTERM) return 3;
		if ("TERM_PROGRAM" in s) {
			const e = parseInt((s.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
			switch (s.TERM_PROGRAM) {
				case "iTerm.app":
					return e >= 3 ? 3 : 2;
				case "Apple_Terminal":
					return 2
			}
		}
		return /-256(color)?$/i.test(s.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(s.TERM) || "COLORTERM" in s ? 1 : n
	}
	o("no-color") || o("no-colors") || o("color=false") || o("color=never") ? a = 0 : (o("color") || o("colors") || o("color=true") || o("color=always")) && (a = 1), "FORCE_COLOR" in s && (a = "true" === s.FORCE_COLOR ? 1 : "false" === s.FORCE_COLOR ? 0 : 0 === s.FORCE_COLOR.length ? 1 : Math.min(parseInt(s.FORCE_COLOR, 10), 3)), e.exports = {
		supportsColor: function getSupportLevel(e) {
			return translateLevel(supportsColor(e, e && e.isTTY))
		},
		stdout: translateLevel(supportsColor(!0, r.isatty(1))),
		stderr: translateLevel(supportsColor(!0, r.isatty(2)))
	}
}, function(e, t, n) {
	"use strict";
	e.exports = (e, t = process.argv) => {
		const n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
			i = t.indexOf(n + e),
			r = t.indexOf("--");
		return -1 !== i && (-1 === r || i < r)
	}
}, function(e, t, n) {
	"use strict";

	function appendPath(e, t) {
		return null != t && t.length > 0 && (t.startsWith("/") || (e += "/"), e += t), e
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getS3LikeProviderBaseUrl = t.githubUrl = void 0, t.githubUrl = function githubUrl(e, t = "github.com") {
		return `${e.protocol||"https"}://${e.host||t}`
	}, t.getS3LikeProviderBaseUrl = function getS3LikeProviderBaseUrl(e) {
		const t = e.provider;
		if ("s3" === t) return function s3Url(e) {
			let t;
			if (null != e.endpoint) t = `${e.endpoint}/${e.bucket}`;
			else if (e.bucket.includes(".")) {
				if (null == e.region) throw new Error(`Bucket name "${e.bucket}" includes a dot, but S3 region is missing`);
				t = "us-east-1" === e.region ? "https://s3.amazonaws.com/" + e.bucket : `https://s3-${e.region}.amazonaws.com/${e.bucket}`
			} else t = "cn-north-1" === e.region ? `https://${e.bucket}.s3.${e.region}.amazonaws.com.cn` : `https://${e.bucket}.s3.amazonaws.com`;
			return appendPath(t, e.path)
		}(e);
		if ("spaces" === t) return function spacesUrl(e) {
			if (null == e.name) throw new Error("name is missing");
			if (null == e.region) throw new Error("region is missing");
			return appendPath(`https://${e.name}.${e.region}.digitaloceanspaces.com`, e.path)
		}(e);
		throw new Error("Not supported provider: " + t)
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.parseDn = void 0, t.parseDn = function parseDn(e) {
		let t = !1,
			n = null,
			i = "",
			r = 0;
		e = e.trim();
		const o = new Map;
		for (let s = 0; s <= e.length; s++) {
			if (s === e.length) {
				null !== n && o.set(n, i);
				break
			}
			const a = e[s];
			if (t) {
				if ('"' === a) {
					t = !1;
					continue
				}
			} else {
				if ('"' === a) {
					t = !0;
					continue
				}
				if ("\\" === a) {
					s++;
					const t = parseInt(e.slice(s, s + 2), 16);
					Number.isNaN(t) ? i += e[s] : (s++, i += String.fromCharCode(t));
					continue
				}
				if (null === n && "=" === a) {
					n = i, i = "";
					continue
				}
				if ("," === a || ";" === a || "+" === a) {
					null !== n && o.set(n, i), n = null, i = "";
					continue
				}
			}
			if (" " === a && !t) {
				if (0 === i.length) continue;
				if (s > r) {
					let t = s;
					for (;
						" " === e[t];) t++;
					r = t
				}
				if (r >= e.length || "," === e[r] || ";" === e[r] || null === n && "=" === e[r] || null !== n && "+" === e[r]) {
					s = r - 1;
					continue
				}
			}
			i += a
		}
		return o
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.nil = t.UUID = void 0;
	const i = n(30),
		r = n(2),
		o = i.randomBytes(16);
	o[0] = 1 | o[0];
	const s = {},
		a = [];
	for (let e = 0; e < 256; e++) {
		const t = (e + 256).toString(16).substr(1);
		s[t] = e, a[e] = t
	}
	class UUID {
		constructor(e) {
			this.ascii = null, this.binary = null;
			const t = UUID.check(e);
			if (!t) throw new Error("not a UUID");
			this.version = t.version, "ascii" === t.format ? this.ascii = e : this.binary = e
		}
		static v5(e, t) {
			return function uuidNamed(e, t, n, o, s = c.ASCII) {
				const l = i.createHash(t);
				if ("string" != typeof e && !Buffer.isBuffer(e)) throw r.newError("options.name must be either a string or a Buffer", "ERR_INVALID_UUID_NAME");
				l.update(o), l.update(e);
				const u = l.digest();
				let d;
				switch (s) {
					case c.BINARY:
						u[6] = 15 & u[6] | n, u[8] = 63 & u[8] | 128, d = u;
						break;
					case c.OBJECT:
						u[6] = 15 & u[6] | n, u[8] = 63 & u[8] | 128, d = new UUID(u);
						break;
					default:
						d = a[u[0]] + a[u[1]] + a[u[2]] + a[u[3]] + "-" + a[u[4]] + a[u[5]] + "-" + a[15 & u[6] | n] + a[u[7]] + "-" + a[63 & u[8] | 128] + a[u[9]] + "-" + a[u[10]] + a[u[11]] + a[u[12]] + a[u[13]] + a[u[14]] + a[u[15]]
				}
				return d
			}(e, "sha1", 80, t)
		}
		toString() {
			return null == this.ascii && (this.ascii = function stringify(e) {
				return a[e[0]] + a[e[1]] + a[e[2]] + a[e[3]] + "-" + a[e[4]] + a[e[5]] + "-" + a[e[6]] + a[e[7]] + "-" + a[e[8]] + a[e[9]] + "-" + a[e[10]] + a[e[11]] + a[e[12]] + a[e[13]] + a[e[14]] + a[e[15]]
			}(this.binary)), this.ascii
		}
		inspect() {
			return `UUID v${this.version} ${this.toString()}`
		}
		static check(e, t = 0) {
			if ("string" == typeof e) return e = e.toLowerCase(), !!/^[a-f0-9]{8}(-[a-f0-9]{4}){3}-([a-f0-9]{12})$/.test(e) && ("00000000-0000-0000-0000-000000000000" === e ? {
				version: void 0,
				variant: "nil",
				format: "ascii"
			} : {
				version: (240 & s[e[14] + e[15]]) >> 4,
				variant: getVariant((224 & s[e[19] + e[20]]) >> 5),
				format: "ascii"
			});
			if (Buffer.isBuffer(e)) {
				if (e.length < t + 16) return !1;
				let n = 0;
				for (; n < 16 && 0 === e[t + n]; n++);
				return 16 === n ? {
					version: void 0,
					variant: "nil",
					format: "binary"
				} : {
					version: (240 & e[t + 6]) >> 4,
					variant: getVariant((224 & e[t + 8]) >> 5),
					format: "binary"
				}
			}
			throw r.newError("Unknown type of uuid", "ERR_UNKNOWN_UUID_TYPE")
		}
		static parse(e) {
			const t = Buffer.allocUnsafe(16);
			let n = 0;
			for (let i = 0; i < 16; i++) t[i] = s[e[n++] + e[n++]], 3 !== i && 5 !== i && 7 !== i && 9 !== i || (n += 1);
			return t
		}
	}

	function getVariant(e) {
		switch (e) {
			case 0:
			case 1:
			case 3:
				return "ncs";
			case 4:
			case 5:
				return "rfc4122";
			case 6:
				return "microsoft";
			default:
				return "future"
		}
	}
	var c;
	t.UUID = UUID, UUID.OID = UUID.parse("6ba7b812-9dad-11d1-80b4-00c04fd430c8"),
		function(e) {
			e[e.ASCII = 0] = "ASCII", e[e.BINARY = 1] = "BINARY", e[e.OBJECT = 2] = "OBJECT"
		}(c || (c = {})), t.nil = new UUID("00000000-0000-0000-0000-000000000000")
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.parseXml = t.XElement = void 0;
	const i = n(119),
		r = n(2);
	class XElement {
		constructor(e) {
			if (this.name = e, this.value = "", this.attributes = null, this.isCData = !1, this.elements = null, !e) throw r.newError("Element name cannot be empty", "ERR_XML_ELEMENT_NAME_EMPTY");
			if (! function isValidName(e) {
					return o.test(e)
				}(e)) throw r.newError("Invalid element name: " + e, "ERR_XML_ELEMENT_INVALID_NAME")
		}
		attribute(e) {
			const t = null === this.attributes ? null : this.attributes[e];
			if (null == t) throw r.newError(`No attribute "${e}"`, "ERR_XML_MISSED_ATTRIBUTE");
			return t
		}
		removeAttribute(e) {
			null !== this.attributes && delete this.attributes[e]
		}
		element(e, t = !1, n = null) {
			const i = this.elementOrNull(e, t);
			if (null === i) throw r.newError(n || `No element "${e}"`, "ERR_XML_MISSED_ELEMENT");
			return i
		}
		elementOrNull(e, t = !1) {
			if (null === this.elements) return null;
			for (const n of this.elements)
				if (isNameEquals(n, e, t)) return n;
			return null
		}
		getElements(e, t = !1) {
			return null === this.elements ? [] : this.elements.filter(n => isNameEquals(n, e, t))
		}
		elementValueOrEmpty(e, t = !1) {
			const n = this.elementOrNull(e, t);
			return null === n ? "" : n.value
		}
	}
	t.XElement = XElement;
	const o = new RegExp(/^[A-Za-z_][:A-Za-z0-9_-]*$/i);

	function isNameEquals(e, t, n) {
		const i = e.name;
		return i === t || !0 === n && i.length === t.length && i.toLowerCase() === t.toLowerCase()
	}
	t.parseXml = function parseXml(e) {
		let t = null;
		const n = i.parser(!0, {}),
			r = [];
		return n.onopentag = e => {
			const n = new XElement(e.name);
			if (n.attributes = e.attributes, null === t) t = n;
			else {
				const e = r[r.length - 1];
				null == e.elements && (e.elements = []), e.elements.push(n)
			}
			r.push(n)
		}, n.onclosetag = () => {
			r.pop()
		}, n.ontext = e => {
			r.length > 0 && (r[r.length - 1].value = e)
		}, n.oncdata = e => {
			const t = r[r.length - 1];
			t.value = e, t.isCData = !0
		}, n.onerror = e => {
			throw e
		}, n.write(e), t
	}
}, function(e, t, n) {
	! function(e) {
		e.parser = function(e, t) {
			return new SAXParser(e, t)
		}, e.SAXParser = SAXParser, e.SAXStream = SAXStream, e.createStream = function createStream(e, t) {
			return new SAXStream(e, t)
		}, e.MAX_BUFFER_LENGTH = 65536;
		var t, i = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];

		function SAXParser(t, n) {
			if (!(this instanceof SAXParser)) return new SAXParser(t, n);
			! function clearBuffers(e) {
				for (var t = 0, n = i.length; t < n; t++) e[i[t]] = ""
			}(this), this.q = this.c = "", this.bufferCheckPosition = e.MAX_BUFFER_LENGTH, this.opt = n || {}, this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags, this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase", this.tags = [], this.closed = this.closedRoot = this.sawRoot = !1, this.tag = this.error = null, this.strict = !!t, this.noscript = !(!t && !this.opt.noscript), this.state = f.BEGIN, this.strictEntities = this.opt.strictEntities, this.ENTITIES = this.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), this.attribList = [], this.opt.xmlns && (this.ns = Object.create(s)), this.trackPosition = !1 !== this.opt.position, this.trackPosition && (this.position = this.line = this.column = 0), emit(this, "onready")
		}
		e.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"], Object.create || (Object.create = function(e) {
			function F() {}
			return F.prototype = e, new F
		}), Object.keys || (Object.keys = function(e) {
			var t = [];
			for (var n in e) e.hasOwnProperty(n) && t.push(n);
			return t
		}), SAXParser.prototype = {
			end: function() {
				end(this)
			},
			write: function write(t) {
				if (this.error) throw this.error;
				if (this.closed) return error(this, "Cannot write after close. Assign an onready handler.");
				if (null === t) return end(this);
				"object" == typeof t && (t = t.toString());
				var n = 0,
					r = "";
				for (; r = charAt(t, n++), this.c = r, r;) switch (this.trackPosition && (this.position++, "\n" === r ? (this.line++, this.column = 0) : this.column++), this.state) {
					case f.BEGIN:
						if (this.state = f.BEGIN_WHITESPACE, "\ufeff" === r) continue;
						beginWhiteSpace(this, r);
						continue;
					case f.BEGIN_WHITESPACE:
						beginWhiteSpace(this, r);
						continue;
					case f.TEXT:
						if (this.sawRoot && !this.closedRoot) {
							for (var o = n - 1; r && "<" !== r && "&" !== r;)(r = charAt(t, n++)) && this.trackPosition && (this.position++, "\n" === r ? (this.line++, this.column = 0) : this.column++);
							this.textNode += t.substring(o, n - 1)
						}
						"<" !== r || this.sawRoot && this.closedRoot && !this.strict ? (isWhitespace(r) || this.sawRoot && !this.closedRoot || strictFail(this, "Text data outside of root node."), "&" === r ? this.state = f.TEXT_ENTITY : this.textNode += r) : (this.state = f.OPEN_WAKA, this.startTagPosition = this.position);
						continue;
					case f.SCRIPT:
						"<" === r ? this.state = f.SCRIPT_ENDING : this.script += r;
						continue;
					case f.SCRIPT_ENDING:
						"/" === r ? this.state = f.CLOSE_TAG : (this.script += "<" + r, this.state = f.SCRIPT);
						continue;
					case f.OPEN_WAKA:
						if ("!" === r) this.state = f.SGML_DECL, this.sgmlDecl = "";
						else if (isWhitespace(r));
						else if (isMatch(a, r)) this.state = f.OPEN_TAG, this.tagName = r;
						else if ("/" === r) this.state = f.CLOSE_TAG, this.tagName = "";
						else if ("?" === r) this.state = f.PROC_INST, this.procInstName = this.procInstBody = "";
						else {
							if (strictFail(this, "Unencoded <"), this.startTagPosition + 1 < this.position) {
								var s = this.position - this.startTagPosition;
								r = new Array(s).join(" ") + r
							}
							this.textNode += "<" + r, this.state = f.TEXT
						}
						continue;
					case f.SGML_DECL:
						"[CDATA[" === (this.sgmlDecl + r).toUpperCase() ? (emitNode(this, "onopencdata"), this.state = f.CDATA, this.sgmlDecl = "", this.cdata = "") : this.sgmlDecl + r === "--" ? (this.state = f.COMMENT, this.comment = "", this.sgmlDecl = "") : "DOCTYPE" === (this.sgmlDecl + r).toUpperCase() ? (this.state = f.DOCTYPE, (this.doctype || this.sawRoot) && strictFail(this, "Inappropriately located doctype declaration"), this.doctype = "", this.sgmlDecl = "") : ">" === r ? (emitNode(this, "onsgmldeclaration", this.sgmlDecl), this.sgmlDecl = "", this.state = f.TEXT) : isQuote(r) ? (this.state = f.SGML_DECL_QUOTED, this.sgmlDecl += r) : this.sgmlDecl += r;
						continue;
					case f.SGML_DECL_QUOTED:
						r === this.q && (this.state = f.SGML_DECL, this.q = ""), this.sgmlDecl += r;
						continue;
					case f.DOCTYPE:
						">" === r ? (this.state = f.TEXT, emitNode(this, "ondoctype", this.doctype), this.doctype = !0) : (this.doctype += r, "[" === r ? this.state = f.DOCTYPE_DTD : isQuote(r) && (this.state = f.DOCTYPE_QUOTED, this.q = r));
						continue;
					case f.DOCTYPE_QUOTED:
						this.doctype += r, r === this.q && (this.q = "", this.state = f.DOCTYPE);
						continue;
					case f.DOCTYPE_DTD:
						this.doctype += r, "]" === r ? this.state = f.DOCTYPE : isQuote(r) && (this.state = f.DOCTYPE_DTD_QUOTED, this.q = r);
						continue;
					case f.DOCTYPE_DTD_QUOTED:
						this.doctype += r, r === this.q && (this.state = f.DOCTYPE_DTD, this.q = "");
						continue;
					case f.COMMENT:
						"-" === r ? this.state = f.COMMENT_ENDING : this.comment += r;
						continue;
					case f.COMMENT_ENDING:
						"-" === r ? (this.state = f.COMMENT_ENDED, this.comment = textopts(this.opt, this.comment), this.comment && emitNode(this, "oncomment", this.comment), this.comment = "") : (this.comment += "-" + r, this.state = f.COMMENT);
						continue;
					case f.COMMENT_ENDED:
						">" !== r ? (strictFail(this, "Malformed comment"), this.comment += "--" + r, this.state = f.COMMENT) : this.state = f.TEXT;
						continue;
					case f.CDATA:
						"]" === r ? this.state = f.CDATA_ENDING : this.cdata += r;
						continue;
					case f.CDATA_ENDING:
						"]" === r ? this.state = f.CDATA_ENDING_2 : (this.cdata += "]" + r, this.state = f.CDATA);
						continue;
					case f.CDATA_ENDING_2:
						">" === r ? (this.cdata && emitNode(this, "oncdata", this.cdata), emitNode(this, "onclosecdata"), this.cdata = "", this.state = f.TEXT) : "]" === r ? this.cdata += "]" : (this.cdata += "]]" + r, this.state = f.CDATA);
						continue;
					case f.PROC_INST:
						"?" === r ? this.state = f.PROC_INST_ENDING : isWhitespace(r) ? this.state = f.PROC_INST_BODY : this.procInstName += r;
						continue;
					case f.PROC_INST_BODY:
						if (!this.procInstBody && isWhitespace(r)) continue;
						"?" === r ? this.state = f.PROC_INST_ENDING : this.procInstBody += r;
						continue;
					case f.PROC_INST_ENDING:
						">" === r ? (emitNode(this, "onprocessinginstruction", {
							name: this.procInstName,
							body: this.procInstBody
						}), this.procInstName = this.procInstBody = "", this.state = f.TEXT) : (this.procInstBody += "?" + r, this.state = f.PROC_INST_BODY);
						continue;
					case f.OPEN_TAG:
						isMatch(c, r) ? this.tagName += r : (newTag(this), ">" === r ? openTag(this) : "/" === r ? this.state = f.OPEN_TAG_SLASH : (isWhitespace(r) || strictFail(this, "Invalid character in tag name"), this.state = f.ATTRIB));
						continue;
					case f.OPEN_TAG_SLASH:
						">" === r ? (openTag(this, !0), closeTag(this)) : (strictFail(this, "Forward-slash in opening tag not followed by >"), this.state = f.ATTRIB);
						continue;
					case f.ATTRIB:
						if (isWhitespace(r)) continue;
						">" === r ? openTag(this) : "/" === r ? this.state = f.OPEN_TAG_SLASH : isMatch(a, r) ? (this.attribName = r, this.attribValue = "", this.state = f.ATTRIB_NAME) : strictFail(this, "Invalid attribute name");
						continue;
					case f.ATTRIB_NAME:
						"=" === r ? this.state = f.ATTRIB_VALUE : ">" === r ? (strictFail(this, "Attribute without value"), this.attribValue = this.attribName, attrib(this), openTag(this)) : isWhitespace(r) ? this.state = f.ATTRIB_NAME_SAW_WHITE : isMatch(c, r) ? this.attribName += r : strictFail(this, "Invalid attribute name");
						continue;
					case f.ATTRIB_NAME_SAW_WHITE:
						if ("=" === r) this.state = f.ATTRIB_VALUE;
						else {
							if (isWhitespace(r)) continue;
							strictFail(this, "Attribute without value"), this.tag.attributes[this.attribName] = "", this.attribValue = "", emitNode(this, "onattribute", {
								name: this.attribName,
								value: ""
							}), this.attribName = "", ">" === r ? openTag(this) : isMatch(a, r) ? (this.attribName = r, this.state = f.ATTRIB_NAME) : (strictFail(this, "Invalid attribute name"), this.state = f.ATTRIB)
						}
						continue;
					case f.ATTRIB_VALUE:
						if (isWhitespace(r)) continue;
						isQuote(r) ? (this.q = r, this.state = f.ATTRIB_VALUE_QUOTED) : (strictFail(this, "Unquoted attribute value"), this.state = f.ATTRIB_VALUE_UNQUOTED, this.attribValue = r);
						continue;
					case f.ATTRIB_VALUE_QUOTED:
						if (r !== this.q) {
							"&" === r ? this.state = f.ATTRIB_VALUE_ENTITY_Q : this.attribValue += r;
							continue
						}
						attrib(this), this.q = "", this.state = f.ATTRIB_VALUE_CLOSED;
						continue;
					case f.ATTRIB_VALUE_CLOSED:
						isWhitespace(r) ? this.state = f.ATTRIB : ">" === r ? openTag(this) : "/" === r ? this.state = f.OPEN_TAG_SLASH : isMatch(a, r) ? (strictFail(this, "No whitespace between attributes"), this.attribName = r, this.attribValue = "", this.state = f.ATTRIB_NAME) : strictFail(this, "Invalid attribute name");
						continue;
					case f.ATTRIB_VALUE_UNQUOTED:
						if (!isAttribEnd(r)) {
							"&" === r ? this.state = f.ATTRIB_VALUE_ENTITY_U : this.attribValue += r;
							continue
						}
						attrib(this), ">" === r ? openTag(this) : this.state = f.ATTRIB;
						continue;
					case f.CLOSE_TAG:
						if (this.tagName) ">" === r ? closeTag(this) : isMatch(c, r) ? this.tagName += r : this.script ? (this.script += "</" + this.tagName, this.tagName = "", this.state = f.SCRIPT) : (isWhitespace(r) || strictFail(this, "Invalid tagname in closing tag"), this.state = f.CLOSE_TAG_SAW_WHITE);
						else {
							if (isWhitespace(r)) continue;
							notMatch(a, r) ? this.script ? (this.script += "</" + r, this.state = f.SCRIPT) : strictFail(this, "Invalid tagname in closing tag.") : this.tagName = r
						}
						continue;
					case f.CLOSE_TAG_SAW_WHITE:
						if (isWhitespace(r)) continue;
						">" === r ? closeTag(this) : strictFail(this, "Invalid characters in closing tag");
						continue;
					case f.TEXT_ENTITY:
					case f.ATTRIB_VALUE_ENTITY_Q:
					case f.ATTRIB_VALUE_ENTITY_U:
						var d, h;
						switch (this.state) {
							case f.TEXT_ENTITY:
								d = f.TEXT, h = "textNode";
								break;
							case f.ATTRIB_VALUE_ENTITY_Q:
								d = f.ATTRIB_VALUE_QUOTED, h = "attribValue";
								break;
							case f.ATTRIB_VALUE_ENTITY_U:
								d = f.ATTRIB_VALUE_UNQUOTED, h = "attribValue"
						}
						";" === r ? (this[h] += parseEntity(this), this.entity = "", this.state = d) : isMatch(this.entity.length ? u : l, r) ? this.entity += r : (strictFail(this, "Invalid character in entity name"), this[h] += "&" + this.entity + r, this.entity = "", this.state = d);
						continue;
					default:
						throw new Error(this, "Unknown state: " + this.state)
				}
				this.position >= this.bufferCheckPosition && function checkBufferLength(t) {
					for (var n = Math.max(e.MAX_BUFFER_LENGTH, 10), r = 0, o = 0, s = i.length; o < s; o++) {
						var a = t[i[o]].length;
						if (a > n) switch (i[o]) {
							case "textNode":
								closeText(t);
								break;
							case "cdata":
								emitNode(t, "oncdata", t.cdata), t.cdata = "";
								break;
							case "script":
								emitNode(t, "onscript", t.script), t.script = "";
								break;
							default:
								error(t, "Max buffer length exceeded: " + i[o])
						}
						r = Math.max(r, a)
					}
					var c = e.MAX_BUFFER_LENGTH - r;
					t.bufferCheckPosition = c + t.position
				}(this);
				return this
			},
			resume: function() {
				return this.error = null, this
			},
			close: function() {
				return this.write(null)
			},
			flush: function() {
				! function flushBuffers(e) {
					closeText(e), "" !== e.cdata && (emitNode(e, "oncdata", e.cdata), e.cdata = ""), "" !== e.script && (emitNode(e, "onscript", e.script), e.script = "")
				}(this)
			}
		};
		try {
			t = n(23).Stream
		} catch (e) {
			t = function() {}
		}
		var r = e.EVENTS.filter((function(e) {
			return "error" !== e && "end" !== e
		}));

		function SAXStream(e, n) {
			if (!(this instanceof SAXStream)) return new SAXStream(e, n);
			t.apply(this), this._parser = new SAXParser(e, n), this.writable = !0, this.readable = !0;
			var i = this;
			this._parser.onend = function() {
				i.emit("end")
			}, this._parser.onerror = function(e) {
				i.emit("error", e), i._parser.error = null
			}, this._decoder = null, r.forEach((function(e) {
				Object.defineProperty(i, "on" + e, {
					get: function() {
						return i._parser["on" + e]
					},
					set: function(t) {
						if (!t) return i.removeAllListeners(e), i._parser["on" + e] = t, t;
						i.on(e, t)
					},
					enumerable: !0,
					configurable: !1
				})
			}))
		}
		SAXStream.prototype = Object.create(t.prototype, {
			constructor: {
				value: SAXStream
			}
		}), SAXStream.prototype.write = function(e) {
			if ("function" == typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(e)) {
				if (!this._decoder) {
					var t = n(120).StringDecoder;
					this._decoder = new t("utf8")
				}
				e = this._decoder.write(e)
			}
			return this._parser.write(e.toString()), this.emit("data", e), !0
		}, SAXStream.prototype.end = function(e) {
			return e && e.length && this.write(e), this._parser.end(), !0
		}, SAXStream.prototype.on = function(e, n) {
			var i = this;
			return i._parser["on" + e] || -1 === r.indexOf(e) || (i._parser["on" + e] = function() {
				var t = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
				t.splice(0, 0, e), i.emit.apply(i, t)
			}), t.prototype.on.call(i, e, n)
		};
		var o = "http://www.w3.org/XML/1998/namespace",
			s = {
				xml: o,
				xmlns: "http://www.w3.org/2000/xmlns/"
			},
			a = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
			c = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
			l = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
			u = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

		function isWhitespace(e) {
			return " " === e || "\n" === e || "\r" === e || "\t" === e
		}

		function isQuote(e) {
			return '"' === e || "'" === e
		}

		function isAttribEnd(e) {
			return ">" === e || isWhitespace(e)
		}

		function isMatch(e, t) {
			return e.test(t)
		}

		function notMatch(e, t) {
			return !isMatch(e, t)
		}
		var d, h, p, f = 0;
		for (var g in e.STATE = {
				BEGIN: f++,
				BEGIN_WHITESPACE: f++,
				TEXT: f++,
				TEXT_ENTITY: f++,
				OPEN_WAKA: f++,
				SGML_DECL: f++,
				SGML_DECL_QUOTED: f++,
				DOCTYPE: f++,
				DOCTYPE_QUOTED: f++,
				DOCTYPE_DTD: f++,
				DOCTYPE_DTD_QUOTED: f++,
				COMMENT_STARTING: f++,
				COMMENT: f++,
				COMMENT_ENDING: f++,
				COMMENT_ENDED: f++,
				CDATA: f++,
				CDATA_ENDING: f++,
				CDATA_ENDING_2: f++,
				PROC_INST: f++,
				PROC_INST_BODY: f++,
				PROC_INST_ENDING: f++,
				OPEN_TAG: f++,
				OPEN_TAG_SLASH: f++,
				ATTRIB: f++,
				ATTRIB_NAME: f++,
				ATTRIB_NAME_SAW_WHITE: f++,
				ATTRIB_VALUE: f++,
				ATTRIB_VALUE_QUOTED: f++,
				ATTRIB_VALUE_CLOSED: f++,
				ATTRIB_VALUE_UNQUOTED: f++,
				ATTRIB_VALUE_ENTITY_Q: f++,
				ATTRIB_VALUE_ENTITY_U: f++,
				CLOSE_TAG: f++,
				CLOSE_TAG_SAW_WHITE: f++,
				SCRIPT: f++,
				SCRIPT_ENDING: f++
			}, e.XML_ENTITIES = {
				amp: "&",
				gt: ">",
				lt: "<",
				quot: '"',
				apos: "'"
			}, e.ENTITIES = {
				amp: "&",
				gt: ">",
				lt: "<",
				quot: '"',
				apos: "'",
				AElig: 198,
				Aacute: 193,
				Acirc: 194,
				Agrave: 192,
				Aring: 197,
				Atilde: 195,
				Auml: 196,
				Ccedil: 199,
				ETH: 208,
				Eacute: 201,
				Ecirc: 202,
				Egrave: 200,
				Euml: 203,
				Iacute: 205,
				Icirc: 206,
				Igrave: 204,
				Iuml: 207,
				Ntilde: 209,
				Oacute: 211,
				Ocirc: 212,
				Ograve: 210,
				Oslash: 216,
				Otilde: 213,
				Ouml: 214,
				THORN: 222,
				Uacute: 218,
				Ucirc: 219,
				Ugrave: 217,
				Uuml: 220,
				Yacute: 221,
				aacute: 225,
				acirc: 226,
				aelig: 230,
				agrave: 224,
				aring: 229,
				atilde: 227,
				auml: 228,
				ccedil: 231,
				eacute: 233,
				ecirc: 234,
				egrave: 232,
				eth: 240,
				euml: 235,
				iacute: 237,
				icirc: 238,
				igrave: 236,
				iuml: 239,
				ntilde: 241,
				oacute: 243,
				ocirc: 244,
				ograve: 242,
				oslash: 248,
				otilde: 245,
				ouml: 246,
				szlig: 223,
				thorn: 254,
				uacute: 250,
				ucirc: 251,
				ugrave: 249,
				uuml: 252,
				yacute: 253,
				yuml: 255,
				copy: 169,
				reg: 174,
				nbsp: 160,
				iexcl: 161,
				cent: 162,
				pound: 163,
				curren: 164,
				yen: 165,
				brvbar: 166,
				sect: 167,
				uml: 168,
				ordf: 170,
				laquo: 171,
				not: 172,
				shy: 173,
				macr: 175,
				deg: 176,
				plusmn: 177,
				sup1: 185,
				sup2: 178,
				sup3: 179,
				acute: 180,
				micro: 181,
				para: 182,
				middot: 183,
				cedil: 184,
				ordm: 186,
				raquo: 187,
				frac14: 188,
				frac12: 189,
				frac34: 190,
				iquest: 191,
				times: 215,
				divide: 247,
				OElig: 338,
				oelig: 339,
				Scaron: 352,
				scaron: 353,
				Yuml: 376,
				fnof: 402,
				circ: 710,
				tilde: 732,
				Alpha: 913,
				Beta: 914,
				Gamma: 915,
				Delta: 916,
				Epsilon: 917,
				Zeta: 918,
				Eta: 919,
				Theta: 920,
				Iota: 921,
				Kappa: 922,
				Lambda: 923,
				Mu: 924,
				Nu: 925,
				Xi: 926,
				Omicron: 927,
				Pi: 928,
				Rho: 929,
				Sigma: 931,
				Tau: 932,
				Upsilon: 933,
				Phi: 934,
				Chi: 935,
				Psi: 936,
				Omega: 937,
				alpha: 945,
				beta: 946,
				gamma: 947,
				delta: 948,
				epsilon: 949,
				zeta: 950,
				eta: 951,
				theta: 952,
				iota: 953,
				kappa: 954,
				lambda: 955,
				mu: 956,
				nu: 957,
				xi: 958,
				omicron: 959,
				pi: 960,
				rho: 961,
				sigmaf: 962,
				sigma: 963,
				tau: 964,
				upsilon: 965,
				phi: 966,
				chi: 967,
				psi: 968,
				omega: 969,
				thetasym: 977,
				upsih: 978,
				piv: 982,
				ensp: 8194,
				emsp: 8195,
				thinsp: 8201,
				zwnj: 8204,
				zwj: 8205,
				lrm: 8206,
				rlm: 8207,
				ndash: 8211,
				mdash: 8212,
				lsquo: 8216,
				rsquo: 8217,
				sbquo: 8218,
				ldquo: 8220,
				rdquo: 8221,
				bdquo: 8222,
				dagger: 8224,
				Dagger: 8225,
				bull: 8226,
				hellip: 8230,
				permil: 8240,
				prime: 8242,
				Prime: 8243,
				lsaquo: 8249,
				rsaquo: 8250,
				oline: 8254,
				frasl: 8260,
				euro: 8364,
				image: 8465,
				weierp: 8472,
				real: 8476,
				trade: 8482,
				alefsym: 8501,
				larr: 8592,
				uarr: 8593,
				rarr: 8594,
				darr: 8595,
				harr: 8596,
				crarr: 8629,
				lArr: 8656,
				uArr: 8657,
				rArr: 8658,
				dArr: 8659,
				hArr: 8660,
				forall: 8704,
				part: 8706,
				exist: 8707,
				empty: 8709,
				nabla: 8711,
				isin: 8712,
				notin: 8713,
				ni: 8715,
				prod: 8719,
				sum: 8721,
				minus: 8722,
				lowast: 8727,
				radic: 8730,
				prop: 8733,
				infin: 8734,
				ang: 8736,
				and: 8743,
				or: 8744,
				cap: 8745,
				cup: 8746,
				int: 8747,
				there4: 8756,
				sim: 8764,
				cong: 8773,
				asymp: 8776,
				ne: 8800,
				equiv: 8801,
				le: 8804,
				ge: 8805,
				sub: 8834,
				sup: 8835,
				nsub: 8836,
				sube: 8838,
				supe: 8839,
				oplus: 8853,
				otimes: 8855,
				perp: 8869,
				sdot: 8901,
				lceil: 8968,
				rceil: 8969,
				lfloor: 8970,
				rfloor: 8971,
				lang: 9001,
				rang: 9002,
				loz: 9674,
				spades: 9824,
				clubs: 9827,
				hearts: 9829,
				diams: 9830
			}, Object.keys(e.ENTITIES).forEach((function(t) {
				var n = e.ENTITIES[t],
					i = "number" == typeof n ? String.fromCharCode(n) : n;
				e.ENTITIES[t] = i
			})), e.STATE) e.STATE[e.STATE[g]] = g;

		function emit(e, t, n) {
			e[t] && e[t](n)
		}

		function emitNode(e, t, n) {
			e.textNode && closeText(e), emit(e, t, n)
		}

		function closeText(e) {
			e.textNode = textopts(e.opt, e.textNode), e.textNode && emit(e, "ontext", e.textNode), e.textNode = ""
		}

		function textopts(e, t) {
			return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t
		}

		function error(e, t) {
			return closeText(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = new Error(t), e.error = t, emit(e, "onerror", t), e
		}

		function end(e) {
			return e.sawRoot && !e.closedRoot && strictFail(e, "Unclosed root tag"), e.state !== f.BEGIN && e.state !== f.BEGIN_WHITESPACE && e.state !== f.TEXT && error(e, "Unexpected end"), closeText(e), e.c = "", e.closed = !0, emit(e, "onend"), SAXParser.call(e, e.strict, e.opt), e
		}

		function strictFail(e, t) {
			if ("object" != typeof e || !(e instanceof SAXParser)) throw new Error("bad call to strictFail");
			e.strict && error(e, t)
		}

		function newTag(e) {
			e.strict || (e.tagName = e.tagName[e.looseCase]());
			var t = e.tags[e.tags.length - 1] || e,
				n = e.tag = {
					name: e.tagName,
					attributes: {}
				};
			e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, emitNode(e, "onopentagstart", n)
		}

		function qname(e, t) {
			var n = e.indexOf(":") < 0 ? ["", e] : e.split(":"),
				i = n[0],
				r = n[1];
			return t && "xmlns" === e && (i = "xmlns", r = ""), {
				prefix: i,
				local: r
			}
		}

		function attrib(e) {
			if (e.strict || (e.attribName = e.attribName[e.looseCase]()), -1 !== e.attribList.indexOf(e.attribName) || e.tag.attributes.hasOwnProperty(e.attribName)) e.attribName = e.attribValue = "";
			else {
				if (e.opt.xmlns) {
					var t = qname(e.attribName, !0),
						n = t.prefix,
						i = t.local;
					if ("xmlns" === n)
						if ("xml" === i && e.attribValue !== o) strictFail(e, "xml: prefix must be bound to " + o + "\nActual: " + e.attribValue);
						else if ("xmlns" === i && "http://www.w3.org/2000/xmlns/" !== e.attribValue) strictFail(e, "xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: " + e.attribValue);
					else {
						var r = e.tag,
							s = e.tags[e.tags.length - 1] || e;
						r.ns === s.ns && (r.ns = Object.create(s.ns)), r.ns[i] = e.attribValue
					}
					e.attribList.push([e.attribName, e.attribValue])
				} else e.tag.attributes[e.attribName] = e.attribValue, emitNode(e, "onattribute", {
					name: e.attribName,
					value: e.attribValue
				});
				e.attribName = e.attribValue = ""
			}
		}

		function openTag(e, t) {
			if (e.opt.xmlns) {
				var n = e.tag,
					i = qname(e.tagName);
				n.prefix = i.prefix, n.local = i.local, n.uri = n.ns[i.prefix] || "", n.prefix && !n.uri && (strictFail(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName)), n.uri = i.prefix);
				var r = e.tags[e.tags.length - 1] || e;
				n.ns && r.ns !== n.ns && Object.keys(n.ns).forEach((function(t) {
					emitNode(e, "onopennamespace", {
						prefix: t,
						uri: n.ns[t]
					})
				}));
				for (var o = 0, s = e.attribList.length; o < s; o++) {
					var a = e.attribList[o],
						c = a[0],
						l = a[1],
						u = qname(c, !0),
						d = u.prefix,
						h = u.local,
						p = "" === d ? "" : n.ns[d] || "",
						g = {
							name: c,
							value: l,
							prefix: d,
							local: h,
							uri: p
						};
					d && "xmlns" !== d && !p && (strictFail(e, "Unbound namespace prefix: " + JSON.stringify(d)), g.uri = d), e.tag.attributes[c] = g, emitNode(e, "onattribute", g)
				}
				e.attribList.length = 0
			}
			e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), emitNode(e, "onopentag", e.tag), t || (e.noscript || "script" !== e.tagName.toLowerCase() ? e.state = f.TEXT : e.state = f.SCRIPT, e.tag = null, e.tagName = ""), e.attribName = e.attribValue = "", e.attribList.length = 0
		}

		function closeTag(e) {
			if (!e.tagName) return strictFail(e, "Weird empty close tag."), e.textNode += "</>", void(e.state = f.TEXT);
			if (e.script) {
				if ("script" !== e.tagName) return e.script += "</" + e.tagName + ">", e.tagName = "", void(e.state = f.SCRIPT);
				emitNode(e, "onscript", e.script), e.script = ""
			}
			var t = e.tags.length,
				n = e.tagName;
			e.strict || (n = n[e.looseCase]());
			for (var i = n; t--;) {
				if (e.tags[t].name === i) break;
				strictFail(e, "Unexpected close tag")
			}
			if (t < 0) return strictFail(e, "Unmatched closing tag: " + e.tagName), e.textNode += "</" + e.tagName + ">", void(e.state = f.TEXT);
			e.tagName = n;
			for (var r = e.tags.length; r-- > t;) {
				var o = e.tag = e.tags.pop();
				e.tagName = e.tag.name, emitNode(e, "onclosetag", e.tagName);
				var s = {};
				for (var a in o.ns) s[a] = o.ns[a];
				var c = e.tags[e.tags.length - 1] || e;
				e.opt.xmlns && o.ns !== c.ns && Object.keys(o.ns).forEach((function(t) {
					var n = o.ns[t];
					emitNode(e, "onclosenamespace", {
						prefix: t,
						uri: n
					})
				}))
			}
			0 === t && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = "", e.attribList.length = 0, e.state = f.TEXT
		}

		function parseEntity(e) {
			var t, n = e.entity,
				i = n.toLowerCase(),
				r = "";
			return e.ENTITIES[n] ? e.ENTITIES[n] : e.ENTITIES[i] ? e.ENTITIES[i] : ("#" === (n = i).charAt(0) && ("x" === n.charAt(1) ? (n = n.slice(2), r = (t = parseInt(n, 16)).toString(16)) : (n = n.slice(1), r = (t = parseInt(n, 10)).toString(10))), n = n.replace(/^0+/, ""), isNaN(t) || r.toLowerCase() !== n ? (strictFail(e, "Invalid character entity"), "&" + e.entity + ";") : String.fromCodePoint(t))
		}

		function beginWhiteSpace(e, t) {
			"<" === t ? (e.state = f.OPEN_WAKA, e.startTagPosition = e.position) : isWhitespace(t) || (strictFail(e, "Non-whitespace before first tag."), e.textNode = t, e.state = f.TEXT)
		}

		function charAt(e, t) {
			var n = "";
			return t < e.length && (n = e.charAt(t)), n
		}
		f = e.STATE, String.fromCodePoint || (d = String.fromCharCode, h = Math.floor, p = function() {
			var e, t, n = 16384,
				i = [],
				r = -1,
				o = arguments.length;
			if (!o) return "";
			for (var s = ""; ++r < o;) {
				var a = Number(arguments[r]);
				if (!isFinite(a) || a < 0 || a > 1114111 || h(a) !== a) throw RangeError("Invalid code point: " + a);
				a <= 65535 ? i.push(a) : (e = 55296 + ((a -= 65536) >> 10), t = a % 1024 + 56320, i.push(e, t)), (r + 1 === o || i.length > n) && (s += d.apply(null, i), i.length = 0)
			}
			return s
		}, Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
			value: p,
			configurable: !0,
			writable: !0
		}) : String.fromCodePoint = p)
	}(t)
}, function(e, t) {
	e.exports = require("string_decoder")
}, function(e, t, n) {
	var i = n(122),
		r = process.cwd,
		o = null,
		s = process.env.GRACEFUL_FS_PLATFORM || process.platform;
	process.cwd = function() {
		return o || (o = r.call(process)), o
	};
	try {
		process.cwd()
	} catch (e) {}
	if ("function" == typeof process.chdir) {
		var a = process.chdir;
		process.chdir = function(e) {
			o = null, a.call(process, e)
		}, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, a)
	}
	e.exports = function patch(e) {
		i.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && function patchLchmod(e) {
			e.lchmod = function(t, n, r) {
				e.open(t, i.O_WRONLY | i.O_SYMLINK, n, (function(t, i) {
					t ? r && r(t) : e.fchmod(i, n, (function(t) {
						e.close(i, (function(e) {
							r && r(t || e)
						}))
					}))
				}))
			}, e.lchmodSync = function(t, n) {
				var r, o = e.openSync(t, i.O_WRONLY | i.O_SYMLINK, n),
					s = !0;
				try {
					r = e.fchmodSync(o, n), s = !1
				} finally {
					if (s) try {
						e.closeSync(o)
					} catch (e) {} else e.closeSync(o)
				}
				return r
			}
		}(e);
		e.lutimes || function patchLutimes(e) {
			i.hasOwnProperty("O_SYMLINK") ? (e.lutimes = function(t, n, r, o) {
				e.open(t, i.O_SYMLINK, (function(t, i) {
					t ? o && o(t) : e.futimes(i, n, r, (function(t) {
						e.close(i, (function(e) {
							o && o(t || e)
						}))
					}))
				}))
			}, e.lutimesSync = function(t, n, r) {
				var o, s = e.openSync(t, i.O_SYMLINK),
					a = !0;
				try {
					o = e.futimesSync(s, n, r), a = !1
				} finally {
					if (a) try {
						e.closeSync(s)
					} catch (e) {} else e.closeSync(s)
				}
				return o
			}) : (e.lutimes = function(e, t, n, i) {
				i && process.nextTick(i)
			}, e.lutimesSync = function() {})
		}(e);
		e.chown = chownFix(e.chown), e.fchown = chownFix(e.fchown), e.lchown = chownFix(e.lchown), e.chmod = chmodFix(e.chmod), e.fchmod = chmodFix(e.fchmod), e.lchmod = chmodFix(e.lchmod), e.chownSync = chownFixSync(e.chownSync), e.fchownSync = chownFixSync(e.fchownSync), e.lchownSync = chownFixSync(e.lchownSync), e.chmodSync = chmodFixSync(e.chmodSync), e.fchmodSync = chmodFixSync(e.fchmodSync), e.lchmodSync = chmodFixSync(e.lchmodSync), e.stat = statFix(e.stat), e.fstat = statFix(e.fstat), e.lstat = statFix(e.lstat), e.statSync = statFixSync(e.statSync), e.fstatSync = statFixSync(e.fstatSync), e.lstatSync = statFixSync(e.lstatSync), e.lchmod || (e.lchmod = function(e, t, n) {
			n && process.nextTick(n)
		}, e.lchmodSync = function() {});
		e.lchown || (e.lchown = function(e, t, n, i) {
			i && process.nextTick(i)
		}, e.lchownSync = function() {});
		"win32" === s && (e.rename = (t = e.rename, function(n, i, r) {
			var o = Date.now(),
				s = 0;
			t(n, i, (function CB(a) {
				if (a && ("EACCES" === a.code || "EPERM" === a.code) && Date.now() - o < 6e4) return setTimeout((function() {
					e.stat(i, (function(e, o) {
						e && "ENOENT" === e.code ? t(n, i, CB) : r(a)
					}))
				}), s), void(s < 100 && (s += 10));
				r && r(a)
			}))
		}));
		var t;

		function chmodFix(t) {
			return t ? function(n, i, r) {
				return t.call(e, n, i, (function(e) {
					chownErOk(e) && (e = null), r && r.apply(this, arguments)
				}))
			} : t
		}

		function chmodFixSync(t) {
			return t ? function(n, i) {
				try {
					return t.call(e, n, i)
				} catch (e) {
					if (!chownErOk(e)) throw e
				}
			} : t
		}

		function chownFix(t) {
			return t ? function(n, i, r, o) {
				return t.call(e, n, i, r, (function(e) {
					chownErOk(e) && (e = null), o && o.apply(this, arguments)
				}))
			} : t
		}

		function chownFixSync(t) {
			return t ? function(n, i, r) {
				try {
					return t.call(e, n, i, r)
				} catch (e) {
					if (!chownErOk(e)) throw e
				}
			} : t
		}

		function statFix(t) {
			return t ? function(n, i, r) {
				function callback(e, t) {
					t && (t.uid < 0 && (t.uid += 4294967296), t.gid < 0 && (t.gid += 4294967296)), r && r.apply(this, arguments)
				}
				return "function" == typeof i && (r = i, i = null), i ? t.call(e, n, i, callback) : t.call(e, n, callback)
			} : t
		}

		function statFixSync(t) {
			return t ? function(n, i) {
				var r = i ? t.call(e, n, i) : t.call(e, n);
				return r.uid < 0 && (r.uid += 4294967296), r.gid < 0 && (r.gid += 4294967296), r
			} : t
		}

		function chownErOk(e) {
			return !e || ("ENOSYS" === e.code || !(process.getuid && 0 === process.getuid() || "EINVAL" !== e.code && "EPERM" !== e.code))
		}
		e.read = function(t) {
			function read(n, i, r, o, s, a) {
				var c;
				if (a && "function" == typeof a) {
					var l = 0;
					c = function(u, d, h) {
						if (u && "EAGAIN" === u.code && l < 10) return l++, t.call(e, n, i, r, o, s, c);
						a.apply(this, arguments)
					}
				}
				return t.call(e, n, i, r, o, s, c)
			}
			return Object.setPrototypeOf && Object.setPrototypeOf(read, t), read
		}(e.read), e.readSync = (n = e.readSync, function(t, i, r, o, s) {
			for (var a = 0;;) try {
				return n.call(e, t, i, r, o, s)
			} catch (e) {
				if ("EAGAIN" === e.code && a < 10) {
					a++;
					continue
				}
				throw e
			}
		});
		var n
	}
}, function(e, t) {
	e.exports = require("constants")
}, function(e, t, n) {
	var i = n(23).Stream;
	e.exports = function legacy(e) {
		return {
			ReadStream: function ReadStream(t, n) {
				if (!(this instanceof ReadStream)) return new ReadStream(t, n);
				i.call(this);
				var r = this;
				this.path = t, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 65536, n = n || {};
				for (var o = Object.keys(n), s = 0, a = o.length; s < a; s++) {
					var c = o[s];
					this[c] = n[c]
				}
				this.encoding && this.setEncoding(this.encoding);
				if (void 0 !== this.start) {
					if ("number" != typeof this.start) throw TypeError("start must be a Number");
					if (void 0 === this.end) this.end = 1 / 0;
					else if ("number" != typeof this.end) throw TypeError("end must be a Number");
					if (this.start > this.end) throw new Error("start must be <= end");
					this.pos = this.start
				}
				if (null !== this.fd) return void process.nextTick((function() {
					r._read()
				}));
				e.open(this.path, this.flags, this.mode, (function(e, t) {
					if (e) return r.emit("error", e), void(r.readable = !1);
					r.fd = t, r.emit("open", t), r._read()
				}))
			},
			WriteStream: function WriteStream(t, n) {
				if (!(this instanceof WriteStream)) return new WriteStream(t, n);
				i.call(this), this.path = t, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, n = n || {};
				for (var r = Object.keys(n), o = 0, s = r.length; o < s; o++) {
					var a = r[o];
					this[a] = n[a]
				}
				if (void 0 !== this.start) {
					if ("number" != typeof this.start) throw TypeError("start must be a Number");
					if (this.start < 0) throw new Error("start must be >= zero");
					this.pos = this.start
				}
				this.busy = !1, this._queue = [], null === this.fd && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush())
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	e.exports = function clone(e) {
		if (null === e || "object" != typeof e) return e;
		if (e instanceof Object) var t = {
			__proto__: i(e)
		};
		else t = Object.create(null);
		return Object.getOwnPropertyNames(e).forEach((function(n) {
			Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
		})), t
	};
	var i = Object.getPrototypeOf || function(e) {
		return e.__proto__
	}
}, function(e, t, n) {
	"use strict";
	const i = n(6),
		r = n(0),
		o = n(12).mkdirsSync,
		s = n(78).utimesMillisSync,
		a = n(25);

	function getStats(e, t, n, o) {
		const s = (o.dereference ? i.statSync : i.lstatSync)(t);
		if (s.isDirectory()) return function onDir(e, t, n, r, o) {
			return t ? copyDir(n, r, o) : function mkDirAndCopy(e, t, n, r) {
				return i.mkdirSync(n), copyDir(t, n, r), setDestMode(n, e)
			}(e.mode, n, r, o)
		}(s, e, t, n, o);
		if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return function onFile(e, t, n, r, o) {
			return t ? function mayCopyFile(e, t, n, r) {
				if (r.overwrite) return i.unlinkSync(n), copyFile(e, t, n, r);
				if (r.errorOnExist) throw new Error(`'${n}' already exists`)
			}(e, n, r, o) : copyFile(e, n, r, o)
		}(s, e, t, n, o);
		if (s.isSymbolicLink()) return function onLink(e, t, n, o) {
			let s = i.readlinkSync(t);
			o.dereference && (s = r.resolve(process.cwd(), s));
			if (e) {
				let e;
				try {
					e = i.readlinkSync(n)
				} catch (e) {
					if ("EINVAL" === e.code || "UNKNOWN" === e.code) return i.symlinkSync(s, n);
					throw e
				}
				if (o.dereference && (e = r.resolve(process.cwd(), e)), a.isSrcSubdir(s, e)) throw new Error(`Cannot copy '${s}' to a subdirectory of itself, '${e}'.`);
				if (i.statSync(n).isDirectory() && a.isSrcSubdir(e, s)) throw new Error(`Cannot overwrite '${e}' with '${s}'.`);
				return function copyLink(e, t) {
					return i.unlinkSync(t), i.symlinkSync(e, t)
				}(s, n)
			}
			return i.symlinkSync(s, n)
		}(e, t, n, o);
		if (s.isSocket()) throw new Error("Cannot copy a socket file: " + t);
		if (s.isFIFO()) throw new Error("Cannot copy a FIFO pipe: " + t);
		throw new Error("Unknown file: " + t)
	}

	function copyFile(e, t, n, r) {
		return i.copyFileSync(t, n), r.preserveTimestamps && function handleTimestamps(e, t, n) {
			(function fileIsNotWritable(e) {
				return 0 == (128 & e)
			})(e) && function makeFileWritable(e, t) {
				return setDestMode(e, 128 | t)
			}(n, e);
			return function setDestTimestamps(e, t) {
				const n = i.statSync(e);
				return s(t, n.atime, n.mtime)
			}(t, n)
		}(e.mode, t, n), setDestMode(n, e.mode)
	}

	function setDestMode(e, t) {
		return i.chmodSync(e, t)
	}

	function copyDir(e, t, n) {
		i.readdirSync(e).forEach(i => function copyDirItem(e, t, n, i) {
			const o = r.join(t, e),
				s = r.join(n, e),
				{
					destStat: c
				} = a.checkPathsSync(o, s, "copy", i);
			return function startCopy(e, t, n, i) {
				if (!i.filter || i.filter(t, n)) return getStats(e, t, n, i)
			}(c, o, s, i)
		}(i, e, t, n))
	}
	e.exports = function copySync(e, t, n) {
		"function" == typeof n && (n = {
			filter: n
		}), (n = n || {}).clobber = !("clobber" in n) || !!n.clobber, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269");
		const {
			srcStat: s,
			destStat: c
		} = a.checkPathsSync(e, t, "copy", n);
		return a.checkParentPathsSync(e, s, t, "copy"),
			function handleFilterAndCopy(e, t, n, s) {
				if (s.filter && !s.filter(t, n)) return;
				const a = r.dirname(n);
				i.existsSync(a) || o(a);
				return getStats(e, t, n, s)
			}(c, e, t, n)
	}
}, function(e, t, n) {
	"use strict";
	const i = n(24),
		{
			checkPath: r
		} = n(127),
		getMode = e => "number" == typeof e ? e : {
			mode: 511,
			...e
		}.mode;
	e.exports.makeDir = async (e, t) => (r(e), i.mkdir(e, {
		mode: getMode(t),
		recursive: !0
	})), e.exports.makeDirSync = (e, t) => (r(e), i.mkdirSync(e, {
		mode: getMode(t),
		recursive: !0
	}))
}, function(e, t, n) {
	"use strict";
	const i = n(0);
	e.exports.checkPath = function checkPath(e) {
		if ("win32" === process.platform) {
			if (/[<>:"|?*]/.test(e.replace(i.parse(e).root, ""))) {
				const t = new Error("Path contains invalid characters: " + e);
				throw t.code = "EINVAL", t
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	const i = n(6),
		r = n(0),
		o = n(12).mkdirs,
		s = n(18).pathExists,
		a = n(78).utimesMillis,
		c = n(25);

	function checkParentDir(e, t, n, i, a) {
		const c = r.dirname(n);
		s(c, (r, s) => r ? a(r) : s ? getStats(e, t, n, i, a) : void o(c, r => r ? a(r) : getStats(e, t, n, i, a)))
	}

	function handleFilter(e, t, n, i, r, o) {
		Promise.resolve(r.filter(n, i)).then(s => s ? e(t, n, i, r, o) : o(), e => o(e))
	}

	function getStats(e, t, n, r, o) {
		(r.dereference ? i.stat : i.lstat)(t, (s, a) => s ? o(s) : a.isDirectory() ? function onDir(e, t, n, r, o, s) {
			return t ? copyDir(n, r, o, s) : function mkDirAndCopy(e, t, n, r, o) {
				i.mkdir(n, i => {
					if (i) return o(i);
					copyDir(t, n, r, t => t ? o(t) : setDestMode(n, e, o))
				})
			}(e.mode, n, r, o, s)
		}(a, e, t, n, r, o) : a.isFile() || a.isCharacterDevice() || a.isBlockDevice() ? function onFile(e, t, n, r, o, s) {
			return t ? function mayCopyFile(e, t, n, r, o) {
				if (!r.overwrite) return r.errorOnExist ? o(new Error(`'${n}' already exists`)) : o();
				i.unlink(n, i => i ? o(i) : copyFile(e, t, n, r, o))
			}(e, n, r, o, s) : copyFile(e, n, r, o, s)
		}(a, e, t, n, r, o) : a.isSymbolicLink() ? onLink(e, t, n, r, o) : a.isSocket() ? o(new Error("Cannot copy a socket file: " + t)) : a.isFIFO() ? o(new Error("Cannot copy a FIFO pipe: " + t)) : o(new Error("Unknown file: " + t)))
	}

	function copyFile(e, t, n, r, o) {
		i.copyFile(t, n, i => i ? o(i) : r.preserveTimestamps ? function handleTimestampsAndMode(e, t, n, i) {
			if (function fileIsNotWritable(e) {
					return 0 == (128 & e)
				}(e)) return function makeFileWritable(e, t, n) {
				return setDestMode(e, 128 | t, n)
			}(n, e, r => r ? i(r) : setDestTimestampsAndMode(e, t, n, i));
			return setDestTimestampsAndMode(e, t, n, i)
		}(e.mode, t, n, o) : setDestMode(n, e.mode, o))
	}

	function setDestTimestampsAndMode(e, t, n, r) {
		! function setDestTimestamps(e, t, n) {
			i.stat(e, (e, i) => e ? n(e) : a(t, i.atime, i.mtime, n))
		}(t, n, t => t ? r(t) : setDestMode(n, e, r))
	}

	function setDestMode(e, t, n) {
		return i.chmod(e, t, n)
	}

	function copyDir(e, t, n, r) {
		i.readdir(e, (i, o) => i ? r(i) : copyDirItems(o, e, t, n, r))
	}

	function copyDirItems(e, t, n, i, o) {
		const s = e.pop();
		return s ? function copyDirItem(e, t, n, i, o, s) {
			const a = r.join(n, t),
				l = r.join(i, t);
			c.checkPaths(a, l, "copy", o, (t, r) => {
				if (t) return s(t);
				const {
					destStat: c
				} = r;
				! function startCopy(e, t, n, i, r) {
					return i.filter ? handleFilter(getStats, e, t, n, i, r) : getStats(e, t, n, i, r)
				}(c, a, l, o, t => t ? s(t) : copyDirItems(e, n, i, o, s))
			})
		}(e, s, t, n, i, o) : o()
	}

	function onLink(e, t, n, o, s) {
		i.readlink(t, (t, a) => t ? s(t) : (o.dereference && (a = r.resolve(process.cwd(), a)), e ? void i.readlink(n, (t, l) => t ? "EINVAL" === t.code || "UNKNOWN" === t.code ? i.symlink(a, n, s) : s(t) : (o.dereference && (l = r.resolve(process.cwd(), l)), c.isSrcSubdir(a, l) ? s(new Error(`Cannot copy '${a}' to a subdirectory of itself, '${l}'.`)) : e.isDirectory() && c.isSrcSubdir(l, a) ? s(new Error(`Cannot overwrite '${l}' with '${a}'.`)) : function copyLink(e, t, n) {
			i.unlink(t, r => r ? n(r) : i.symlink(e, t, n))
		}(a, n, s))) : i.symlink(a, n, s)))
	}
	e.exports = function copy(e, t, n, i) {
		"function" != typeof n || i ? "function" == typeof n && (n = {
			filter: n
		}) : (i = n, n = {}), i = i || function() {}, (n = n || {}).clobber = !("clobber" in n) || !!n.clobber, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269"), c.checkPaths(e, t, "copy", n, (r, o) => {
			if (r) return i(r);
			const {
				srcStat: s,
				destStat: a
			} = o;
			c.checkParentPaths(e, s, t, "copy", r => r ? i(r) : n.filter ? handleFilter(checkParentDir, a, e, t, n, i) : checkParentDir(a, e, t, n, i))
		})
	}
}, function(e, t, n) {
	"use strict";
	const i = n(8).fromPromise,
		r = n(24),
		o = n(0),
		s = n(12),
		a = n(35),
		c = i((async function emptyDir(e) {
			let t;
			try {
				t = await r.readdir(e)
			} catch {
				return s.mkdirs(e)
			}
			return Promise.all(t.map(t => a.remove(o.join(e, t))))
		}));

	function emptyDirSync(e) {
		let t;
		try {
			t = r.readdirSync(e)
		} catch {
			return s.mkdirsSync(e)
		}
		t.forEach(t => {
			t = o.join(e, t), a.removeSync(t)
		})
	}
	e.exports = {
		emptyDirSync: emptyDirSync,
		emptydirSync: emptyDirSync,
		emptyDir: c,
		emptydir: c
	}
}, function(e, t, n) {
	"use strict";
	const i = n(6),
		r = n(0),
		o = n(76),
		s = "win32" === process.platform;

	function defaults(e) {
		["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach(t => {
			e[t] = e[t] || i[t], e[t += "Sync"] = e[t] || i[t]
		}), e.maxBusyTries = e.maxBusyTries || 3
	}

	function rimraf(e, t, n) {
		let i = 0;
		"function" == typeof t && (n = t, t = {}), o(e, "rimraf: missing path"), o.strictEqual(typeof e, "string", "rimraf: path should be a string"), o.strictEqual(typeof n, "function", "rimraf: callback function required"), o(t, "rimraf: invalid options argument provided"), o.strictEqual(typeof t, "object", "rimraf: options should be object"), defaults(t), rimraf_(e, t, (function CB(r) {
			if (r) {
				if (("EBUSY" === r.code || "ENOTEMPTY" === r.code || "EPERM" === r.code) && i < t.maxBusyTries) {
					i++;
					return setTimeout(() => rimraf_(e, t, CB), 100 * i)
				}
				"ENOENT" === r.code && (r = null)
			}
			n(r)
		}))
	}

	function rimraf_(e, t, n) {
		o(e), o(t), o("function" == typeof n), t.lstat(e, (i, r) => i && "ENOENT" === i.code ? n(null) : i && "EPERM" === i.code && s ? fixWinEPERM(e, t, i, n) : r && r.isDirectory() ? rmdir(e, t, i, n) : void t.unlink(e, i => {
			if (i) {
				if ("ENOENT" === i.code) return n(null);
				if ("EPERM" === i.code) return s ? fixWinEPERM(e, t, i, n) : rmdir(e, t, i, n);
				if ("EISDIR" === i.code) return rmdir(e, t, i, n)
			}
			return n(i)
		}))
	}

	function fixWinEPERM(e, t, n, i) {
		o(e), o(t), o("function" == typeof i), t.chmod(e, 438, r => {
			r ? i("ENOENT" === r.code ? null : n) : t.stat(e, (r, o) => {
				r ? i("ENOENT" === r.code ? null : n) : o.isDirectory() ? rmdir(e, t, n, i) : t.unlink(e, i)
			})
		})
	}

	function fixWinEPERMSync(e, t, n) {
		let i;
		o(e), o(t);
		try {
			t.chmodSync(e, 438)
		} catch (e) {
			if ("ENOENT" === e.code) return;
			throw n
		}
		try {
			i = t.statSync(e)
		} catch (e) {
			if ("ENOENT" === e.code) return;
			throw n
		}
		i.isDirectory() ? rmdirSync(e, t, n) : t.unlinkSync(e)
	}

	function rmdir(e, t, n, i) {
		o(e), o(t), o("function" == typeof i), t.rmdir(e, s => {
			!s || "ENOTEMPTY" !== s.code && "EEXIST" !== s.code && "EPERM" !== s.code ? s && "ENOTDIR" === s.code ? i(n) : i(s) : function rmkids(e, t, n) {
				o(e), o(t), o("function" == typeof n), t.readdir(e, (i, o) => {
					if (i) return n(i);
					let s, a = o.length;
					if (0 === a) return t.rmdir(e, n);
					o.forEach(i => {
						rimraf(r.join(e, i), t, i => {
							if (!s) return i ? n(s = i) : void(0 == --a && t.rmdir(e, n))
						})
					})
				})
			}(e, t, i)
		})
	}

	function rimrafSync(e, t) {
		let n;
		defaults(t = t || {}), o(e, "rimraf: missing path"), o.strictEqual(typeof e, "string", "rimraf: path should be a string"), o(t, "rimraf: missing options"), o.strictEqual(typeof t, "object", "rimraf: options should be object");
		try {
			n = t.lstatSync(e)
		} catch (n) {
			if ("ENOENT" === n.code) return;
			"EPERM" === n.code && s && fixWinEPERMSync(e, t, n)
		}
		try {
			n && n.isDirectory() ? rmdirSync(e, t, null) : t.unlinkSync(e)
		} catch (n) {
			if ("ENOENT" === n.code) return;
			if ("EPERM" === n.code) return s ? fixWinEPERMSync(e, t, n) : rmdirSync(e, t, n);
			if ("EISDIR" !== n.code) throw n;
			rmdirSync(e, t, n)
		}
	}

	function rmdirSync(e, t, n) {
		o(e), o(t);
		try {
			t.rmdirSync(e)
		} catch (i) {
			if ("ENOTDIR" === i.code) throw n;
			if ("ENOTEMPTY" === i.code || "EEXIST" === i.code || "EPERM" === i.code) ! function rmkidsSync(e, t) {
				if (o(e), o(t), t.readdirSync(e).forEach(n => rimrafSync(r.join(e, n), t)), !s) {
					return t.rmdirSync(e, t)
				} {
					const n = Date.now();
					do {
						try {
							return t.rmdirSync(e, t)
						} catch {}
					} while (Date.now() - n < 500)
				}
			}(e, t);
			else if ("ENOENT" !== i.code) throw i
		}
	}
	e.exports = rimraf, rimraf.sync = rimrafSync
}, function(e, t, n) {
	"use strict";
	const i = n(132),
		r = n(133),
		o = n(134);
	e.exports = {
		createFile: i.createFile,
		createFileSync: i.createFileSync,
		ensureFile: i.createFile,
		ensureFileSync: i.createFileSync,
		createLink: r.createLink,
		createLinkSync: r.createLinkSync,
		ensureLink: r.createLink,
		ensureLinkSync: r.createLinkSync,
		createSymlink: o.createSymlink,
		createSymlinkSync: o.createSymlinkSync,
		ensureSymlink: o.createSymlink,
		ensureSymlinkSync: o.createSymlinkSync
	}
}, function(e, t, n) {
	"use strict";
	const i = n(8).fromCallback,
		r = n(0),
		o = n(6),
		s = n(12);
	e.exports = {
		createFile: i((function createFile(e, t) {
			function makeFile() {
				o.writeFile(e, "", e => {
					if (e) return t(e);
					t()
				})
			}
			o.stat(e, (n, i) => {
				if (!n && i.isFile()) return t();
				const a = r.dirname(e);
				o.stat(a, (e, n) => {
					if (e) return "ENOENT" === e.code ? s.mkdirs(a, e => {
						if (e) return t(e);
						makeFile()
					}) : t(e);
					n.isDirectory() ? makeFile() : o.readdir(a, e => {
						if (e) return t(e)
					})
				})
			})
		})),
		createFileSync: function createFileSync(e) {
			let t;
			try {
				t = o.statSync(e)
			} catch {}
			if (t && t.isFile()) return;
			const n = r.dirname(e);
			try {
				o.statSync(n).isDirectory() || o.readdirSync(n)
			} catch (e) {
				if (!e || "ENOENT" !== e.code) throw e;
				s.mkdirsSync(n)
			}
			o.writeFileSync(e, "")
		}
	}
}, function(e, t, n) {
	"use strict";
	const i = n(8).fromCallback,
		r = n(0),
		o = n(6),
		s = n(12),
		a = n(18).pathExists,
		{
			areIdentical: c
		} = n(25);
	e.exports = {
		createLink: i((function createLink(e, t, n) {
			function makeLink(e, t) {
				o.link(e, t, e => {
					if (e) return n(e);
					n(null)
				})
			}
			o.lstat(t, (i, l) => {
				o.lstat(e, (i, o) => {
					if (i) return i.message = i.message.replace("lstat", "ensureLink"), n(i);
					if (l && c(o, l)) return n(null);
					const u = r.dirname(t);
					a(u, (i, r) => i ? n(i) : r ? makeLink(e, t) : void s.mkdirs(u, i => {
						if (i) return n(i);
						makeLink(e, t)
					}))
				})
			})
		})),
		createLinkSync: function createLinkSync(e, t) {
			let n;
			try {
				n = o.lstatSync(t)
			} catch {}
			try {
				const t = o.lstatSync(e);
				if (n && c(t, n)) return
			} catch (e) {
				throw e.message = e.message.replace("lstat", "ensureLink"), e
			}
			const i = r.dirname(t);
			return o.existsSync(i) || s.mkdirsSync(i), o.linkSync(e, t)
		}
	}
}, function(e, t, n) {
	"use strict";
	const i = n(8).fromCallback,
		r = n(0),
		o = n(24),
		s = n(12),
		a = s.mkdirs,
		c = s.mkdirsSync,
		l = n(135),
		u = l.symlinkPaths,
		d = l.symlinkPathsSync,
		h = n(136),
		p = h.symlinkType,
		f = h.symlinkTypeSync,
		g = n(18).pathExists,
		{
			areIdentical: m
		} = n(25);

	function _createSymlink(e, t, n, i) {
		u(e, t, (s, c) => {
			if (s) return i(s);
			e = c.toDst, p(c.toCwd, n, (n, s) => {
				if (n) return i(n);
				const c = r.dirname(t);
				g(c, (n, r) => n ? i(n) : r ? o.symlink(e, t, s, i) : void a(c, n => {
					if (n) return i(n);
					o.symlink(e, t, s, i)
				}))
			})
		})
	}
	e.exports = {
		createSymlink: i((function createSymlink(e, t, n, i) {
			i = "function" == typeof n ? n : i, n = "function" != typeof n && n, o.lstat(t, (r, s) => {
				!r && s.isSymbolicLink() ? Promise.all([o.stat(e), o.stat(t)]).then(([r, o]) => {
					if (m(r, o)) return i(null);
					_createSymlink(e, t, n, i)
				}) : _createSymlink(e, t, n, i)
			})
		})),
		createSymlinkSync: function createSymlinkSync(e, t, n) {
			let i;
			try {
				i = o.lstatSync(t)
			} catch {}
			if (i && i.isSymbolicLink()) {
				const n = o.statSync(e),
					i = o.statSync(t);
				if (m(n, i)) return
			}
			const s = d(e, t);
			e = s.toDst, n = f(s.toCwd, n);
			const a = r.dirname(t);
			return o.existsSync(a) || c(a), o.symlinkSync(e, t, n)
		}
	}
}, function(e, t, n) {
	"use strict";
	const i = n(0),
		r = n(6),
		o = n(18).pathExists;
	e.exports = {
		symlinkPaths: function symlinkPaths(e, t, n) {
			if (i.isAbsolute(e)) return r.lstat(e, t => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), n(t)) : n(null, {
				toCwd: e,
				toDst: e
			}));
			{
				const s = i.dirname(t),
					a = i.join(s, e);
				return o(a, (t, o) => t ? n(t) : o ? n(null, {
					toCwd: a,
					toDst: e
				}) : r.lstat(e, t => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), n(t)) : n(null, {
					toCwd: e,
					toDst: i.relative(s, e)
				})))
			}
		},
		symlinkPathsSync: function symlinkPathsSync(e, t) {
			let n;
			if (i.isAbsolute(e)) {
				if (n = r.existsSync(e), !n) throw new Error("absolute srcpath does not exist");
				return {
					toCwd: e,
					toDst: e
				}
			} {
				const o = i.dirname(t),
					s = i.join(o, e);
				if (n = r.existsSync(s), n) return {
					toCwd: s,
					toDst: e
				};
				if (n = r.existsSync(e), !n) throw new Error("relative srcpath does not exist");
				return {
					toCwd: e,
					toDst: i.relative(o, e)
				}
			}
		}
	}
}, function(e, t, n) {
	"use strict";
	const i = n(6);
	e.exports = {
		symlinkType: function symlinkType(e, t, n) {
			if (n = "function" == typeof t ? t : n, t = "function" != typeof t && t) return n(null, t);
			i.lstat(e, (e, i) => {
				if (e) return n(null, "file");
				t = i && i.isDirectory() ? "dir" : "file", n(null, t)
			})
		},
		symlinkTypeSync: function symlinkTypeSync(e, t) {
			let n;
			if (t) return t;
			try {
				n = i.lstatSync(e)
			} catch {
				return "file"
			}
			return n && n.isDirectory() ? "dir" : "file"
		}
	}
}, function(e, t, n) {
	"use strict";
	const i = n(8).fromPromise,
		r = n(138);
	r.outputJson = i(n(140)), r.outputJsonSync = n(141), r.outputJSON = r.outputJson, r.outputJSONSync = r.outputJsonSync, r.writeJSON = r.writeJson, r.writeJSONSync = r.writeJsonSync, r.readJSON = r.readJson, r.readJSONSync = r.readJsonSync, e.exports = r
}, function(e, t, n) {
	"use strict";
	const i = n(139);
	e.exports = {
		readJson: i.readFile,
		readJsonSync: i.readFileSync,
		writeJson: i.writeFile,
		writeJsonSync: i.writeFileSync
	}
}, function(e, t, n) {
	let i;
	try {
		i = n(6)
	} catch (e) {
		i = n(5)
	}
	const r = n(8),
		{
			stringify: o,
			stripBom: s
		} = n(50);
	const a = {
		readFile: r.fromPromise((async function _readFile(e, t = {}) {
			"string" == typeof t && (t = {
				encoding: t
			});
			const n = t.fs || i,
				o = !("throws" in t) || t.throws;
			let a, c = await r.fromCallback(n.readFile)(e, t);
			c = s(c);
			try {
				a = JSON.parse(c, t ? t.reviver : null)
			} catch (t) {
				if (o) throw t.message = `${e}: ${t.message}`, t;
				return null
			}
			return a
		})),
		readFileSync: function readFileSync(e, t = {}) {
			"string" == typeof t && (t = {
				encoding: t
			});
			const n = t.fs || i,
				r = !("throws" in t) || t.throws;
			try {
				let i = n.readFileSync(e, t);
				return i = s(i), JSON.parse(i, t.reviver)
			} catch (t) {
				if (r) throw t.message = `${e}: ${t.message}`, t;
				return null
			}
		},
		writeFile: r.fromPromise((async function _writeFile(e, t, n = {}) {
			const s = n.fs || i,
				a = o(t, n);
			await r.fromCallback(s.writeFile)(e, a, n)
		})),
		writeFileSync: function writeFileSync(e, t, n = {}) {
			const r = n.fs || i,
				s = o(t, n);
			return r.writeFileSync(e, s, n)
		}
	};
	e.exports = a
}, function(e, t, n) {
	"use strict";
	const {
		stringify: i
	} = n(50), {
		outputFile: r
	} = n(51);
	e.exports = async function outputJson(e, t, n = {}) {
		const o = i(t, n);
		await r(e, o, n)
	}
}, function(e, t, n) {
	"use strict";
	const {
		stringify: i
	} = n(50), {
		outputFileSync: r
	} = n(51);
	e.exports = function outputJsonSync(e, t, n) {
		const o = i(t, n);
		r(e, o, n)
	}
}, function(e, t, n) {
	"use strict";
	e.exports = {
		moveSync: n(143)
	}
}, function(e, t, n) {
	"use strict";
	const i = n(6),
		r = n(0),
		o = n(77).copySync,
		s = n(35).removeSync,
		a = n(12).mkdirpSync,
		c = n(25);

	function rename(e, t, n) {
		try {
			i.renameSync(e, t)
		} catch (i) {
			if ("EXDEV" !== i.code) throw i;
			return function moveAcrossDevice(e, t, n) {
				return o(e, t, {
					overwrite: n,
					errorOnExist: true
				}), s(e)
			}(e, t, n)
		}
	}
	e.exports = function moveSync(e, t, n) {
		const o = (n = n || {}).overwrite || n.clobber || !1,
			{
				srcStat: l,
				isChangingCase: u = !1
			} = c.checkPathsSync(e, t, "move", n);
		return c.checkParentPathsSync(e, l, t, "move"),
			function isParentRoot(e) {
				const t = r.dirname(e);
				return r.parse(t).root === t
			}(t) || a(r.dirname(t)),
			function doRename(e, t, n, r) {
				if (r) return rename(e, t, n);
				if (n) return s(t), rename(e, t, n);
				if (i.existsSync(t)) throw new Error("dest already exists.");
				return rename(e, t, n)
			}(e, t, o, u)
	}
}, function(e, t, n) {
	"use strict";
	const i = n(8).fromCallback;
	e.exports = {
		move: i(n(145))
	}
}, function(e, t, n) {
	"use strict";
	const i = n(6),
		r = n(0),
		o = n(79).copy,
		s = n(35).remove,
		a = n(12).mkdirp,
		c = n(18).pathExists,
		l = n(25);

	function doRename(e, t, n, i, r) {
		return i ? rename(e, t, n, r) : n ? s(t, i => i ? r(i) : rename(e, t, n, r)) : void c(t, (i, o) => i ? r(i) : o ? r(new Error("dest already exists.")) : rename(e, t, n, r))
	}

	function rename(e, t, n, r) {
		i.rename(e, t, i => i ? "EXDEV" !== i.code ? r(i) : function moveAcrossDevice(e, t, n, i) {
			o(e, t, {
				overwrite: n,
				errorOnExist: !0
			}, t => t ? i(t) : s(e, i))
		}(e, t, n, r) : r())
	}
	e.exports = function move(e, t, n, i) {
		"function" == typeof n && (i = n, n = {});
		const o = n.overwrite || n.clobber || !1;
		l.checkPaths(e, t, "move", n, (n, s) => {
			if (n) return i(n);
			const {
				srcStat: c,
				isChangingCase: u = !1
			} = s;
			l.checkParentPaths(e, c, t, "move", n => n ? i(n) : function isParentRoot(e) {
				const t = r.dirname(e);
				return r.parse(t).root === t
			}(t) ? doRename(e, t, o, u, i) : void a(r.dirname(t), n => n ? i(n) : doRename(e, t, o, u, i)))
		})
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Lazy = void 0;
	t.Lazy = class Lazy {
		constructor(e) {
			this._value = null, this.creator = e
		}
		get hasValue() {
			return null == this.creator
		}
		get value() {
			if (null == this.creator) return this._value;
			const e = this.creator();
			return this.value = e, e
		}
		set value(e) {
			this._value = e, this.creator = null
		}
	}
}, function(e, t, n) {
	const i = n(27);
	e.exports = (e, t) => {
		const n = i(e, t);
		return n ? n.version : null
	}
}, function(e, t, n) {
	const i = n(27);
	e.exports = (e, t) => {
		const n = i(e.trim().replace(/^[=v]+/, ""), t);
		return n ? n.version : null
	}
}, function(e, t, n) {
	const i = n(4);
	e.exports = (e, t, n, r) => {
		"string" == typeof n && (r = n, n = void 0);
		try {
			return new i(e, n).inc(t, r).version
		} catch (e) {
			return null
		}
	}
}, function(e, t, n) {
	const i = n(27),
		r = n(54);
	e.exports = (e, t) => {
		if (r(e, t)) return null;
		{
			const n = i(e),
				r = i(t),
				o = n.prerelease.length || r.prerelease.length,
				s = o ? "pre" : "",
				a = o ? "prerelease" : "";
			for (const e in n)
				if (("major" === e || "minor" === e || "patch" === e) && n[e] !== r[e]) return s + e;
			return a
		}
	}
}, function(e, t, n) {
	const i = n(4);
	e.exports = (e, t) => new i(e, t).major
}, function(e, t, n) {
	const i = n(4);
	e.exports = (e, t) => new i(e, t).minor
}, function(e, t, n) {
	const i = n(4);
	e.exports = (e, t) => new i(e, t).patch
}, function(e, t, n) {
	const i = n(27);
	e.exports = (e, t) => {
		const n = i(e, t);
		return n && n.prerelease.length ? n.prerelease : null
	}
}, function(e, t, n) {
	const i = n(9);
	e.exports = (e, t, n) => i(t, e, n)
}, function(e, t, n) {
	const i = n(9);
	e.exports = (e, t) => i(e, t, !0)
}, function(e, t, n) {
	const i = n(55);
	e.exports = (e, t) => e.sort((e, n) => i(e, n, t))
}, function(e, t, n) {
	const i = n(55);
	e.exports = (e, t) => e.sort((e, n) => i(n, e, t))
}, function(e, t, n) {
	const i = n(4),
		r = n(27),
		{
			re: o,
			t: s
		} = n(26);
	e.exports = (e, t) => {
		if (e instanceof i) return e;
		if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
		let n = null;
		if ((t = t || {}).rtl) {
			let t;
			for (;
				(t = o[s.COERCERTL].exec(e)) && (!n || n.index + n[0].length !== e.length);) n && t.index + t[0].length === n.index + n[0].length || (n = t), o[s.COERCERTL].lastIndex = t.index + t[1].length + t[2].length;
			o[s.COERCERTL].lastIndex = -1
		} else n = e.match(o[s.COERCE]);
		return null === n ? null : r(`${n[2]}.${n[3]||"0"}.${n[4]||"0"}`, t)
	}
}, function(e, t, n) {
	"use strict";
	const i = n(161),
		r = Symbol("max"),
		o = Symbol("length"),
		s = Symbol("lengthCalculator"),
		a = Symbol("allowStale"),
		c = Symbol("maxAge"),
		l = Symbol("dispose"),
		u = Symbol("noDisposeOnSet"),
		d = Symbol("lruList"),
		h = Symbol("cache"),
		p = Symbol("updateAgeOnGet"),
		naiveLength = () => 1;
	const get = (e, t, n) => {
			const i = e[h].get(t);
			if (i) {
				const t = i.value;
				if (isStale(e, t)) {
					if (del(e, i), !e[a]) return
				} else n && (e[p] && (i.value.now = Date.now()), e[d].unshiftNode(i));
				return t.value
			}
		},
		isStale = (e, t) => {
			if (!t || !t.maxAge && !e[c]) return !1;
			const n = Date.now() - t.now;
			return t.maxAge ? n > t.maxAge : e[c] && n > e[c]
		},
		trim = e => {
			if (e[o] > e[r])
				for (let t = e[d].tail; e[o] > e[r] && null !== t;) {
					const n = t.prev;
					del(e, t), t = n
				}
		},
		del = (e, t) => {
			if (t) {
				const n = t.value;
				e[l] && e[l](n.key, n.value), e[o] -= n.length, e[h].delete(n.key), e[d].removeNode(t)
			}
		};
	class Entry {
		constructor(e, t, n, i, r) {
			this.key = e, this.value = t, this.length = n, this.now = i, this.maxAge = r || 0
		}
	}
	const forEachStep = (e, t, n, i) => {
		let r = n.value;
		isStale(e, r) && (del(e, n), e[a] || (r = void 0)), r && t.call(i, r.value, r.key, e)
	};
	e.exports = class LRUCache {
		constructor(e) {
			if ("number" == typeof e && (e = {
					max: e
				}), e || (e = {}), e.max && ("number" != typeof e.max || e.max < 0)) throw new TypeError("max must be a non-negative number");
			this[r] = e.max || 1 / 0;
			const t = e.length || naiveLength;
			if (this[s] = "function" != typeof t ? naiveLength : t, this[a] = e.stale || !1, e.maxAge && "number" != typeof e.maxAge) throw new TypeError("maxAge must be a number");
			this[c] = e.maxAge || 0, this[l] = e.dispose, this[u] = e.noDisposeOnSet || !1, this[p] = e.updateAgeOnGet || !1, this.reset()
		}
		set max(e) {
			if ("number" != typeof e || e < 0) throw new TypeError("max must be a non-negative number");
			this[r] = e || 1 / 0, trim(this)
		}
		get max() {
			return this[r]
		}
		set allowStale(e) {
			this[a] = !!e
		}
		get allowStale() {
			return this[a]
		}
		set maxAge(e) {
			if ("number" != typeof e) throw new TypeError("maxAge must be a non-negative number");
			this[c] = e, trim(this)
		}
		get maxAge() {
			return this[c]
		}
		set lengthCalculator(e) {
			"function" != typeof e && (e = naiveLength), e !== this[s] && (this[s] = e, this[o] = 0, this[d].forEach(e => {
				e.length = this[s](e.value, e.key), this[o] += e.length
			})), trim(this)
		}
		get lengthCalculator() {
			return this[s]
		}
		get length() {
			return this[o]
		}
		get itemCount() {
			return this[d].length
		}
		rforEach(e, t) {
			t = t || this;
			for (let n = this[d].tail; null !== n;) {
				const i = n.prev;
				forEachStep(this, e, n, t), n = i
			}
		}
		forEach(e, t) {
			t = t || this;
			for (let n = this[d].head; null !== n;) {
				const i = n.next;
				forEachStep(this, e, n, t), n = i
			}
		}
		keys() {
			return this[d].toArray().map(e => e.key)
		}
		values() {
			return this[d].toArray().map(e => e.value)
		}
		reset() {
			this[l] && this[d] && this[d].length && this[d].forEach(e => this[l](e.key, e.value)), this[h] = new Map, this[d] = new i, this[o] = 0
		}
		dump() {
			return this[d].map(e => !isStale(this, e) && {
				k: e.key,
				v: e.value,
				e: e.now + (e.maxAge || 0)
			}).toArray().filter(e => e)
		}
		dumpLru() {
			return this[d]
		}
		set(e, t, n) {
			if ((n = n || this[c]) && "number" != typeof n) throw new TypeError("maxAge must be a number");
			const i = n ? Date.now() : 0,
				a = this[s](t, e);
			if (this[h].has(e)) {
				if (a > this[r]) return del(this, this[h].get(e)), !1;
				const s = this[h].get(e).value;
				return this[l] && (this[u] || this[l](e, s.value)), s.now = i, s.maxAge = n, s.value = t, this[o] += a - s.length, s.length = a, this.get(e), trim(this), !0
			}
			const p = new Entry(e, t, a, i, n);
			return p.length > this[r] ? (this[l] && this[l](e, t), !1) : (this[o] += p.length, this[d].unshift(p), this[h].set(e, this[d].head), trim(this), !0)
		}
		has(e) {
			if (!this[h].has(e)) return !1;
			const t = this[h].get(e).value;
			return !isStale(this, t)
		}
		get(e) {
			return get(this, e, !0)
		}
		peek(e) {
			return get(this, e, !1)
		}
		pop() {
			const e = this[d].tail;
			return e ? (del(this, e), e.value) : null
		}
		del(e) {
			del(this, this[h].get(e))
		}
		load(e) {
			this.reset();
			const t = Date.now();
			for (let n = e.length - 1; n >= 0; n--) {
				const i = e[n],
					r = i.e || 0;
				if (0 === r) this.set(i.k, i.v);
				else {
					const e = r - t;
					e > 0 && this.set(i.k, i.v, e)
				}
			}
		}
		prune() {
			this[h].forEach((e, t) => get(this, t, !1))
		}
	}
}, function(e, t, n) {
	"use strict";

	function Yallist(e) {
		var t = this;
		if (t instanceof Yallist || (t = new Yallist), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach((function(e) {
			t.push(e)
		}));
		else if (arguments.length > 0)
			for (var n = 0, i = arguments.length; n < i; n++) t.push(arguments[n]);
		return t
	}

	function insert(e, t, n) {
		var i = t === e.head ? new Node(n, null, t, e) : new Node(n, t, t.next, e);
		return null === i.next && (e.tail = i), null === i.prev && (e.head = i), e.length++, i
	}

	function push(e, t) {
		e.tail = new Node(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++
	}

	function unshift(e, t) {
		e.head = new Node(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++
	}

	function Node(e, t, n, i) {
		if (!(this instanceof Node)) return new Node(e, t, n, i);
		this.list = i, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, n ? (n.prev = this, this.next = n) : this.next = null
	}
	e.exports = Yallist, Yallist.Node = Node, Yallist.create = Yallist, Yallist.prototype.removeNode = function(e) {
		if (e.list !== this) throw new Error("removing node which does not belong to this list");
		var t = e.next,
			n = e.prev;
		return t && (t.prev = n), n && (n.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = n), e.list.length--, e.next = null, e.prev = null, e.list = null, t
	}, Yallist.prototype.unshiftNode = function(e) {
		if (e !== this.head) {
			e.list && e.list.removeNode(e);
			var t = this.head;
			e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
		}
	}, Yallist.prototype.pushNode = function(e) {
		if (e !== this.tail) {
			e.list && e.list.removeNode(e);
			var t = this.tail;
			e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
		}
	}, Yallist.prototype.push = function() {
		for (var e = 0, t = arguments.length; e < t; e++) push(this, arguments[e]);
		return this.length
	}, Yallist.prototype.unshift = function() {
		for (var e = 0, t = arguments.length; e < t; e++) unshift(this, arguments[e]);
		return this.length
	}, Yallist.prototype.pop = function() {
		if (this.tail) {
			var e = this.tail.value;
			return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
		}
	}, Yallist.prototype.shift = function() {
		if (this.head) {
			var e = this.head.value;
			return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
		}
	}, Yallist.prototype.forEach = function(e, t) {
		t = t || this;
		for (var n = this.head, i = 0; null !== n; i++) e.call(t, n.value, i, this), n = n.next
	}, Yallist.prototype.forEachReverse = function(e, t) {
		t = t || this;
		for (var n = this.tail, i = this.length - 1; null !== n; i--) e.call(t, n.value, i, this), n = n.prev
	}, Yallist.prototype.get = function(e) {
		for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next;
		if (t === e && null !== n) return n.value
	}, Yallist.prototype.getReverse = function(e) {
		for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev;
		if (t === e && null !== n) return n.value
	}, Yallist.prototype.map = function(e, t) {
		t = t || this;
		for (var n = new Yallist, i = this.head; null !== i;) n.push(e.call(t, i.value, this)), i = i.next;
		return n
	}, Yallist.prototype.mapReverse = function(e, t) {
		t = t || this;
		for (var n = new Yallist, i = this.tail; null !== i;) n.push(e.call(t, i.value, this)), i = i.prev;
		return n
	}, Yallist.prototype.reduce = function(e, t) {
		var n, i = this.head;
		if (arguments.length > 1) n = t;
		else {
			if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
			i = this.head.next, n = this.head.value
		}
		for (var r = 0; null !== i; r++) n = e(n, i.value, r), i = i.next;
		return n
	}, Yallist.prototype.reduceReverse = function(e, t) {
		var n, i = this.tail;
		if (arguments.length > 1) n = t;
		else {
			if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
			i = this.tail.prev, n = this.tail.value
		}
		for (var r = this.length - 1; null !== i; r--) n = e(n, i.value, r), i = i.prev;
		return n
	}, Yallist.prototype.toArray = function() {
		for (var e = new Array(this.length), t = 0, n = this.head; null !== n; t++) e[t] = n.value, n = n.next;
		return e
	}, Yallist.prototype.toArrayReverse = function() {
		for (var e = new Array(this.length), t = 0, n = this.tail; null !== n; t++) e[t] = n.value, n = n.prev;
		return e
	}, Yallist.prototype.slice = function(e, t) {
		(t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
		var n = new Yallist;
		if (t < e || t < 0) return n;
		e < 0 && (e = 0), t > this.length && (t = this.length);
		for (var i = 0, r = this.head; null !== r && i < e; i++) r = r.next;
		for (; null !== r && i < t; i++, r = r.next) n.push(r.value);
		return n
	}, Yallist.prototype.sliceReverse = function(e, t) {
		(t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
		var n = new Yallist;
		if (t < e || t < 0) return n;
		e < 0 && (e = 0), t > this.length && (t = this.length);
		for (var i = this.length, r = this.tail; null !== r && i > t; i--) r = r.prev;
		for (; null !== r && i > e; i--, r = r.prev) n.push(r.value);
		return n
	}, Yallist.prototype.splice = function(e, t, ...n) {
		e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
		for (var i = 0, r = this.head; null !== r && i < e; i++) r = r.next;
		var o = [];
		for (i = 0; r && i < t; i++) o.push(r.value), r = this.removeNode(r);
		null === r && (r = this.tail), r !== this.head && r !== this.tail && (r = r.prev);
		for (i = 0; i < n.length; i++) r = insert(this, r, n[i]);
		return o
	}, Yallist.prototype.reverse = function() {
		for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
			var i = n.prev;
			n.prev = n.next, n.next = i
		}
		return this.head = t, this.tail = e, this
	};
	try {
		n(162)(Yallist)
	} catch (e) {}
}, function(e, t, n) {
	"use strict";
	e.exports = function(e) {
		e.prototype[Symbol.iterator] = function*() {
			for (let e = this.head; e; e = e.next) yield e.value
		}
	}
}, function(e, t, n) {
	const i = n(10);
	e.exports = (e, t) => new i(e, t).set.map(e => e.map(e => e.value).join(" ").trim().split(" "))
}, function(e, t, n) {
	const i = n(4),
		r = n(10);
	e.exports = (e, t, n) => {
		let o = null,
			s = null,
			a = null;
		try {
			a = new r(t, n)
		} catch (e) {
			return null
		}
		return e.forEach(e => {
			a.test(e) && (o && -1 !== s.compare(e) || (o = e, s = new i(o, n)))
		}), o
	}
}, function(e, t, n) {
	const i = n(4),
		r = n(10);
	e.exports = (e, t, n) => {
		let o = null,
			s = null,
			a = null;
		try {
			a = new r(t, n)
		} catch (e) {
			return null
		}
		return e.forEach(e => {
			a.test(e) && (o && 1 !== s.compare(e) || (o = e, s = new i(o, n)))
		}), o
	}
}, function(e, t, n) {
	const i = n(4),
		r = n(10),
		o = n(39);
	e.exports = (e, t) => {
		e = new r(e, t);
		let n = new i("0.0.0");
		if (e.test(n)) return n;
		if (n = new i("0.0.0-0"), e.test(n)) return n;
		n = null;
		for (let t = 0; t < e.set.length; ++t) {
			const r = e.set[t];
			let s = null;
			r.forEach(e => {
				const t = new i(e.semver.version);
				switch (e.operator) {
					case ">":
						0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
					case "":
					case ">=":
						s && !o(t, s) || (s = t);
						break;
					case "<":
					case "<=":
						break;
					default:
						throw new Error("Unexpected operation: " + e.operator)
				}
			}), !s || n && !o(n, s) || (n = s)
		}
		return n && e.test(n) ? n : null
	}
}, function(e, t, n) {
	const i = n(10);
	e.exports = (e, t) => {
		try {
			return new i(e, t).range || "*"
		} catch (e) {
			return null
		}
	}
}, function(e, t, n) {
	const i = n(59);
	e.exports = (e, t, n) => i(e, t, ">", n)
}, function(e, t, n) {
	const i = n(59);
	e.exports = (e, t, n) => i(e, t, "<", n)
}, function(e, t, n) {
	const i = n(10);
	e.exports = (e, t, n) => (e = new i(e, n), t = new i(t, n), e.intersects(t))
}, function(e, t, n) {
	const i = n(41),
		r = n(9);
	e.exports = (e, t, n) => {
		const o = [];
		let s = null,
			a = null;
		const c = e.sort((e, t) => r(e, t, n));
		for (const e of c) {
			i(e, t, n) ? (a = e, s || (s = e)) : (a && o.push([s, a]), a = null, s = null)
		}
		s && o.push([s, null]);
		const l = [];
		for (const [e, t] of o) e === t ? l.push(e) : t || e !== c[0] ? t ? e === c[0] ? l.push("<=" + t) : l.push(`${e} - ${t}`) : l.push(">=" + e) : l.push("*");
		const u = l.join(" || "),
			d = "string" == typeof t.raw ? t.raw : String(t);
		return u.length < d.length ? u : t
	}
}, function(e, t, n) {
	const i = n(10),
		r = n(40),
		{
			ANY: o
		} = r,
		s = n(41),
		a = n(9),
		simpleSubset = (e, t, n) => {
			if (e === t) return !0;
			if (1 === e.length && e[0].semver === o) {
				if (1 === t.length && t[0].semver === o) return !0;
				e = n.includePrerelease ? [new r(">=0.0.0-0")] : [new r(">=0.0.0")]
			}
			if (1 === t.length && t[0].semver === o) {
				if (n.includePrerelease) return !0;
				t = [new r(">=0.0.0")]
			}
			const i = new Set;
			let c, l, u, d, h, p, f;
			for (const t of e) ">" === t.operator || ">=" === t.operator ? c = higherGT(c, t, n) : "<" === t.operator || "<=" === t.operator ? l = lowerLT(l, t, n) : i.add(t.semver);
			if (i.size > 1) return null;
			if (c && l) {
				if (u = a(c.semver, l.semver, n), u > 0) return null;
				if (0 === u && (">=" !== c.operator || "<=" !== l.operator)) return null
			}
			for (const e of i) {
				if (c && !s(e, String(c), n)) return null;
				if (l && !s(e, String(l), n)) return null;
				for (const i of t)
					if (!s(e, String(i), n)) return !1;
				return !0
			}
			let g = !(!l || n.includePrerelease || !l.semver.prerelease.length) && l.semver,
				m = !(!c || n.includePrerelease || !c.semver.prerelease.length) && c.semver;
			g && 1 === g.prerelease.length && "<" === l.operator && 0 === g.prerelease[0] && (g = !1);
			for (const e of t) {
				if (f = f || ">" === e.operator || ">=" === e.operator, p = p || "<" === e.operator || "<=" === e.operator, c)
					if (m && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === m.major && e.semver.minor === m.minor && e.semver.patch === m.patch && (m = !1), ">" === e.operator || ">=" === e.operator) {
						if (d = higherGT(c, e, n), d === e && d !== c) return !1
					} else if (">=" === c.operator && !s(c.semver, String(e), n)) return !1;
				if (l)
					if (g && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === g.major && e.semver.minor === g.minor && e.semver.patch === g.patch && (g = !1), "<" === e.operator || "<=" === e.operator) {
						if (h = lowerLT(l, e, n), h === e && h !== l) return !1
					} else if ("<=" === l.operator && !s(l.semver, String(e), n)) return !1;
				if (!e.operator && (l || c) && 0 !== u) return !1
			}
			return !(c && p && !l && 0 !== u) && (!(l && f && !c && 0 !== u) && (!m && !g))
		},
		higherGT = (e, t, n) => {
			if (!e) return t;
			const i = a(e.semver, t.semver, n);
			return i > 0 ? e : i < 0 || ">" === t.operator && ">=" === e.operator ? t : e
		},
		lowerLT = (e, t, n) => {
			if (!e) return t;
			const i = a(e.semver, t.semver, n);
			return i < 0 ? e : i > 0 || "<" === t.operator && "<=" === e.operator ? t : e
		};
	e.exports = (e, t, n = {}) => {
		if (e === t) return !0;
		e = new i(e, n), t = new i(t, n);
		let r = !1;
		e: for (const i of e.set) {
			for (const e of t.set) {
				const t = simpleSubset(i, e, n);
				if (r = r || null !== t, t) continue e
			}
			if (r) return !1
		}
		return !0
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.createTempUpdateFile = t.DownloadedUpdateHelper = void 0;
	const i = n(30),
		r = n(5),
		o = n(174),
		s = n(17),
		a = n(0);
	t.DownloadedUpdateHelper = class DownloadedUpdateHelper {
		constructor(e) {
			this.cacheDir = e, this._file = null, this._packageFile = null, this.versionInfo = null, this.fileInfo = null, this._downloadedFileInfo = null
		}
		get downloadedFileInfo() {
			return this._downloadedFileInfo
		}
		get file() {
			return this._file
		}
		get packageFile() {
			return this._packageFile
		}
		get cacheDirForPendingUpdate() {
			return a.join(this.cacheDir, "pending")
		}
		async validateDownloadedPath(e, t, n, i) {
			if (null != this.versionInfo && this.file === e && null != this.fileInfo) return o(this.versionInfo, t) && o(this.fileInfo.info, n.info) && await s.pathExists(e) ? e : null;
			const r = await this.getValidCachedUpdateFile(n, i);
			return null === r ? null : (i.info(`Update has already been downloaded to ${e}).`), this._file = r, r)
		}
		async setDownloadedFile(e, t, n, i, r, o) {
			this._file = e, this._packageFile = t, this.versionInfo = n, this.fileInfo = i, this._downloadedFileInfo = {
				fileName: r,
				sha512: i.info.sha512,
				isAdminRightsRequired: !0 === i.info.isAdminRightsRequired
			}, o && await s.outputJson(this.getUpdateInfoFile(), this._downloadedFileInfo)
		}
		async clear() {
			this._file = null, this._packageFile = null, this.versionInfo = null, this.fileInfo = null, await this.cleanCacheDirForPendingUpdate()
		}
		async cleanCacheDirForPendingUpdate() {
			try {
				await s.emptyDir(this.cacheDirForPendingUpdate)
			} catch (e) {}
		}
		async getValidCachedUpdateFile(e, t) {
			var n;
			const o = this.getUpdateInfoFile();
			if (!await s.pathExists(o)) return null;
			let c;
			try {
				c = await s.readJson(o)
			} catch (e) {
				let n = "No cached update info available";
				return "ENOENT" !== e.code && (await this.cleanCacheDirForPendingUpdate(), n += ` (error on read: ${e.message})`), t.info(n), null
			}
			if (!(null !== (n = null !== (null == c ? void 0 : c.fileName)) && void 0 !== n && n)) return t.warn("Cached update info is corrupted: no fileName, directory for cached update will be cleaned"), await this.cleanCacheDirForPendingUpdate(), null;
			if (e.info.sha512 !== c.sha512) return t.info(`Cached update sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${c.sha512}, expected: ${e.info.sha512}. Directory for cached update will be cleaned`), await this.cleanCacheDirForPendingUpdate(), null;
			const l = a.join(this.cacheDirForPendingUpdate, c.fileName);
			if (!await s.pathExists(l)) return t.info("Cached update file doesn't exist"), null;
			const u = await
			function hashFile(e, t = "sha512", n = "base64", o) {
				return new Promise((s, a) => {
					const c = i.createHash(t);
					c.on("error", a).setEncoding(n), r.createReadStream(e, {
						...o,
						highWaterMark: 1048576
					}).on("error", a).on("end", () => {
						c.end(), s(c.read())
					}).pipe(c, {
						end: !1
					})
				})
			}(l);
			return e.info.sha512 !== u ? (t.warn(`Sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${u}, expected: ${e.info.sha512}`), await this.cleanCacheDirForPendingUpdate(), null) : (this._downloadedFileInfo = c, l)
		}
		getUpdateInfoFile() {
			return a.join(this.cacheDirForPendingUpdate, "update-info.json")
		}
	}, t.createTempUpdateFile = async function createTempUpdateFile(e, t, n) {
		let i = 0,
			r = a.join(t, e);
		for (let o = 0; o < 3; o++) try {
			return await s.unlink(r), r
		} catch (o) {
			if ("ENOENT" === o.code) return r;
			n.warn("Error on remove temp update file: " + o), r = a.join(t, `${i++}-${e}`)
		}
		return r
	}
}, function(e, t, n) {
	(function(e) {
		var n = "[object Arguments]",
			i = "[object Map]",
			r = "[object Object]",
			o = "[object Set]",
			s = /^\[object .+?Constructor\]$/,
			a = /^(?:0|[1-9]\d*)$/,
			c = {};
		c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c[n] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c[i] = c["[object Number]"] = c[r] = c["[object RegExp]"] = c[o] = c["[object String]"] = c["[object WeakMap]"] = !1;
		var l = "object" == typeof global && global && global.Object === Object && global,
			u = "object" == typeof self && self && self.Object === Object && self,
			d = l || u || Function("return this")(),
			h = t && !t.nodeType && t,
			p = h && "object" == typeof e && e && !e.nodeType && e,
			f = p && p.exports === h,
			g = f && l.process,
			m = function() {
				try {
					return g && g.binding && g.binding("util")
				} catch (e) {}
			}(),
			b = m && m.isTypedArray;

		function arraySome(e, t) {
			for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
				if (t(e[n], n, e)) return !0;
			return !1
		}

		function mapToArray(e) {
			var t = -1,
				n = Array(e.size);
			return e.forEach((function(e, i) {
				n[++t] = [i, e]
			})), n
		}

		function setToArray(e) {
			var t = -1,
				n = Array(e.size);
			return e.forEach((function(e) {
				n[++t] = e
			})), n
		}
		var y, S = Array.prototype,
			v = Function.prototype,
			_ = Object.prototype,
			E = d["__core-js_shared__"],
			D = v.toString,
			A = _.hasOwnProperty,
			k = (y = /[^.]+$/.exec(E && E.keys && E.keys.IE_PROTO || "")) ? "Symbol(src)_1." + y : "",
			C = _.toString,
			I = RegExp("^" + D.call(A).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
			O = f ? d.Buffer : void 0,
			T = d.Symbol,
			x = d.Uint8Array,
			L = _.propertyIsEnumerable,
			N = S.splice,
			R = T ? T.toStringTag : void 0,
			P = Object.getOwnPropertySymbols,
			M = O ? O.isBuffer : void 0,
			U = function overArg(e, t) {
				return function(n) {
					return e(t(n))
				}
			}(Object.keys, Object),
			j = getNative(d, "DataView"),
			W = getNative(d, "Map"),
			B = getNative(d, "Promise"),
			V = getNative(d, "Set"),
			z = getNative(d, "WeakMap"),
			$ = getNative(Object, "create"),
			H = toSource(j),
			G = toSource(W),
			q = toSource(B),
			Y = toSource(V),
			K = toSource(z),
			X = T ? T.prototype : void 0,
			J = X ? X.valueOf : void 0;

		function Hash(e) {
			var t = -1,
				n = null == e ? 0 : e.length;
			for (this.clear(); ++t < n;) {
				var i = e[t];
				this.set(i[0], i[1])
			}
		}

		function ListCache(e) {
			var t = -1,
				n = null == e ? 0 : e.length;
			for (this.clear(); ++t < n;) {
				var i = e[t];
				this.set(i[0], i[1])
			}
		}

		function MapCache(e) {
			var t = -1,
				n = null == e ? 0 : e.length;
			for (this.clear(); ++t < n;) {
				var i = e[t];
				this.set(i[0], i[1])
			}
		}

		function SetCache(e) {
			var t = -1,
				n = null == e ? 0 : e.length;
			for (this.__data__ = new MapCache; ++t < n;) this.add(e[t])
		}

		function Stack(e) {
			var t = this.__data__ = new ListCache(e);
			this.size = t.size
		}

		function arrayLikeKeys(e, t) {
			var n = te(e),
				i = !n && ee(e),
				r = !n && !i && ne(e),
				o = !n && !i && !r && ie(e),
				s = n || i || r || o,
				a = s ? function baseTimes(e, t) {
					for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
					return i
				}(e.length, String) : [],
				c = a.length;
			for (var l in e) !t && !A.call(e, l) || s && ("length" == l || r && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || isIndex(l, c)) || a.push(l);
			return a
		}

		function assocIndexOf(e, t) {
			for (var n = e.length; n--;)
				if (eq(e[n][0], t)) return n;
			return -1
		}

		function baseGetTag(e) {
			return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : R && R in Object(e) ? function getRawTag(e) {
				var t = A.call(e, R),
					n = e[R];
				try {
					e[R] = void 0;
					var i = !0
				} catch (e) {}
				var r = C.call(e);
				i && (t ? e[R] = n : delete e[R]);
				return r
			}(e) : function objectToString(e) {
				return C.call(e)
			}(e)
		}

		function baseIsArguments(e) {
			return isObjectLike(e) && baseGetTag(e) == n
		}

		function baseIsEqual(e, t, s, a, c) {
			return e === t || (null == e || null == t || !isObjectLike(e) && !isObjectLike(t) ? e != e && t != t : function baseIsEqualDeep(e, t, s, a, c, l) {
				var u = te(e),
					d = te(t),
					h = u ? "[object Array]" : Q(e),
					p = d ? "[object Array]" : Q(t),
					f = (h = h == n ? r : h) == r,
					g = (p = p == n ? r : p) == r,
					m = h == p;
				if (m && ne(e)) {
					if (!ne(t)) return !1;
					u = !0, f = !1
				}
				if (m && !f) return l || (l = new Stack), u || ie(e) ? equalArrays(e, t, s, a, c, l) : function equalByTag(e, t, n, r, s, a, c) {
					switch (n) {
						case "[object DataView]":
							if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
							e = e.buffer, t = t.buffer;
						case "[object ArrayBuffer]":
							return !(e.byteLength != t.byteLength || !a(new x(e), new x(t)));
						case "[object Boolean]":
						case "[object Date]":
						case "[object Number]":
							return eq(+e, +t);
						case "[object Error]":
							return e.name == t.name && e.message == t.message;
						case "[object RegExp]":
						case "[object String]":
							return e == t + "";
						case i:
							var l = mapToArray;
						case o:
							var u = 1 & r;
							if (l || (l = setToArray), e.size != t.size && !u) return !1;
							var d = c.get(e);
							if (d) return d == t;
							r |= 2, c.set(e, t);
							var h = equalArrays(l(e), l(t), r, s, a, c);
							return c.delete(e), h;
						case "[object Symbol]":
							if (J) return J.call(e) == J.call(t)
					}
					return !1
				}(e, t, h, s, a, c, l);
				if (!(1 & s)) {
					var b = f && A.call(e, "__wrapped__"),
						y = g && A.call(t, "__wrapped__");
					if (b || y) {
						var S = b ? e.value() : e,
							v = y ? t.value() : t;
						return l || (l = new Stack), c(S, v, s, a, l)
					}
				}
				if (!m) return !1;
				return l || (l = new Stack),
					function equalObjects(e, t, n, i, r, o) {
						var s = 1 & n,
							a = getAllKeys(e),
							c = a.length,
							l = getAllKeys(t).length;
						if (c != l && !s) return !1;
						var u = c;
						for (; u--;) {
							var d = a[u];
							if (!(s ? d in t : A.call(t, d))) return !1
						}
						var h = o.get(e);
						if (h && o.get(t)) return h == t;
						var p = !0;
						o.set(e, t), o.set(t, e);
						var f = s;
						for (; ++u < c;) {
							d = a[u];
							var g = e[d],
								m = t[d];
							if (i) var b = s ? i(m, g, d, t, e, o) : i(g, m, d, e, t, o);
							if (!(void 0 === b ? g === m || r(g, m, n, i, o) : b)) {
								p = !1;
								break
							}
							f || (f = "constructor" == d)
						}
						if (p && !f) {
							var y = e.constructor,
								S = t.constructor;
							y == S || !("constructor" in e) || !("constructor" in t) || "function" == typeof y && y instanceof y && "function" == typeof S && S instanceof S || (p = !1)
						}
						return o.delete(e), o.delete(t), p
					}(e, t, s, a, c, l)
			}(e, t, s, a, baseIsEqual, c))
		}

		function baseIsNative(e) {
			return !(!isObject(e) || function isMasked(e) {
				return !!k && k in e
			}(e)) && (isFunction(e) ? I : s).test(toSource(e))
		}

		function baseKeys(e) {
			if (! function isPrototype(e) {
					var t = e && e.constructor,
						n = "function" == typeof t && t.prototype || _;
					return e === n
				}(e)) return U(e);
			var t = [];
			for (var n in Object(e)) A.call(e, n) && "constructor" != n && t.push(n);
			return t
		}

		function equalArrays(e, t, n, i, r, o) {
			var s = 1 & n,
				a = e.length,
				c = t.length;
			if (a != c && !(s && c > a)) return !1;
			var l = o.get(e);
			if (l && o.get(t)) return l == t;
			var u = -1,
				d = !0,
				h = 2 & n ? new SetCache : void 0;
			for (o.set(e, t), o.set(t, e); ++u < a;) {
				var p = e[u],
					f = t[u];
				if (i) var g = s ? i(f, p, u, t, e, o) : i(p, f, u, e, t, o);
				if (void 0 !== g) {
					if (g) continue;
					d = !1;
					break
				}
				if (h) {
					if (!arraySome(t, (function(e, t) {
							if (s = t, !h.has(s) && (p === e || r(p, e, n, i, o))) return h.push(t);
							var s
						}))) {
						d = !1;
						break
					}
				} else if (p !== f && !r(p, f, n, i, o)) {
					d = !1;
					break
				}
			}
			return o.delete(e), o.delete(t), d
		}

		function getAllKeys(e) {
			return function baseGetAllKeys(e, t, n) {
				var i = t(e);
				return te(e) ? i : function arrayPush(e, t) {
					for (var n = -1, i = t.length, r = e.length; ++n < i;) e[r + n] = t[n];
					return e
				}(i, n(e))
			}(e, keys, Z)
		}

		function getMapData(e, t) {
			var n = e.__data__;
			return function isKeyable(e) {
				var t = typeof e;
				return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
			}(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
		}

		function getNative(e, t) {
			var n = function getValue(e, t) {
				return null == e ? void 0 : e[t]
			}(e, t);
			return baseIsNative(n) ? n : void 0
		}
		Hash.prototype.clear = function hashClear() {
			this.__data__ = $ ? $(null) : {}, this.size = 0
		}, Hash.prototype.delete = function hashDelete(e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}, Hash.prototype.get = function hashGet(e) {
			var t = this.__data__;
			if ($) {
				var n = t[e];
				return "__lodash_hash_undefined__" === n ? void 0 : n
			}
			return A.call(t, e) ? t[e] : void 0
		}, Hash.prototype.has = function hashHas(e) {
			var t = this.__data__;
			return $ ? void 0 !== t[e] : A.call(t, e)
		}, Hash.prototype.set = function hashSet(e, t) {
			var n = this.__data__;
			return this.size += this.has(e) ? 0 : 1, n[e] = $ && void 0 === t ? "__lodash_hash_undefined__" : t, this
		}, ListCache.prototype.clear = function listCacheClear() {
			this.__data__ = [], this.size = 0
		}, ListCache.prototype.delete = function listCacheDelete(e) {
			var t = this.__data__,
				n = assocIndexOf(t, e);
			return !(n < 0) && (n == t.length - 1 ? t.pop() : N.call(t, n, 1), --this.size, !0)
		}, ListCache.prototype.get = function listCacheGet(e) {
			var t = this.__data__,
				n = assocIndexOf(t, e);
			return n < 0 ? void 0 : t[n][1]
		}, ListCache.prototype.has = function listCacheHas(e) {
			return assocIndexOf(this.__data__, e) > -1
		}, ListCache.prototype.set = function listCacheSet(e, t) {
			var n = this.__data__,
				i = assocIndexOf(n, e);
			return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
		}, MapCache.prototype.clear = function mapCacheClear() {
			this.size = 0, this.__data__ = {
				hash: new Hash,
				map: new(W || ListCache),
				string: new Hash
			}
		}, MapCache.prototype.delete = function mapCacheDelete(e) {
			var t = getMapData(this, e).delete(e);
			return this.size -= t ? 1 : 0, t
		}, MapCache.prototype.get = function mapCacheGet(e) {
			return getMapData(this, e).get(e)
		}, MapCache.prototype.has = function mapCacheHas(e) {
			return getMapData(this, e).has(e)
		}, MapCache.prototype.set = function mapCacheSet(e, t) {
			var n = getMapData(this, e),
				i = n.size;
			return n.set(e, t), this.size += n.size == i ? 0 : 1, this
		}, SetCache.prototype.add = SetCache.prototype.push = function setCacheAdd(e) {
			return this.__data__.set(e, "__lodash_hash_undefined__"), this
		}, SetCache.prototype.has = function setCacheHas(e) {
			return this.__data__.has(e)
		}, Stack.prototype.clear = function stackClear() {
			this.__data__ = new ListCache, this.size = 0
		}, Stack.prototype.delete = function stackDelete(e) {
			var t = this.__data__,
				n = t.delete(e);
			return this.size = t.size, n
		}, Stack.prototype.get = function stackGet(e) {
			return this.__data__.get(e)
		}, Stack.prototype.has = function stackHas(e) {
			return this.__data__.has(e)
		}, Stack.prototype.set = function stackSet(e, t) {
			var n = this.__data__;
			if (n instanceof ListCache) {
				var i = n.__data__;
				if (!W || i.length < 199) return i.push([e, t]), this.size = ++n.size, this;
				n = this.__data__ = new MapCache(i)
			}
			return n.set(e, t), this.size = n.size, this
		};
		var Z = P ? function(e) {
				return null == e ? [] : (e = Object(e), function arrayFilter(e, t) {
					for (var n = -1, i = null == e ? 0 : e.length, r = 0, o = []; ++n < i;) {
						var s = e[n];
						t(s, n, e) && (o[r++] = s)
					}
					return o
				}(P(e), (function(t) {
					return L.call(e, t)
				})))
			} : function stubArray() {
				return []
			},
			Q = baseGetTag;

		function isIndex(e, t) {
			return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || a.test(e)) && e > -1 && e % 1 == 0 && e < t
		}

		function toSource(e) {
			if (null != e) {
				try {
					return D.call(e)
				} catch (e) {}
				try {
					return e + ""
				} catch (e) {}
			}
			return ""
		}

		function eq(e, t) {
			return e === t || e != e && t != t
		}(j && "[object DataView]" != Q(new j(new ArrayBuffer(1))) || W && Q(new W) != i || B && "[object Promise]" != Q(B.resolve()) || V && Q(new V) != o || z && "[object WeakMap]" != Q(new z)) && (Q = function(e) {
			var t = baseGetTag(e),
				n = t == r ? e.constructor : void 0,
				s = n ? toSource(n) : "";
			if (s) switch (s) {
				case H:
					return "[object DataView]";
				case G:
					return i;
				case q:
					return "[object Promise]";
				case Y:
					return o;
				case K:
					return "[object WeakMap]"
			}
			return t
		});
		var ee = baseIsArguments(function() {
				return arguments
			}()) ? baseIsArguments : function(e) {
				return isObjectLike(e) && A.call(e, "callee") && !L.call(e, "callee")
			},
			te = Array.isArray;
		var ne = M || function stubFalse() {
			return !1
		};

		function isFunction(e) {
			if (!isObject(e)) return !1;
			var t = baseGetTag(e);
			return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
		}

		function isLength(e) {
			return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
		}

		function isObject(e) {
			var t = typeof e;
			return null != e && ("object" == t || "function" == t)
		}

		function isObjectLike(e) {
			return null != e && "object" == typeof e
		}
		var ie = b ? function baseUnary(e) {
			return function(t) {
				return e(t)
			}
		}(b) : function baseIsTypedArray(e) {
			return isObjectLike(e) && isLength(e.length) && !!c[baseGetTag(e)]
		};

		function keys(e) {
			return function isArrayLike(e) {
				return null != e && isLength(e.length) && !isFunction(e)
			}(e) ? arrayLikeKeys(e) : baseKeys(e)
		}
		e.exports = function isEqual(e, t) {
			return baseIsEqual(e, t)
		}
	}).call(this, n(175)(e))
}, function(e, t) {
	e.exports = function(e) {
		return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
			enumerable: !0,
			get: function() {
				return e.l
			}
		}), Object.defineProperty(e, "id", {
			enumerable: !0,
			get: function() {
				return e.i
			}
		}), e.webpackPolyfill = 1), e
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.ElectronAppAdapter = void 0;
	const i = n(0),
		r = n(177);
	t.ElectronAppAdapter = class ElectronAppAdapter {
		constructor(e = n(1).app) {
			this.app = e
		}
		whenReady() {
			return this.app.whenReady()
		}
		get version() {
			return this.app.getVersion()
		}
		get name() {
			return this.app.getName()
		}
		get isPackaged() {
			return !0 === this.app.isPackaged
		}
		get appUpdateConfigPath() {
			return this.isPackaged ? i.join(process.resourcesPath, "app-update.yml") : i.join(this.app.getAppPath(), "dev-app-update.yml")
		}
		get userDataPath() {
			return this.app.getPath("userData")
		}
		get baseCachePath() {
			return r.getAppCacheDir()
		}
		quit() {
			this.app.quit()
		}
		onQuit(e) {
			this.app.once("quit", (t, n) => e(n))
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getAppCacheDir = void 0;
	const i = n(0),
		r = n(48);
	t.getAppCacheDir = function getAppCacheDir() {
		const e = r.homedir();
		let t;
		return t = "win32" === process.platform ? process.env.LOCALAPPDATA || i.join(e, "AppData", "Local") : "darwin" === process.platform ? i.join(e, "Library", "Application Support", "Caches") : process.env.XDG_CACHE_HOME || i.join(e, ".cache"), t
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.ElectronHttpExecutor = t.getNetSession = t.NET_SESSION_NAME = void 0;
	const i = n(2);

	function getNetSession() {
		return n(1).session.fromPartition(t.NET_SESSION_NAME, {
			cache: !1
		})
	}
	t.NET_SESSION_NAME = "electron-updater", t.getNetSession = getNetSession;
	class ElectronHttpExecutor extends i.HttpExecutor {
		constructor(e) {
			super(), this.proxyLoginCallback = e, this.cachedSession = null
		}
		async download(e, t, n) {
			return await n.cancellationToken.createPromise((r, o, s) => {
				const a = {
					headers: n.headers || void 0,
					redirect: "manual"
				};
				i.configureRequestUrl(e, a), i.configureRequestOptions(a), this.doDownload(a, {
					destination: t,
					options: n,
					onCancel: s,
					callback: e => {
						null == e ? r(t) : o(e)
					},
					responseHandler: null
				}, 0)
			})
		}
		createRequest(e, t) {
			e.headers && e.headers.Host && (e.host = e.headers.Host, delete e.headers.Host), null == this.cachedSession && (this.cachedSession = getNetSession());
			const i = n(1).net.request({
				...e,
				session: this.cachedSession
			});
			return i.on("response", t), null != this.proxyLoginCallback && i.on("login", this.proxyLoginCallback), i
		}
		addRedirectHandlers(e, t, n, r, o) {
			e.on("redirect", (s, a, c) => {
				e.abort(), r > this.maxRedirects ? n(this.createMaxRedirectError()) : o(i.HttpExecutor.prepareRedirectUrlOptions(c, t))
			})
		}
	}
	t.ElectronHttpExecutor = ElectronHttpExecutor
}, function(e, t) {
	var n = /[\\^$.*+?()[\]{}|]/g,
		i = RegExp(n.source),
		r = "object" == typeof global && global && global.Object === Object && global,
		o = "object" == typeof self && self && self.Object === Object && self,
		s = r || o || Function("return this")(),
		a = Object.prototype.toString,
		c = s.Symbol,
		l = c ? c.prototype : void 0,
		u = l ? l.toString : void 0;

	function baseToString(e) {
		if ("string" == typeof e) return e;
		if (function isSymbol(e) {
				return "symbol" == typeof e || function isObjectLike(e) {
					return !!e && "object" == typeof e
				}(e) && "[object Symbol]" == a.call(e)
			}(e)) return u ? u.call(e) : "";
		var t = e + "";
		return "0" == t && 1 / e == -1 / 0 ? "-0" : t
	}
	e.exports = function escapeRegExp(e) {
		return (e = function toString(e) {
			return null == e ? "" : baseToString(e)
		}(e)) && i.test(e) ? e.replace(n, "\\$&") : e
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.createClient = t.isUrlProbablySupportMultiRangeRequests = void 0;
	const i = n(2),
		r = n(181),
		o = n(83),
		s = n(84),
		a = n(183);

	function isUrlProbablySupportMultiRangeRequests(e) {
		return !e.includes("s3.amazonaws.com")
	}
	t.isUrlProbablySupportMultiRangeRequests = isUrlProbablySupportMultiRangeRequests, t.createClient = function createClient(e, t, n) {
		if ("string" == typeof e) throw i.newError("Please pass PublishConfiguration object", "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION");
		const c = e.provider;
		switch (c) {
			case "github": {
				const i = e,
					r = (i.private ? process.env.GH_TOKEN || process.env.GITHUB_TOKEN : null) || i.token;
				return null == r ? new s.GitHubProvider(i, t, n) : new a.PrivateGitHubProvider(i, t, r, n)
			}
			case "s3":
			case "spaces":
				return new o.GenericProvider({
					provider: "generic",
					url: i.getS3LikeProviderBaseUrl(e),
					channel: e.channel || null
				}, t, {
					...n,
					isUseMultipleRangeRequest: !1
				});
			case "generic": {
				const i = e;
				return new o.GenericProvider(i, t, {
					...n,
					isUseMultipleRangeRequest: !1 !== i.useMultipleRangeRequest && isUrlProbablySupportMultiRangeRequests(i.url)
				})
			}
			case "bintray":
				return new r.BintrayProvider(e, n);
			default:
				throw i.newError("Unsupported provider: " + c, "ERR_UPDATER_UNSUPPORTED_PROVIDER")
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.BintrayProvider = void 0;
	const i = n(2),
		r = n(182),
		o = n(11),
		s = n(28),
		a = n(16);
	class BintrayProvider extends a.Provider {
		constructor(e, t) {
			super(t), this.client = new r.BintrayClient(e, t.executor, new i.CancellationToken), this.baseUrl = s.newBaseUrl(`https://dl.bintray.com/${this.client.owner}/${this.client.repo}`)
		}
		setRequestHeaders(e) {
			super.setRequestHeaders(e), this.client.setRequestHeaders(e)
		}
		async getLatestVersion() {
			try {
				const e = await this.client.getVersion("_latest"),
					t = s.getChannelFilename(this.getDefaultChannelName()),
					n = await this.client.getVersionFiles(e.name),
					r = n.find(e => e.name.endsWith("_" + t) || e.name.endsWith("-" + t));
				if (null == r) throw i.newError(`Cannot find channel file "${t}", existing files:\n${n.map(e=>JSON.stringify(e,null,2)).join(",\n")}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
				const c = new o.URL(`https://dl.bintray.com/${this.client.owner}/${this.client.repo}/${r.name}`);
				return a.parseUpdateInfo(await this.httpRequest(c), t, c)
			} catch (e) {
				if ("statusCode" in e && 404 === e.statusCode) throw i.newError("No latest version, please ensure that user, package and repository correctly configured. Or at least one version is published. " + (e.stack || e.message), "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
				throw e
			}
		}
		resolveFiles(e) {
			return a.resolveFiles(e, this.baseUrl)
		}
	}
	t.BintrayProvider = BintrayProvider
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.BintrayClient = void 0;
	const i = n(72);
	t.BintrayClient = class BintrayClient {
		constructor(e, t, n, i) {
			if (this.httpExecutor = t, this.cancellationToken = n, this.requestHeaders = null, null == e.owner) throw new Error("owner is not specified");
			if (null == e.package) throw new Error("package is not specified");
			this.repo = e.repo || "generic", this.packageName = e.package, this.owner = e.owner, this.user = e.user || e.owner, this.component = e.component || null, this.distribution = e.distribution || "stable", this.auth = null == i ? null : "Basic " + Buffer.from(`${this.user}:${i}`).toString("base64"), this.basePath = `/packages/${this.owner}/${this.repo}/${this.packageName}`
		}
		setRequestHeaders(e) {
			this.requestHeaders = e
		}
		bintrayRequest(e, t, n = null, r, o) {
			return i.parseJson(this.httpExecutor.request(i.configureRequestOptions({
				hostname: "api.bintray.com",
				path: e,
				headers: this.requestHeaders || void 0
			}, t, o), r, n))
		}
		getVersion(e) {
			return this.bintrayRequest(`${this.basePath}/versions/${e}`, this.auth, null, this.cancellationToken)
		}
		getVersionFiles(e) {
			return this.bintrayRequest(`${this.basePath}/versions/${e}/files`, this.auth, null, this.cancellationToken)
		}
		createVersion(e) {
			return this.bintrayRequest(this.basePath + "/versions", this.auth, {
				name: e
			}, this.cancellationToken)
		}
		deleteVersion(e) {
			return this.bintrayRequest(`${this.basePath}/versions/${e}`, this.auth, null, this.cancellationToken, "DELETE")
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PrivateGitHubProvider = void 0;
	const i = n(2),
		r = n(52),
		o = n(0),
		s = n(11),
		a = n(28),
		c = n(84),
		l = n(16);
	class PrivateGitHubProvider extends c.BaseGitHubProvider {
		constructor(e, t, n, i) {
			super(e, "api.github.com", i), this.updater = t, this.token = n
		}
		createRequestOptions(e, t) {
			const n = super.createRequestOptions(e, t);
			return n.redirect = "manual", n
		}
		async getLatestVersion() {
			const e = new i.CancellationToken,
				t = a.getChannelFilename(this.getDefaultChannelName()),
				n = await this.getLatestVersionInfo(e),
				o = n.assets.find(e => e.name === t);
			if (null == o) throw i.newError(`Cannot find ${t} in the release ${n.html_url||n.name}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
			const c = new s.URL(o.url);
			let l;
			try {
				l = r.load(await this.httpRequest(c, this.configureHeaders("application/octet-stream"), e))
			} catch (e) {
				if (e instanceof i.HttpError && 404 === e.statusCode) throw i.newError(`Cannot find ${t} in the latest release artifacts (${c}): ${e.stack||e.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
				throw e
			}
			return l.assets = n.assets, l
		}
		get fileExtraDownloadHeaders() {
			return this.configureHeaders("application/octet-stream")
		}
		configureHeaders(e) {
			return {
				accept: e,
				authorization: "token " + this.token
			}
		}
		async getLatestVersionInfo(e) {
			const t = this.updater.allowPrerelease;
			let n = this.basePath;
			t || (n += "/latest");
			const r = a.newUrlFromBase(n, this.baseUrl);
			try {
				const n = JSON.parse(await this.httpRequest(r, this.configureHeaders("application/vnd.github.v3+json"), e));
				return t ? n.find(e => e.prerelease) || n[0] : n
			} catch (e) {
				throw i.newError(`Unable to find latest version on GitHub (${r}), please ensure a production release exists: ${e.stack||e.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND")
			}
		}
		get basePath() {
			return this.computeGithubBasePath(`/repos/${this.options.owner}/${this.options.repo}/releases`)
		}
		resolveFiles(e) {
			return l.getFileList(e).map(t => {
				const n = o.posix.basename(t.url).replace(/ /g, "-"),
					r = e.assets.find(e => null != e && e.name === n);
				if (null == r) throw i.newError(`Cannot find asset "${n}" in: ${JSON.stringify(e.assets,null,2)}`, "ERR_UPDATER_ASSET_NOT_FOUND");
				return {
					url: new s.URL(r.url),
					info: t
				}
			})
		}
	}
	t.PrivateGitHubProvider = PrivateGitHubProvider
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.checkIsRangesSupported = t.executeTasksUsingMultipleRangeRequests = void 0;
	const i = n(2),
		r = n(89),
		o = n(60);

	function checkIsRangesSupported(e, t) {
		if (e.statusCode >= 400) return t(i.createHttpError(e)), !1;
		if (206 !== e.statusCode) {
			const n = i.safeGetHeader(e, "accept-ranges");
			if (null == n || "none" === n) return t(new Error(`Server doesn't support Accept-Ranges (response code ${e.statusCode})`)), !1
		}
		return !0
	}
	t.executeTasksUsingMultipleRangeRequests = function executeTasksUsingMultipleRangeRequests(e, t, n, s, a) {
		const w = c => {
			if (c >= t.length) return null != e.fileMetadataBuffer && n.write(e.fileMetadataBuffer), void n.end();
			const l = c + 1e3;
			! function doExecuteTasks(e, t, n, s, a) {
				let c = "bytes=",
					l = 0;
				const u = new Map,
					d = [];
				for (let e = t.start; e < t.end; e++) {
					const n = t.tasks[e];
					n.kind === o.OperationKind.DOWNLOAD && (c += `${n.start}-${n.end-1}, `, u.set(l, e), l++, d.push(n.end - n.start))
				}
				if (l <= 1) {
					const w = i => {
						if (i >= t.end) return void s();
						const c = t.tasks[i++];
						if (c.kind === o.OperationKind.COPY) r.copyData(c, n, t.oldFileFd, a, () => w(i));
						else {
							const t = e.createRequestOptions();
							t.headers.Range = `bytes=${c.start}-${c.end-1}`;
							const r = e.httpExecutor.createRequest(t, e => {
								checkIsRangesSupported(e, a) && (e.pipe(n, {
									end: !1
								}), e.once("end", () => w(i)))
							});
							e.httpExecutor.addErrorAndTimeoutHandlers(r, a), r.end()
						}
					};
					return void w(t.start)
				}
				const h = e.createRequestOptions();
				h.headers.Range = c.substring(0, c.length - 2);
				const p = e.httpExecutor.createRequest(h, e => {
					if (!checkIsRangesSupported(e, a)) return;
					const o = i.safeGetHeader(e, "content-type"),
						c = /^multipart\/.+?(?:; boundary=(?:(?:"(.+)")|(?:([^\s]+))))$/i.exec(o);
					if (null == c) return void a(new Error(`Content-Type "multipart/byteranges" is expected, but got "${o}"`));
					const l = new r.DataSplitter(n, t, u, c[1] || c[2], d, s);
					l.on("error", a), e.pipe(l), e.on("end", () => {
						setTimeout(() => {
							p.abort(), a(new Error("Response ends without calling any handlers"))
						}, 1e4)
					})
				});
				e.httpExecutor.addErrorAndTimeoutHandlers(p, a), p.end()
			}(e, {
				tasks: t,
				start: c,
				end: Math.min(t.length, l),
				oldFileFd: s
			}, n, () => w(l), a)
		};
		return w
	}, t.checkIsRangesSupported = checkIsRangesSupported
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.ProgressDifferentialDownloadCallbackTransform = void 0;
	const i = n(23);
	var r;
	! function(e) {
		e[e.COPY = 0] = "COPY", e[e.DOWNLOAD = 1] = "DOWNLOAD"
	}(r || (r = {}));
	class ProgressDifferentialDownloadCallbackTransform extends i.Transform {
		constructor(e, t, n) {
			super(), this.progressDifferentialDownloadInfo = e, this.cancellationToken = t, this.onProgress = n, this.start = Date.now(), this.transferred = 0, this.delta = 0, this.expectedBytes = 0, this.index = 0, this.operationType = r.COPY, this.nextUpdate = this.start + 1e3
		}
		_transform(e, t, n) {
			if (this.cancellationToken.cancelled) return void n(new Error("cancelled"), null);
			if (this.operationType == r.COPY) return void n(null, e);
			this.transferred += e.length, this.delta += e.length;
			const i = Date.now();
			i >= this.nextUpdate && this.transferred !== this.expectedBytes && this.transferred !== this.progressDifferentialDownloadInfo.grandTotal && (this.nextUpdate = i + 1e3, this.onProgress({
				total: this.progressDifferentialDownloadInfo.grandTotal,
				delta: this.delta,
				transferred: this.transferred,
				percent: this.transferred / this.progressDifferentialDownloadInfo.grandTotal * 100,
				bytesPerSecond: Math.round(this.transferred / ((i - this.start) / 1e3))
			}), this.delta = 0), n(null, e)
		}
		beginFileCopy() {
			this.operationType = r.COPY
		}
		beginRangeDownload() {
			this.operationType = r.DOWNLOAD, this.expectedBytes += this.progressDifferentialDownloadInfo.expectedByteCounts[this.index++]
		}
		endRangeDownload() {
			this.transferred !== this.progressDifferentialDownloadInfo.grandTotal && this.onProgress({
				total: this.progressDifferentialDownloadInfo.grandTotal,
				delta: this.delta,
				transferred: this.transferred,
				percent: this.transferred / this.progressDifferentialDownloadInfo.grandTotal * 100,
				bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
			})
		}
		_flush(e) {
			this.cancellationToken.cancelled ? e(new Error("cancelled")) : (this.onProgress({
				total: this.progressDifferentialDownloadInfo.grandTotal,
				delta: this.delta,
				transferred: this.transferred,
				percent: 100,
				bytesPerSecond: Math.round(this.transferred / ((Date.now() - this.start) / 1e3))
			}), this.delta = 0, this.transferred = 0, e(null))
		}
	}
	t.ProgressDifferentialDownloadCallbackTransform = ProgressDifferentialDownloadCallbackTransform
}, function(e, t) {
	e.exports = require("http")
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.GenericDifferentialDownloader = void 0;
	const i = n(88);
	class GenericDifferentialDownloader extends i.DifferentialDownloader {
		download(e, t) {
			return this.doDownload(e, t)
		}
	}
	t.GenericDifferentialDownloader = GenericDifferentialDownloader
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.verifySignature = void 0;
	const i = n(2),
		r = n(14),
		o = n(48);
	t.verifySignature = function verifySignature(e, t, n) {
		return new Promise(s => {
			const a = t.replace(/'/g, "''").replace(/`/g, "``");
			r.execFile("powershell.exe", ["-NoProfile", "-NonInteractive", "-InputFormat", "None", "-Command", `Get-AuthenticodeSignature '${a}' | ConvertTo-Json -Compress | ForEach-Object { [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($_)) }`], {
				timeout: 2e4
			}, (t, a, c) => {
				try {
					if (null != t || c) return function handleError(e, t, n) {
						if (function isOldWin6() {
								const e = o.release();
								return e.startsWith("6.") && !e.startsWith("6.3")
							}()) return void e.warn(`Cannot execute Get-AuthenticodeSignature: ${t||n}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`);
						try {
							r.execFileSync("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", "ConvertTo-Json test"], {
								timeout: 1e4
							})
						} catch (t) {
							return void e.warn(`Cannot execute ConvertTo-Json: ${t.message}. Ignoring signature validation due to unsupported powershell version. Please upgrade to powershell 3 or higher.`)
						}
						if (null != t) throw t;
						if (n) return void e.warn(`Cannot execute Get-AuthenticodeSignature, stderr: ${n}. Ignoring signature validation due to unknown stderr.`)
					}(n, t, c), void s(null);
					const l = function parseOut(e) {
						const t = JSON.parse(e);
						delete t.PrivateKey, delete t.IsOSBinary, delete t.SignatureType;
						const n = t.SignerCertificate;
						null != n && (delete n.Archived, delete n.Extensions, delete n.Handle, delete n.HasPrivateKey, delete n.SubjectName);
						return delete t.Path, t
					}(Buffer.from(a, "base64").toString("utf-8"));
					if (0 === l.Status) {
						const t = i.parseDn(l.SignerCertificate.Subject).get("CN");
						if (e.includes(t)) return void s(null)
					}
					const u = `publisherNames: ${e.join(" | ")}, raw info: ` + JSON.stringify(l, (e, t) => "RawData" === e ? void 0 : t, 2);
					n.warn("Sign verification failed, installer signed with incorrect certificate: " + u), s(u)
				} catch (e) {
					return n.warn(`Cannot execute Get-AuthenticodeSignature: ${t}. Ignoring signature validation due to unknown error.`), void s(null)
				}
			})
		})
	}
}, function(e, t) {
	e.exports = require("electron-localshortcut")
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.MainWindow = void 0;
	const r = n(3),
		o = n(31),
		s = n(7),
		a = n(22),
		c = n(13),
		l = n(1),
		u = n(15),
		d = n(19);
	t.MainWindow = class MainWindow {
		constructor() {
			this.name = "main", this.title = "main-page", this.url = null, this.setupTemplate = !1, this.mainWindow = null, this.isMainShow = !1, this.windowManager = null, this.serviceUpdate = !1, this.util = s.Util.getInstance(), this._window = a.Window.getInstance(), this.LogSys = r.LogIt.getInstance(), this.admin = u.Admin.getInstance(), this.widgetManager = d.WidgetManager.getInstance(), this.dfConfing = {
				width: 760,
				height: 400,
				show: !0,
				frame: !1,
				webPreferences: {
					allowRunningInsecureContent: !0,
					webviewTag: !0,
					nodeIntegration: !0,
					enableRemoteModule: !0
				}
			}, this.url = o.getMainPageUrl()
		}
		getWindow() {
			return this.mainWindow.object
		}
		setwindowManager(e) {
			this.windowManager = e
		}
		create(e) {
			let t;
			if (this.url = e || o.getMainPageUrl(), t = e ? e.substr(e.lastIndexOf("/") + 1) : "app", console.log(e), this.widgetManager.beforeLaunch()) this.serviceUpdate = !0;
			else {
				if (this.mainWindow = c.open(this.name, this.title, this.url, this.setupTemplate, this.dfConfing), this.mainWindow && this.mainWindow.object) {
					this.mainWindow.object.hide();
					try {
						this.mainWindow.object.removeMenu()
					} catch (e) {
						this.LogSys.writeLog(`error: ${e.message}}`), this.LogSys.writeLog(`name: ${this.name}, \n                                          title: ${this.title}, \n                                          url: ${this.url}, \n                                          setupTemplate: ${this.setupTemplate},\n                                          dfConfing: ${JSON.stringify(this.dfConfing,void 0,2)}`)
					}
				}
				this._window.setMainWindow(this.mainWindow.object), this.util.setMainWindow(this.mainWindow.object), this.LogSys.writeLog(o.getMainPageUrl()), this.isMainShow = !0, this.mainWindow.object.on("closed", e => {
					this.LogSys.writeLog("mainWindow closed"), this.destory(), this.widgetManager.afterForceClose(), this.util.printAllWindows()
				}), this.mainWindow.object.on("close", e => {
					this.LogSys.writeLog("mainWindow close")
				}), this.serviceUpdate = !1, this.openPage(e), this.mainWindow.onReady(!1, e => {
					e.object.show()
				})
			}
			l.ipcMain.on("skip_update", t => {
				this.serviceUpdate && this.create(e)
			})
		}
		openWinAfter(e) {
			this.mainWindow.object.once("ready-to-show", t => i(this, void 0, void 0, (function*() {
				this.admin.getCloseAutoUpdate() || e.isUpdating || (yield e.autoUpdate())
			})))
		}
		winToFront() {
			this.mainWindow.object.show()
		}
		openPage(e) {
			const t = this.mainWindow.object.webContents.getURL();
			let n;
			this.url = e || o.getMainPageUrl() + "#/dashboard/home", n = e ? e.substr(e.lastIndexOf("/") + 1) : "app", (t.endsWith("home") ? "app" === n : t.endsWith(n)) || this.mainWindow.object.loadURL(this.url), this.mainWindow.object.once("ready-to-show", () => {
				this.mainWindow && this.mainWindow.object && this.mainWindow.object.webContents && this.mainWindow.object.webContents.send("change-tool", n)
			}), this.mainWindow.object.once("focus", () => {
				this.mainWindow && this.mainWindow.object && this.mainWindow.object.webContents && this.mainWindow.object.webContents.send("change-tool", n)
			})
		}
		destory() {
			c.get("floating") ? c.closeAllExcept("floating") : c.closeAll(), this.isMainShow = !1
		}
	}
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.NetService = void 0;
	const r = n(32),
		o = n(3),
		s = n(7),
		a = n(33);
	var c, l;
	! function(e) {
		e[e.MONITOR_DETECTION = 0] = "MONITOR_DETECTION"
	}(c || (c = {})),
	function(e) {
		e[e.UNREAL_ENGINE = 0] = "UNREAL_ENGINE", e[e.SPATIAL_AUDIO = 1] = "SPATIAL_AUDIO"
	}(l || (l = {}));
	class NetService {
		constructor() {
			this._log = o.LogIt.getInstance(), this._util = s.Util.getInstance(), this._lockDevice = a.LockDevice.getInstance(), this.PIPE_NAME = "SLECPipe", this.PIPE_PATH = "\\\\.\\pipe\\" + this.PIPE_NAME
		}
		static getInstance() {
			return NetService.instance || (NetService.instance = new NetService), NetService.instance
		}
		start() {
			const e = r.createServer();
			e.on("connection", e => {
				this._log.writeLog(this.PIPE_PATH + " is on connection"), e.on("data", t => i(this, void 0, void 0, (function*() {
					this._log.writeLog("Receive Data: " + t.toString());
					let n = 0;
					const i = JSON.parse(t.toString());
					switch (i.cmd) {
						case c[c.MONITOR_DETECTION]:
							if (i.type === l[l.UNREAL_ENGINE]) {
								const e = this._util.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Launcher_Type"),
									t = Number(e);
								if (3 === t || 4 === t) n = 0;
								else {
									n = (yield this._lockDevice.detectMonitor()) ? 1 : 0
								}
							} else if (i.type === l[l.SPATIAL_AUDIO]) {
								const e = this._util.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Launcher_Type"),
									t = Number(e),
									i = this._util.getRegistryValue("HKEY_LOCAL_MACHINE\\SOFTWARE\\Acer\\SpatialLabs", "Main_Monitor");
								if (2 === t && "ACR0002" === i || 3 === t && "ACR0003" === i) {
									n = (yield this._lockDevice.detectMonitor()) ? 1 : 0
								}
							} else {
								n = (yield this._lockDevice.detectMonitor()) ? 1 : 0
							}
							break;
						default:
							n = 0, this._log.writeLog("Unknown Command: " + i.cmd.toString())
					}
					const r = {
							result: n
						},
						o = JSON.stringify(r);
					e.write(o), this._log.writeLog("Write Data: " + o)
				}))), e.on("close", () => {
					this._log.writeLog("connection is on close")
				}), e.on("end", () => {
					this._log.writeLog("connection is on end")
				}), e.on("error", e => {
					this._log.writeLog("connection is on error: " + e.message)
				})
			}), e.on("error", e => {
				this._log.writeLog("Server is on error: " + e.message)
			}), e.on("close", () => {
				this._log.writeLog("Server is on close")
			}), e.on("end", () => {
				this._log.writeLog("Server is on end")
			}), e.on("listening", () => {
				this._log.writeLog("Server is on listen")
			}), e.listen(this.PIPE_PATH)
		}
	}
	t.NetService = NetService
}, function(e, t, n) {
	"use strict";
	var i = this && this.__awaiter || function(e, t, n, i) {
		return new(n || (n = Promise))((function(r, o) {
			function fulfilled(e) {
				try {
					step(i.next(e))
				} catch (e) {
					o(e)
				}
			}

			function rejected(e) {
				try {
					step(i.throw(e))
				} catch (e) {
					o(e)
				}
			}

			function step(e) {
				e.done ? r(e.value) : function adopt(e) {
					return e instanceof n ? e : new n((function(t) {
						t(e)
					}))
				}(e.value).then(fulfilled, rejected)
			}
			step((i = i.apply(e, t || [])).next())
		}))
	};
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.ZMQService = void 0;
	const r = n(3);
	var o;
	! function(e) {
		e[e.Info = 0] = "Info", e[e.ContextInvalid = 1] = "ContextInvalid", e[e.SRUnavailable = 2] = "SRUnavailable", e[e.SRRestored = 3] = "SRRestored", e[e.USBNotConnected = 4] = "USBNotConnected", e[e.USBNotConnectedResolved = 5] = "USBNotConnectedResolved", e[e.DisplayNotConnected = 6] = "DisplayNotConnected", e[e.DisplayNotConnectedResolved = 7] = "DisplayNotConnectedResolved", e[e.Duplicated = 8] = "Duplicated", e[e.DuplicatedResolved = 9] = "DuplicatedResolved", e[e.NonNativeResolution = 10] = "NonNativeResolution", e[e.NonNativeResolutionResolved = 11] = "NonNativeResolutionResolved", e[e.DeviceConnectedAndReady = 12] = "DeviceConnectedAndReady", e[e.DeviceDisconnected = 13] = "DeviceDisconnected", e[e.LensOn = 14] = "LensOn", e[e.LensOff = 15] = "LensOff"
	}(o || (o = {}));
	class ZMQService {
		constructor() {
			this._log = r.LogIt.getInstance()
		}
		static getInstance() {
			return ZMQService.instance || (ZMQService.instance = new ZMQService), ZMQService.instance
		}
		run() {
			return i(this, void 0, void 0, (function*() {}))
		}
	}
	t.ZMQService = ZMQService
}, , function(e, t, n) {
	"use strict";
	n.r(t), n.d(t, "audit", (function() {
		return audit
	})), n.d(t, "auditTime", (function() {
		return auditTime
	})), n.d(t, "buffer", (function() {
		return buffer_buffer
	})), n.d(t, "bufferCount", (function() {
		return bufferCount
	})), n.d(t, "bufferTime", (function() {
		return bufferTime
	})), n.d(t, "bufferToggle", (function() {
		return bufferToggle
	})), n.d(t, "bufferWhen", (function() {
		return bufferWhen
	})), n.d(t, "catchError", (function() {
		return catchError
	})), n.d(t, "combineAll", (function() {
		return combineAll
	})), n.d(t, "combineLatest", (function() {
		return combineLatest_combineLatest
	})), n.d(t, "concat", (function() {
		return concat_concat
	})), n.d(t, "concatAll", (function() {
		return concatAll
	})), n.d(t, "concatMap", (function() {
		return concatMap
	})), n.d(t, "concatMapTo", (function() {
		return concatMapTo
	})), n.d(t, "count", (function() {
		return count_count
	})), n.d(t, "debounce", (function() {
		return debounce
	})), n.d(t, "debounceTime", (function() {
		return debounceTime
	})), n.d(t, "defaultIfEmpty", (function() {
		return defaultIfEmpty
	})), n.d(t, "delay", (function() {
		return delay_delay
	})), n.d(t, "delayWhen", (function() {
		return delayWhen
	})), n.d(t, "dematerialize", (function() {
		return dematerialize
	})), n.d(t, "distinct", (function() {
		return distinct
	})), n.d(t, "distinctUntilChanged", (function() {
		return distinctUntilChanged
	})), n.d(t, "distinctUntilKeyChanged", (function() {
		return distinctUntilKeyChanged
	})), n.d(t, "elementAt", (function() {
		return elementAt
	})), n.d(t, "endWith", (function() {
		return endWith
	})), n.d(t, "every", (function() {
		return every
	})), n.d(t, "exhaust", (function() {
		return exhaust
	})), n.d(t, "exhaustMap", (function() {
		return exhaustMap
	})), n.d(t, "expand", (function() {
		return expand
	})), n.d(t, "filter", (function() {
		return filter
	})), n.d(t, "finalize", (function() {
		return finalize
	})), n.d(t, "find", (function() {
		return find
	})), n.d(t, "findIndex", (function() {
		return findIndex
	})), n.d(t, "first", (function() {
		return first
	})), n.d(t, "groupBy", (function() {
		return groupBy
	})), n.d(t, "ignoreElements", (function() {
		return ignoreElements
	})), n.d(t, "isEmpty", (function() {
		return isEmpty
	})), n.d(t, "last", (function() {
		return last_last
	})), n.d(t, "map", (function() {
		return map
	})), n.d(t, "mapTo", (function() {
		return mapTo
	})), n.d(t, "materialize", (function() {
		return materialize
	})), n.d(t, "max", (function() {
		return max_max
	})), n.d(t, "merge", (function() {
		return merge_merge
	})), n.d(t, "mergeAll", (function() {
		return mergeAll
	})), n.d(t, "mergeMap", (function() {
		return mergeMap
	})), n.d(t, "flatMap", (function() {
		return Y
	})), n.d(t, "mergeMapTo", (function() {
		return mergeMapTo
	})), n.d(t, "mergeScan", (function() {
		return mergeScan
	})), n.d(t, "min", (function() {
		return min_min
	})), n.d(t, "multicast", (function() {
		return multicast
	})), n.d(t, "observeOn", (function() {
		return observeOn
	})), n.d(t, "onErrorResumeNext", (function() {
		return onErrorResumeNext
	})), n.d(t, "pairwise", (function() {
		return pairwise
	})), n.d(t, "partition", (function() {
		return partition
	})), n.d(t, "pluck", (function() {
		return pluck
	})), n.d(t, "publish", (function() {
		return publish
	})), n.d(t, "publishBehavior", (function() {
		return publishBehavior
	})), n.d(t, "publishLast", (function() {
		return publishLast
	})), n.d(t, "publishReplay", (function() {
		return publishReplay
	})), n.d(t, "race", (function() {
		return race_race
	})), n.d(t, "reduce", (function() {
		return reduce
	})), n.d(t, "repeat", (function() {
		return repeat
	})), n.d(t, "repeatWhen", (function() {
		return repeatWhen
	})), n.d(t, "retry", (function() {
		return retry
	})), n.d(t, "retryWhen", (function() {
		return retryWhen
	})), n.d(t, "refCount", (function() {
		return refCount_refCount
	})), n.d(t, "sample", (function() {
		return sample
	})), n.d(t, "sampleTime", (function() {
		return sampleTime
	})), n.d(t, "scan", (function() {
		return scan
	})), n.d(t, "sequenceEqual", (function() {
		return sequenceEqual
	})), n.d(t, "share", (function() {
		return share
	})), n.d(t, "shareReplay", (function() {
		return shareReplay
	})), n.d(t, "single", (function() {
		return single
	})), n.d(t, "skip", (function() {
		return skip
	})), n.d(t, "skipLast", (function() {
		return skipLast
	})), n.d(t, "skipUntil", (function() {
		return skipUntil
	})), n.d(t, "skipWhile", (function() {
		return skipWhile
	})), n.d(t, "startWith", (function() {
		return startWith
	})), n.d(t, "subscribeOn", (function() {
		return subscribeOn
	})), n.d(t, "switchAll", (function() {
		return switchAll
	})), n.d(t, "switchMap", (function() {
		return switchMap
	})), n.d(t, "switchMapTo", (function() {
		return switchMapTo
	})), n.d(t, "take", (function() {
		return take
	})), n.d(t, "takeLast", (function() {
		return takeLast
	})), n.d(t, "takeUntil", (function() {
		return takeUntil
	})), n.d(t, "takeWhile", (function() {
		return takeWhile
	})), n.d(t, "tap", (function() {
		return tap
	})), n.d(t, "throttle", (function() {
		return throttle
	})), n.d(t, "throttleTime", (function() {
		return throttleTime
	})), n.d(t, "throwIfEmpty", (function() {
		return throwIfEmpty
	})), n.d(t, "timeInterval", (function() {
		return timeInterval
	})), n.d(t, "timeout", (function() {
		return timeout
	})), n.d(t, "timeoutWith", (function() {
		return timeoutWith
	})), n.d(t, "timestamp", (function() {
		return timestamp
	})), n.d(t, "toArray", (function() {
		return toArray
	})), n.d(t, "window", (function() {
		return window_window
	})), n.d(t, "windowCount", (function() {
		return windowCount
	})), n.d(t, "windowTime", (function() {
		return windowTime_windowTime
	})), n.d(t, "windowToggle", (function() {
		return windowToggle
	})), n.d(t, "windowWhen", (function() {
		return windowWhen
	})), n.d(t, "withLatestFrom", (function() {
		return withLatestFrom
	})), n.d(t, "zip", (function() {
		return zip_zip
	})), n.d(t, "zipAll", (function() {
		return zipAll
	}));
	var extendStatics = function(e, t) {
		return (extendStatics = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			})(e, t)
	};

	function __extends(e, t) {
		function __() {
			this.constructor = e
		}
		extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
	}

	function isFunction(e) {
		return "function" == typeof e
	}
	var i = !1,
		r = {
			Promise: void 0,
			set useDeprecatedSynchronousErrorHandling(e) {
				e && (new Error).stack;
				i = e
			},
			get useDeprecatedSynchronousErrorHandling() {
				return i
			}
		};

	function hostReportError(e) {
		setTimeout((function() {
			throw e
		}), 0)
	}
	var o = {
			closed: !0,
			next: function(e) {},
			error: function(e) {
				if (r.useDeprecatedSynchronousErrorHandling) throw e;
				hostReportError(e)
			},
			complete: function() {}
		},
		s = function() {
			return Array.isArray || function(e) {
				return e && "number" == typeof e.length
			}
		}();

	function isObject(e) {
		return null !== e && "object" == typeof e
	}
	var a = function() {
			function UnsubscriptionErrorImpl(e) {
				return Error.call(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map((function(e, t) {
					return t + 1 + ") " + e.toString()
				})).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e, this
			}
			return UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype), UnsubscriptionErrorImpl
		}(),
		c = function() {
			function Subscription(e) {
				this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e)
			}
			return Subscription.prototype.unsubscribe = function() {
				var e;
				if (!this.closed) {
					var t = this._parentOrParents,
						n = this._ctorUnsubscribe,
						i = this._unsubscribe,
						r = this._subscriptions;
					if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, t instanceof Subscription) t.remove(this);
					else if (null !== t)
						for (var o = 0; o < t.length; ++o) {
							t[o].remove(this)
						}
					if (isFunction(i)) {
						n && (this._unsubscribe = void 0);
						try {
							i.call(this)
						} catch (t) {
							e = t instanceof a ? flattenUnsubscriptionErrors(t.errors) : [t]
						}
					}
					if (s(r)) {
						o = -1;
						for (var c = r.length; ++o < c;) {
							var l = r[o];
							if (isObject(l)) try {
								l.unsubscribe()
							} catch (t) {
								e = e || [], t instanceof a ? e = e.concat(flattenUnsubscriptionErrors(t.errors)) : e.push(t)
							}
						}
					}
					if (e) throw new a(e)
				}
			}, Subscription.prototype.add = function(e) {
				var t = e;
				if (!e) return Subscription.EMPTY;
				switch (typeof e) {
					case "function":
						t = new Subscription(e);
					case "object":
						if (t === this || t.closed || "function" != typeof t.unsubscribe) return t;
						if (this.closed) return t.unsubscribe(), t;
						if (!(t instanceof Subscription)) {
							var n = t;
							(t = new Subscription)._subscriptions = [n]
						}
						break;
					default:
						throw new Error("unrecognized teardown " + e + " added to Subscription.")
				}
				var i = t._parentOrParents;
				if (null === i) t._parentOrParents = this;
				else if (i instanceof Subscription) {
					if (i === this) return t;
					t._parentOrParents = [i, this]
				} else {
					if (-1 !== i.indexOf(this)) return t;
					i.push(this)
				}
				var r = this._subscriptions;
				return null === r ? this._subscriptions = [t] : r.push(t), t
			}, Subscription.prototype.remove = function(e) {
				var t = this._subscriptions;
				if (t) {
					var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
				}
			}, Subscription.EMPTY = function(e) {
				return e.closed = !0, e
			}(new Subscription), Subscription
		}();

	function flattenUnsubscriptionErrors(e) {
		return e.reduce((function(e, t) {
			return e.concat(t instanceof a ? t.errors : t)
		}), [])
	}
	var l = function() {
			return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
		}(),
		u = function(e) {
			function Subscriber(t, n, i) {
				var r = e.call(this) || this;
				switch (r.syncErrorValue = null, r.syncErrorThrown = !1, r.syncErrorThrowable = !1, r.isStopped = !1, arguments.length) {
					case 0:
						r.destination = o;
						break;
					case 1:
						if (!t) {
							r.destination = o;
							break
						}
						if ("object" == typeof t) {
							t instanceof Subscriber ? (r.syncErrorThrowable = t.syncErrorThrowable, r.destination = t, t.add(r)) : (r.syncErrorThrowable = !0, r.destination = new d(r, t));
							break
						}
					default:
						r.syncErrorThrowable = !0, r.destination = new d(r, t, n, i)
				}
				return r
			}
			return __extends(Subscriber, e), Subscriber.prototype[l] = function() {
				return this
			}, Subscriber.create = function(e, t, n) {
				var i = new Subscriber(e, t, n);
				return i.syncErrorThrowable = !1, i
			}, Subscriber.prototype.next = function(e) {
				this.isStopped || this._next(e)
			}, Subscriber.prototype.error = function(e) {
				this.isStopped || (this.isStopped = !0, this._error(e))
			}, Subscriber.prototype.complete = function() {
				this.isStopped || (this.isStopped = !0, this._complete())
			}, Subscriber.prototype.unsubscribe = function() {
				this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
			}, Subscriber.prototype._next = function(e) {
				this.destination.next(e)
			}, Subscriber.prototype._error = function(e) {
				this.destination.error(e), this.unsubscribe()
			}, Subscriber.prototype._complete = function() {
				this.destination.complete(), this.unsubscribe()
			}, Subscriber.prototype._unsubscribeAndRecycle = function() {
				var e = this._parentOrParents;
				return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this
			}, Subscriber
		}(c),
		d = function(e) {
			function SafeSubscriber(t, n, i, r) {
				var s, a = e.call(this) || this;
				a._parentSubscriber = t;
				var c = a;
				return isFunction(n) ? s = n : n && (s = n.next, i = n.error, r = n.complete, n !== o && (isFunction((c = Object.create(n)).unsubscribe) && a.add(c.unsubscribe.bind(c)), c.unsubscribe = a.unsubscribe.bind(a))), a._context = c, a._next = s, a._error = i, a._complete = r, a
			}
			return __extends(SafeSubscriber, e), SafeSubscriber.prototype.next = function(e) {
				if (!this.isStopped && this._next) {
					var t = this._parentSubscriber;
					r.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
				}
			}, SafeSubscriber.prototype.error = function(e) {
				if (!this.isStopped) {
					var t = this._parentSubscriber,
						n = r.useDeprecatedSynchronousErrorHandling;
					if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
					else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : hostReportError(e), this.unsubscribe();
					else {
						if (this.unsubscribe(), n) throw e;
						hostReportError(e)
					}
				}
			}, SafeSubscriber.prototype.complete = function() {
				var e = this;
				if (!this.isStopped) {
					var t = this._parentSubscriber;
					if (this._complete) {
						var wrappedComplete = function() {
							return e._complete.call(e._context)
						};
						r.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, wrappedComplete), this.unsubscribe()) : (this.__tryOrUnsub(wrappedComplete), this.unsubscribe())
					} else this.unsubscribe()
				}
			}, SafeSubscriber.prototype.__tryOrUnsub = function(e, t) {
				try {
					e.call(this._context, t)
				} catch (e) {
					if (this.unsubscribe(), r.useDeprecatedSynchronousErrorHandling) throw e;
					hostReportError(e)
				}
			}, SafeSubscriber.prototype.__tryOrSetError = function(e, t, n) {
				if (!r.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
				try {
					t.call(this._context, n)
				} catch (t) {
					return r.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = t, e.syncErrorThrown = !0, !0) : (hostReportError(t), !0)
				}
				return !1
			}, SafeSubscriber.prototype._unsubscribe = function() {
				var e = this._parentSubscriber;
				this._context = null, this._parentSubscriber = null, e.unsubscribe()
			}, SafeSubscriber
		}(u);
	var h = function() {
		return "function" == typeof Symbol && Symbol.observable || "@@observable"
	}();

	function identity(e) {
		return e
	}

	function pipe() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return pipeFromArray(e)
	}

	function pipeFromArray(e) {
		return 0 === e.length ? identity : 1 === e.length ? e[0] : function piped(t) {
			return e.reduce((function(e, t) {
				return t(e)
			}), t)
		}
	}
	var p = function() {
		function Observable(e) {
			this._isScalar = !1, e && (this._subscribe = e)
		}
		return Observable.prototype.lift = function(e) {
			var t = new Observable;
			return t.source = this, t.operator = e, t
		}, Observable.prototype.subscribe = function(e, t, n) {
			var i = this.operator,
				s = function toSubscriber(e, t, n) {
					if (e) {
						if (e instanceof u) return e;
						if (e[l]) return e[l]()
					}
					return e || t || n ? new u(e, t, n) : new u(o)
				}(e, t, n);
			if (i ? s.add(i.call(s, this.source)) : s.add(this.source || r.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), r.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown)) throw s.syncErrorValue;
			return s
		}, Observable.prototype._trySubscribe = function(e) {
			try {
				return this._subscribe(e)
			} catch (t) {
				r.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t), ! function canReportError(e) {
					for (; e;) {
						var t = e,
							n = t.closed,
							i = t.destination,
							r = t.isStopped;
						if (n || r) return !1;
						e = i && i instanceof u ? i : null
					}
					return !0
				}(e) ? console.warn(t) : e.error(t)
			}
		}, Observable.prototype.forEach = function(e, t) {
			var n = this;
			return new(t = getPromiseCtor(t))((function(t, i) {
				var r;
				r = n.subscribe((function(t) {
					try {
						e(t)
					} catch (e) {
						i(e), r && r.unsubscribe()
					}
				}), i, t)
			}))
		}, Observable.prototype._subscribe = function(e) {
			var t = this.source;
			return t && t.subscribe(e)
		}, Observable.prototype[h] = function() {
			return this
		}, Observable.prototype.pipe = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			return 0 === e.length ? this : pipeFromArray(e)(this)
		}, Observable.prototype.toPromise = function(e) {
			var t = this;
			return new(e = getPromiseCtor(e))((function(e, n) {
				var i;
				t.subscribe((function(e) {
					return i = e
				}), (function(e) {
					return n(e)
				}), (function() {
					return e(i)
				}))
			}))
		}, Observable.create = function(e) {
			return new Observable(e)
		}, Observable
	}();

	function getPromiseCtor(e) {
		if (e || (e = r.Promise || Promise), !e) throw new Error("no Promise impl found");
		return e
	}
	var subscribeToArray = function(e) {
		return function(t) {
			for (var n = 0, i = e.length; n < i && !t.closed; n++) t.next(e[n]);
			t.complete()
		}
	};

	function getSymbolIterator() {
		return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
	}
	var f = getSymbolIterator(),
		isArrayLike = function(e) {
			return e && "number" == typeof e.length && "function" != typeof e
		};

	function isPromise(e) {
		return !!e && "function" != typeof e.subscribe && "function" == typeof e.then
	}
	var subscribeTo = function(e) {
			if (e && "function" == typeof e[h]) return i = e,
				function(e) {
					var t = i[h]();
					if ("function" != typeof t.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
					return t.subscribe(e)
				};
			if (isArrayLike(e)) return subscribeToArray(e);
			if (isPromise(e)) return n = e,
				function(e) {
					return n.then((function(t) {
						e.closed || (e.next(t), e.complete())
					}), (function(t) {
						return e.error(t)
					})).then(null, hostReportError), e
				};
			if (e && "function" == typeof e[f]) return t = e,
				function(e) {
					for (var n = t[f]();;) {
						var i = void 0;
						try {
							i = n.next()
						} catch (t) {
							return e.error(t), e
						}
						if (i.done) {
							e.complete();
							break
						}
						if (e.next(i.value), e.closed) break
					}
					return "function" == typeof n.return && e.add((function() {
						n.return && n.return()
					})), e
				};
			var t, n, i, r = isObject(e) ? "an invalid object" : "'" + e + "'";
			throw new TypeError("You provided " + r + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
		},
		g = function(e) {
			function SimpleInnerSubscriber(t) {
				var n = e.call(this) || this;
				return n.parent = t, n
			}
			return __extends(SimpleInnerSubscriber, e), SimpleInnerSubscriber.prototype._next = function(e) {
				this.parent.notifyNext(e)
			}, SimpleInnerSubscriber.prototype._error = function(e) {
				this.parent.notifyError(e), this.unsubscribe()
			}, SimpleInnerSubscriber.prototype._complete = function() {
				this.parent.notifyComplete(), this.unsubscribe()
			}, SimpleInnerSubscriber
		}(u),
		m = function(e) {
			function SimpleOuterSubscriber() {
				return null !== e && e.apply(this, arguments) || this
			}
			return __extends(SimpleOuterSubscriber, e), SimpleOuterSubscriber.prototype.notifyNext = function(e) {
				this.destination.next(e)
			}, SimpleOuterSubscriber.prototype.notifyError = function(e) {
				this.destination.error(e)
			}, SimpleOuterSubscriber.prototype.notifyComplete = function() {
				this.destination.complete()
			}, SimpleOuterSubscriber
		}(u);

	function innerSubscribe(e, t) {
		if (!t.closed) {
			if (e instanceof p) return e.subscribe(t);
			var n;
			try {
				n = subscribeTo(e)(t)
			} catch (e) {
				t.error(e)
			}
			return n
		}
	}

	function audit(e) {
		return function auditOperatorFunction(t) {
			return t.lift(new b(e))
		}
	}
	var b = function() {
			function AuditOperator(e) {
				this.durationSelector = e
			}
			return AuditOperator.prototype.call = function(e, t) {
				return t.subscribe(new y(e, this.durationSelector))
			}, AuditOperator
		}(),
		y = function(e) {
			function AuditSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.durationSelector = n, i.hasValue = !1, i
			}
			return __extends(AuditSubscriber, e), AuditSubscriber.prototype._next = function(e) {
				if (this.value = e, this.hasValue = !0, !this.throttled) {
					var t = void 0;
					try {
						t = (0, this.durationSelector)(e)
					} catch (e) {
						return this.destination.error(e)
					}
					var n = innerSubscribe(t, new g(this));
					!n || n.closed ? this.clearThrottle() : this.add(this.throttled = n)
				}
			}, AuditSubscriber.prototype.clearThrottle = function() {
				var e = this.value,
					t = this.hasValue,
					n = this.throttled;
				n && (this.remove(n), this.throttled = void 0, n.unsubscribe()), t && (this.value = void 0, this.hasValue = !1, this.destination.next(e))
			}, AuditSubscriber.prototype.notifyNext = function() {
				this.clearThrottle()
			}, AuditSubscriber.prototype.notifyComplete = function() {
				this.clearThrottle()
			}, AuditSubscriber
		}(m),
		S = function(e) {
			function AsyncAction(t, n) {
				var i = e.call(this, t, n) || this;
				return i.scheduler = t, i.work = n, i.pending = !1, i
			}
			return __extends(AsyncAction, e), AsyncAction.prototype.schedule = function(e, t) {
				if (void 0 === t && (t = 0), this.closed) return this;
				this.state = e;
				var n = this.id,
					i = this.scheduler;
				return null != n && (this.id = this.recycleAsyncId(i, n, t)), this.pending = !0, this.delay = t, this.id = this.id || this.requestAsyncId(i, this.id, t), this
			}, AsyncAction.prototype.requestAsyncId = function(e, t, n) {
				return void 0 === n && (n = 0), setInterval(e.flush.bind(e, this), n)
			}, AsyncAction.prototype.recycleAsyncId = function(e, t, n) {
				if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return t;
				clearInterval(t)
			}, AsyncAction.prototype.execute = function(e, t) {
				if (this.closed) return new Error("executing a cancelled action");
				this.pending = !1;
				var n = this._execute(e, t);
				if (n) return n;
				!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
			}, AsyncAction.prototype._execute = function(e, t) {
				var n = !1,
					i = void 0;
				try {
					this.work(e)
				} catch (e) {
					n = !0, i = !!e && e || new Error(e)
				}
				if (n) return this.unsubscribe(), i
			}, AsyncAction.prototype._unsubscribe = function() {
				var e = this.id,
					t = this.scheduler,
					n = t.actions,
					i = n.indexOf(this);
				this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== i && n.splice(i, 1), null != e && (this.id = this.recycleAsyncId(t, e, null)), this.delay = null
			}, AsyncAction
		}(function(e) {
			function Action(t, n) {
				return e.call(this) || this
			}
			return __extends(Action, e), Action.prototype.schedule = function(e, t) {
				return void 0 === t && (t = 0), this
			}, Action
		}(c)),
		v = function() {
			function Scheduler(e, t) {
				void 0 === t && (t = Scheduler.now), this.SchedulerAction = e, this.now = t
			}
			return Scheduler.prototype.schedule = function(e, t, n) {
				return void 0 === t && (t = 0), new this.SchedulerAction(this, e).schedule(n, t)
			}, Scheduler.now = function() {
				return Date.now()
			}, Scheduler
		}(),
		_ = function(e) {
			function AsyncScheduler(t, n) {
				void 0 === n && (n = v.now);
				var i = e.call(this, t, (function() {
					return AsyncScheduler.delegate && AsyncScheduler.delegate !== i ? AsyncScheduler.delegate.now() : n()
				})) || this;
				return i.actions = [], i.active = !1, i.scheduled = void 0, i
			}
			return __extends(AsyncScheduler, e), AsyncScheduler.prototype.schedule = function(t, n, i) {
				return void 0 === n && (n = 0), AsyncScheduler.delegate && AsyncScheduler.delegate !== this ? AsyncScheduler.delegate.schedule(t, n, i) : e.prototype.schedule.call(this, t, n, i)
			}, AsyncScheduler.prototype.flush = function(e) {
				var t = this.actions;
				if (this.active) t.push(e);
				else {
					var n;
					this.active = !0;
					do {
						if (n = e.execute(e.state, e.delay)) break
					} while (e = t.shift());
					if (this.active = !1, n) {
						for (; e = t.shift();) e.unsubscribe();
						throw n
					}
				}
			}, AsyncScheduler
		}(v),
		E = new _(S);

	function isNumeric(e) {
		return !s(e) && e - parseFloat(e) + 1 >= 0
	}

	function isScheduler(e) {
		return e && "function" == typeof e.schedule
	}

	function dispatch(e) {
		var t = e.index,
			n = e.period,
			i = e.subscriber;
		if (i.next(t), !i.closed) {
			if (-1 === n) return i.complete();
			e.index = t + 1, this.schedule(e, n)
		}
	}

	function auditTime(e, t) {
		return void 0 === t && (t = E), audit((function() {
			return function timer(e, t, n) {
				void 0 === e && (e = 0);
				var i = -1;
				return isNumeric(t) ? i = Number(t) < 1 ? 1 : Number(t) : isScheduler(t) && (n = t), isScheduler(n) || (n = E), new p((function(t) {
					var r = isNumeric(e) ? e : +e - n.now();
					return n.schedule(dispatch, r, {
						index: 0,
						period: i,
						subscriber: t
					})
				}))
			}(e, t)
		}))
	}

	function buffer_buffer(e) {
		return function bufferOperatorFunction(t) {
			return t.lift(new D(e))
		}
	}
	var D = function() {
			function BufferOperator(e) {
				this.closingNotifier = e
			}
			return BufferOperator.prototype.call = function(e, t) {
				return t.subscribe(new A(e, this.closingNotifier))
			}, BufferOperator
		}(),
		A = function(e) {
			function BufferSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.buffer = [], i.add(innerSubscribe(n, new g(i))), i
			}
			return __extends(BufferSubscriber, e), BufferSubscriber.prototype._next = function(e) {
				this.buffer.push(e)
			}, BufferSubscriber.prototype.notifyNext = function() {
				var e = this.buffer;
				this.buffer = [], this.destination.next(e)
			}, BufferSubscriber
		}(m);

	function bufferCount(e, t) {
		return void 0 === t && (t = null),
			function bufferCountOperatorFunction(n) {
				return n.lift(new k(e, t))
			}
	}
	var k = function() {
			function BufferCountOperator(e, t) {
				this.bufferSize = e, this.startBufferEvery = t, this.subscriberClass = t && e !== t ? I : C
			}
			return BufferCountOperator.prototype.call = function(e, t) {
				return t.subscribe(new this.subscriberClass(e, this.bufferSize, this.startBufferEvery))
			}, BufferCountOperator
		}(),
		C = function(e) {
			function BufferCountSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.bufferSize = n, i.buffer = [], i
			}
			return __extends(BufferCountSubscriber, e), BufferCountSubscriber.prototype._next = function(e) {
				var t = this.buffer;
				t.push(e), t.length == this.bufferSize && (this.destination.next(t), this.buffer = [])
			}, BufferCountSubscriber.prototype._complete = function() {
				var t = this.buffer;
				t.length > 0 && this.destination.next(t), e.prototype._complete.call(this)
			}, BufferCountSubscriber
		}(u),
		I = function(e) {
			function BufferSkipCountSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.bufferSize = n, r.startBufferEvery = i, r.buffers = [], r.count = 0, r
			}
			return __extends(BufferSkipCountSubscriber, e), BufferSkipCountSubscriber.prototype._next = function(e) {
				var t = this.bufferSize,
					n = this.startBufferEvery,
					i = this.buffers,
					r = this.count;
				this.count++, r % n == 0 && i.push([]);
				for (var o = i.length; o--;) {
					var s = i[o];
					s.push(e), s.length === t && (i.splice(o, 1), this.destination.next(s))
				}
			}, BufferSkipCountSubscriber.prototype._complete = function() {
				for (var t = this.buffers, n = this.destination; t.length > 0;) {
					var i = t.shift();
					i.length > 0 && n.next(i)
				}
				e.prototype._complete.call(this)
			}, BufferSkipCountSubscriber
		}(u);

	function bufferTime(e) {
		var t = arguments.length,
			n = E;
		isScheduler(arguments[arguments.length - 1]) && (n = arguments[arguments.length - 1], t--);
		var i = null;
		t >= 2 && (i = arguments[1]);
		var r = Number.POSITIVE_INFINITY;
		return t >= 3 && (r = arguments[2]),
			function bufferTimeOperatorFunction(t) {
				return t.lift(new O(e, i, r, n))
			}
	}
	var O = function() {
			function BufferTimeOperator(e, t, n, i) {
				this.bufferTimeSpan = e, this.bufferCreationInterval = t, this.maxBufferSize = n, this.scheduler = i
			}
			return BufferTimeOperator.prototype.call = function(e, t) {
				return t.subscribe(new x(e, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler))
			}, BufferTimeOperator
		}(),
		T = function() {
			return function Context() {
				this.buffer = []
			}
		}(),
		x = function(e) {
			function BufferTimeSubscriber(t, n, i, r, o) {
				var s = e.call(this, t) || this;
				s.bufferTimeSpan = n, s.bufferCreationInterval = i, s.maxBufferSize = r, s.scheduler = o, s.contexts = [];
				var a = s.openContext();
				if (s.timespanOnly = null == i || i < 0, s.timespanOnly) {
					var c = {
						subscriber: s,
						context: a,
						bufferTimeSpan: n
					};
					s.add(a.closeAction = o.schedule(dispatchBufferTimeSpanOnly, n, c))
				} else {
					var l = {
							subscriber: s,
							context: a
						},
						u = {
							bufferTimeSpan: n,
							bufferCreationInterval: i,
							subscriber: s,
							scheduler: o
						};
					s.add(a.closeAction = o.schedule(dispatchBufferClose, n, l)), s.add(o.schedule(dispatchBufferCreation, i, u))
				}
				return s
			}
			return __extends(BufferTimeSubscriber, e), BufferTimeSubscriber.prototype._next = function(e) {
				for (var t, n = this.contexts, i = n.length, r = 0; r < i; r++) {
					var o = n[r],
						s = o.buffer;
					s.push(e), s.length == this.maxBufferSize && (t = o)
				}
				t && this.onBufferFull(t)
			}, BufferTimeSubscriber.prototype._error = function(t) {
				this.contexts.length = 0, e.prototype._error.call(this, t)
			}, BufferTimeSubscriber.prototype._complete = function() {
				for (var t = this.contexts, n = this.destination; t.length > 0;) {
					var i = t.shift();
					n.next(i.buffer)
				}
				e.prototype._complete.call(this)
			}, BufferTimeSubscriber.prototype._unsubscribe = function() {
				this.contexts = null
			}, BufferTimeSubscriber.prototype.onBufferFull = function(e) {
				this.closeContext(e);
				var t = e.closeAction;
				if (t.unsubscribe(), this.remove(t), !this.closed && this.timespanOnly) {
					e = this.openContext();
					var n = this.bufferTimeSpan,
						i = {
							subscriber: this,
							context: e,
							bufferTimeSpan: n
						};
					this.add(e.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, n, i))
				}
			}, BufferTimeSubscriber.prototype.openContext = function() {
				var e = new T;
				return this.contexts.push(e), e
			}, BufferTimeSubscriber.prototype.closeContext = function(e) {
				this.destination.next(e.buffer);
				var t = this.contexts;
				(t ? t.indexOf(e) : -1) >= 0 && t.splice(t.indexOf(e), 1)
			}, BufferTimeSubscriber
		}(u);

	function dispatchBufferTimeSpanOnly(e) {
		var t = e.subscriber,
			n = e.context;
		n && t.closeContext(n), t.closed || (e.context = t.openContext(), e.context.closeAction = this.schedule(e, e.bufferTimeSpan))
	}

	function dispatchBufferCreation(e) {
		var t = e.bufferCreationInterval,
			n = e.bufferTimeSpan,
			i = e.subscriber,
			r = e.scheduler,
			o = i.openContext();
		i.closed || (i.add(o.closeAction = r.schedule(dispatchBufferClose, n, {
			subscriber: i,
			context: o
		})), this.schedule(e, t))
	}

	function dispatchBufferClose(e) {
		var t = e.subscriber,
			n = e.context;
		t.closeContext(n)
	}
	var L = function(e) {
		function InnerSubscriber(t, n, i) {
			var r = e.call(this) || this;
			return r.parent = t, r.outerValue = n, r.outerIndex = i, r.index = 0, r
		}
		return __extends(InnerSubscriber, e), InnerSubscriber.prototype._next = function(e) {
			this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
		}, InnerSubscriber.prototype._error = function(e) {
			this.parent.notifyError(e, this), this.unsubscribe()
		}, InnerSubscriber.prototype._complete = function() {
			this.parent.notifyComplete(this), this.unsubscribe()
		}, InnerSubscriber
	}(u);

	function subscribeToResult(e, t, n, i, r) {
		if (void 0 === r && (r = new L(e, n, i)), !r.closed) return t instanceof p ? t.subscribe(r) : subscribeTo(t)(r)
	}
	var N = function(e) {
		function OuterSubscriber() {
			return null !== e && e.apply(this, arguments) || this
		}
		return __extends(OuterSubscriber, e), OuterSubscriber.prototype.notifyNext = function(e, t, n, i, r) {
			this.destination.next(t)
		}, OuterSubscriber.prototype.notifyError = function(e, t) {
			this.destination.error(e)
		}, OuterSubscriber.prototype.notifyComplete = function(e) {
			this.destination.complete()
		}, OuterSubscriber
	}(u);

	function bufferToggle(e, t) {
		return function bufferToggleOperatorFunction(n) {
			return n.lift(new R(e, t))
		}
	}
	var R = function() {
			function BufferToggleOperator(e, t) {
				this.openings = e, this.closingSelector = t
			}
			return BufferToggleOperator.prototype.call = function(e, t) {
				return t.subscribe(new P(e, this.openings, this.closingSelector))
			}, BufferToggleOperator
		}(),
		P = function(e) {
			function BufferToggleSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.closingSelector = i, r.contexts = [], r.add(subscribeToResult(r, n)), r
			}
			return __extends(BufferToggleSubscriber, e), BufferToggleSubscriber.prototype._next = function(e) {
				for (var t = this.contexts, n = t.length, i = 0; i < n; i++) t[i].buffer.push(e)
			}, BufferToggleSubscriber.prototype._error = function(t) {
				for (var n = this.contexts; n.length > 0;) {
					var i = n.shift();
					i.subscription.unsubscribe(), i.buffer = null, i.subscription = null
				}
				this.contexts = null, e.prototype._error.call(this, t)
			}, BufferToggleSubscriber.prototype._complete = function() {
				for (var t = this.contexts; t.length > 0;) {
					var n = t.shift();
					this.destination.next(n.buffer), n.subscription.unsubscribe(), n.buffer = null, n.subscription = null
				}
				this.contexts = null, e.prototype._complete.call(this)
			}, BufferToggleSubscriber.prototype.notifyNext = function(e, t) {
				e ? this.closeBuffer(e) : this.openBuffer(t)
			}, BufferToggleSubscriber.prototype.notifyComplete = function(e) {
				this.closeBuffer(e.context)
			}, BufferToggleSubscriber.prototype.openBuffer = function(e) {
				try {
					var t = this.closingSelector.call(this, e);
					t && this.trySubscribe(t)
				} catch (e) {
					this._error(e)
				}
			}, BufferToggleSubscriber.prototype.closeBuffer = function(e) {
				var t = this.contexts;
				if (t && e) {
					var n = e.buffer,
						i = e.subscription;
					this.destination.next(n), t.splice(t.indexOf(e), 1), this.remove(i), i.unsubscribe()
				}
			}, BufferToggleSubscriber.prototype.trySubscribe = function(e) {
				var t = this.contexts,
					n = new c,
					i = {
						buffer: [],
						subscription: n
					};
				t.push(i);
				var r = subscribeToResult(this, e, i);
				!r || r.closed ? this.closeBuffer(i) : (r.context = i, this.add(r), n.add(r))
			}, BufferToggleSubscriber
		}(N);

	function bufferWhen(e) {
		return function(t) {
			return t.lift(new M(e))
		}
	}
	var M = function() {
			function BufferWhenOperator(e) {
				this.closingSelector = e
			}
			return BufferWhenOperator.prototype.call = function(e, t) {
				return t.subscribe(new U(e, this.closingSelector))
			}, BufferWhenOperator
		}(),
		U = function(e) {
			function BufferWhenSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.closingSelector = n, i.subscribing = !1, i.openBuffer(), i
			}
			return __extends(BufferWhenSubscriber, e), BufferWhenSubscriber.prototype._next = function(e) {
				this.buffer.push(e)
			}, BufferWhenSubscriber.prototype._complete = function() {
				var t = this.buffer;
				t && this.destination.next(t), e.prototype._complete.call(this)
			}, BufferWhenSubscriber.prototype._unsubscribe = function() {
				this.buffer = void 0, this.subscribing = !1
			}, BufferWhenSubscriber.prototype.notifyNext = function() {
				this.openBuffer()
			}, BufferWhenSubscriber.prototype.notifyComplete = function() {
				this.subscribing ? this.complete() : this.openBuffer()
			}, BufferWhenSubscriber.prototype.openBuffer = function() {
				var e = this.closingSubscription;
				e && (this.remove(e), e.unsubscribe());
				var t, n = this.buffer;
				this.buffer && this.destination.next(n), this.buffer = [];
				try {
					t = (0, this.closingSelector)()
				} catch (e) {
					return this.error(e)
				}
				e = new c, this.closingSubscription = e, this.add(e), this.subscribing = !0, e.add(innerSubscribe(t, new g(this))), this.subscribing = !1
			}, BufferWhenSubscriber
		}(m);

	function catchError(e) {
		return function catchErrorOperatorFunction(t) {
			var n = new j(e),
				i = t.lift(n);
			return n.caught = i
		}
	}
	var j = function() {
			function CatchOperator(e) {
				this.selector = e
			}
			return CatchOperator.prototype.call = function(e, t) {
				return t.subscribe(new W(e, this.selector, this.caught))
			}, CatchOperator
		}(),
		W = function(e) {
			function CatchSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.selector = n, r.caught = i, r
			}
			return __extends(CatchSubscriber, e), CatchSubscriber.prototype.error = function(t) {
				if (!this.isStopped) {
					var n = void 0;
					try {
						n = this.selector(t, this.caught)
					} catch (t) {
						return void e.prototype.error.call(this, t)
					}
					this._unsubscribeAndRecycle();
					var i = new g(this);
					this.add(i);
					var r = innerSubscribe(n, i);
					r !== i && this.add(r)
				}
			}, CatchSubscriber
		}(m);

	function scheduleArray(e, t) {
		return new p((function(n) {
			var i = new c,
				r = 0;
			return i.add(t.schedule((function() {
				r !== e.length ? (n.next(e[r++]), n.closed || i.add(this.schedule())) : n.complete()
			}))), i
		}))
	}

	function fromArray(e, t) {
		return t ? scheduleArray(e, t) : new p(subscribeToArray(e))
	}
	var B = {};
	var V = function() {
			function CombineLatestOperator(e) {
				this.resultSelector = e
			}
			return CombineLatestOperator.prototype.call = function(e, t) {
				return t.subscribe(new z(e, this.resultSelector))
			}, CombineLatestOperator
		}(),
		z = function(e) {
			function CombineLatestSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.resultSelector = n, i.active = 0, i.values = [], i.observables = [], i
			}
			return __extends(CombineLatestSubscriber, e), CombineLatestSubscriber.prototype._next = function(e) {
				this.values.push(B), this.observables.push(e)
			}, CombineLatestSubscriber.prototype._complete = function() {
				var e = this.observables,
					t = e.length;
				if (0 === t) this.destination.complete();
				else {
					this.active = t, this.toRespond = t;
					for (var n = 0; n < t; n++) {
						var i = e[n];
						this.add(subscribeToResult(this, i, void 0, n))
					}
				}
			}, CombineLatestSubscriber.prototype.notifyComplete = function(e) {
				0 == (this.active -= 1) && this.destination.complete()
			}, CombineLatestSubscriber.prototype.notifyNext = function(e, t, n) {
				var i = this.values,
					r = i[n],
					o = this.toRespond ? r === B ? --this.toRespond : this.toRespond : 0;
				i[n] = t, 0 === o && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()))
			}, CombineLatestSubscriber.prototype._tryResultSelector = function(e) {
				var t;
				try {
					t = this.resultSelector.apply(this, e)
				} catch (e) {
					return void this.destination.error(e)
				}
				this.destination.next(t)
			}, CombineLatestSubscriber
		}(N);

	function combineAll(e) {
		return function(t) {
			return t.lift(new V(e))
		}
	}

	function scheduled(e, t) {
		if (null != e) {
			if (function isInteropObservable(e) {
					return e && "function" == typeof e[h]
				}(e)) return function scheduleObservable(e, t) {
				return new p((function(n) {
					var i = new c;
					return i.add(t.schedule((function() {
						var r = e[h]();
						i.add(r.subscribe({
							next: function(e) {
								i.add(t.schedule((function() {
									return n.next(e)
								})))
							},
							error: function(e) {
								i.add(t.schedule((function() {
									return n.error(e)
								})))
							},
							complete: function() {
								i.add(t.schedule((function() {
									return n.complete()
								})))
							}
						}))
					}))), i
				}))
			}(e, t);
			if (isPromise(e)) return function schedulePromise(e, t) {
				return new p((function(n) {
					var i = new c;
					return i.add(t.schedule((function() {
						return e.then((function(e) {
							i.add(t.schedule((function() {
								n.next(e), i.add(t.schedule((function() {
									return n.complete()
								})))
							})))
						}), (function(e) {
							i.add(t.schedule((function() {
								return n.error(e)
							})))
						}))
					}))), i
				}))
			}(e, t);
			if (isArrayLike(e)) return scheduleArray(e, t);
			if (function isIterable(e) {
					return e && "function" == typeof e[f]
				}(e) || "string" == typeof e) return function scheduleIterable(e, t) {
				if (!e) throw new Error("Iterable cannot be null");
				return new p((function(n) {
					var i, r = new c;
					return r.add((function() {
						i && "function" == typeof i.return && i.return()
					})), r.add(t.schedule((function() {
						i = e[f](), r.add(t.schedule((function() {
							if (!n.closed) {
								var e, t;
								try {
									var r = i.next();
									e = r.value, t = r.done
								} catch (e) {
									return void n.error(e)
								}
								t ? n.complete() : (n.next(e), this.schedule())
							}
						})))
					}))), r
				}))
			}(e, t)
		}
		throw new TypeError((null !== e && typeof e || e) + " is not observable")
	}

	function from(e, t) {
		return t ? scheduled(e, t) : e instanceof p ? e : new p(subscribeTo(e))
	}

	function combineLatest_combineLatest() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		var n = null;
		return "function" == typeof e[e.length - 1] && (n = e.pop()), 1 === e.length && s(e[0]) && (e = e[0].slice()),
			function(t) {
				return t.lift.call(from([t].concat(e)), new V(n))
			}
	}

	function of() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		var n = e[e.length - 1];
		return isScheduler(n) ? (e.pop(), scheduleArray(e, n)) : fromArray(e)
	}

	function map(e, t) {
		return function mapOperation(n) {
			if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
			return n.lift(new $(e, t))
		}
	}
	var $ = function() {
			function MapOperator(e, t) {
				this.project = e, this.thisArg = t
			}
			return MapOperator.prototype.call = function(e, t) {
				return t.subscribe(new H(e, this.project, this.thisArg))
			}, MapOperator
		}(),
		H = function(e) {
			function MapSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.project = n, r.count = 0, r.thisArg = i || r, r
			}
			return __extends(MapSubscriber, e), MapSubscriber.prototype._next = function(e) {
				var t;
				try {
					t = this.project.call(this.thisArg, e, this.count++)
				} catch (e) {
					return void this.destination.error(e)
				}
				this.destination.next(t)
			}, MapSubscriber
		}(u);

	function mergeMap(e, t, n) {
		return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof t ? function(i) {
			return i.pipe(mergeMap((function(n, i) {
				return from(e(n, i)).pipe(map((function(e, r) {
					return t(n, e, i, r)
				})))
			}), n))
		} : ("number" == typeof t && (n = t), function(t) {
			return t.lift(new G(e, n))
		})
	}
	var G = function() {
			function MergeMapOperator(e, t) {
				void 0 === t && (t = Number.POSITIVE_INFINITY), this.project = e, this.concurrent = t
			}
			return MergeMapOperator.prototype.call = function(e, t) {
				return t.subscribe(new q(e, this.project, this.concurrent))
			}, MergeMapOperator
		}(),
		q = function(e) {
			function MergeMapSubscriber(t, n, i) {
				void 0 === i && (i = Number.POSITIVE_INFINITY);
				var r = e.call(this, t) || this;
				return r.project = n, r.concurrent = i, r.hasCompleted = !1, r.buffer = [], r.active = 0, r.index = 0, r
			}
			return __extends(MergeMapSubscriber, e), MergeMapSubscriber.prototype._next = function(e) {
				this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
			}, MergeMapSubscriber.prototype._tryNext = function(e) {
				var t, n = this.index++;
				try {
					t = this.project(e, n)
				} catch (e) {
					return void this.destination.error(e)
				}
				this.active++, this._innerSub(t)
			}, MergeMapSubscriber.prototype._innerSub = function(e) {
				var t = new g(this),
					n = this.destination;
				n.add(t);
				var i = innerSubscribe(e, t);
				i !== t && n.add(i)
			}, MergeMapSubscriber.prototype._complete = function() {
				this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
			}, MergeMapSubscriber.prototype.notifyNext = function(e) {
				this.destination.next(e)
			}, MergeMapSubscriber.prototype.notifyComplete = function() {
				var e = this.buffer;
				this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
			}, MergeMapSubscriber
		}(m),
		Y = mergeMap;

	function mergeAll(e) {
		return void 0 === e && (e = Number.POSITIVE_INFINITY), mergeMap(identity, e)
	}

	function concatAll() {
		return mergeAll(1)
	}

	function concat() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return concatAll()(of.apply(void 0, e))
	}

	function concat_concat() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return function(t) {
			return t.lift.call(concat.apply(void 0, [t].concat(e)))
		}
	}

	function concatMap(e, t) {
		return mergeMap(e, t, 1)
	}

	function concatMapTo(e, t) {
		return concatMap((function() {
			return e
		}), t)
	}

	function count_count(e) {
		return function(t) {
			return t.lift(new K(e, t))
		}
	}
	var K = function() {
			function CountOperator(e, t) {
				this.predicate = e, this.source = t
			}
			return CountOperator.prototype.call = function(e, t) {
				return t.subscribe(new X(e, this.predicate, this.source))
			}, CountOperator
		}(),
		X = function(e) {
			function CountSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.predicate = n, r.source = i, r.count = 0, r.index = 0, r
			}
			return __extends(CountSubscriber, e), CountSubscriber.prototype._next = function(e) {
				this.predicate ? this._tryPredicate(e) : this.count++
			}, CountSubscriber.prototype._tryPredicate = function(e) {
				var t;
				try {
					t = this.predicate(e, this.index++, this.source)
				} catch (e) {
					return void this.destination.error(e)
				}
				t && this.count++
			}, CountSubscriber.prototype._complete = function() {
				this.destination.next(this.count), this.destination.complete()
			}, CountSubscriber
		}(u);

	function debounce(e) {
		return function(t) {
			return t.lift(new J(e))
		}
	}
	var J = function() {
			function DebounceOperator(e) {
				this.durationSelector = e
			}
			return DebounceOperator.prototype.call = function(e, t) {
				return t.subscribe(new Z(e, this.durationSelector))
			}, DebounceOperator
		}(),
		Z = function(e) {
			function DebounceSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.durationSelector = n, i.hasValue = !1, i
			}
			return __extends(DebounceSubscriber, e), DebounceSubscriber.prototype._next = function(e) {
				try {
					var t = this.durationSelector.call(this, e);
					t && this._tryNext(e, t)
				} catch (e) {
					this.destination.error(e)
				}
			}, DebounceSubscriber.prototype._complete = function() {
				this.emitValue(), this.destination.complete()
			}, DebounceSubscriber.prototype._tryNext = function(e, t) {
				var n = this.durationSubscription;
				this.value = e, this.hasValue = !0, n && (n.unsubscribe(), this.remove(n)), (n = innerSubscribe(t, new g(this))) && !n.closed && this.add(this.durationSubscription = n)
			}, DebounceSubscriber.prototype.notifyNext = function() {
				this.emitValue()
			}, DebounceSubscriber.prototype.notifyComplete = function() {
				this.emitValue()
			}, DebounceSubscriber.prototype.emitValue = function() {
				if (this.hasValue) {
					var t = this.value,
						n = this.durationSubscription;
					n && (this.durationSubscription = void 0, n.unsubscribe(), this.remove(n)), this.value = void 0, this.hasValue = !1, e.prototype._next.call(this, t)
				}
			}, DebounceSubscriber
		}(m);

	function debounceTime(e, t) {
		return void 0 === t && (t = E),
			function(n) {
				return n.lift(new Q(e, t))
			}
	}
	var Q = function() {
			function DebounceTimeOperator(e, t) {
				this.dueTime = e, this.scheduler = t
			}
			return DebounceTimeOperator.prototype.call = function(e, t) {
				return t.subscribe(new ee(e, this.dueTime, this.scheduler))
			}, DebounceTimeOperator
		}(),
		ee = function(e) {
			function DebounceTimeSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.dueTime = n, r.scheduler = i, r.debouncedSubscription = null, r.lastValue = null, r.hasValue = !1, r
			}
			return __extends(DebounceTimeSubscriber, e), DebounceTimeSubscriber.prototype._next = function(e) {
				this.clearDebounce(), this.lastValue = e, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this))
			}, DebounceTimeSubscriber.prototype._complete = function() {
				this.debouncedNext(), this.destination.complete()
			}, DebounceTimeSubscriber.prototype.debouncedNext = function() {
				if (this.clearDebounce(), this.hasValue) {
					var e = this.lastValue;
					this.lastValue = null, this.hasValue = !1, this.destination.next(e)
				}
			}, DebounceTimeSubscriber.prototype.clearDebounce = function() {
				var e = this.debouncedSubscription;
				null !== e && (this.remove(e), e.unsubscribe(), this.debouncedSubscription = null)
			}, DebounceTimeSubscriber
		}(u);

	function dispatchNext(e) {
		e.debouncedNext()
	}

	function defaultIfEmpty(e) {
		return void 0 === e && (e = null),
			function(t) {
				return t.lift(new te(e))
			}
	}
	var te = function() {
			function DefaultIfEmptyOperator(e) {
				this.defaultValue = e
			}
			return DefaultIfEmptyOperator.prototype.call = function(e, t) {
				return t.subscribe(new ne(e, this.defaultValue))
			}, DefaultIfEmptyOperator
		}(),
		ne = function(e) {
			function DefaultIfEmptySubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.defaultValue = n, i.isEmpty = !0, i
			}
			return __extends(DefaultIfEmptySubscriber, e), DefaultIfEmptySubscriber.prototype._next = function(e) {
				this.isEmpty = !1, this.destination.next(e)
			}, DefaultIfEmptySubscriber.prototype._complete = function() {
				this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
			}, DefaultIfEmptySubscriber
		}(u);

	function isDate(e) {
		return e instanceof Date && !isNaN(+e)
	}
	var ie, re = new p((function(e) {
		return e.complete()
	}));

	function empty_empty(e) {
		return e ? function emptyScheduled(e) {
			return new p((function(t) {
				return e.schedule((function() {
					return t.complete()
				}))
			}))
		}(e) : re
	}

	function throwError(e, t) {
		return new p(t ? function(n) {
			return t.schedule(throwError_dispatch, 0, {
				error: e,
				subscriber: n
			})
		} : function(t) {
			return t.error(e)
		})
	}

	function throwError_dispatch(e) {
		var t = e.error;
		e.subscriber.error(t)
	}
	ie || (ie = {});
	var oe = function() {
		function Notification(e, t, n) {
			this.kind = e, this.value = t, this.error = n, this.hasValue = "N" === e
		}
		return Notification.prototype.observe = function(e) {
			switch (this.kind) {
				case "N":
					return e.next && e.next(this.value);
				case "E":
					return e.error && e.error(this.error);
				case "C":
					return e.complete && e.complete()
			}
		}, Notification.prototype.do = function(e, t, n) {
			switch (this.kind) {
				case "N":
					return e && e(this.value);
				case "E":
					return t && t(this.error);
				case "C":
					return n && n()
			}
		}, Notification.prototype.accept = function(e, t, n) {
			return e && "function" == typeof e.next ? this.observe(e) : this.do(e, t, n)
		}, Notification.prototype.toObservable = function() {
			switch (this.kind) {
				case "N":
					return of(this.value);
				case "E":
					return throwError(this.error);
				case "C":
					return empty_empty()
			}
			throw new Error("unexpected notification kind value")
		}, Notification.createNext = function(e) {
			return void 0 !== e ? new Notification("N", e) : Notification.undefinedValueNotification
		}, Notification.createError = function(e) {
			return new Notification("E", void 0, e)
		}, Notification.createComplete = function() {
			return Notification.completeNotification
		}, Notification.completeNotification = new Notification("C"), Notification.undefinedValueNotification = new Notification("N", void 0), Notification
	}();

	function delay_delay(e, t) {
		void 0 === t && (t = E);
		var n = isDate(e) ? +e - t.now() : Math.abs(e);
		return function(e) {
			return e.lift(new se(n, t))
		}
	}
	var se = function() {
			function DelayOperator(e, t) {
				this.delay = e, this.scheduler = t
			}
			return DelayOperator.prototype.call = function(e, t) {
				return t.subscribe(new ae(e, this.delay, this.scheduler))
			}, DelayOperator
		}(),
		ae = function(e) {
			function DelaySubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.delay = n, r.scheduler = i, r.queue = [], r.active = !1, r.errored = !1, r
			}
			return __extends(DelaySubscriber, e), DelaySubscriber.dispatch = function(e) {
				for (var t = e.source, n = t.queue, i = e.scheduler, r = e.destination; n.length > 0 && n[0].time - i.now() <= 0;) n.shift().notification.observe(r);
				if (n.length > 0) {
					var o = Math.max(0, n[0].time - i.now());
					this.schedule(e, o)
				} else this.unsubscribe(), t.active = !1
			}, DelaySubscriber.prototype._schedule = function(e) {
				this.active = !0, this.destination.add(e.schedule(DelaySubscriber.dispatch, this.delay, {
					source: this,
					destination: this.destination,
					scheduler: e
				}))
			}, DelaySubscriber.prototype.scheduleNotification = function(e) {
				if (!0 !== this.errored) {
					var t = this.scheduler,
						n = new ce(t.now() + this.delay, e);
					this.queue.push(n), !1 === this.active && this._schedule(t)
				}
			}, DelaySubscriber.prototype._next = function(e) {
				this.scheduleNotification(oe.createNext(e))
			}, DelaySubscriber.prototype._error = function(e) {
				this.errored = !0, this.queue = [], this.destination.error(e), this.unsubscribe()
			}, DelaySubscriber.prototype._complete = function() {
				this.scheduleNotification(oe.createComplete()), this.unsubscribe()
			}, DelaySubscriber
		}(u),
		ce = function() {
			return function DelayMessage(e, t) {
				this.time = e, this.notification = t
			}
		}();

	function delayWhen(e, t) {
		return t ? function(n) {
			return new de(n, t).lift(new le(e))
		} : function(t) {
			return t.lift(new le(e))
		}
	}
	var le = function() {
			function DelayWhenOperator(e) {
				this.delayDurationSelector = e
			}
			return DelayWhenOperator.prototype.call = function(e, t) {
				return t.subscribe(new ue(e, this.delayDurationSelector))
			}, DelayWhenOperator
		}(),
		ue = function(e) {
			function DelayWhenSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.delayDurationSelector = n, i.completed = !1, i.delayNotifierSubscriptions = [], i.index = 0, i
			}
			return __extends(DelayWhenSubscriber, e), DelayWhenSubscriber.prototype.notifyNext = function(e, t, n, i, r) {
				this.destination.next(e), this.removeSubscription(r), this.tryComplete()
			}, DelayWhenSubscriber.prototype.notifyError = function(e, t) {
				this._error(e)
			}, DelayWhenSubscriber.prototype.notifyComplete = function(e) {
				var t = this.removeSubscription(e);
				t && this.destination.next(t), this.tryComplete()
			}, DelayWhenSubscriber.prototype._next = function(e) {
				var t = this.index++;
				try {
					var n = this.delayDurationSelector(e, t);
					n && this.tryDelay(n, e)
				} catch (e) {
					this.destination.error(e)
				}
			}, DelayWhenSubscriber.prototype._complete = function() {
				this.completed = !0, this.tryComplete(), this.unsubscribe()
			}, DelayWhenSubscriber.prototype.removeSubscription = function(e) {
				e.unsubscribe();
				var t = this.delayNotifierSubscriptions.indexOf(e);
				return -1 !== t && this.delayNotifierSubscriptions.splice(t, 1), e.outerValue
			}, DelayWhenSubscriber.prototype.tryDelay = function(e, t) {
				var n = subscribeToResult(this, e, t);
				n && !n.closed && (this.destination.add(n), this.delayNotifierSubscriptions.push(n))
			}, DelayWhenSubscriber.prototype.tryComplete = function() {
				this.completed && 0 === this.delayNotifierSubscriptions.length && this.destination.complete()
			}, DelayWhenSubscriber
		}(N),
		de = function(e) {
			function SubscriptionDelayObservable(t, n) {
				var i = e.call(this) || this;
				return i.source = t, i.subscriptionDelay = n, i
			}
			return __extends(SubscriptionDelayObservable, e), SubscriptionDelayObservable.prototype._subscribe = function(e) {
				this.subscriptionDelay.subscribe(new he(e, this.source))
			}, SubscriptionDelayObservable
		}(p),
		he = function(e) {
			function SubscriptionDelaySubscriber(t, n) {
				var i = e.call(this) || this;
				return i.parent = t, i.source = n, i.sourceSubscribed = !1, i
			}
			return __extends(SubscriptionDelaySubscriber, e), SubscriptionDelaySubscriber.prototype._next = function(e) {
				this.subscribeToSource()
			}, SubscriptionDelaySubscriber.prototype._error = function(e) {
				this.unsubscribe(), this.parent.error(e)
			}, SubscriptionDelaySubscriber.prototype._complete = function() {
				this.unsubscribe(), this.subscribeToSource()
			}, SubscriptionDelaySubscriber.prototype.subscribeToSource = function() {
				this.sourceSubscribed || (this.sourceSubscribed = !0, this.unsubscribe(), this.source.subscribe(this.parent))
			}, SubscriptionDelaySubscriber
		}(u);

	function dematerialize() {
		return function dematerializeOperatorFunction(e) {
			return e.lift(new pe)
		}
	}
	var pe = function() {
			function DeMaterializeOperator() {}
			return DeMaterializeOperator.prototype.call = function(e, t) {
				return t.subscribe(new fe(e))
			}, DeMaterializeOperator
		}(),
		fe = function(e) {
			function DeMaterializeSubscriber(t) {
				return e.call(this, t) || this
			}
			return __extends(DeMaterializeSubscriber, e), DeMaterializeSubscriber.prototype._next = function(e) {
				e.observe(this.destination)
			}, DeMaterializeSubscriber
		}(u);

	function distinct(e, t) {
		return function(n) {
			return n.lift(new ge(e, t))
		}
	}
	var ge = function() {
			function DistinctOperator(e, t) {
				this.keySelector = e, this.flushes = t
			}
			return DistinctOperator.prototype.call = function(e, t) {
				return t.subscribe(new me(e, this.keySelector, this.flushes))
			}, DistinctOperator
		}(),
		me = function(e) {
			function DistinctSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.keySelector = n, r.values = new Set, i && r.add(innerSubscribe(i, new g(r))), r
			}
			return __extends(DistinctSubscriber, e), DistinctSubscriber.prototype.notifyNext = function() {
				this.values.clear()
			}, DistinctSubscriber.prototype.notifyError = function(e) {
				this._error(e)
			}, DistinctSubscriber.prototype._next = function(e) {
				this.keySelector ? this._useKeySelector(e) : this._finalizeNext(e, e)
			}, DistinctSubscriber.prototype._useKeySelector = function(e) {
				var t, n = this.destination;
				try {
					t = this.keySelector(e)
				} catch (e) {
					return void n.error(e)
				}
				this._finalizeNext(t, e)
			}, DistinctSubscriber.prototype._finalizeNext = function(e, t) {
				var n = this.values;
				n.has(e) || (n.add(e), this.destination.next(t))
			}, DistinctSubscriber
		}(m);

	function distinctUntilChanged(e, t) {
		return function(n) {
			return n.lift(new be(e, t))
		}
	}
	var be = function() {
			function DistinctUntilChangedOperator(e, t) {
				this.compare = e, this.keySelector = t
			}
			return DistinctUntilChangedOperator.prototype.call = function(e, t) {
				return t.subscribe(new ye(e, this.compare, this.keySelector))
			}, DistinctUntilChangedOperator
		}(),
		ye = function(e) {
			function DistinctUntilChangedSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.keySelector = i, r.hasKey = !1, "function" == typeof n && (r.compare = n), r
			}
			return __extends(DistinctUntilChangedSubscriber, e), DistinctUntilChangedSubscriber.prototype.compare = function(e, t) {
				return e === t
			}, DistinctUntilChangedSubscriber.prototype._next = function(e) {
				var t;
				try {
					var n = this.keySelector;
					t = n ? n(e) : e
				} catch (e) {
					return this.destination.error(e)
				}
				var i = !1;
				if (this.hasKey) try {
					i = (0, this.compare)(this.key, t)
				} catch (e) {
					return this.destination.error(e)
				} else this.hasKey = !0;
				i || (this.key = t, this.destination.next(e))
			}, DistinctUntilChangedSubscriber
		}(u);

	function distinctUntilKeyChanged(e, t) {
		return distinctUntilChanged((function(n, i) {
			return t ? t(n[e], i[e]) : n[e] === i[e]
		}))
	}
	var Se = function() {
		function ArgumentOutOfRangeErrorImpl() {
			return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
		}
		return ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype), ArgumentOutOfRangeErrorImpl
	}();

	function filter(e, t) {
		return function filterOperatorFunction(n) {
			return n.lift(new ve(e, t))
		}
	}
	var ve = function() {
			function FilterOperator(e, t) {
				this.predicate = e, this.thisArg = t
			}
			return FilterOperator.prototype.call = function(e, t) {
				return t.subscribe(new we(e, this.predicate, this.thisArg))
			}, FilterOperator
		}(),
		we = function(e) {
			function FilterSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.predicate = n, r.thisArg = i, r.count = 0, r
			}
			return __extends(FilterSubscriber, e), FilterSubscriber.prototype._next = function(e) {
				var t;
				try {
					t = this.predicate.call(this.thisArg, e, this.count++)
				} catch (e) {
					return void this.destination.error(e)
				}
				t && this.destination.next(e)
			}, FilterSubscriber
		}(u),
		_e = function() {
			function EmptyErrorImpl() {
				return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
			}
			return EmptyErrorImpl.prototype = Object.create(Error.prototype), EmptyErrorImpl
		}();

	function throwIfEmpty(e) {
		return void 0 === e && (e = defaultErrorFactory),
			function(t) {
				return t.lift(new Ee(e))
			}
	}
	var Ee = function() {
			function ThrowIfEmptyOperator(e) {
				this.errorFactory = e
			}
			return ThrowIfEmptyOperator.prototype.call = function(e, t) {
				return t.subscribe(new De(e, this.errorFactory))
			}, ThrowIfEmptyOperator
		}(),
		De = function(e) {
			function ThrowIfEmptySubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.errorFactory = n, i.hasValue = !1, i
			}
			return __extends(ThrowIfEmptySubscriber, e), ThrowIfEmptySubscriber.prototype._next = function(e) {
				this.hasValue = !0, this.destination.next(e)
			}, ThrowIfEmptySubscriber.prototype._complete = function() {
				if (this.hasValue) return this.destination.complete();
				var e = void 0;
				try {
					e = this.errorFactory()
				} catch (t) {
					e = t
				}
				this.destination.error(e)
			}, ThrowIfEmptySubscriber
		}(u);

	function defaultErrorFactory() {
		return new _e
	}

	function take(e) {
		return function(t) {
			return 0 === e ? empty_empty() : t.lift(new Ae(e))
		}
	}
	var Ae = function() {
			function TakeOperator(e) {
				if (this.total = e, this.total < 0) throw new Se
			}
			return TakeOperator.prototype.call = function(e, t) {
				return t.subscribe(new ke(e, this.total))
			}, TakeOperator
		}(),
		ke = function(e) {
			function TakeSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.total = n, i.count = 0, i
			}
			return __extends(TakeSubscriber, e), TakeSubscriber.prototype._next = function(e) {
				var t = this.total,
					n = ++this.count;
				n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()))
			}, TakeSubscriber
		}(u);

	function elementAt(e, t) {
		if (e < 0) throw new Se;
		var n = arguments.length >= 2;
		return function(i) {
			return i.pipe(filter((function(t, n) {
				return n === e
			})), take(1), n ? defaultIfEmpty(t) : throwIfEmpty((function() {
				return new Se
			})))
		}
	}

	function endWith() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return function(t) {
			return concat(t, of.apply(void 0, e))
		}
	}

	function every(e, t) {
		return function(n) {
			return n.lift(new Ce(e, t, n))
		}
	}
	var Ce = function() {
			function EveryOperator(e, t, n) {
				this.predicate = e, this.thisArg = t, this.source = n
			}
			return EveryOperator.prototype.call = function(e, t) {
				return t.subscribe(new Ie(e, this.predicate, this.thisArg, this.source))
			}, EveryOperator
		}(),
		Ie = function(e) {
			function EverySubscriber(t, n, i, r) {
				var o = e.call(this, t) || this;
				return o.predicate = n, o.thisArg = i, o.source = r, o.index = 0, o.thisArg = i || o, o
			}
			return __extends(EverySubscriber, e), EverySubscriber.prototype.notifyComplete = function(e) {
				this.destination.next(e), this.destination.complete()
			}, EverySubscriber.prototype._next = function(e) {
				var t = !1;
				try {
					t = this.predicate.call(this.thisArg, e, this.index++, this.source)
				} catch (e) {
					return void this.destination.error(e)
				}
				t || this.notifyComplete(!1)
			}, EverySubscriber.prototype._complete = function() {
				this.notifyComplete(!0)
			}, EverySubscriber
		}(u);

	function exhaust() {
		return function(e) {
			return e.lift(new Oe)
		}
	}
	var Oe = function() {
			function SwitchFirstOperator() {}
			return SwitchFirstOperator.prototype.call = function(e, t) {
				return t.subscribe(new Te(e))
			}, SwitchFirstOperator
		}(),
		Te = function(e) {
			function SwitchFirstSubscriber(t) {
				var n = e.call(this, t) || this;
				return n.hasCompleted = !1, n.hasSubscription = !1, n
			}
			return __extends(SwitchFirstSubscriber, e), SwitchFirstSubscriber.prototype._next = function(e) {
				this.hasSubscription || (this.hasSubscription = !0, this.add(innerSubscribe(e, new g(this))))
			}, SwitchFirstSubscriber.prototype._complete = function() {
				this.hasCompleted = !0, this.hasSubscription || this.destination.complete()
			}, SwitchFirstSubscriber.prototype.notifyComplete = function() {
				this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
			}, SwitchFirstSubscriber
		}(m);

	function exhaustMap(e, t) {
		return t ? function(n) {
			return n.pipe(exhaustMap((function(n, i) {
				return from(e(n, i)).pipe(map((function(e, r) {
					return t(n, e, i, r)
				})))
			})))
		} : function(t) {
			return t.lift(new xe(e))
		}
	}
	var xe = function() {
			function ExhaustMapOperator(e) {
				this.project = e
			}
			return ExhaustMapOperator.prototype.call = function(e, t) {
				return t.subscribe(new Le(e, this.project))
			}, ExhaustMapOperator
		}(),
		Le = function(e) {
			function ExhaustMapSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.project = n, i.hasSubscription = !1, i.hasCompleted = !1, i.index = 0, i
			}
			return __extends(ExhaustMapSubscriber, e), ExhaustMapSubscriber.prototype._next = function(e) {
				this.hasSubscription || this.tryNext(e)
			}, ExhaustMapSubscriber.prototype.tryNext = function(e) {
				var t, n = this.index++;
				try {
					t = this.project(e, n)
				} catch (e) {
					return void this.destination.error(e)
				}
				this.hasSubscription = !0, this._innerSub(t)
			}, ExhaustMapSubscriber.prototype._innerSub = function(e) {
				var t = new g(this),
					n = this.destination;
				n.add(t);
				var i = innerSubscribe(e, t);
				i !== t && n.add(i)
			}, ExhaustMapSubscriber.prototype._complete = function() {
				this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe()
			}, ExhaustMapSubscriber.prototype.notifyNext = function(e) {
				this.destination.next(e)
			}, ExhaustMapSubscriber.prototype.notifyError = function(e) {
				this.destination.error(e)
			}, ExhaustMapSubscriber.prototype.notifyComplete = function() {
				this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
			}, ExhaustMapSubscriber
		}(m);

	function expand(e, t, n) {
		return void 0 === t && (t = Number.POSITIVE_INFINITY), t = (t || 0) < 1 ? Number.POSITIVE_INFINITY : t,
			function(i) {
				return i.lift(new Ne(e, t, n))
			}
	}
	var Ne = function() {
			function ExpandOperator(e, t, n) {
				this.project = e, this.concurrent = t, this.scheduler = n
			}
			return ExpandOperator.prototype.call = function(e, t) {
				return t.subscribe(new Re(e, this.project, this.concurrent, this.scheduler))
			}, ExpandOperator
		}(),
		Re = function(e) {
			function ExpandSubscriber(t, n, i, r) {
				var o = e.call(this, t) || this;
				return o.project = n, o.concurrent = i, o.scheduler = r, o.index = 0, o.active = 0, o.hasCompleted = !1, i < Number.POSITIVE_INFINITY && (o.buffer = []), o
			}
			return __extends(ExpandSubscriber, e), ExpandSubscriber.dispatch = function(e) {
				var t = e.subscriber,
					n = e.result,
					i = e.value,
					r = e.index;
				t.subscribeToProjection(n, i, r)
			}, ExpandSubscriber.prototype._next = function(e) {
				var t = this.destination;
				if (t.closed) this._complete();
				else {
					var n = this.index++;
					if (this.active < this.concurrent) {
						t.next(e);
						try {
							var i = (0, this.project)(e, n);
							if (this.scheduler) {
								var r = {
									subscriber: this,
									result: i,
									value: e,
									index: n
								};
								this.destination.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, r))
							} else this.subscribeToProjection(i, e, n)
						} catch (e) {
							t.error(e)
						}
					} else this.buffer.push(e)
				}
			}, ExpandSubscriber.prototype.subscribeToProjection = function(e, t, n) {
				this.active++, this.destination.add(innerSubscribe(e, new g(this)))
			}, ExpandSubscriber.prototype._complete = function() {
				this.hasCompleted = !0, this.hasCompleted && 0 === this.active && this.destination.complete(), this.unsubscribe()
			}, ExpandSubscriber.prototype.notifyNext = function(e) {
				this._next(e)
			}, ExpandSubscriber.prototype.notifyComplete = function() {
				var e = this.buffer;
				this.active--, e && e.length > 0 && this._next(e.shift()), this.hasCompleted && 0 === this.active && this.destination.complete()
			}, ExpandSubscriber
		}(m);

	function finalize(e) {
		return function(t) {
			return t.lift(new Pe(e))
		}
	}
	var Pe = function() {
			function FinallyOperator(e) {
				this.callback = e
			}
			return FinallyOperator.prototype.call = function(e, t) {
				return t.subscribe(new Me(e, this.callback))
			}, FinallyOperator
		}(),
		Me = function(e) {
			function FinallySubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.add(new c(n)), i
			}
			return __extends(FinallySubscriber, e), FinallySubscriber
		}(u);

	function find(e, t) {
		if ("function" != typeof e) throw new TypeError("predicate is not a function");
		return function(n) {
			return n.lift(new Ue(e, n, !1, t))
		}
	}
	var Ue = function() {
			function FindValueOperator(e, t, n, i) {
				this.predicate = e, this.source = t, this.yieldIndex = n, this.thisArg = i
			}
			return FindValueOperator.prototype.call = function(e, t) {
				return t.subscribe(new Fe(e, this.predicate, this.source, this.yieldIndex, this.thisArg))
			}, FindValueOperator
		}(),
		Fe = function(e) {
			function FindValueSubscriber(t, n, i, r, o) {
				var s = e.call(this, t) || this;
				return s.predicate = n, s.source = i, s.yieldIndex = r, s.thisArg = o, s.index = 0, s
			}
			return __extends(FindValueSubscriber, e), FindValueSubscriber.prototype.notifyComplete = function(e) {
				var t = this.destination;
				t.next(e), t.complete(), this.unsubscribe()
			}, FindValueSubscriber.prototype._next = function(e) {
				var t = this.predicate,
					n = this.thisArg,
					i = this.index++;
				try {
					t.call(n || this, e, i, this.source) && this.notifyComplete(this.yieldIndex ? i : e)
				} catch (e) {
					this.destination.error(e)
				}
			}, FindValueSubscriber.prototype._complete = function() {
				this.notifyComplete(this.yieldIndex ? -1 : void 0)
			}, FindValueSubscriber
		}(u);

	function findIndex(e, t) {
		return function(n) {
			return n.lift(new Ue(e, n, !0, t))
		}
	}

	function first(e, t) {
		var n = arguments.length >= 2;
		return function(i) {
			return i.pipe(e ? filter((function(t, n) {
				return e(t, n, i)
			})) : identity, take(1), n ? defaultIfEmpty(t) : throwIfEmpty((function() {
				return new _e
			})))
		}
	}
	var je = function() {
			function ObjectUnsubscribedErrorImpl() {
				return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
			}
			return ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype), ObjectUnsubscribedErrorImpl
		}(),
		We = function(e) {
			function SubjectSubscription(t, n) {
				var i = e.call(this) || this;
				return i.subject = t, i.subscriber = n, i.closed = !1, i
			}
			return __extends(SubjectSubscription, e), SubjectSubscription.prototype.unsubscribe = function() {
				if (!this.closed) {
					this.closed = !0;
					var e = this.subject,
						t = e.observers;
					if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) {
						var n = t.indexOf(this.subscriber); - 1 !== n && t.splice(n, 1)
					}
				}
			}, SubjectSubscription
		}(c),
		Be = function(e) {
			function SubjectSubscriber(t) {
				var n = e.call(this, t) || this;
				return n.destination = t, n
			}
			return __extends(SubjectSubscriber, e), SubjectSubscriber
		}(u),
		Ve = function(e) {
			function Subject() {
				var t = e.call(this) || this;
				return t.observers = [], t.closed = !1, t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
			}
			return __extends(Subject, e), Subject.prototype[l] = function() {
				return new Be(this)
			}, Subject.prototype.lift = function(e) {
				var t = new ze(this, this);
				return t.operator = e, t
			}, Subject.prototype.next = function(e) {
				if (this.closed) throw new je;
				if (!this.isStopped)
					for (var t = this.observers, n = t.length, i = t.slice(), r = 0; r < n; r++) i[r].next(e)
			}, Subject.prototype.error = function(e) {
				if (this.closed) throw new je;
				this.hasError = !0, this.thrownError = e, this.isStopped = !0;
				for (var t = this.observers, n = t.length, i = t.slice(), r = 0; r < n; r++) i[r].error(e);
				this.observers.length = 0
			}, Subject.prototype.complete = function() {
				if (this.closed) throw new je;
				this.isStopped = !0;
				for (var e = this.observers, t = e.length, n = e.slice(), i = 0; i < t; i++) n[i].complete();
				this.observers.length = 0
			}, Subject.prototype.unsubscribe = function() {
				this.isStopped = !0, this.closed = !0, this.observers = null
			}, Subject.prototype._trySubscribe = function(t) {
				if (this.closed) throw new je;
				return e.prototype._trySubscribe.call(this, t)
			}, Subject.prototype._subscribe = function(e) {
				if (this.closed) throw new je;
				return this.hasError ? (e.error(this.thrownError), c.EMPTY) : this.isStopped ? (e.complete(), c.EMPTY) : (this.observers.push(e), new We(this, e))
			}, Subject.prototype.asObservable = function() {
				var e = new p;
				return e.source = this, e
			}, Subject.create = function(e, t) {
				return new ze(e, t)
			}, Subject
		}(p),
		ze = function(e) {
			function AnonymousSubject(t, n) {
				var i = e.call(this) || this;
				return i.destination = t, i.source = n, i
			}
			return __extends(AnonymousSubject, e), AnonymousSubject.prototype.next = function(e) {
				var t = this.destination;
				t && t.next && t.next(e)
			}, AnonymousSubject.prototype.error = function(e) {
				var t = this.destination;
				t && t.error && this.destination.error(e)
			}, AnonymousSubject.prototype.complete = function() {
				var e = this.destination;
				e && e.complete && this.destination.complete()
			}, AnonymousSubject.prototype._subscribe = function(e) {
				return this.source ? this.source.subscribe(e) : c.EMPTY
			}, AnonymousSubject
		}(Ve);

	function groupBy(e, t, n, i) {
		return function(r) {
			return r.lift(new $e(e, t, n, i))
		}
	}
	var $e = function() {
			function GroupByOperator(e, t, n, i) {
				this.keySelector = e, this.elementSelector = t, this.durationSelector = n, this.subjectSelector = i
			}
			return GroupByOperator.prototype.call = function(e, t) {
				return t.subscribe(new He(e, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector))
			}, GroupByOperator
		}(),
		He = function(e) {
			function GroupBySubscriber(t, n, i, r, o) {
				var s = e.call(this, t) || this;
				return s.keySelector = n, s.elementSelector = i, s.durationSelector = r, s.subjectSelector = o, s.groups = null, s.attemptedToUnsubscribe = !1, s.count = 0, s
			}
			return __extends(GroupBySubscriber, e), GroupBySubscriber.prototype._next = function(e) {
				var t;
				try {
					t = this.keySelector(e)
				} catch (e) {
					return void this.error(e)
				}
				this._group(e, t)
			}, GroupBySubscriber.prototype._group = function(e, t) {
				var n = this.groups;
				n || (n = this.groups = new Map);
				var i, r = n.get(t);
				if (this.elementSelector) try {
					i = this.elementSelector(e)
				} catch (e) {
					this.error(e)
				} else i = e;
				if (!r) {
					r = this.subjectSelector ? this.subjectSelector() : new Ve, n.set(t, r);
					var o = new qe(t, r, this);
					if (this.destination.next(o), this.durationSelector) {
						var s = void 0;
						try {
							s = this.durationSelector(new qe(t, r))
						} catch (e) {
							return void this.error(e)
						}
						this.add(s.subscribe(new Ge(t, r, this)))
					}
				}
				r.closed || r.next(i)
			}, GroupBySubscriber.prototype._error = function(e) {
				var t = this.groups;
				t && (t.forEach((function(t, n) {
					t.error(e)
				})), t.clear()), this.destination.error(e)
			}, GroupBySubscriber.prototype._complete = function() {
				var e = this.groups;
				e && (e.forEach((function(e, t) {
					e.complete()
				})), e.clear()), this.destination.complete()
			}, GroupBySubscriber.prototype.removeGroup = function(e) {
				this.groups.delete(e)
			}, GroupBySubscriber.prototype.unsubscribe = function() {
				this.closed || (this.attemptedToUnsubscribe = !0, 0 === this.count && e.prototype.unsubscribe.call(this))
			}, GroupBySubscriber
		}(u),
		Ge = function(e) {
			function GroupDurationSubscriber(t, n, i) {
				var r = e.call(this, n) || this;
				return r.key = t, r.group = n, r.parent = i, r
			}
			return __extends(GroupDurationSubscriber, e), GroupDurationSubscriber.prototype._next = function(e) {
				this.complete()
			}, GroupDurationSubscriber.prototype._unsubscribe = function() {
				var e = this.parent,
					t = this.key;
				this.key = this.parent = null, e && e.removeGroup(t)
			}, GroupDurationSubscriber
		}(u),
		qe = function(e) {
			function GroupedObservable(t, n, i) {
				var r = e.call(this) || this;
				return r.key = t, r.groupSubject = n, r.refCountSubscription = i, r
			}
			return __extends(GroupedObservable, e), GroupedObservable.prototype._subscribe = function(e) {
				var t = new c,
					n = this.refCountSubscription,
					i = this.groupSubject;
				return n && !n.closed && t.add(new Ye(n)), t.add(i.subscribe(e)), t
			}, GroupedObservable
		}(p),
		Ye = function(e) {
			function InnerRefCountSubscription(t) {
				var n = e.call(this) || this;
				return n.parent = t, t.count++, n
			}
			return __extends(InnerRefCountSubscription, e), InnerRefCountSubscription.prototype.unsubscribe = function() {
				var t = this.parent;
				t.closed || this.closed || (e.prototype.unsubscribe.call(this), t.count -= 1, 0 === t.count && t.attemptedToUnsubscribe && t.unsubscribe())
			}, InnerRefCountSubscription
		}(c);

	function ignoreElements() {
		return function ignoreElementsOperatorFunction(e) {
			return e.lift(new Ke)
		}
	}
	var Ke = function() {
			function IgnoreElementsOperator() {}
			return IgnoreElementsOperator.prototype.call = function(e, t) {
				return t.subscribe(new Xe(e))
			}, IgnoreElementsOperator
		}(),
		Xe = function(e) {
			function IgnoreElementsSubscriber() {
				return null !== e && e.apply(this, arguments) || this
			}
			return __extends(IgnoreElementsSubscriber, e), IgnoreElementsSubscriber.prototype._next = function(e) {}, IgnoreElementsSubscriber
		}(u);

	function isEmpty() {
		return function(e) {
			return e.lift(new Je)
		}
	}
	var Je = function() {
			function IsEmptyOperator() {}
			return IsEmptyOperator.prototype.call = function(e, t) {
				return t.subscribe(new Ze(e))
			}, IsEmptyOperator
		}(),
		Ze = function(e) {
			function IsEmptySubscriber(t) {
				return e.call(this, t) || this
			}
			return __extends(IsEmptySubscriber, e), IsEmptySubscriber.prototype.notifyComplete = function(e) {
				var t = this.destination;
				t.next(e), t.complete()
			}, IsEmptySubscriber.prototype._next = function(e) {
				this.notifyComplete(!1)
			}, IsEmptySubscriber.prototype._complete = function() {
				this.notifyComplete(!0)
			}, IsEmptySubscriber
		}(u);

	function takeLast(e) {
		return function takeLastOperatorFunction(t) {
			return 0 === e ? empty_empty() : t.lift(new Qe(e))
		}
	}
	var Qe = function() {
			function TakeLastOperator(e) {
				if (this.total = e, this.total < 0) throw new Se
			}
			return TakeLastOperator.prototype.call = function(e, t) {
				return t.subscribe(new et(e, this.total))
			}, TakeLastOperator
		}(),
		et = function(e) {
			function TakeLastSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.total = n, i.ring = new Array, i.count = 0, i
			}
			return __extends(TakeLastSubscriber, e), TakeLastSubscriber.prototype._next = function(e) {
				var t = this.ring,
					n = this.total,
					i = this.count++;
				t.length < n ? t.push(e) : t[i % n] = e
			}, TakeLastSubscriber.prototype._complete = function() {
				var e = this.destination,
					t = this.count;
				if (t > 0)
					for (var n = this.count >= this.total ? this.total : this.count, i = this.ring, r = 0; r < n; r++) {
						var o = t++ % n;
						e.next(i[o])
					}
				e.complete()
			}, TakeLastSubscriber
		}(u);

	function last_last(e, t) {
		var n = arguments.length >= 2;
		return function(i) {
			return i.pipe(e ? filter((function(t, n) {
				return e(t, n, i)
			})) : identity, takeLast(1), n ? defaultIfEmpty(t) : throwIfEmpty((function() {
				return new _e
			})))
		}
	}

	function mapTo(e) {
		return function(t) {
			return t.lift(new tt(e))
		}
	}
	var tt = function() {
			function MapToOperator(e) {
				this.value = e
			}
			return MapToOperator.prototype.call = function(e, t) {
				return t.subscribe(new nt(e, this.value))
			}, MapToOperator
		}(),
		nt = function(e) {
			function MapToSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.value = n, i
			}
			return __extends(MapToSubscriber, e), MapToSubscriber.prototype._next = function(e) {
				this.destination.next(this.value)
			}, MapToSubscriber
		}(u);

	function materialize() {
		return function materializeOperatorFunction(e) {
			return e.lift(new it)
		}
	}
	var it = function() {
			function MaterializeOperator() {}
			return MaterializeOperator.prototype.call = function(e, t) {
				return t.subscribe(new rt(e))
			}, MaterializeOperator
		}(),
		rt = function(e) {
			function MaterializeSubscriber(t) {
				return e.call(this, t) || this
			}
			return __extends(MaterializeSubscriber, e), MaterializeSubscriber.prototype._next = function(e) {
				this.destination.next(oe.createNext(e))
			}, MaterializeSubscriber.prototype._error = function(e) {
				var t = this.destination;
				t.next(oe.createError(e)), t.complete()
			}, MaterializeSubscriber.prototype._complete = function() {
				var e = this.destination;
				e.next(oe.createComplete()), e.complete()
			}, MaterializeSubscriber
		}(u);

	function scan(e, t) {
		var n = !1;
		return arguments.length >= 2 && (n = !0),
			function scanOperatorFunction(i) {
				return i.lift(new ot(e, t, n))
			}
	}
	var ot = function() {
			function ScanOperator(e, t, n) {
				void 0 === n && (n = !1), this.accumulator = e, this.seed = t, this.hasSeed = n
			}
			return ScanOperator.prototype.call = function(e, t) {
				return t.subscribe(new st(e, this.accumulator, this.seed, this.hasSeed))
			}, ScanOperator
		}(),
		st = function(e) {
			function ScanSubscriber(t, n, i, r) {
				var o = e.call(this, t) || this;
				return o.accumulator = n, o._seed = i, o.hasSeed = r, o.index = 0, o
			}
			return __extends(ScanSubscriber, e), Object.defineProperty(ScanSubscriber.prototype, "seed", {
				get: function() {
					return this._seed
				},
				set: function(e) {
					this.hasSeed = !0, this._seed = e
				},
				enumerable: !0,
				configurable: !0
			}), ScanSubscriber.prototype._next = function(e) {
				if (this.hasSeed) return this._tryNext(e);
				this.seed = e, this.destination.next(e)
			}, ScanSubscriber.prototype._tryNext = function(e) {
				var t, n = this.index++;
				try {
					t = this.accumulator(this.seed, e, n)
				} catch (e) {
					this.destination.error(e)
				}
				this.seed = t, this.destination.next(t)
			}, ScanSubscriber
		}(u);

	function reduce(e, t) {
		return arguments.length >= 2 ? function reduceOperatorFunctionWithSeed(n) {
			return pipe(scan(e, t), takeLast(1), defaultIfEmpty(t))(n)
		} : function reduceOperatorFunction(t) {
			return pipe(scan((function(t, n, i) {
				return e(t, n, i + 1)
			})), takeLast(1))(t)
		}
	}

	function max_max(e) {
		return reduce("function" == typeof e ? function(t, n) {
			return e(t, n) > 0 ? t : n
		} : function(e, t) {
			return e > t ? e : t
		})
	}

	function merge() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		var n = Number.POSITIVE_INFINITY,
			i = null,
			r = e[e.length - 1];
		return isScheduler(r) ? (i = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (n = e.pop())) : "number" == typeof r && (n = e.pop()), null === i && 1 === e.length && e[0] instanceof p ? e[0] : mergeAll(n)(fromArray(e, i))
	}

	function merge_merge() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return function(t) {
			return t.lift.call(merge.apply(void 0, [t].concat(e)))
		}
	}

	function mergeMapTo(e, t, n) {
		return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof t ? mergeMap((function() {
			return e
		}), t, n) : ("number" == typeof t && (n = t), mergeMap((function() {
			return e
		}), n))
	}

	function mergeScan(e, t, n) {
		return void 0 === n && (n = Number.POSITIVE_INFINITY),
			function(i) {
				return i.lift(new at(e, t, n))
			}
	}
	var at = function() {
			function MergeScanOperator(e, t, n) {
				this.accumulator = e, this.seed = t, this.concurrent = n
			}
			return MergeScanOperator.prototype.call = function(e, t) {
				return t.subscribe(new ct(e, this.accumulator, this.seed, this.concurrent))
			}, MergeScanOperator
		}(),
		ct = function(e) {
			function MergeScanSubscriber(t, n, i, r) {
				var o = e.call(this, t) || this;
				return o.accumulator = n, o.acc = i, o.concurrent = r, o.hasValue = !1, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
			}
			return __extends(MergeScanSubscriber, e), MergeScanSubscriber.prototype._next = function(e) {
				if (this.active < this.concurrent) {
					var t = this.index++,
						n = this.destination,
						i = void 0;
					try {
						i = (0, this.accumulator)(this.acc, e, t)
					} catch (e) {
						return n.error(e)
					}
					this.active++, this._innerSub(i)
				} else this.buffer.push(e)
			}, MergeScanSubscriber.prototype._innerSub = function(e) {
				var t = new g(this),
					n = this.destination;
				n.add(t);
				var i = innerSubscribe(e, t);
				i !== t && n.add(i)
			}, MergeScanSubscriber.prototype._complete = function() {
				this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && (!1 === this.hasValue && this.destination.next(this.acc), this.destination.complete()), this.unsubscribe()
			}, MergeScanSubscriber.prototype.notifyNext = function(e) {
				var t = this.destination;
				this.acc = e, this.hasValue = !0, t.next(e)
			}, MergeScanSubscriber.prototype.notifyComplete = function() {
				var e = this.buffer;
				this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && (!1 === this.hasValue && this.destination.next(this.acc), this.destination.complete())
			}, MergeScanSubscriber
		}(m);

	function min_min(e) {
		return reduce("function" == typeof e ? function(t, n) {
			return e(t, n) < 0 ? t : n
		} : function(e, t) {
			return e < t ? e : t
		})
	}

	function refCount_refCount() {
		return function refCountOperatorFunction(e) {
			return e.lift(new lt(e))
		}
	}
	var lt = function() {
			function RefCountOperator(e) {
				this.connectable = e
			}
			return RefCountOperator.prototype.call = function(e, t) {
				var n = this.connectable;
				n._refCount++;
				var i = new ut(e, n),
					r = t.subscribe(i);
				return i.closed || (i.connection = n.connect()), r
			}, RefCountOperator
		}(),
		ut = function(e) {
			function RefCountSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.connectable = n, i
			}
			return __extends(RefCountSubscriber, e), RefCountSubscriber.prototype._unsubscribe = function() {
				var e = this.connectable;
				if (e) {
					this.connectable = null;
					var t = e._refCount;
					if (t <= 0) this.connection = null;
					else if (e._refCount = t - 1, t > 1) this.connection = null;
					else {
						var n = this.connection,
							i = e._connection;
						this.connection = null, !i || n && i !== n || i.unsubscribe()
					}
				} else this.connection = null
			}, RefCountSubscriber
		}(u),
		dt = function(e) {
			function ConnectableObservable(t, n) {
				var i = e.call(this) || this;
				return i.source = t, i.subjectFactory = n, i._refCount = 0, i._isComplete = !1, i
			}
			return __extends(ConnectableObservable, e), ConnectableObservable.prototype._subscribe = function(e) {
				return this.getSubject().subscribe(e)
			}, ConnectableObservable.prototype.getSubject = function() {
				var e = this._subject;
				return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
			}, ConnectableObservable.prototype.connect = function() {
				var e = this._connection;
				return e || (this._isComplete = !1, (e = this._connection = new c).add(this.source.subscribe(new pt(this.getSubject(), this))), e.closed && (this._connection = null, e = c.EMPTY)), e
			}, ConnectableObservable.prototype.refCount = function() {
				return refCount_refCount()(this)
			}, ConnectableObservable
		}(p),
		ht = function() {
			var e = dt.prototype;
			return {
				operator: {
					value: null
				},
				_refCount: {
					value: 0,
					writable: !0
				},
				_subject: {
					value: null,
					writable: !0
				},
				_connection: {
					value: null,
					writable: !0
				},
				_subscribe: {
					value: e._subscribe
				},
				_isComplete: {
					value: e._isComplete,
					writable: !0
				},
				getSubject: {
					value: e.getSubject
				},
				connect: {
					value: e.connect
				},
				refCount: {
					value: e.refCount
				}
			}
		}(),
		pt = function(e) {
			function ConnectableSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.connectable = n, i
			}
			return __extends(ConnectableSubscriber, e), ConnectableSubscriber.prototype._error = function(t) {
				this._unsubscribe(), e.prototype._error.call(this, t)
			}, ConnectableSubscriber.prototype._complete = function() {
				this.connectable._isComplete = !0, this._unsubscribe(), e.prototype._complete.call(this)
			}, ConnectableSubscriber.prototype._unsubscribe = function() {
				var e = this.connectable;
				if (e) {
					this.connectable = null;
					var t = e._connection;
					e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
				}
			}, ConnectableSubscriber
		}(Be);

	function multicast(e, t) {
		return function multicastOperatorFunction(n) {
			var i;
			if (i = "function" == typeof e ? e : function subjectFactory() {
					return e
				}, "function" == typeof t) return n.lift(new ft(i, t));
			var r = Object.create(n, ht);
			return r.source = n, r.subjectFactory = i, r
		}
	}
	var ft = function() {
		function MulticastOperator(e, t) {
			this.subjectFactory = e, this.selector = t
		}
		return MulticastOperator.prototype.call = function(e, t) {
			var n = this.selector,
				i = this.subjectFactory(),
				r = n(i).subscribe(e);
			return r.add(t.subscribe(i)), r
		}, MulticastOperator
	}();

	function observeOn(e, t) {
		return void 0 === t && (t = 0),
			function observeOnOperatorFunction(n) {
				return n.lift(new gt(e, t))
			}
	}
	var gt = function() {
			function ObserveOnOperator(e, t) {
				void 0 === t && (t = 0), this.scheduler = e, this.delay = t
			}
			return ObserveOnOperator.prototype.call = function(e, t) {
				return t.subscribe(new mt(e, this.scheduler, this.delay))
			}, ObserveOnOperator
		}(),
		mt = function(e) {
			function ObserveOnSubscriber(t, n, i) {
				void 0 === i && (i = 0);
				var r = e.call(this, t) || this;
				return r.scheduler = n, r.delay = i, r
			}
			return __extends(ObserveOnSubscriber, e), ObserveOnSubscriber.dispatch = function(e) {
				var t = e.notification,
					n = e.destination;
				t.observe(n), this.unsubscribe()
			}, ObserveOnSubscriber.prototype.scheduleMessage = function(e) {
				this.destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new bt(e, this.destination)))
			}, ObserveOnSubscriber.prototype._next = function(e) {
				this.scheduleMessage(oe.createNext(e))
			}, ObserveOnSubscriber.prototype._error = function(e) {
				this.scheduleMessage(oe.createError(e)), this.unsubscribe()
			}, ObserveOnSubscriber.prototype._complete = function() {
				this.scheduleMessage(oe.createComplete()), this.unsubscribe()
			}, ObserveOnSubscriber
		}(u),
		bt = function() {
			return function ObserveOnMessage(e, t) {
				this.notification = e, this.destination = t
			}
		}();

	function onErrorResumeNext() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return 1 === e.length && s(e[0]) && (e = e[0]),
			function(t) {
				return t.lift(new yt(e))
			}
	}
	var yt = function() {
			function OnErrorResumeNextOperator(e) {
				this.nextSources = e
			}
			return OnErrorResumeNextOperator.prototype.call = function(e, t) {
				return t.subscribe(new St(e, this.nextSources))
			}, OnErrorResumeNextOperator
		}(),
		St = function(e) {
			function OnErrorResumeNextSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.destination = t, i.nextSources = n, i
			}
			return __extends(OnErrorResumeNextSubscriber, e), OnErrorResumeNextSubscriber.prototype.notifyError = function() {
				this.subscribeToNextSource()
			}, OnErrorResumeNextSubscriber.prototype.notifyComplete = function() {
				this.subscribeToNextSource()
			}, OnErrorResumeNextSubscriber.prototype._error = function(e) {
				this.subscribeToNextSource(), this.unsubscribe()
			}, OnErrorResumeNextSubscriber.prototype._complete = function() {
				this.subscribeToNextSource(), this.unsubscribe()
			}, OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function() {
				var e = this.nextSources.shift();
				if (e) {
					var t = new g(this),
						n = this.destination;
					n.add(t);
					var i = innerSubscribe(e, t);
					i !== t && n.add(i)
				} else this.destination.complete()
			}, OnErrorResumeNextSubscriber
		}(m);

	function pairwise() {
		return function(e) {
			return e.lift(new vt)
		}
	}
	var vt = function() {
			function PairwiseOperator() {}
			return PairwiseOperator.prototype.call = function(e, t) {
				return t.subscribe(new wt(e))
			}, PairwiseOperator
		}(),
		wt = function(e) {
			function PairwiseSubscriber(t) {
				var n = e.call(this, t) || this;
				return n.hasPrev = !1, n
			}
			return __extends(PairwiseSubscriber, e), PairwiseSubscriber.prototype._next = function(e) {
				var t;
				this.hasPrev ? t = [this.prev, e] : this.hasPrev = !0, this.prev = e, t && this.destination.next(t)
			}, PairwiseSubscriber
		}(u);

	function not(e, t) {
		function notPred() {
			return !notPred.pred.apply(notPred.thisArg, arguments)
		}
		return notPred.pred = e, notPred.thisArg = t, notPred
	}

	function partition(e, t) {
		return function(n) {
			return [filter(e, t)(n), filter(not(e, t))(n)]
		}
	}

	function pluck() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		var n = e.length;
		if (0 === n) throw new Error("list of properties cannot be empty.");
		return function(t) {
			return map(plucker(e, n))(t)
		}
	}

	function plucker(e, t) {
		return function(n) {
			for (var i = n, r = 0; r < t; r++) {
				var o = null != i ? i[e[r]] : void 0;
				if (void 0 === o) return;
				i = o
			}
			return i
		}
	}

	function publish(e) {
		return e ? multicast((function() {
			return new Ve
		}), e) : multicast(new Ve)
	}
	var _t = function(e) {
		function BehaviorSubject(t) {
			var n = e.call(this) || this;
			return n._value = t, n
		}
		return __extends(BehaviorSubject, e), Object.defineProperty(BehaviorSubject.prototype, "value", {
			get: function() {
				return this.getValue()
			},
			enumerable: !0,
			configurable: !0
		}), BehaviorSubject.prototype._subscribe = function(t) {
			var n = e.prototype._subscribe.call(this, t);
			return n && !n.closed && t.next(this._value), n
		}, BehaviorSubject.prototype.getValue = function() {
			if (this.hasError) throw this.thrownError;
			if (this.closed) throw new je;
			return this._value
		}, BehaviorSubject.prototype.next = function(t) {
			e.prototype.next.call(this, this._value = t)
		}, BehaviorSubject
	}(Ve);

	function publishBehavior(e) {
		return function(t) {
			return multicast(new _t(e))(t)
		}
	}
	var Et = function(e) {
		function AsyncSubject() {
			var t = null !== e && e.apply(this, arguments) || this;
			return t.value = null, t.hasNext = !1, t.hasCompleted = !1, t
		}
		return __extends(AsyncSubject, e), AsyncSubject.prototype._subscribe = function(t) {
			return this.hasError ? (t.error(this.thrownError), c.EMPTY) : this.hasCompleted && this.hasNext ? (t.next(this.value), t.complete(), c.EMPTY) : e.prototype._subscribe.call(this, t)
		}, AsyncSubject.prototype.next = function(e) {
			this.hasCompleted || (this.value = e, this.hasNext = !0)
		}, AsyncSubject.prototype.error = function(t) {
			this.hasCompleted || e.prototype.error.call(this, t)
		}, AsyncSubject.prototype.complete = function() {
			this.hasCompleted = !0, this.hasNext && e.prototype.next.call(this, this.value), e.prototype.complete.call(this)
		}, AsyncSubject
	}(Ve);

	function publishLast() {
		return function(e) {
			return multicast(new Et)(e)
		}
	}
	var Dt = function(e) {
			function QueueAction(t, n) {
				var i = e.call(this, t, n) || this;
				return i.scheduler = t, i.work = n, i
			}
			return __extends(QueueAction, e), QueueAction.prototype.schedule = function(t, n) {
				return void 0 === n && (n = 0), n > 0 ? e.prototype.schedule.call(this, t, n) : (this.delay = n, this.state = t, this.scheduler.flush(this), this)
			}, QueueAction.prototype.execute = function(t, n) {
				return n > 0 || this.closed ? e.prototype.execute.call(this, t, n) : this._execute(t, n)
			}, QueueAction.prototype.requestAsyncId = function(t, n, i) {
				return void 0 === i && (i = 0), null !== i && i > 0 || null === i && this.delay > 0 ? e.prototype.requestAsyncId.call(this, t, n, i) : t.flush(this)
			}, QueueAction
		}(S),
		At = new(function(e) {
			function QueueScheduler() {
				return null !== e && e.apply(this, arguments) || this
			}
			return __extends(QueueScheduler, e), QueueScheduler
		}(_))(Dt),
		kt = function(e) {
			function ReplaySubject(t, n, i) {
				void 0 === t && (t = Number.POSITIVE_INFINITY), void 0 === n && (n = Number.POSITIVE_INFINITY);
				var r = e.call(this) || this;
				return r.scheduler = i, r._events = [], r._infiniteTimeWindow = !1, r._bufferSize = t < 1 ? 1 : t, r._windowTime = n < 1 ? 1 : n, n === Number.POSITIVE_INFINITY ? (r._infiniteTimeWindow = !0, r.next = r.nextInfiniteTimeWindow) : r.next = r.nextTimeWindow, r
			}
			return __extends(ReplaySubject, e), ReplaySubject.prototype.nextInfiniteTimeWindow = function(t) {
				if (!this.isStopped) {
					var n = this._events;
					n.push(t), n.length > this._bufferSize && n.shift()
				}
				e.prototype.next.call(this, t)
			}, ReplaySubject.prototype.nextTimeWindow = function(t) {
				this.isStopped || (this._events.push(new Ct(this._getNow(), t)), this._trimBufferThenGetEvents()), e.prototype.next.call(this, t)
			}, ReplaySubject.prototype._subscribe = function(e) {
				var t, n = this._infiniteTimeWindow,
					i = n ? this._events : this._trimBufferThenGetEvents(),
					r = this.scheduler,
					o = i.length;
				if (this.closed) throw new je;
				if (this.isStopped || this.hasError ? t = c.EMPTY : (this.observers.push(e), t = new We(this, e)), r && e.add(e = new mt(e, r)), n)
					for (var s = 0; s < o && !e.closed; s++) e.next(i[s]);
				else
					for (s = 0; s < o && !e.closed; s++) e.next(i[s].value);
				return this.hasError ? e.error(this.thrownError) : this.isStopped && e.complete(), t
			}, ReplaySubject.prototype._getNow = function() {
				return (this.scheduler || At).now()
			}, ReplaySubject.prototype._trimBufferThenGetEvents = function() {
				for (var e = this._getNow(), t = this._bufferSize, n = this._windowTime, i = this._events, r = i.length, o = 0; o < r && !(e - i[o].time < n);) o++;
				return r > t && (o = Math.max(o, r - t)), o > 0 && i.splice(0, o), i
			}, ReplaySubject
		}(Ve),
		Ct = function() {
			return function ReplayEvent(e, t) {
				this.time = e, this.value = t
			}
		}();

	function publishReplay(e, t, n, i) {
		n && "function" != typeof n && (i = n);
		var r = "function" == typeof n ? n : void 0,
			o = new kt(e, t, i);
		return function(e) {
			return multicast((function() {
				return o
			}), r)(e)
		}
	}

	function race() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		if (1 === e.length) {
			if (!s(e[0])) return e[0];
			e = e[0]
		}
		return fromArray(e, void 0).lift(new It)
	}
	var It = function() {
			function RaceOperator() {}
			return RaceOperator.prototype.call = function(e, t) {
				return t.subscribe(new Ot(e))
			}, RaceOperator
		}(),
		Ot = function(e) {
			function RaceSubscriber(t) {
				var n = e.call(this, t) || this;
				return n.hasFirst = !1, n.observables = [], n.subscriptions = [], n
			}
			return __extends(RaceSubscriber, e), RaceSubscriber.prototype._next = function(e) {
				this.observables.push(e)
			}, RaceSubscriber.prototype._complete = function() {
				var e = this.observables,
					t = e.length;
				if (0 === t) this.destination.complete();
				else {
					for (var n = 0; n < t && !this.hasFirst; n++) {
						var i = subscribeToResult(this, e[n], void 0, n);
						this.subscriptions && this.subscriptions.push(i), this.add(i)
					}
					this.observables = null
				}
			}, RaceSubscriber.prototype.notifyNext = function(e, t, n) {
				if (!this.hasFirst) {
					this.hasFirst = !0;
					for (var i = 0; i < this.subscriptions.length; i++)
						if (i !== n) {
							var r = this.subscriptions[i];
							r.unsubscribe(), this.remove(r)
						} this.subscriptions = null
				}
				this.destination.next(t)
			}, RaceSubscriber
		}(N);

	function race_race() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return function raceOperatorFunction(t) {
			return 1 === e.length && s(e[0]) && (e = e[0]), t.lift.call(race.apply(void 0, [t].concat(e)))
		}
	}

	function repeat(e) {
		return void 0 === e && (e = -1),
			function(t) {
				return 0 === e ? empty_empty() : e < 0 ? t.lift(new Tt(-1, t)) : t.lift(new Tt(e - 1, t))
			}
	}
	var Tt = function() {
			function RepeatOperator(e, t) {
				this.count = e, this.source = t
			}
			return RepeatOperator.prototype.call = function(e, t) {
				return t.subscribe(new xt(e, this.count, this.source))
			}, RepeatOperator
		}(),
		xt = function(e) {
			function RepeatSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.count = n, r.source = i, r
			}
			return __extends(RepeatSubscriber, e), RepeatSubscriber.prototype.complete = function() {
				if (!this.isStopped) {
					var t = this.source,
						n = this.count;
					if (0 === n) return e.prototype.complete.call(this);
					n > -1 && (this.count = n - 1), t.subscribe(this._unsubscribeAndRecycle())
				}
			}, RepeatSubscriber
		}(u);

	function repeatWhen(e) {
		return function(t) {
			return t.lift(new Lt(e))
		}
	}
	var Lt = function() {
			function RepeatWhenOperator(e) {
				this.notifier = e
			}
			return RepeatWhenOperator.prototype.call = function(e, t) {
				return t.subscribe(new Nt(e, this.notifier, t))
			}, RepeatWhenOperator
		}(),
		Nt = function(e) {
			function RepeatWhenSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.notifier = n, r.source = i, r.sourceIsBeingSubscribedTo = !0, r
			}
			return __extends(RepeatWhenSubscriber, e), RepeatWhenSubscriber.prototype.notifyNext = function() {
				this.sourceIsBeingSubscribedTo = !0, this.source.subscribe(this)
			}, RepeatWhenSubscriber.prototype.notifyComplete = function() {
				if (!1 === this.sourceIsBeingSubscribedTo) return e.prototype.complete.call(this)
			}, RepeatWhenSubscriber.prototype.complete = function() {
				if (this.sourceIsBeingSubscribedTo = !1, !this.isStopped) {
					if (this.retries || this.subscribeToRetries(), !this.retriesSubscription || this.retriesSubscription.closed) return e.prototype.complete.call(this);
					this._unsubscribeAndRecycle(), this.notifications.next(void 0)
				}
			}, RepeatWhenSubscriber.prototype._unsubscribe = function() {
				var e = this.notifications,
					t = this.retriesSubscription;
				e && (e.unsubscribe(), this.notifications = void 0), t && (t.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0
			}, RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function() {
				var t = this._unsubscribe;
				return this._unsubscribe = null, e.prototype._unsubscribeAndRecycle.call(this), this._unsubscribe = t, this
			}, RepeatWhenSubscriber.prototype.subscribeToRetries = function() {
				var t;
				this.notifications = new Ve;
				try {
					t = (0, this.notifier)(this.notifications)
				} catch (t) {
					return e.prototype.complete.call(this)
				}
				this.retries = t, this.retriesSubscription = innerSubscribe(t, new g(this))
			}, RepeatWhenSubscriber
		}(m);

	function retry(e) {
		return void 0 === e && (e = -1),
			function(t) {
				return t.lift(new Rt(e, t))
			}
	}
	var Rt = function() {
			function RetryOperator(e, t) {
				this.count = e, this.source = t
			}
			return RetryOperator.prototype.call = function(e, t) {
				return t.subscribe(new Pt(e, this.count, this.source))
			}, RetryOperator
		}(),
		Pt = function(e) {
			function RetrySubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.count = n, r.source = i, r
			}
			return __extends(RetrySubscriber, e), RetrySubscriber.prototype.error = function(t) {
				if (!this.isStopped) {
					var n = this.source,
						i = this.count;
					if (0 === i) return e.prototype.error.call(this, t);
					i > -1 && (this.count = i - 1), n.subscribe(this._unsubscribeAndRecycle())
				}
			}, RetrySubscriber
		}(u);

	function retryWhen(e) {
		return function(t) {
			return t.lift(new Mt(e, t))
		}
	}
	var Mt = function() {
			function RetryWhenOperator(e, t) {
				this.notifier = e, this.source = t
			}
			return RetryWhenOperator.prototype.call = function(e, t) {
				return t.subscribe(new Ut(e, this.notifier, this.source))
			}, RetryWhenOperator
		}(),
		Ut = function(e) {
			function RetryWhenSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.notifier = n, r.source = i, r
			}
			return __extends(RetryWhenSubscriber, e), RetryWhenSubscriber.prototype.error = function(t) {
				if (!this.isStopped) {
					var n = this.errors,
						i = this.retries,
						r = this.retriesSubscription;
					if (i) this.errors = void 0, this.retriesSubscription = void 0;
					else {
						n = new Ve;
						try {
							i = (0, this.notifier)(n)
						} catch (t) {
							return e.prototype.error.call(this, t)
						}
						r = innerSubscribe(i, new g(this))
					}
					this._unsubscribeAndRecycle(), this.errors = n, this.retries = i, this.retriesSubscription = r, n.next(t)
				}
			}, RetryWhenSubscriber.prototype._unsubscribe = function() {
				var e = this.errors,
					t = this.retriesSubscription;
				e && (e.unsubscribe(), this.errors = void 0), t && (t.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0
			}, RetryWhenSubscriber.prototype.notifyNext = function() {
				var e = this._unsubscribe;
				this._unsubscribe = null, this._unsubscribeAndRecycle(), this._unsubscribe = e, this.source.subscribe(this)
			}, RetryWhenSubscriber
		}(m);

	function sample(e) {
		return function(t) {
			return t.lift(new Ft(e))
		}
	}
	var Ft = function() {
			function SampleOperator(e) {
				this.notifier = e
			}
			return SampleOperator.prototype.call = function(e, t) {
				var n = new jt(e),
					i = t.subscribe(n);
				return i.add(innerSubscribe(this.notifier, new g(n))), i
			}, SampleOperator
		}(),
		jt = function(e) {
			function SampleSubscriber() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.hasValue = !1, t
			}
			return __extends(SampleSubscriber, e), SampleSubscriber.prototype._next = function(e) {
				this.value = e, this.hasValue = !0
			}, SampleSubscriber.prototype.notifyNext = function() {
				this.emitValue()
			}, SampleSubscriber.prototype.notifyComplete = function() {
				this.emitValue()
			}, SampleSubscriber.prototype.emitValue = function() {
				this.hasValue && (this.hasValue = !1, this.destination.next(this.value))
			}, SampleSubscriber
		}(m);

	function sampleTime(e, t) {
		return void 0 === t && (t = E),
			function(n) {
				return n.lift(new Wt(e, t))
			}
	}
	var Wt = function() {
			function SampleTimeOperator(e, t) {
				this.period = e, this.scheduler = t
			}
			return SampleTimeOperator.prototype.call = function(e, t) {
				return t.subscribe(new Bt(e, this.period, this.scheduler))
			}, SampleTimeOperator
		}(),
		Bt = function(e) {
			function SampleTimeSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.period = n, r.scheduler = i, r.hasValue = !1, r.add(i.schedule(dispatchNotification, n, {
					subscriber: r,
					period: n
				})), r
			}
			return __extends(SampleTimeSubscriber, e), SampleTimeSubscriber.prototype._next = function(e) {
				this.lastValue = e, this.hasValue = !0
			}, SampleTimeSubscriber.prototype.notifyNext = function() {
				this.hasValue && (this.hasValue = !1, this.destination.next(this.lastValue))
			}, SampleTimeSubscriber
		}(u);

	function dispatchNotification(e) {
		var t = e.subscriber,
			n = e.period;
		t.notifyNext(), this.schedule(e, n)
	}

	function sequenceEqual(e, t) {
		return function(n) {
			return n.lift(new Vt(e, t))
		}
	}
	var Vt = function() {
			function SequenceEqualOperator(e, t) {
				this.compareTo = e, this.comparator = t
			}
			return SequenceEqualOperator.prototype.call = function(e, t) {
				return t.subscribe(new zt(e, this.compareTo, this.comparator))
			}, SequenceEqualOperator
		}(),
		zt = function(e) {
			function SequenceEqualSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.compareTo = n, r.comparator = i, r._a = [], r._b = [], r._oneComplete = !1, r.destination.add(n.subscribe(new $t(t, r))), r
			}
			return __extends(SequenceEqualSubscriber, e), SequenceEqualSubscriber.prototype._next = function(e) {
				this._oneComplete && 0 === this._b.length ? this.emit(!1) : (this._a.push(e), this.checkValues())
			}, SequenceEqualSubscriber.prototype._complete = function() {
				this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0, this.unsubscribe()
			}, SequenceEqualSubscriber.prototype.checkValues = function() {
				for (var e = this._a, t = this._b, n = this.comparator; e.length > 0 && t.length > 0;) {
					var i = e.shift(),
						r = t.shift(),
						o = !1;
					try {
						o = n ? n(i, r) : i === r
					} catch (e) {
						this.destination.error(e)
					}
					o || this.emit(!1)
				}
			}, SequenceEqualSubscriber.prototype.emit = function(e) {
				var t = this.destination;
				t.next(e), t.complete()
			}, SequenceEqualSubscriber.prototype.nextB = function(e) {
				this._oneComplete && 0 === this._a.length ? this.emit(!1) : (this._b.push(e), this.checkValues())
			}, SequenceEqualSubscriber.prototype.completeB = function() {
				this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0
			}, SequenceEqualSubscriber
		}(u),
		$t = function(e) {
			function SequenceEqualCompareToSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.parent = n, i
			}
			return __extends(SequenceEqualCompareToSubscriber, e), SequenceEqualCompareToSubscriber.prototype._next = function(e) {
				this.parent.nextB(e)
			}, SequenceEqualCompareToSubscriber.prototype._error = function(e) {
				this.parent.error(e), this.unsubscribe()
			}, SequenceEqualCompareToSubscriber.prototype._complete = function() {
				this.parent.completeB(), this.unsubscribe()
			}, SequenceEqualCompareToSubscriber
		}(u);

	function shareSubjectFactory() {
		return new Ve
	}

	function share() {
		return function(e) {
			return refCount_refCount()(multicast(shareSubjectFactory)(e))
		}
	}

	function shareReplay(e, t, n) {
		var i;
		return i = e && "object" == typeof e ? e : {
				bufferSize: e,
				windowTime: t,
				refCount: !1,
				scheduler: n
			},
			function(e) {
				return e.lift(function shareReplayOperator(e) {
					var t, n, i = e.bufferSize,
						r = void 0 === i ? Number.POSITIVE_INFINITY : i,
						o = e.windowTime,
						s = void 0 === o ? Number.POSITIVE_INFINITY : o,
						a = e.refCount,
						c = e.scheduler,
						l = 0,
						u = !1,
						d = !1;
					return function shareReplayOperation(e) {
						var i;
						l++, !t || u ? (u = !1, t = new kt(r, s, c), i = t.subscribe(this), n = e.subscribe({
							next: function(e) {
								t.next(e)
							},
							error: function(e) {
								u = !0, t.error(e)
							},
							complete: function() {
								d = !0, n = void 0, t.complete()
							}
						}), d && (n = void 0)) : i = t.subscribe(this), this.add((function() {
							l--, i.unsubscribe(), i = void 0, n && !d && a && 0 === l && (n.unsubscribe(), n = void 0, t = void 0)
						}))
					}
				}(i))
			}
	}

	function single(e) {
		return function(t) {
			return t.lift(new Ht(e, t))
		}
	}
	var Ht = function() {
			function SingleOperator(e, t) {
				this.predicate = e, this.source = t
			}
			return SingleOperator.prototype.call = function(e, t) {
				return t.subscribe(new Gt(e, this.predicate, this.source))
			}, SingleOperator
		}(),
		Gt = function(e) {
			function SingleSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.predicate = n, r.source = i, r.seenValue = !1, r.index = 0, r
			}
			return __extends(SingleSubscriber, e), SingleSubscriber.prototype.applySingleValue = function(e) {
				this.seenValue ? this.destination.error("Sequence contains more than one element") : (this.seenValue = !0, this.singleValue = e)
			}, SingleSubscriber.prototype._next = function(e) {
				var t = this.index++;
				this.predicate ? this.tryNext(e, t) : this.applySingleValue(e)
			}, SingleSubscriber.prototype.tryNext = function(e, t) {
				try {
					this.predicate(e, t, this.source) && this.applySingleValue(e)
				} catch (e) {
					this.destination.error(e)
				}
			}, SingleSubscriber.prototype._complete = function() {
				var e = this.destination;
				this.index > 0 ? (e.next(this.seenValue ? this.singleValue : void 0), e.complete()) : e.error(new _e)
			}, SingleSubscriber
		}(u);

	function skip(e) {
		return function(t) {
			return t.lift(new qt(e))
		}
	}
	var qt = function() {
			function SkipOperator(e) {
				this.total = e
			}
			return SkipOperator.prototype.call = function(e, t) {
				return t.subscribe(new Yt(e, this.total))
			}, SkipOperator
		}(),
		Yt = function(e) {
			function SkipSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.total = n, i.count = 0, i
			}
			return __extends(SkipSubscriber, e), SkipSubscriber.prototype._next = function(e) {
				++this.count > this.total && this.destination.next(e)
			}, SkipSubscriber
		}(u);

	function skipLast(e) {
		return function(t) {
			return t.lift(new Kt(e))
		}
	}
	var Kt = function() {
			function SkipLastOperator(e) {
				if (this._skipCount = e, this._skipCount < 0) throw new Se
			}
			return SkipLastOperator.prototype.call = function(e, t) {
				return 0 === this._skipCount ? t.subscribe(new u(e)) : t.subscribe(new Xt(e, this._skipCount))
			}, SkipLastOperator
		}(),
		Xt = function(e) {
			function SkipLastSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i._skipCount = n, i._count = 0, i._ring = new Array(n), i
			}
			return __extends(SkipLastSubscriber, e), SkipLastSubscriber.prototype._next = function(e) {
				var t = this._skipCount,
					n = this._count++;
				if (n < t) this._ring[n] = e;
				else {
					var i = n % t,
						r = this._ring,
						o = r[i];
					r[i] = e, this.destination.next(o)
				}
			}, SkipLastSubscriber
		}(u);

	function skipUntil(e) {
		return function(t) {
			return t.lift(new Jt(e))
		}
	}
	var Jt = function() {
			function SkipUntilOperator(e) {
				this.notifier = e
			}
			return SkipUntilOperator.prototype.call = function(e, t) {
				return t.subscribe(new Zt(e, this.notifier))
			}, SkipUntilOperator
		}(),
		Zt = function(e) {
			function SkipUntilSubscriber(t, n) {
				var i = e.call(this, t) || this;
				i.hasValue = !1;
				var r = new g(i);
				i.add(r), i.innerSubscription = r;
				var o = innerSubscribe(n, r);
				return o !== r && (i.add(o), i.innerSubscription = o), i
			}
			return __extends(SkipUntilSubscriber, e), SkipUntilSubscriber.prototype._next = function(t) {
				this.hasValue && e.prototype._next.call(this, t)
			}, SkipUntilSubscriber.prototype.notifyNext = function() {
				this.hasValue = !0, this.innerSubscription && this.innerSubscription.unsubscribe()
			}, SkipUntilSubscriber.prototype.notifyComplete = function() {}, SkipUntilSubscriber
		}(m);

	function skipWhile(e) {
		return function(t) {
			return t.lift(new Qt(e))
		}
	}
	var Qt = function() {
			function SkipWhileOperator(e) {
				this.predicate = e
			}
			return SkipWhileOperator.prototype.call = function(e, t) {
				return t.subscribe(new en(e, this.predicate))
			}, SkipWhileOperator
		}(),
		en = function(e) {
			function SkipWhileSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.predicate = n, i.skipping = !0, i.index = 0, i
			}
			return __extends(SkipWhileSubscriber, e), SkipWhileSubscriber.prototype._next = function(e) {
				var t = this.destination;
				this.skipping && this.tryCallPredicate(e), this.skipping || t.next(e)
			}, SkipWhileSubscriber.prototype.tryCallPredicate = function(e) {
				try {
					var t = this.predicate(e, this.index++);
					this.skipping = Boolean(t)
				} catch (e) {
					this.destination.error(e)
				}
			}, SkipWhileSubscriber
		}(u);

	function startWith() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		var n = e[e.length - 1];
		return isScheduler(n) ? (e.pop(), function(t) {
			return concat(e, t, n)
		}) : function(t) {
			return concat(e, t)
		}
	}
	var tn = 1,
		nn = function() {
			return Promise.resolve()
		}(),
		rn = {};

	function findAndClearHandle(e) {
		return e in rn && (delete rn[e], !0)
	}
	var Immediate_setImmediate = function(e) {
			var t = tn++;
			return rn[t] = !0, nn.then((function() {
				return findAndClearHandle(t) && e()
			})), t
		},
		Immediate_clearImmediate = function(e) {
			findAndClearHandle(e)
		},
		on = function(e) {
			function AsapAction(t, n) {
				var i = e.call(this, t, n) || this;
				return i.scheduler = t, i.work = n, i
			}
			return __extends(AsapAction, e), AsapAction.prototype.requestAsyncId = function(t, n, i) {
				return void 0 === i && (i = 0), null !== i && i > 0 ? e.prototype.requestAsyncId.call(this, t, n, i) : (t.actions.push(this), t.scheduled || (t.scheduled = Immediate_setImmediate(t.flush.bind(t, null))))
			}, AsapAction.prototype.recycleAsyncId = function(t, n, i) {
				if (void 0 === i && (i = 0), null !== i && i > 0 || null === i && this.delay > 0) return e.prototype.recycleAsyncId.call(this, t, n, i);
				0 === t.actions.length && (Immediate_clearImmediate(n), t.scheduled = void 0)
			}, AsapAction
		}(S),
		sn = new(function(e) {
			function AsapScheduler() {
				return null !== e && e.apply(this, arguments) || this
			}
			return __extends(AsapScheduler, e), AsapScheduler.prototype.flush = function(e) {
				this.active = !0, this.scheduled = void 0;
				var t, n = this.actions,
					i = -1,
					r = n.length;
				e = e || n.shift();
				do {
					if (t = e.execute(e.state, e.delay)) break
				} while (++i < r && (e = n.shift()));
				if (this.active = !1, t) {
					for (; ++i < r && (e = n.shift());) e.unsubscribe();
					throw t
				}
			}, AsapScheduler
		}(_))(on),
		an = function(e) {
			function SubscribeOnObservable(t, n, i) {
				void 0 === n && (n = 0), void 0 === i && (i = sn);
				var r = e.call(this) || this;
				return r.source = t, r.delayTime = n, r.scheduler = i, (!isNumeric(n) || n < 0) && (r.delayTime = 0), i && "function" == typeof i.schedule || (r.scheduler = sn), r
			}
			return __extends(SubscribeOnObservable, e), SubscribeOnObservable.create = function(e, t, n) {
				return void 0 === t && (t = 0), void 0 === n && (n = sn), new SubscribeOnObservable(e, t, n)
			}, SubscribeOnObservable.dispatch = function(e) {
				var t = e.source,
					n = e.subscriber;
				return this.add(t.subscribe(n))
			}, SubscribeOnObservable.prototype._subscribe = function(e) {
				var t = this.delayTime,
					n = this.source;
				return this.scheduler.schedule(SubscribeOnObservable.dispatch, t, {
					source: n,
					subscriber: e
				})
			}, SubscribeOnObservable
		}(p);

	function subscribeOn(e, t) {
		return void 0 === t && (t = 0),
			function subscribeOnOperatorFunction(n) {
				return n.lift(new cn(e, t))
			}
	}
	var cn = function() {
		function SubscribeOnOperator(e, t) {
			this.scheduler = e, this.delay = t
		}
		return SubscribeOnOperator.prototype.call = function(e, t) {
			return new an(t, this.delay, this.scheduler).subscribe(e)
		}, SubscribeOnOperator
	}();

	function switchMap(e, t) {
		return "function" == typeof t ? function(n) {
			return n.pipe(switchMap((function(n, i) {
				return from(e(n, i)).pipe(map((function(e, r) {
					return t(n, e, i, r)
				})))
			})))
		} : function(t) {
			return t.lift(new ln(e))
		}
	}
	var ln = function() {
			function SwitchMapOperator(e) {
				this.project = e
			}
			return SwitchMapOperator.prototype.call = function(e, t) {
				return t.subscribe(new un(e, this.project))
			}, SwitchMapOperator
		}(),
		un = function(e) {
			function SwitchMapSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.project = n, i.index = 0, i
			}
			return __extends(SwitchMapSubscriber, e), SwitchMapSubscriber.prototype._next = function(e) {
				var t, n = this.index++;
				try {
					t = this.project(e, n)
				} catch (e) {
					return void this.destination.error(e)
				}
				this._innerSub(t)
			}, SwitchMapSubscriber.prototype._innerSub = function(e) {
				var t = this.innerSubscription;
				t && t.unsubscribe();
				var n = new g(this),
					i = this.destination;
				i.add(n), this.innerSubscription = innerSubscribe(e, n), this.innerSubscription !== n && i.add(this.innerSubscription)
			}, SwitchMapSubscriber.prototype._complete = function() {
				var t = this.innerSubscription;
				t && !t.closed || e.prototype._complete.call(this), this.unsubscribe()
			}, SwitchMapSubscriber.prototype._unsubscribe = function() {
				this.innerSubscription = void 0
			}, SwitchMapSubscriber.prototype.notifyComplete = function() {
				this.innerSubscription = void 0, this.isStopped && e.prototype._complete.call(this)
			}, SwitchMapSubscriber.prototype.notifyNext = function(e) {
				this.destination.next(e)
			}, SwitchMapSubscriber
		}(m);

	function switchAll() {
		return switchMap(identity)
	}

	function switchMapTo(e, t) {
		return t ? switchMap((function() {
			return e
		}), t) : switchMap((function() {
			return e
		}))
	}

	function takeUntil(e) {
		return function(t) {
			return t.lift(new dn(e))
		}
	}
	var dn = function() {
			function TakeUntilOperator(e) {
				this.notifier = e
			}
			return TakeUntilOperator.prototype.call = function(e, t) {
				var n = new hn(e),
					i = innerSubscribe(this.notifier, new g(n));
				return i && !n.seenValue ? (n.add(i), t.subscribe(n)) : n
			}, TakeUntilOperator
		}(),
		hn = function(e) {
			function TakeUntilSubscriber(t) {
				var n = e.call(this, t) || this;
				return n.seenValue = !1, n
			}
			return __extends(TakeUntilSubscriber, e), TakeUntilSubscriber.prototype.notifyNext = function() {
				this.seenValue = !0, this.complete()
			}, TakeUntilSubscriber.prototype.notifyComplete = function() {}, TakeUntilSubscriber
		}(m);

	function takeWhile(e, t) {
		return void 0 === t && (t = !1),
			function(n) {
				return n.lift(new pn(e, t))
			}
	}
	var pn = function() {
			function TakeWhileOperator(e, t) {
				this.predicate = e, this.inclusive = t
			}
			return TakeWhileOperator.prototype.call = function(e, t) {
				return t.subscribe(new fn(e, this.predicate, this.inclusive))
			}, TakeWhileOperator
		}(),
		fn = function(e) {
			function TakeWhileSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.predicate = n, r.inclusive = i, r.index = 0, r
			}
			return __extends(TakeWhileSubscriber, e), TakeWhileSubscriber.prototype._next = function(e) {
				var t, n = this.destination;
				try {
					t = this.predicate(e, this.index++)
				} catch (e) {
					return void n.error(e)
				}
				this.nextOrComplete(e, t)
			}, TakeWhileSubscriber.prototype.nextOrComplete = function(e, t) {
				var n = this.destination;
				Boolean(t) ? n.next(e) : (this.inclusive && n.next(e), n.complete())
			}, TakeWhileSubscriber
		}(u);

	function noop() {}

	function tap(e, t, n) {
		return function tapOperatorFunction(i) {
			return i.lift(new gn(e, t, n))
		}
	}
	var gn = function() {
			function DoOperator(e, t, n) {
				this.nextOrObserver = e, this.error = t, this.complete = n
			}
			return DoOperator.prototype.call = function(e, t) {
				return t.subscribe(new mn(e, this.nextOrObserver, this.error, this.complete))
			}, DoOperator
		}(),
		mn = function(e) {
			function TapSubscriber(t, n, i, r) {
				var o = e.call(this, t) || this;
				return o._tapNext = noop, o._tapError = noop, o._tapComplete = noop, o._tapError = i || noop, o._tapComplete = r || noop, isFunction(n) ? (o._context = o, o._tapNext = n) : n && (o._context = n, o._tapNext = n.next || noop, o._tapError = n.error || noop, o._tapComplete = n.complete || noop), o
			}
			return __extends(TapSubscriber, e), TapSubscriber.prototype._next = function(e) {
				try {
					this._tapNext.call(this._context, e)
				} catch (e) {
					return void this.destination.error(e)
				}
				this.destination.next(e)
			}, TapSubscriber.prototype._error = function(e) {
				try {
					this._tapError.call(this._context, e)
				} catch (e) {
					return void this.destination.error(e)
				}
				this.destination.error(e)
			}, TapSubscriber.prototype._complete = function() {
				try {
					this._tapComplete.call(this._context)
				} catch (e) {
					return void this.destination.error(e)
				}
				return this.destination.complete()
			}, TapSubscriber
		}(u),
		bn = {
			leading: !0,
			trailing: !1
		};

	function throttle(e, t) {
		return void 0 === t && (t = bn),
			function(n) {
				return n.lift(new yn(e, !!t.leading, !!t.trailing))
			}
	}
	var yn = function() {
			function ThrottleOperator(e, t, n) {
				this.durationSelector = e, this.leading = t, this.trailing = n
			}
			return ThrottleOperator.prototype.call = function(e, t) {
				return t.subscribe(new Sn(e, this.durationSelector, this.leading, this.trailing))
			}, ThrottleOperator
		}(),
		Sn = function(e) {
			function ThrottleSubscriber(t, n, i, r) {
				var o = e.call(this, t) || this;
				return o.destination = t, o.durationSelector = n, o._leading = i, o._trailing = r, o._hasValue = !1, o
			}
			return __extends(ThrottleSubscriber, e), ThrottleSubscriber.prototype._next = function(e) {
				this._hasValue = !0, this._sendValue = e, this._throttled || (this._leading ? this.send() : this.throttle(e))
			}, ThrottleSubscriber.prototype.send = function() {
				var e = this._hasValue,
					t = this._sendValue;
				e && (this.destination.next(t), this.throttle(t)), this._hasValue = !1, this._sendValue = void 0
			}, ThrottleSubscriber.prototype.throttle = function(e) {
				var t = this.tryDurationSelector(e);
				t && this.add(this._throttled = innerSubscribe(t, new g(this)))
			}, ThrottleSubscriber.prototype.tryDurationSelector = function(e) {
				try {
					return this.durationSelector(e)
				} catch (e) {
					return this.destination.error(e), null
				}
			}, ThrottleSubscriber.prototype.throttlingDone = function() {
				var e = this._throttled,
					t = this._trailing;
				e && e.unsubscribe(), this._throttled = void 0, t && this.send()
			}, ThrottleSubscriber.prototype.notifyNext = function() {
				this.throttlingDone()
			}, ThrottleSubscriber.prototype.notifyComplete = function() {
				this.throttlingDone()
			}, ThrottleSubscriber
		}(m);

	function throttleTime(e, t, n) {
		return void 0 === t && (t = E), void 0 === n && (n = bn),
			function(i) {
				return i.lift(new vn(e, t, n.leading, n.trailing))
			}
	}
	var vn = function() {
			function ThrottleTimeOperator(e, t, n, i) {
				this.duration = e, this.scheduler = t, this.leading = n, this.trailing = i
			}
			return ThrottleTimeOperator.prototype.call = function(e, t) {
				return t.subscribe(new wn(e, this.duration, this.scheduler, this.leading, this.trailing))
			}, ThrottleTimeOperator
		}(),
		wn = function(e) {
			function ThrottleTimeSubscriber(t, n, i, r, o) {
				var s = e.call(this, t) || this;
				return s.duration = n, s.scheduler = i, s.leading = r, s.trailing = o, s._hasTrailingValue = !1, s._trailingValue = null, s
			}
			return __extends(ThrottleTimeSubscriber, e), ThrottleTimeSubscriber.prototype._next = function(e) {
				this.throttled ? this.trailing && (this._trailingValue = e, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(throttleTime_dispatchNext, this.duration, {
					subscriber: this
				})), this.leading ? this.destination.next(e) : this.trailing && (this._trailingValue = e, this._hasTrailingValue = !0))
			}, ThrottleTimeSubscriber.prototype._complete = function() {
				this._hasTrailingValue ? (this.destination.next(this._trailingValue), this.destination.complete()) : this.destination.complete()
			}, ThrottleTimeSubscriber.prototype.clearThrottle = function() {
				var e = this.throttled;
				e && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), e.unsubscribe(), this.remove(e), this.throttled = null)
			}, ThrottleTimeSubscriber
		}(u);

	function throttleTime_dispatchNext(e) {
		e.subscriber.clearThrottle()
	}

	function timeInterval(e) {
		return void 0 === e && (e = E),
			function(t) {
				return function defer(e) {
					return new p((function(t) {
						var n;
						try {
							n = e()
						} catch (e) {
							return void t.error(e)
						}
						return (n ? from(n) : empty_empty()).subscribe(t)
					}))
				}((function() {
					return t.pipe(scan((function(t, n) {
						var i = t.current;
						return {
							value: n,
							current: e.now(),
							last: i
						}
					}), {
						current: e.now(),
						value: void 0,
						last: void 0
					}), map((function(e) {
						var t = e.current,
							n = e.last,
							i = e.value;
						return new _n(i, t - n)
					})))
				}))
			}
	}
	var _n = function() {
			return function TimeInterval(e, t) {
				this.value = e, this.interval = t
			}
		}(),
		En = function() {
			function TimeoutErrorImpl() {
				return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this
			}
			return TimeoutErrorImpl.prototype = Object.create(Error.prototype), TimeoutErrorImpl
		}();

	function timeoutWith(e, t, n) {
		return void 0 === n && (n = E),
			function(i) {
				var r = isDate(e),
					o = r ? +e - n.now() : Math.abs(e);
				return i.lift(new Dn(o, r, t, n))
			}
	}
	var Dn = function() {
			function TimeoutWithOperator(e, t, n, i) {
				this.waitFor = e, this.absoluteTimeout = t, this.withObservable = n, this.scheduler = i
			}
			return TimeoutWithOperator.prototype.call = function(e, t) {
				return t.subscribe(new An(e, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler))
			}, TimeoutWithOperator
		}(),
		An = function(e) {
			function TimeoutWithSubscriber(t, n, i, r, o) {
				var s = e.call(this, t) || this;
				return s.absoluteTimeout = n, s.waitFor = i, s.withObservable = r, s.scheduler = o, s.scheduleTimeout(), s
			}
			return __extends(TimeoutWithSubscriber, e), TimeoutWithSubscriber.dispatchTimeout = function(e) {
				var t = e.withObservable;
				e._unsubscribeAndRecycle(), e.add(innerSubscribe(t, new g(e)))
			}, TimeoutWithSubscriber.prototype.scheduleTimeout = function() {
				var e = this.action;
				e ? this.action = e.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this))
			}, TimeoutWithSubscriber.prototype._next = function(t) {
				this.absoluteTimeout || this.scheduleTimeout(), e.prototype._next.call(this, t)
			}, TimeoutWithSubscriber.prototype._unsubscribe = function() {
				this.action = void 0, this.scheduler = null, this.withObservable = null
			}, TimeoutWithSubscriber
		}(m);

	function timeout(e, t) {
		return void 0 === t && (t = E), timeoutWith(e, throwError(new En), t)
	}

	function timestamp(e) {
		return void 0 === e && (e = E), map((function(t) {
			return new kn(t, e.now())
		}))
	}
	var kn = function() {
		return function Timestamp(e, t) {
			this.value = e, this.timestamp = t
		}
	}();

	function toArrayReducer(e, t, n) {
		return 0 === n ? [t] : (e.push(t), e)
	}

	function toArray() {
		return reduce(toArrayReducer, [])
	}

	function window_window(e) {
		return function windowOperatorFunction(t) {
			return t.lift(new Cn(e))
		}
	}
	var Cn = function() {
			function WindowOperator(e) {
				this.windowBoundaries = e
			}
			return WindowOperator.prototype.call = function(e, t) {
				var n = new In(e),
					i = t.subscribe(n);
				return i.closed || n.add(innerSubscribe(this.windowBoundaries, new g(n))), i
			}, WindowOperator
		}(),
		In = function(e) {
			function WindowSubscriber(t) {
				var n = e.call(this, t) || this;
				return n.window = new Ve, t.next(n.window), n
			}
			return __extends(WindowSubscriber, e), WindowSubscriber.prototype.notifyNext = function() {
				this.openWindow()
			}, WindowSubscriber.prototype.notifyError = function(e) {
				this._error(e)
			}, WindowSubscriber.prototype.notifyComplete = function() {
				this._complete()
			}, WindowSubscriber.prototype._next = function(e) {
				this.window.next(e)
			}, WindowSubscriber.prototype._error = function(e) {
				this.window.error(e), this.destination.error(e)
			}, WindowSubscriber.prototype._complete = function() {
				this.window.complete(), this.destination.complete()
			}, WindowSubscriber.prototype._unsubscribe = function() {
				this.window = null
			}, WindowSubscriber.prototype.openWindow = function() {
				var e = this.window;
				e && e.complete();
				var t = this.destination,
					n = this.window = new Ve;
				t.next(n)
			}, WindowSubscriber
		}(m);

	function windowCount(e, t) {
		return void 0 === t && (t = 0),
			function windowCountOperatorFunction(n) {
				return n.lift(new On(e, t))
			}
	}
	var On = function() {
			function WindowCountOperator(e, t) {
				this.windowSize = e, this.startWindowEvery = t
			}
			return WindowCountOperator.prototype.call = function(e, t) {
				return t.subscribe(new Tn(e, this.windowSize, this.startWindowEvery))
			}, WindowCountOperator
		}(),
		Tn = function(e) {
			function WindowCountSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.destination = t, r.windowSize = n, r.startWindowEvery = i, r.windows = [new Ve], r.count = 0, t.next(r.windows[0]), r
			}
			return __extends(WindowCountSubscriber, e), WindowCountSubscriber.prototype._next = function(e) {
				for (var t = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize, n = this.destination, i = this.windowSize, r = this.windows, o = r.length, s = 0; s < o && !this.closed; s++) r[s].next(e);
				var a = this.count - i + 1;
				if (a >= 0 && a % t == 0 && !this.closed && r.shift().complete(), ++this.count % t == 0 && !this.closed) {
					var c = new Ve;
					r.push(c), n.next(c)
				}
			}, WindowCountSubscriber.prototype._error = function(e) {
				var t = this.windows;
				if (t)
					for (; t.length > 0 && !this.closed;) t.shift().error(e);
				this.destination.error(e)
			}, WindowCountSubscriber.prototype._complete = function() {
				var e = this.windows;
				if (e)
					for (; e.length > 0 && !this.closed;) e.shift().complete();
				this.destination.complete()
			}, WindowCountSubscriber.prototype._unsubscribe = function() {
				this.count = 0, this.windows = null
			}, WindowCountSubscriber
		}(u);

	function windowTime_windowTime(e) {
		var t = E,
			n = null,
			i = Number.POSITIVE_INFINITY;
		return isScheduler(arguments[3]) && (t = arguments[3]), isScheduler(arguments[2]) ? t = arguments[2] : isNumeric(arguments[2]) && (i = Number(arguments[2])), isScheduler(arguments[1]) ? t = arguments[1] : isNumeric(arguments[1]) && (n = Number(arguments[1])),
			function windowTimeOperatorFunction(r) {
				return r.lift(new xn(e, n, i, t))
			}
	}
	var xn = function() {
			function WindowTimeOperator(e, t, n, i) {
				this.windowTimeSpan = e, this.windowCreationInterval = t, this.maxWindowSize = n, this.scheduler = i
			}
			return WindowTimeOperator.prototype.call = function(e, t) {
				return t.subscribe(new Nn(e, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler))
			}, WindowTimeOperator
		}(),
		Ln = function(e) {
			function CountedSubject() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t._numberOfNextedValues = 0, t
			}
			return __extends(CountedSubject, e), CountedSubject.prototype.next = function(t) {
				this._numberOfNextedValues++, e.prototype.next.call(this, t)
			}, Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
				get: function() {
					return this._numberOfNextedValues
				},
				enumerable: !0,
				configurable: !0
			}), CountedSubject
		}(Ve),
		Nn = function(e) {
			function WindowTimeSubscriber(t, n, i, r, o) {
				var s = e.call(this, t) || this;
				s.destination = t, s.windowTimeSpan = n, s.windowCreationInterval = i, s.maxWindowSize = r, s.scheduler = o, s.windows = [];
				var a = s.openWindow();
				if (null !== i && i >= 0) {
					var c = {
							subscriber: s,
							window: a,
							context: null
						},
						l = {
							windowTimeSpan: n,
							windowCreationInterval: i,
							subscriber: s,
							scheduler: o
						};
					s.add(o.schedule(dispatchWindowClose, n, c)), s.add(o.schedule(dispatchWindowCreation, i, l))
				} else {
					var u = {
						subscriber: s,
						window: a,
						windowTimeSpan: n
					};
					s.add(o.schedule(dispatchWindowTimeSpanOnly, n, u))
				}
				return s
			}
			return __extends(WindowTimeSubscriber, e), WindowTimeSubscriber.prototype._next = function(e) {
				for (var t = this.windows, n = t.length, i = 0; i < n; i++) {
					var r = t[i];
					r.closed || (r.next(e), r.numberOfNextedValues >= this.maxWindowSize && this.closeWindow(r))
				}
			}, WindowTimeSubscriber.prototype._error = function(e) {
				for (var t = this.windows; t.length > 0;) t.shift().error(e);
				this.destination.error(e)
			}, WindowTimeSubscriber.prototype._complete = function() {
				for (var e = this.windows; e.length > 0;) {
					var t = e.shift();
					t.closed || t.complete()
				}
				this.destination.complete()
			}, WindowTimeSubscriber.prototype.openWindow = function() {
				var e = new Ln;
				return this.windows.push(e), this.destination.next(e), e
			}, WindowTimeSubscriber.prototype.closeWindow = function(e) {
				e.complete();
				var t = this.windows;
				t.splice(t.indexOf(e), 1)
			}, WindowTimeSubscriber
		}(u);

	function dispatchWindowTimeSpanOnly(e) {
		var t = e.subscriber,
			n = e.windowTimeSpan,
			i = e.window;
		i && t.closeWindow(i), e.window = t.openWindow(), this.schedule(e, n)
	}

	function dispatchWindowCreation(e) {
		var t = e.windowTimeSpan,
			n = e.subscriber,
			i = e.scheduler,
			r = e.windowCreationInterval,
			o = n.openWindow(),
			s = {
				action: this,
				subscription: null
			},
			a = {
				subscriber: n,
				window: o,
				context: s
			};
		s.subscription = i.schedule(dispatchWindowClose, t, a), this.add(s.subscription), this.schedule(e, r)
	}

	function dispatchWindowClose(e) {
		var t = e.subscriber,
			n = e.window,
			i = e.context;
		i && i.action && i.subscription && i.action.remove(i.subscription), t.closeWindow(n)
	}

	function windowToggle(e, t) {
		return function(n) {
			return n.lift(new Rn(e, t))
		}
	}
	var Rn = function() {
			function WindowToggleOperator(e, t) {
				this.openings = e, this.closingSelector = t
			}
			return WindowToggleOperator.prototype.call = function(e, t) {
				return t.subscribe(new Pn(e, this.openings, this.closingSelector))
			}, WindowToggleOperator
		}(),
		Pn = function(e) {
			function WindowToggleSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				return r.openings = n, r.closingSelector = i, r.contexts = [], r.add(r.openSubscription = subscribeToResult(r, n, n)), r
			}
			return __extends(WindowToggleSubscriber, e), WindowToggleSubscriber.prototype._next = function(e) {
				var t = this.contexts;
				if (t)
					for (var n = t.length, i = 0; i < n; i++) t[i].window.next(e)
			}, WindowToggleSubscriber.prototype._error = function(t) {
				var n = this.contexts;
				if (this.contexts = null, n)
					for (var i = n.length, r = -1; ++r < i;) {
						var o = n[r];
						o.window.error(t), o.subscription.unsubscribe()
					}
				e.prototype._error.call(this, t)
			}, WindowToggleSubscriber.prototype._complete = function() {
				var t = this.contexts;
				if (this.contexts = null, t)
					for (var n = t.length, i = -1; ++i < n;) {
						var r = t[i];
						r.window.complete(), r.subscription.unsubscribe()
					}
				e.prototype._complete.call(this)
			}, WindowToggleSubscriber.prototype._unsubscribe = function() {
				var e = this.contexts;
				if (this.contexts = null, e)
					for (var t = e.length, n = -1; ++n < t;) {
						var i = e[n];
						i.window.unsubscribe(), i.subscription.unsubscribe()
					}
			}, WindowToggleSubscriber.prototype.notifyNext = function(e, t, n, i, r) {
				if (e === this.openings) {
					var o = void 0;
					try {
						o = (0, this.closingSelector)(t)
					} catch (e) {
						return this.error(e)
					}
					var s = new Ve,
						a = new c,
						l = {
							window: s,
							subscription: a
						};
					this.contexts.push(l);
					var u = subscribeToResult(this, o, l);
					u.closed ? this.closeWindow(this.contexts.length - 1) : (u.context = l, a.add(u)), this.destination.next(s)
				} else this.closeWindow(this.contexts.indexOf(e))
			}, WindowToggleSubscriber.prototype.notifyError = function(e) {
				this.error(e)
			}, WindowToggleSubscriber.prototype.notifyComplete = function(e) {
				e !== this.openSubscription && this.closeWindow(this.contexts.indexOf(e.context))
			}, WindowToggleSubscriber.prototype.closeWindow = function(e) {
				if (-1 !== e) {
					var t = this.contexts,
						n = t[e],
						i = n.window,
						r = n.subscription;
					t.splice(e, 1), i.complete(), r.unsubscribe()
				}
			}, WindowToggleSubscriber
		}(N);

	function windowWhen(e) {
		return function windowWhenOperatorFunction(t) {
			return t.lift(new Mn(e))
		}
	}
	var Mn = function() {
			function WindowOperator(e) {
				this.closingSelector = e
			}
			return WindowOperator.prototype.call = function(e, t) {
				return t.subscribe(new Un(e, this.closingSelector))
			}, WindowOperator
		}(),
		Un = function(e) {
			function WindowSubscriber(t, n) {
				var i = e.call(this, t) || this;
				return i.destination = t, i.closingSelector = n, i.openWindow(), i
			}
			return __extends(WindowSubscriber, e), WindowSubscriber.prototype.notifyNext = function(e, t, n, i, r) {
				this.openWindow(r)
			}, WindowSubscriber.prototype.notifyError = function(e) {
				this._error(e)
			}, WindowSubscriber.prototype.notifyComplete = function(e) {
				this.openWindow(e)
			}, WindowSubscriber.prototype._next = function(e) {
				this.window.next(e)
			}, WindowSubscriber.prototype._error = function(e) {
				this.window.error(e), this.destination.error(e), this.unsubscribeClosingNotification()
			}, WindowSubscriber.prototype._complete = function() {
				this.window.complete(), this.destination.complete(), this.unsubscribeClosingNotification()
			}, WindowSubscriber.prototype.unsubscribeClosingNotification = function() {
				this.closingNotification && this.closingNotification.unsubscribe()
			}, WindowSubscriber.prototype.openWindow = function(e) {
				void 0 === e && (e = null), e && (this.remove(e), e.unsubscribe());
				var t = this.window;
				t && t.complete();
				var n, i = this.window = new Ve;
				this.destination.next(i);
				try {
					n = (0, this.closingSelector)()
				} catch (e) {
					return this.destination.error(e), void this.window.error(e)
				}
				this.add(this.closingNotification = subscribeToResult(this, n))
			}, WindowSubscriber
		}(N);

	function withLatestFrom() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return function(t) {
			var n;
			"function" == typeof e[e.length - 1] && (n = e.pop());
			var i = e;
			return t.lift(new Fn(i, n))
		}
	}
	var Fn = function() {
			function WithLatestFromOperator(e, t) {
				this.observables = e, this.project = t
			}
			return WithLatestFromOperator.prototype.call = function(e, t) {
				return t.subscribe(new jn(e, this.observables, this.project))
			}, WithLatestFromOperator
		}(),
		jn = function(e) {
			function WithLatestFromSubscriber(t, n, i) {
				var r = e.call(this, t) || this;
				r.observables = n, r.project = i, r.toRespond = [];
				var o = n.length;
				r.values = new Array(o);
				for (var s = 0; s < o; s++) r.toRespond.push(s);
				for (s = 0; s < o; s++) {
					var a = n[s];
					r.add(subscribeToResult(r, a, void 0, s))
				}
				return r
			}
			return __extends(WithLatestFromSubscriber, e), WithLatestFromSubscriber.prototype.notifyNext = function(e, t, n) {
				this.values[n] = t;
				var i = this.toRespond;
				if (i.length > 0) {
					var r = i.indexOf(n); - 1 !== r && i.splice(r, 1)
				}
			}, WithLatestFromSubscriber.prototype.notifyComplete = function() {}, WithLatestFromSubscriber.prototype._next = function(e) {
				if (0 === this.toRespond.length) {
					var t = [e].concat(this.values);
					this.project ? this._tryProject(t) : this.destination.next(t)
				}
			}, WithLatestFromSubscriber.prototype._tryProject = function(e) {
				var t;
				try {
					t = this.project.apply(this, e)
				} catch (e) {
					return void this.destination.error(e)
				}
				this.destination.next(t)
			}, WithLatestFromSubscriber
		}(N);

	function zip() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		var n = e[e.length - 1];
		return "function" == typeof n && e.pop(), fromArray(e, void 0).lift(new Wn(n))
	}
	var Wn = function() {
			function ZipOperator(e) {
				this.resultSelector = e
			}
			return ZipOperator.prototype.call = function(e, t) {
				return t.subscribe(new Bn(e, this.resultSelector))
			}, ZipOperator
		}(),
		Bn = function(e) {
			function ZipSubscriber(t, n, i) {
				void 0 === i && (i = Object.create(null));
				var r = e.call(this, t) || this;
				return r.resultSelector = n, r.iterators = [], r.active = 0, r.resultSelector = "function" == typeof n ? n : void 0, r
			}
			return __extends(ZipSubscriber, e), ZipSubscriber.prototype._next = function(e) {
				var t = this.iterators;
				s(e) ? t.push(new zn(e)) : "function" == typeof e[f] ? t.push(new Vn(e[f]())) : t.push(new $n(this.destination, this, e))
			}, ZipSubscriber.prototype._complete = function() {
				var e = this.iterators,
					t = e.length;
				if (this.unsubscribe(), 0 !== t) {
					this.active = t;
					for (var n = 0; n < t; n++) {
						var i = e[n];
						if (i.stillUnsubscribed) this.destination.add(i.subscribe());
						else this.active--
					}
				} else this.destination.complete()
			}, ZipSubscriber.prototype.notifyInactive = function() {
				this.active--, 0 === this.active && this.destination.complete()
			}, ZipSubscriber.prototype.checkIterators = function() {
				for (var e = this.iterators, t = e.length, n = this.destination, i = 0; i < t; i++) {
					if ("function" == typeof(s = e[i]).hasValue && !s.hasValue()) return
				}
				var r = !1,
					o = [];
				for (i = 0; i < t; i++) {
					var s, a = (s = e[i]).next();
					if (s.hasCompleted() && (r = !0), a.done) return void n.complete();
					o.push(a.value)
				}
				this.resultSelector ? this._tryresultSelector(o) : n.next(o), r && n.complete()
			}, ZipSubscriber.prototype._tryresultSelector = function(e) {
				var t;
				try {
					t = this.resultSelector.apply(this, e)
				} catch (e) {
					return void this.destination.error(e)
				}
				this.destination.next(t)
			}, ZipSubscriber
		}(u),
		Vn = function() {
			function StaticIterator(e) {
				this.iterator = e, this.nextResult = e.next()
			}
			return StaticIterator.prototype.hasValue = function() {
				return !0
			}, StaticIterator.prototype.next = function() {
				var e = this.nextResult;
				return this.nextResult = this.iterator.next(), e
			}, StaticIterator.prototype.hasCompleted = function() {
				var e = this.nextResult;
				return Boolean(e && e.done)
			}, StaticIterator
		}(),
		zn = function() {
			function StaticArrayIterator(e) {
				this.array = e, this.index = 0, this.length = 0, this.length = e.length
			}
			return StaticArrayIterator.prototype[f] = function() {
				return this
			}, StaticArrayIterator.prototype.next = function(e) {
				var t = this.index++,
					n = this.array;
				return t < this.length ? {
					value: n[t],
					done: !1
				} : {
					value: null,
					done: !0
				}
			}, StaticArrayIterator.prototype.hasValue = function() {
				return this.array.length > this.index
			}, StaticArrayIterator.prototype.hasCompleted = function() {
				return this.array.length === this.index
			}, StaticArrayIterator
		}(),
		$n = function(e) {
			function ZipBufferIterator(t, n, i) {
				var r = e.call(this, t) || this;
				return r.parent = n, r.observable = i, r.stillUnsubscribed = !0, r.buffer = [], r.isComplete = !1, r
			}
			return __extends(ZipBufferIterator, e), ZipBufferIterator.prototype[f] = function() {
				return this
			}, ZipBufferIterator.prototype.next = function() {
				var e = this.buffer;
				return 0 === e.length && this.isComplete ? {
					value: null,
					done: !0
				} : {
					value: e.shift(),
					done: !1
				}
			}, ZipBufferIterator.prototype.hasValue = function() {
				return this.buffer.length > 0
			}, ZipBufferIterator.prototype.hasCompleted = function() {
				return 0 === this.buffer.length && this.isComplete
			}, ZipBufferIterator.prototype.notifyComplete = function() {
				this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete()
			}, ZipBufferIterator.prototype.notifyNext = function(e) {
				this.buffer.push(e), this.parent.checkIterators()
			}, ZipBufferIterator.prototype.subscribe = function() {
				return innerSubscribe(this.observable, new g(this))
			}, ZipBufferIterator
		}(m);

	function zip_zip() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		return function zipOperatorFunction(t) {
			return t.lift.call(zip.apply(void 0, [t].concat(e)))
		}
	}

	function zipAll(e) {
		return function(t) {
			return t.lift(new Wn(e))
		}
	}
}]);
//# sourceMappingURL=main.js.map