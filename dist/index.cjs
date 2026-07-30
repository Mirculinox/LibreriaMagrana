Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let react = require("react");
let react$1 = __toESM(react, 1);
react = __toESM(react);
let react_jsx_runtime = require("react/jsx-runtime");
let react_dom = require("react-dom");
//#region src/components/Button/Button.tsx
var variantStyles = {
	primary: {
		background: "var(--magrana-primary, #FB7185)",
		color: "white",
		border: "none",
		boxShadow: "0 4px 15px rgba(251, 113, 133, 0.35)"
	},
	secondary: {
		background: "var(--magrana-glass-bg, rgba(40,40,40,0.75))",
		color: "var(--magrana-text, #F8FAFC)",
		border: "1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))"
	},
	danger: {
		background: "rgba(239, 68, 68, 0.15)",
		color: "#EF4444",
		border: "1px solid #EF4444"
	},
	ghost: {
		background: "transparent",
		color: "var(--magrana-text, #F8FAFC)",
		border: "1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))"
	}
};
var sizeStyles = {
	sm: {
		padding: "0.4rem 0.9rem",
		fontSize: "0.8125rem",
		borderRadius: "var(--magrana-radius-sm, 8px)"
	},
	md: {
		padding: "0.6rem 1.4rem",
		fontSize: "0.9375rem",
		borderRadius: "var(--magrana-radius-md, 12px)"
	},
	lg: {
		padding: "0.9rem 2rem",
		fontSize: "1.0625rem",
		borderRadius: "var(--magrana-radius-md, 12px)"
	}
};
/**
* Botón estándar del ecosistema Magrana.
*
* @example
* <Button variant="primary" onClick={handleSave}>Guardar</Button>
* <Button variant="danger" size="sm">Eliminar</Button>
*/
function Button({ variant = "secondary", size = "md", loading = false, disabled, children, style, ...rest }) {
	const baseStyle = {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "0.4rem",
		fontWeight: 600,
		fontFamily: "var(--magrana-font, Inter, sans-serif)",
		cursor: disabled || loading ? "not-allowed" : "pointer",
		opacity: disabled || loading ? .6 : 1,
		transition: "all var(--magrana-transition-normal, 0.3s cubic-bezier(0.4, 0, 0.2, 1))",
		userSelect: "none",
		letterSpacing: "-0.01em",
		...variantStyles[variant],
		...sizeStyles[size],
		...style
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
		disabled: disabled || loading,
		style: baseStyle,
		onMouseEnter: (e) => {
			if (!disabled && !loading) {
				e.currentTarget.style.opacity = "0.85";
				e.currentTarget.style.transform = "translateY(-1px)";
			}
		},
		onMouseLeave: (e) => {
			e.currentTarget.style.opacity = "1";
			e.currentTarget.style.transform = "translateY(0)";
		},
		onMouseDown: (e) => {
			e.currentTarget.style.transform = "scale(0.97)";
		},
		onMouseUp: (e) => {
			e.currentTarget.style.transform = "translateY(-1px)";
		},
		...rest,
		children: loading ? "⏳" : children
	});
}
//#endregion
//#region src/components/Card/Card.tsx
/**
* Contenedor tarjeta del ecosistema Magrana.
* Soporta efecto glassmorphism igual al `.glass-panel` de las apps existentes.
*
* @example
* <Card glass padding="2rem">
*   <h2>Título</h2>
* </Card>
*/
function Card({ glass = true, padding = "1.5rem", children, style, ...rest }) {
	const cardStyle = {
		background: glass ? "var(--magrana-glass-bg, rgba(40,40,40,0.75))" : "var(--magrana-card, #141414)",
		backdropFilter: glass ? "blur(16px)" : void 0,
		WebkitBackdropFilter: glass ? "blur(16px)" : void 0,
		border: "1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))",
		borderRadius: "var(--magrana-radius-lg, 20px)",
		boxShadow: "var(--magrana-shadow-card, 0 10px 30px rgba(0,0,0,0.4))",
		padding,
		...style
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		style: cardStyle,
		...rest,
		children
	});
}
//#endregion
//#region src/components/Badge/Badge.tsx
var colorMap = {
	primary: {
		bg: "rgba(251, 113, 133, 0.18)",
		text: "#FB7185"
	},
	orange: {
		bg: "rgba(249, 115, 22, 0.18)",
		text: "#f97316"
	},
	magenta: {
		bg: "rgba(217, 70, 239, 0.18)",
		text: "#d946ef"
	},
	emerald: {
		bg: "rgba(16, 185, 129, 0.18)",
		text: "#10b981"
	},
	purple: {
		bg: "rgba(139, 92, 246, 0.18)",
		text: "#8b5cf6"
	},
	blue: {
		bg: "rgba(14, 165, 233, 0.18)",
		text: "#0ea5e9"
	},
	neutral: {
		bg: "rgba(161, 161, 170, 0.18)",
		text: "#A1A1AA"
	}
};
/**
* Chip de etiqueta para niveles educativos, categorías y estados.
*
* @example
* <Badge color="emerald">Secundaria</Badge>
* <Badge color="purple">IA</Badge>
*/
function Badge({ color = "neutral", children, style, ...rest }) {
	const { bg, text } = colorMap[color];
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
		style: {
			display: "inline-flex",
			alignItems: "center",
			padding: "0.2rem 0.65rem",
			borderRadius: "20px",
			fontSize: "0.75rem",
			fontWeight: 600,
			fontFamily: "var(--magrana-font, Inter, sans-serif)",
			letterSpacing: "0.01em",
			background: bg,
			color: text,
			border: `1px solid ${text}33`,
			userSelect: "none",
			...style
		},
		...rest,
		children
	});
}
//#endregion
//#region ../../node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
function isWindow(element) {
	const elementString = Object.prototype.toString.call(element);
	return elementString === "[object Window]" || elementString === "[object global]";
}
function isNode(node) {
	return "nodeType" in node;
}
function getWindow(target) {
	var _target$ownerDocument, _target$ownerDocument2;
	if (!target) return window;
	if (isWindow(target)) return target;
	if (!isNode(target)) return window;
	return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}
function isDocument(node) {
	const { Document } = getWindow(node);
	return node instanceof Document;
}
function isHTMLElement(node) {
	if (isWindow(node)) return false;
	return node instanceof getWindow(node).HTMLElement;
}
function isSVGElement(node) {
	return node instanceof getWindow(node).SVGElement;
}
function getOwnerDocument(target) {
	if (!target) return document;
	if (isWindow(target)) return target.document;
	if (!isNode(target)) return document;
	if (isDocument(target)) return target;
	if (isHTMLElement(target) || isSVGElement(target)) return target.ownerDocument;
	return document;
}
/**
* A hook that resolves to useEffect on the server and useLayoutEffect on the client
* @param callback {function} Callback function that is invoked when the dependencies of the hook change
*/
var useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;
function useEvent(handler) {
	const handlerRef = (0, react.useRef)(handler);
	useIsomorphicLayoutEffect(() => {
		handlerRef.current = handler;
	});
	return (0, react.useCallback)(function() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		return handlerRef.current == null ? void 0 : handlerRef.current(...args);
	}, []);
}
function useInterval() {
	const intervalRef = (0, react.useRef)(null);
	return [(0, react.useCallback)((listener, duration) => {
		intervalRef.current = setInterval(listener, duration);
	}, []), (0, react.useCallback)(() => {
		if (intervalRef.current !== null) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, [])];
}
function useLatestValue(value, dependencies) {
	if (dependencies === void 0) dependencies = [value];
	const valueRef = (0, react.useRef)(value);
	useIsomorphicLayoutEffect(() => {
		if (valueRef.current !== value) valueRef.current = value;
	}, dependencies);
	return valueRef;
}
function useLazyMemo(callback, dependencies) {
	const valueRef = (0, react.useRef)();
	return (0, react.useMemo)(() => {
		const newValue = callback(valueRef.current);
		valueRef.current = newValue;
		return newValue;
	}, [...dependencies]);
}
function useNodeRef(onChange) {
	const onChangeHandler = useEvent(onChange);
	const node = (0, react.useRef)(null);
	return [node, (0, react.useCallback)((element) => {
		if (element !== node.current) onChangeHandler?.(element, node.current);
		node.current = element;
	}, [])];
}
function usePrevious(value) {
	const ref = (0, react.useRef)();
	(0, react.useEffect)(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}
var ids = {};
function useUniqueId(prefix, value) {
	return (0, react.useMemo)(() => {
		if (value) return value;
		const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
		ids[prefix] = id;
		return prefix + "-" + id;
	}, [prefix, value]);
}
function createAdjustmentFn(modifier) {
	return function(object) {
		for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) adjustments[_key - 1] = arguments[_key];
		return adjustments.reduce((accumulator, adjustment) => {
			const entries = Object.entries(adjustment);
			for (const [key, valueAdjustment] of entries) {
				const value = accumulator[key];
				if (value != null) accumulator[key] = value + modifier * valueAdjustment;
			}
			return accumulator;
		}, { ...object });
	};
}
var add = /*#__PURE__*/ createAdjustmentFn(1);
var subtract = /*#__PURE__*/ createAdjustmentFn(-1);
function hasViewportRelativeCoordinates(event) {
	return "clientX" in event && "clientY" in event;
}
function isKeyboardEvent(event) {
	if (!event) return false;
	const { KeyboardEvent } = getWindow(event.target);
	return KeyboardEvent && event instanceof KeyboardEvent;
}
function isTouchEvent(event) {
	if (!event) return false;
	const { TouchEvent } = getWindow(event.target);
	return TouchEvent && event instanceof TouchEvent;
}
/**
* Returns the normalized x and y coordinates for mouse and touch events.
*/
function getEventCoordinates(event) {
	if (isTouchEvent(event)) {
		if (event.touches && event.touches.length) {
			const { clientX: x, clientY: y } = event.touches[0];
			return {
				x,
				y
			};
		} else if (event.changedTouches && event.changedTouches.length) {
			const { clientX: x, clientY: y } = event.changedTouches[0];
			return {
				x,
				y
			};
		}
	}
	if (hasViewportRelativeCoordinates(event)) return {
		x: event.clientX,
		y: event.clientY
	};
	return null;
}
var SELECTOR = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function findFirstFocusableNode(element) {
	if (element.matches(SELECTOR)) return element;
	return element.querySelector(SELECTOR);
}
//#endregion
//#region ../../node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js
var hiddenStyles = { display: "none" };
function HiddenText(_ref) {
	let { id, value } = _ref;
	return react.default.createElement("div", {
		id,
		style: hiddenStyles
	}, value);
}
function LiveRegion(_ref) {
	let { id, announcement, ariaLiveType = "assertive" } = _ref;
	return react.default.createElement("div", {
		id,
		style: {
			position: "fixed",
			top: 0,
			left: 0,
			width: 1,
			height: 1,
			margin: -1,
			border: 0,
			padding: 0,
			overflow: "hidden",
			clip: "rect(0 0 0 0)",
			clipPath: "inset(100%)",
			whiteSpace: "nowrap"
		},
		role: "status",
		"aria-live": ariaLiveType,
		"aria-atomic": true
	}, announcement);
}
function useAnnouncement() {
	const [announcement, setAnnouncement] = (0, react.useState)("");
	return {
		announce: (0, react.useCallback)((value) => {
			if (value != null) setAnnouncement(value);
		}, []),
		announcement
	};
}
//#endregion
//#region ../../node_modules/@dnd-kit/core/dist/core.esm.js
var DndMonitorContext = /*#__PURE__*/ (0, react.createContext)(null);
function useDndMonitor(listener) {
	const registerListener = (0, react.useContext)(DndMonitorContext);
	(0, react.useEffect)(() => {
		if (!registerListener) throw new Error("useDndMonitor must be used within a children of <DndContext>");
		return registerListener(listener);
	}, [listener, registerListener]);
}
function useDndMonitorProvider() {
	const [listeners] = (0, react.useState)(() => /* @__PURE__ */ new Set());
	const registerListener = (0, react.useCallback)((listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	}, [listeners]);
	return [(0, react.useCallback)((_ref) => {
		let { type, event } = _ref;
		listeners.forEach((listener) => {
			var _listener$type;
			return (_listener$type = listener[type]) == null ? void 0 : _listener$type.call(listener, event);
		});
	}, [listeners]), registerListener];
}
var defaultScreenReaderInstructions = { draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  " };
var defaultAnnouncements = {
	onDragStart(_ref) {
		let { active } = _ref;
		return "Picked up draggable item " + active.id + ".";
	},
	onDragOver(_ref2) {
		let { active, over } = _ref2;
		if (over) return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
		return "Draggable item " + active.id + " is no longer over a droppable area.";
	},
	onDragEnd(_ref3) {
		let { active, over } = _ref3;
		if (over) return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
		return "Draggable item " + active.id + " was dropped.";
	},
	onDragCancel(_ref4) {
		let { active } = _ref4;
		return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
	}
};
function Accessibility(_ref) {
	let { announcements = defaultAnnouncements, container, hiddenTextDescribedById, screenReaderInstructions = defaultScreenReaderInstructions } = _ref;
	const { announce, announcement } = useAnnouncement();
	const liveRegionId = useUniqueId("DndLiveRegion");
	const [mounted, setMounted] = (0, react.useState)(false);
	(0, react.useEffect)(() => {
		setMounted(true);
	}, []);
	useDndMonitor((0, react.useMemo)(() => ({
		onDragStart(_ref2) {
			let { active } = _ref2;
			announce(announcements.onDragStart({ active }));
		},
		onDragMove(_ref3) {
			let { active, over } = _ref3;
			if (announcements.onDragMove) announce(announcements.onDragMove({
				active,
				over
			}));
		},
		onDragOver(_ref4) {
			let { active, over } = _ref4;
			announce(announcements.onDragOver({
				active,
				over
			}));
		},
		onDragEnd(_ref5) {
			let { active, over } = _ref5;
			announce(announcements.onDragEnd({
				active,
				over
			}));
		},
		onDragCancel(_ref6) {
			let { active, over } = _ref6;
			announce(announcements.onDragCancel({
				active,
				over
			}));
		}
	}), [announce, announcements]));
	if (!mounted) return null;
	const markup = react.default.createElement(react.default.Fragment, null, react.default.createElement(HiddenText, {
		id: hiddenTextDescribedById,
		value: screenReaderInstructions.draggable
	}), react.default.createElement(LiveRegion, {
		id: liveRegionId,
		announcement
	}));
	return container ? (0, react_dom.createPortal)(markup, container) : markup;
}
var Action;
(function(Action) {
	Action["DragStart"] = "dragStart";
	Action["DragMove"] = "dragMove";
	Action["DragEnd"] = "dragEnd";
	Action["DragCancel"] = "dragCancel";
	Action["DragOver"] = "dragOver";
	Action["RegisterDroppable"] = "registerDroppable";
	Action["SetDroppableDisabled"] = "setDroppableDisabled";
	Action["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));
function noop() {}
var defaultCoordinates = /*#__PURE__*/ Object.freeze({
	x: 0,
	y: 0
});
/**
* Sort collisions from greatest to smallest value
*/
function sortCollisionsDesc(_ref3, _ref4) {
	let { data: { value: a } } = _ref3;
	let { data: { value: b } } = _ref4;
	return b - a;
}
function getFirstCollision(collisions, property) {
	if (!collisions || collisions.length === 0) return null;
	const [firstCollision] = collisions;
	return property ? firstCollision[property] : firstCollision;
}
/**
* Returns the intersecting rectangle area between two rectangles
*/
function getIntersectionRatio(entry, target) {
	const top = Math.max(target.top, entry.top);
	const left = Math.max(target.left, entry.left);
	const right = Math.min(target.left + target.width, entry.left + entry.width);
	const bottom = Math.min(target.top + target.height, entry.top + entry.height);
	const width = right - left;
	const height = bottom - top;
	if (left < right && top < bottom) {
		const targetArea = target.width * target.height;
		const entryArea = entry.width * entry.height;
		const intersectionArea = width * height;
		const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
		return Number(intersectionRatio.toFixed(4));
	}
	return 0;
}
/**
* Returns the rectangles that has the greatest intersection area with a given
* rectangle in an array of rectangles.
*/
var rectIntersection = (_ref) => {
	let { collisionRect, droppableRects, droppableContainers } = _ref;
	const collisions = [];
	for (const droppableContainer of droppableContainers) {
		const { id } = droppableContainer;
		const rect = droppableRects.get(id);
		if (rect) {
			const intersectionRatio = getIntersectionRatio(rect, collisionRect);
			if (intersectionRatio > 0) collisions.push({
				id,
				data: {
					droppableContainer,
					value: intersectionRatio
				}
			});
		}
	}
	return collisions.sort(sortCollisionsDesc);
};
function adjustScale(transform, rect1, rect2) {
	return {
		...transform,
		scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
		scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
	};
}
function getRectDelta(rect1, rect2) {
	return rect1 && rect2 ? {
		x: rect1.left - rect2.left,
		y: rect1.top - rect2.top
	} : defaultCoordinates;
}
function createRectAdjustmentFn(modifier) {
	return function adjustClientRect(rect) {
		for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) adjustments[_key - 1] = arguments[_key];
		return adjustments.reduce((acc, adjustment) => ({
			...acc,
			top: acc.top + modifier * adjustment.y,
			bottom: acc.bottom + modifier * adjustment.y,
			left: acc.left + modifier * adjustment.x,
			right: acc.right + modifier * adjustment.x
		}), { ...rect });
	};
}
var getAdjustedRect = /*#__PURE__*/ createRectAdjustmentFn(1);
function parseTransform(transform) {
	if (transform.startsWith("matrix3d(")) {
		const transformArray = transform.slice(9, -1).split(/, /);
		return {
			x: +transformArray[12],
			y: +transformArray[13],
			scaleX: +transformArray[0],
			scaleY: +transformArray[5]
		};
	} else if (transform.startsWith("matrix(")) {
		const transformArray = transform.slice(7, -1).split(/, /);
		return {
			x: +transformArray[4],
			y: +transformArray[5],
			scaleX: +transformArray[0],
			scaleY: +transformArray[3]
		};
	}
	return null;
}
function inverseTransform(rect, transform, transformOrigin) {
	const parsedTransform = parseTransform(transform);
	if (!parsedTransform) return rect;
	const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
	const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
	const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
	const w = scaleX ? rect.width / scaleX : rect.width;
	const h = scaleY ? rect.height / scaleY : rect.height;
	return {
		width: w,
		height: h,
		top: y,
		right: x + w,
		bottom: y + h,
		left: x
	};
}
var defaultOptions = { ignoreTransform: false };
/**
* Returns the bounding client rect of an element relative to the viewport.
*/
function getClientRect(element, options) {
	if (options === void 0) options = defaultOptions;
	let rect = element.getBoundingClientRect();
	if (options.ignoreTransform) {
		const { transform, transformOrigin } = getWindow(element).getComputedStyle(element);
		if (transform) rect = inverseTransform(rect, transform, transformOrigin);
	}
	const { top, left, width, height, bottom, right } = rect;
	return {
		top,
		left,
		width,
		height,
		bottom,
		right
	};
}
/**
* Returns the bounding client rect of an element relative to the viewport.
*
* @remarks
* The ClientRect returned by this method does not take into account transforms
* applied to the element it measures.
*
*/
function getTransformAgnosticClientRect(element) {
	return getClientRect(element, { ignoreTransform: true });
}
function getWindowClientRect(element) {
	const width = element.innerWidth;
	const height = element.innerHeight;
	return {
		top: 0,
		left: 0,
		right: width,
		bottom: height,
		width,
		height
	};
}
function isFixed(node, computedStyle) {
	if (computedStyle === void 0) computedStyle = getWindow(node).getComputedStyle(node);
	return computedStyle.position === "fixed";
}
function isScrollable(element, computedStyle) {
	if (computedStyle === void 0) computedStyle = getWindow(element).getComputedStyle(element);
	const overflowRegex = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((property) => {
		const value = computedStyle[property];
		return typeof value === "string" ? overflowRegex.test(value) : false;
	});
}
function getScrollableAncestors(element, limit) {
	const scrollParents = [];
	function findScrollableAncestors(node) {
		if (limit != null && scrollParents.length >= limit) return scrollParents;
		if (!node) return scrollParents;
		if (isDocument(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
			scrollParents.push(node.scrollingElement);
			return scrollParents;
		}
		if (!isHTMLElement(node) || isSVGElement(node)) return scrollParents;
		if (scrollParents.includes(node)) return scrollParents;
		const computedStyle = getWindow(element).getComputedStyle(node);
		if (node !== element) {
			if (isScrollable(node, computedStyle)) scrollParents.push(node);
		}
		if (isFixed(node, computedStyle)) return scrollParents;
		return findScrollableAncestors(node.parentNode);
	}
	if (!element) return scrollParents;
	return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
	const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
	return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}
function getScrollableElement(element) {
	if (!canUseDOM || !element) return null;
	if (isWindow(element)) return element;
	if (!isNode(element)) return null;
	if (isDocument(element) || element === getOwnerDocument(element).scrollingElement) return window;
	if (isHTMLElement(element)) return element;
	return null;
}
function getScrollXCoordinate(element) {
	if (isWindow(element)) return element.scrollX;
	return element.scrollLeft;
}
function getScrollYCoordinate(element) {
	if (isWindow(element)) return element.scrollY;
	return element.scrollTop;
}
function getScrollCoordinates(element) {
	return {
		x: getScrollXCoordinate(element),
		y: getScrollYCoordinate(element)
	};
}
var Direction;
(function(Direction) {
	Direction[Direction["Forward"] = 1] = "Forward";
	Direction[Direction["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));
function isDocumentScrollingElement(element) {
	if (!canUseDOM || !element) return false;
	return element === document.scrollingElement;
}
function getScrollPosition(scrollingContainer) {
	const minScroll = {
		x: 0,
		y: 0
	};
	const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
		height: window.innerHeight,
		width: window.innerWidth
	} : {
		height: scrollingContainer.clientHeight,
		width: scrollingContainer.clientWidth
	};
	const maxScroll = {
		x: scrollingContainer.scrollWidth - dimensions.width,
		y: scrollingContainer.scrollHeight - dimensions.height
	};
	return {
		isTop: scrollingContainer.scrollTop <= minScroll.y,
		isLeft: scrollingContainer.scrollLeft <= minScroll.x,
		isBottom: scrollingContainer.scrollTop >= maxScroll.y,
		isRight: scrollingContainer.scrollLeft >= maxScroll.x,
		maxScroll,
		minScroll
	};
}
var defaultThreshold = {
	x: .2,
	y: .2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
	let { top, left, right, bottom } = _ref;
	if (acceleration === void 0) acceleration = 10;
	if (thresholdPercentage === void 0) thresholdPercentage = defaultThreshold;
	const { isTop, isBottom, isLeft, isRight } = getScrollPosition(scrollContainer);
	const direction = {
		x: 0,
		y: 0
	};
	const speed = {
		x: 0,
		y: 0
	};
	const threshold = {
		height: scrollContainerRect.height * thresholdPercentage.y,
		width: scrollContainerRect.width * thresholdPercentage.x
	};
	if (!isTop && top <= scrollContainerRect.top + threshold.height) {
		direction.y = Direction.Backward;
		speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
	} else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
		direction.y = Direction.Forward;
		speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
	}
	if (!isRight && right >= scrollContainerRect.right - threshold.width) {
		direction.x = Direction.Forward;
		speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
	} else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
		direction.x = Direction.Backward;
		speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
	}
	return {
		direction,
		speed
	};
}
function getScrollElementRect(element) {
	if (element === document.scrollingElement) {
		const { innerWidth, innerHeight } = window;
		return {
			top: 0,
			left: 0,
			right: innerWidth,
			bottom: innerHeight,
			width: innerWidth,
			height: innerHeight
		};
	}
	const { top, left, right, bottom } = element.getBoundingClientRect();
	return {
		top,
		left,
		right,
		bottom,
		width: element.clientWidth,
		height: element.clientHeight
	};
}
function getScrollOffsets(scrollableAncestors) {
	return scrollableAncestors.reduce((acc, node) => {
		return add(acc, getScrollCoordinates(node));
	}, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
	return scrollableAncestors.reduce((acc, node) => {
		return acc + getScrollXCoordinate(node);
	}, 0);
}
function getScrollYOffset(scrollableAncestors) {
	return scrollableAncestors.reduce((acc, node) => {
		return acc + getScrollYCoordinate(node);
	}, 0);
}
function scrollIntoViewIfNeeded(element, measure) {
	if (measure === void 0) measure = getClientRect;
	if (!element) return;
	const { top, left, bottom, right } = measure(element);
	if (!getFirstScrollableAncestor(element)) return;
	if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) element.scrollIntoView({
		block: "center",
		inline: "center"
	});
}
var properties = [[
	"x",
	["left", "right"],
	getScrollXOffset
], [
	"y",
	["top", "bottom"],
	getScrollYOffset
]];
var Rect = class {
	constructor(rect, element) {
		this.rect = void 0;
		this.width = void 0;
		this.height = void 0;
		this.top = void 0;
		this.bottom = void 0;
		this.right = void 0;
		this.left = void 0;
		const scrollableAncestors = getScrollableAncestors(element);
		const scrollOffsets = getScrollOffsets(scrollableAncestors);
		this.rect = { ...rect };
		this.width = rect.width;
		this.height = rect.height;
		for (const [axis, keys, getScrollOffset] of properties) for (const key of keys) Object.defineProperty(this, key, {
			get: () => {
				const currentOffsets = getScrollOffset(scrollableAncestors);
				const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
				return this.rect[key] + scrollOffsetsDeltla;
			},
			enumerable: true
		});
		Object.defineProperty(this, "rect", { enumerable: false });
	}
};
var Listeners = class {
	constructor(target) {
		this.target = void 0;
		this.listeners = [];
		this.removeAll = () => {
			this.listeners.forEach((listener) => {
				var _this$target;
				return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
			});
		};
		this.target = target;
	}
	add(eventName, handler, options) {
		var _this$target2;
		(_this$target2 = this.target) == null || _this$target2.addEventListener(eventName, handler, options);
		this.listeners.push([
			eventName,
			handler,
			options
		]);
	}
};
function getEventListenerTarget(target) {
	const { EventTarget } = getWindow(target);
	return target instanceof EventTarget ? target : getOwnerDocument(target);
}
function hasExceededDistance(delta, measurement) {
	const dx = Math.abs(delta.x);
	const dy = Math.abs(delta.y);
	if (typeof measurement === "number") return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
	if ("x" in measurement && "y" in measurement) return dx > measurement.x && dy > measurement.y;
	if ("x" in measurement) return dx > measurement.x;
	if ("y" in measurement) return dy > measurement.y;
	return false;
}
var EventName;
(function(EventName) {
	EventName["Click"] = "click";
	EventName["DragStart"] = "dragstart";
	EventName["Keydown"] = "keydown";
	EventName["ContextMenu"] = "contextmenu";
	EventName["Resize"] = "resize";
	EventName["SelectionChange"] = "selectionchange";
	EventName["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));
function preventDefault(event) {
	event.preventDefault();
}
function stopPropagation(event) {
	event.stopPropagation();
}
var KeyboardCode;
(function(KeyboardCode) {
	KeyboardCode["Space"] = "Space";
	KeyboardCode["Down"] = "ArrowDown";
	KeyboardCode["Right"] = "ArrowRight";
	KeyboardCode["Left"] = "ArrowLeft";
	KeyboardCode["Up"] = "ArrowUp";
	KeyboardCode["Esc"] = "Escape";
	KeyboardCode["Enter"] = "Enter";
	KeyboardCode["Tab"] = "Tab";
})(KeyboardCode || (KeyboardCode = {}));
var defaultKeyboardCodes = {
	start: [KeyboardCode.Space, KeyboardCode.Enter],
	cancel: [KeyboardCode.Esc],
	end: [
		KeyboardCode.Space,
		KeyboardCode.Enter,
		KeyboardCode.Tab
	]
};
var defaultKeyboardCoordinateGetter = (event, _ref) => {
	let { currentCoordinates } = _ref;
	switch (event.code) {
		case KeyboardCode.Right: return {
			...currentCoordinates,
			x: currentCoordinates.x + 25
		};
		case KeyboardCode.Left: return {
			...currentCoordinates,
			x: currentCoordinates.x - 25
		};
		case KeyboardCode.Down: return {
			...currentCoordinates,
			y: currentCoordinates.y + 25
		};
		case KeyboardCode.Up: return {
			...currentCoordinates,
			y: currentCoordinates.y - 25
		};
	}
};
var KeyboardSensor = class {
	constructor(props) {
		this.props = void 0;
		this.autoScrollEnabled = false;
		this.referenceCoordinates = void 0;
		this.listeners = void 0;
		this.windowListeners = void 0;
		this.props = props;
		const { event: { target } } = props;
		this.props = props;
		this.listeners = new Listeners(getOwnerDocument(target));
		this.windowListeners = new Listeners(getWindow(target));
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.attach();
	}
	attach() {
		this.handleStart();
		this.windowListeners.add(EventName.Resize, this.handleCancel);
		this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
		setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
	}
	handleStart() {
		const { activeNode, onStart } = this.props;
		const node = activeNode.node.current;
		if (node) scrollIntoViewIfNeeded(node);
		onStart(defaultCoordinates);
	}
	handleKeyDown(event) {
		if (isKeyboardEvent(event)) {
			const { active, context, options } = this.props;
			const { keyboardCodes = defaultKeyboardCodes, coordinateGetter = defaultKeyboardCoordinateGetter, scrollBehavior = "smooth" } = options;
			const { code } = event;
			if (keyboardCodes.end.includes(code)) {
				this.handleEnd(event);
				return;
			}
			if (keyboardCodes.cancel.includes(code)) {
				this.handleCancel(event);
				return;
			}
			const { collisionRect } = context.current;
			const currentCoordinates = collisionRect ? {
				x: collisionRect.left,
				y: collisionRect.top
			} : defaultCoordinates;
			if (!this.referenceCoordinates) this.referenceCoordinates = currentCoordinates;
			const newCoordinates = coordinateGetter(event, {
				active,
				context: context.current,
				currentCoordinates
			});
			if (newCoordinates) {
				const coordinatesDelta = subtract(newCoordinates, currentCoordinates);
				const scrollDelta = {
					x: 0,
					y: 0
				};
				const { scrollableAncestors } = context.current;
				for (const scrollContainer of scrollableAncestors) {
					const direction = event.code;
					const { isTop, isRight, isLeft, isBottom, maxScroll, minScroll } = getScrollPosition(scrollContainer);
					const scrollElementRect = getScrollElementRect(scrollContainer);
					const clampedCoordinates = {
						x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
						y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
					};
					const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
					const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;
					if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
						const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
						const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;
						if (canScrollToNewCoordinates && !coordinatesDelta.y) {
							scrollContainer.scrollTo({
								left: newScrollCoordinates,
								behavior: scrollBehavior
							});
							return;
						}
						if (canScrollToNewCoordinates) scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
						else scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
						if (scrollDelta.x) scrollContainer.scrollBy({
							left: -scrollDelta.x,
							behavior: scrollBehavior
						});
						break;
					} else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
						const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
						const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;
						if (canScrollToNewCoordinates && !coordinatesDelta.x) {
							scrollContainer.scrollTo({
								top: newScrollCoordinates,
								behavior: scrollBehavior
							});
							return;
						}
						if (canScrollToNewCoordinates) scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
						else scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
						if (scrollDelta.y) scrollContainer.scrollBy({
							top: -scrollDelta.y,
							behavior: scrollBehavior
						});
						break;
					}
				}
				this.handleMove(event, add(subtract(newCoordinates, this.referenceCoordinates), scrollDelta));
			}
		}
	}
	handleMove(event, coordinates) {
		const { onMove } = this.props;
		event.preventDefault();
		onMove(coordinates);
	}
	handleEnd(event) {
		const { onEnd } = this.props;
		event.preventDefault();
		this.detach();
		onEnd();
	}
	handleCancel(event) {
		const { onCancel } = this.props;
		event.preventDefault();
		this.detach();
		onCancel();
	}
	detach() {
		this.listeners.removeAll();
		this.windowListeners.removeAll();
	}
};
KeyboardSensor.activators = [{
	eventName: "onKeyDown",
	handler: (event, _ref, _ref2) => {
		let { keyboardCodes = defaultKeyboardCodes, onActivation } = _ref;
		let { active } = _ref2;
		const { code } = event.nativeEvent;
		if (keyboardCodes.start.includes(code)) {
			const activator = active.activatorNode.current;
			if (activator && event.target !== activator) return false;
			event.preventDefault();
			onActivation?.({ event: event.nativeEvent });
			return true;
		}
		return false;
	}
}];
function isDistanceConstraint(constraint) {
	return Boolean(constraint && "distance" in constraint);
}
function isDelayConstraint(constraint) {
	return Boolean(constraint && "delay" in constraint);
}
var AbstractPointerSensor = class {
	constructor(props, events, listenerTarget) {
		var _getEventCoordinates;
		if (listenerTarget === void 0) listenerTarget = getEventListenerTarget(props.event.target);
		this.props = void 0;
		this.events = void 0;
		this.autoScrollEnabled = true;
		this.document = void 0;
		this.activated = false;
		this.initialCoordinates = void 0;
		this.timeoutId = null;
		this.listeners = void 0;
		this.documentListeners = void 0;
		this.windowListeners = void 0;
		this.props = props;
		this.events = events;
		const { event } = props;
		const { target } = event;
		this.props = props;
		this.events = events;
		this.document = getOwnerDocument(target);
		this.documentListeners = new Listeners(this.document);
		this.listeners = new Listeners(listenerTarget);
		this.windowListeners = new Listeners(getWindow(target));
		this.initialCoordinates = (_getEventCoordinates = getEventCoordinates(event)) != null ? _getEventCoordinates : defaultCoordinates;
		this.handleStart = this.handleStart.bind(this);
		this.handleMove = this.handleMove.bind(this);
		this.handleEnd = this.handleEnd.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleKeydown = this.handleKeydown.bind(this);
		this.removeTextSelection = this.removeTextSelection.bind(this);
		this.attach();
	}
	attach() {
		const { events, props: { options: { activationConstraint, bypassActivationConstraint } } } = this;
		this.listeners.add(events.move.name, this.handleMove, { passive: false });
		this.listeners.add(events.end.name, this.handleEnd);
		if (events.cancel) this.listeners.add(events.cancel.name, this.handleCancel);
		this.windowListeners.add(EventName.Resize, this.handleCancel);
		this.windowListeners.add(EventName.DragStart, preventDefault);
		this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
		this.windowListeners.add(EventName.ContextMenu, preventDefault);
		this.documentListeners.add(EventName.Keydown, this.handleKeydown);
		if (activationConstraint) {
			if (bypassActivationConstraint != null && bypassActivationConstraint({
				event: this.props.event,
				activeNode: this.props.activeNode,
				options: this.props.options
			})) return this.handleStart();
			if (isDelayConstraint(activationConstraint)) {
				this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
				this.handlePending(activationConstraint);
				return;
			}
			if (isDistanceConstraint(activationConstraint)) {
				this.handlePending(activationConstraint);
				return;
			}
		}
		this.handleStart();
	}
	detach() {
		this.listeners.removeAll();
		this.windowListeners.removeAll();
		setTimeout(this.documentListeners.removeAll, 50);
		if (this.timeoutId !== null) {
			clearTimeout(this.timeoutId);
			this.timeoutId = null;
		}
	}
	handlePending(constraint, offset) {
		const { active, onPending } = this.props;
		onPending(active, constraint, this.initialCoordinates, offset);
	}
	handleStart() {
		const { initialCoordinates } = this;
		const { onStart } = this.props;
		if (initialCoordinates) {
			this.activated = true;
			this.documentListeners.add(EventName.Click, stopPropagation, { capture: true });
			this.removeTextSelection();
			this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
			onStart(initialCoordinates);
		}
	}
	handleMove(event) {
		var _getEventCoordinates2;
		const { activated, initialCoordinates, props } = this;
		const { onMove, options: { activationConstraint } } = props;
		if (!initialCoordinates) return;
		const coordinates = (_getEventCoordinates2 = getEventCoordinates(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
		const delta = subtract(initialCoordinates, coordinates);
		if (!activated && activationConstraint) {
			if (isDistanceConstraint(activationConstraint)) {
				if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) return this.handleCancel();
				if (hasExceededDistance(delta, activationConstraint.distance)) return this.handleStart();
			}
			if (isDelayConstraint(activationConstraint)) {
				if (hasExceededDistance(delta, activationConstraint.tolerance)) return this.handleCancel();
			}
			this.handlePending(activationConstraint, delta);
			return;
		}
		if (event.cancelable) event.preventDefault();
		onMove(coordinates);
	}
	handleEnd() {
		const { onAbort, onEnd } = this.props;
		this.detach();
		if (!this.activated) onAbort(this.props.active);
		onEnd();
	}
	handleCancel() {
		const { onAbort, onCancel } = this.props;
		this.detach();
		if (!this.activated) onAbort(this.props.active);
		onCancel();
	}
	handleKeydown(event) {
		if (event.code === KeyboardCode.Esc) this.handleCancel();
	}
	removeTextSelection() {
		var _this$document$getSel;
		(_this$document$getSel = this.document.getSelection()) == null || _this$document$getSel.removeAllRanges();
	}
};
var events = {
	cancel: { name: "pointercancel" },
	move: { name: "pointermove" },
	end: { name: "pointerup" }
};
var PointerSensor = class extends AbstractPointerSensor {
	constructor(props) {
		const { event } = props;
		const listenerTarget = getOwnerDocument(event.target);
		super(props, events, listenerTarget);
	}
};
PointerSensor.activators = [{
	eventName: "onPointerDown",
	handler: (_ref, _ref2) => {
		let { nativeEvent: event } = _ref;
		let { onActivation } = _ref2;
		if (!event.isPrimary || event.button !== 0) return false;
		onActivation?.({ event });
		return true;
	}
}];
var events$1 = {
	move: { name: "mousemove" },
	end: { name: "mouseup" }
};
var MouseButton;
(function(MouseButton) {
	MouseButton[MouseButton["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));
var MouseSensor = class extends AbstractPointerSensor {
	constructor(props) {
		super(props, events$1, getOwnerDocument(props.event.target));
	}
};
MouseSensor.activators = [{
	eventName: "onMouseDown",
	handler: (_ref, _ref2) => {
		let { nativeEvent: event } = _ref;
		let { onActivation } = _ref2;
		if (event.button === MouseButton.RightClick) return false;
		onActivation?.({ event });
		return true;
	}
}];
var events$2 = {
	cancel: { name: "touchcancel" },
	move: { name: "touchmove" },
	end: { name: "touchend" }
};
var TouchSensor = class extends AbstractPointerSensor {
	constructor(props) {
		super(props, events$2);
	}
	static setup() {
		window.addEventListener(events$2.move.name, noop, {
			capture: false,
			passive: false
		});
		return function teardown() {
			window.removeEventListener(events$2.move.name, noop);
		};
		function noop() {}
	}
};
TouchSensor.activators = [{
	eventName: "onTouchStart",
	handler: (_ref, _ref2) => {
		let { nativeEvent: event } = _ref;
		let { onActivation } = _ref2;
		const { touches } = event;
		if (touches.length > 1) return false;
		onActivation?.({ event });
		return true;
	}
}];
var AutoScrollActivator;
(function(AutoScrollActivator) {
	AutoScrollActivator[AutoScrollActivator["Pointer"] = 0] = "Pointer";
	AutoScrollActivator[AutoScrollActivator["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));
var TraversalOrder;
(function(TraversalOrder) {
	TraversalOrder[TraversalOrder["TreeOrder"] = 0] = "TreeOrder";
	TraversalOrder[TraversalOrder["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));
function useAutoScroller(_ref) {
	let { acceleration, activator = AutoScrollActivator.Pointer, canScroll, draggingRect, enabled, interval = 5, order = TraversalOrder.TreeOrder, pointerCoordinates, scrollableAncestors, scrollableAncestorRects, delta, threshold } = _ref;
	const scrollIntent = useScrollIntent({
		delta,
		disabled: !enabled
	});
	const [setAutoScrollInterval, clearAutoScrollInterval] = useInterval();
	const scrollSpeed = (0, react.useRef)({
		x: 0,
		y: 0
	});
	const scrollDirection = (0, react.useRef)({
		x: 0,
		y: 0
	});
	const rect = (0, react.useMemo)(() => {
		switch (activator) {
			case AutoScrollActivator.Pointer: return pointerCoordinates ? {
				top: pointerCoordinates.y,
				bottom: pointerCoordinates.y,
				left: pointerCoordinates.x,
				right: pointerCoordinates.x
			} : null;
			case AutoScrollActivator.DraggableRect: return draggingRect;
		}
	}, [
		activator,
		draggingRect,
		pointerCoordinates
	]);
	const scrollContainerRef = (0, react.useRef)(null);
	const autoScroll = (0, react.useCallback)(() => {
		const scrollContainer = scrollContainerRef.current;
		if (!scrollContainer) return;
		const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
		const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
		scrollContainer.scrollBy(scrollLeft, scrollTop);
	}, []);
	const sortedScrollableAncestors = (0, react.useMemo)(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
	(0, react.useEffect)(() => {
		if (!enabled || !scrollableAncestors.length || !rect) {
			clearAutoScrollInterval();
			return;
		}
		for (const scrollContainer of sortedScrollableAncestors) {
			if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) continue;
			const index = scrollableAncestors.indexOf(scrollContainer);
			const scrollContainerRect = scrollableAncestorRects[index];
			if (!scrollContainerRect) continue;
			const { direction, speed } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);
			for (const axis of ["x", "y"]) if (!scrollIntent[axis][direction[axis]]) {
				speed[axis] = 0;
				direction[axis] = 0;
			}
			if (speed.x > 0 || speed.y > 0) {
				clearAutoScrollInterval();
				scrollContainerRef.current = scrollContainer;
				setAutoScrollInterval(autoScroll, interval);
				scrollSpeed.current = speed;
				scrollDirection.current = direction;
				return;
			}
		}
		scrollSpeed.current = {
			x: 0,
			y: 0
		};
		scrollDirection.current = {
			x: 0,
			y: 0
		};
		clearAutoScrollInterval();
	}, [
		acceleration,
		autoScroll,
		canScroll,
		clearAutoScrollInterval,
		enabled,
		interval,
		JSON.stringify(rect),
		JSON.stringify(scrollIntent),
		setAutoScrollInterval,
		scrollableAncestors,
		sortedScrollableAncestors,
		scrollableAncestorRects,
		JSON.stringify(threshold)
	]);
}
var defaultScrollIntent = {
	x: {
		[Direction.Backward]: false,
		[Direction.Forward]: false
	},
	y: {
		[Direction.Backward]: false,
		[Direction.Forward]: false
	}
};
function useScrollIntent(_ref2) {
	let { delta, disabled } = _ref2;
	const previousDelta = usePrevious(delta);
	return useLazyMemo((previousIntent) => {
		if (disabled || !previousDelta || !previousIntent) return defaultScrollIntent;
		const direction = {
			x: Math.sign(delta.x - previousDelta.x),
			y: Math.sign(delta.y - previousDelta.y)
		};
		return {
			x: {
				[Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
				[Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
			},
			y: {
				[Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
				[Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
			}
		};
	}, [
		disabled,
		delta,
		previousDelta
	]);
}
function useCachedNode(draggableNodes, id) {
	const draggableNode = id != null ? draggableNodes.get(id) : void 0;
	const node = draggableNode ? draggableNode.node.current : null;
	return useLazyMemo((cachedNode) => {
		var _ref;
		if (id == null) return null;
		return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
	}, [node, id]);
}
function useCombineActivators(sensors, getSyntheticHandler) {
	return (0, react.useMemo)(() => sensors.reduce((accumulator, sensor) => {
		const { sensor: Sensor } = sensor;
		const sensorActivators = Sensor.activators.map((activator) => ({
			eventName: activator.eventName,
			handler: getSyntheticHandler(activator.handler, sensor)
		}));
		return [...accumulator, ...sensorActivators];
	}, []), [sensors, getSyntheticHandler]);
}
var MeasuringStrategy;
(function(MeasuringStrategy) {
	MeasuringStrategy[MeasuringStrategy["Always"] = 0] = "Always";
	MeasuringStrategy[MeasuringStrategy["BeforeDragging"] = 1] = "BeforeDragging";
	MeasuringStrategy[MeasuringStrategy["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));
var MeasuringFrequency;
(function(MeasuringFrequency) {
	MeasuringFrequency["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));
var defaultValue = /*#__PURE__*/ new Map();
function useDroppableMeasuring(containers, _ref) {
	let { dragging, dependencies, config } = _ref;
	const [queue, setQueue] = (0, react.useState)(null);
	const { frequency, measure, strategy } = config;
	const containersRef = (0, react.useRef)(containers);
	const disabled = isDisabled();
	const disabledRef = useLatestValue(disabled);
	const measureDroppableContainers = (0, react.useCallback)(function(ids) {
		if (ids === void 0) ids = [];
		if (disabledRef.current) return;
		setQueue((value) => {
			if (value === null) return ids;
			return value.concat(ids.filter((id) => !value.includes(id)));
		});
	}, [disabledRef]);
	const timeoutId = (0, react.useRef)(null);
	const droppableRects = useLazyMemo((previousValue) => {
		if (disabled && !dragging) return defaultValue;
		if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
			const map = /* @__PURE__ */ new Map();
			for (let container of containers) {
				if (!container) continue;
				if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
					map.set(container.id, container.rect.current);
					continue;
				}
				const node = container.node.current;
				const rect = node ? new Rect(measure(node), node) : null;
				container.rect.current = rect;
				if (rect) map.set(container.id, rect);
			}
			return map;
		}
		return previousValue;
	}, [
		containers,
		queue,
		dragging,
		disabled,
		measure
	]);
	(0, react.useEffect)(() => {
		containersRef.current = containers;
	}, [containers]);
	(0, react.useEffect)(() => {
		if (disabled) return;
		measureDroppableContainers();
	}, [dragging, disabled]);
	(0, react.useEffect)(() => {
		if (queue && queue.length > 0) setQueue(null);
	}, [JSON.stringify(queue)]);
	(0, react.useEffect)(() => {
		if (disabled || typeof frequency !== "number" || timeoutId.current !== null) return;
		timeoutId.current = setTimeout(() => {
			measureDroppableContainers();
			timeoutId.current = null;
		}, frequency);
	}, [
		frequency,
		disabled,
		measureDroppableContainers,
		...dependencies
	]);
	return {
		droppableRects,
		measureDroppableContainers,
		measuringScheduled: queue != null
	};
	function isDisabled() {
		switch (strategy) {
			case MeasuringStrategy.Always: return false;
			case MeasuringStrategy.BeforeDragging: return dragging;
			default: return !dragging;
		}
	}
}
function useInitialValue(value, computeFn) {
	return useLazyMemo((previousValue) => {
		if (!value) return null;
		if (previousValue) return previousValue;
		return typeof computeFn === "function" ? computeFn(value) : value;
	}, [computeFn, value]);
}
function useInitialRect(node, measure) {
	return useInitialValue(node, measure);
}
/**
* Returns a new MutationObserver instance.
* If `MutationObserver` is undefined in the execution environment, returns `undefined`.
*/
function useMutationObserver(_ref) {
	let { callback, disabled } = _ref;
	const handleMutations = useEvent(callback);
	const mutationObserver = (0, react.useMemo)(() => {
		if (disabled || typeof window === "undefined" || typeof window.MutationObserver === "undefined") return;
		const { MutationObserver } = window;
		return new MutationObserver(handleMutations);
	}, [handleMutations, disabled]);
	(0, react.useEffect)(() => {
		return () => mutationObserver == null ? void 0 : mutationObserver.disconnect();
	}, [mutationObserver]);
	return mutationObserver;
}
/**
* Returns a new ResizeObserver instance bound to the `onResize` callback.
* If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
*/
function useResizeObserver(_ref) {
	let { callback, disabled } = _ref;
	const handleResize = useEvent(callback);
	const resizeObserver = (0, react.useMemo)(() => {
		if (disabled || typeof window === "undefined" || typeof window.ResizeObserver === "undefined") return;
		const { ResizeObserver } = window;
		return new ResizeObserver(handleResize);
	}, [disabled]);
	(0, react.useEffect)(() => {
		return () => resizeObserver == null ? void 0 : resizeObserver.disconnect();
	}, [resizeObserver]);
	return resizeObserver;
}
function defaultMeasure(element) {
	return new Rect(getClientRect(element), element);
}
function useRect(element, measure, fallbackRect) {
	if (measure === void 0) measure = defaultMeasure;
	const [rect, setRect] = (0, react.useState)(null);
	function measureRect() {
		setRect((currentRect) => {
			if (!element) return null;
			if (element.isConnected === false) {
				var _ref;
				return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
			}
			const newRect = measure(element);
			if (JSON.stringify(currentRect) === JSON.stringify(newRect)) return currentRect;
			return newRect;
		});
	}
	const mutationObserver = useMutationObserver({ callback(records) {
		if (!element) return;
		for (const record of records) {
			const { type, target } = record;
			if (type === "childList" && target instanceof HTMLElement && target.contains(element)) {
				measureRect();
				break;
			}
		}
	} });
	const resizeObserver = useResizeObserver({ callback: measureRect });
	useIsomorphicLayoutEffect(() => {
		measureRect();
		if (element) {
			resizeObserver?.observe(element);
			mutationObserver?.observe(document.body, {
				childList: true,
				subtree: true
			});
		} else {
			resizeObserver?.disconnect();
			mutationObserver?.disconnect();
		}
	}, [element]);
	return rect;
}
function useRectDelta(rect) {
	return getRectDelta(rect, useInitialValue(rect));
}
var defaultValue$1 = [];
function useScrollableAncestors(node) {
	const previousNode = (0, react.useRef)(node);
	const ancestors = useLazyMemo((previousValue) => {
		if (!node) return defaultValue$1;
		if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) return previousValue;
		return getScrollableAncestors(node);
	}, [node]);
	(0, react.useEffect)(() => {
		previousNode.current = node;
	}, [node]);
	return ancestors;
}
function useScrollOffsets(elements) {
	const [scrollCoordinates, setScrollCoordinates] = (0, react.useState)(null);
	const prevElements = (0, react.useRef)(elements);
	const handleScroll = (0, react.useCallback)((event) => {
		const scrollingElement = getScrollableElement(event.target);
		if (!scrollingElement) return;
		setScrollCoordinates((scrollCoordinates) => {
			if (!scrollCoordinates) return null;
			scrollCoordinates.set(scrollingElement, getScrollCoordinates(scrollingElement));
			return new Map(scrollCoordinates);
		});
	}, []);
	(0, react.useEffect)(() => {
		const previousElements = prevElements.current;
		if (elements !== previousElements) {
			cleanup(previousElements);
			const entries = elements.map((element) => {
				const scrollableElement = getScrollableElement(element);
				if (scrollableElement) {
					scrollableElement.addEventListener("scroll", handleScroll, { passive: true });
					return [scrollableElement, getScrollCoordinates(scrollableElement)];
				}
				return null;
			}).filter((entry) => entry != null);
			setScrollCoordinates(entries.length ? new Map(entries) : null);
			prevElements.current = elements;
		}
		return () => {
			cleanup(elements);
			cleanup(previousElements);
		};
		function cleanup(elements) {
			elements.forEach((element) => {
				getScrollableElement(element)?.removeEventListener("scroll", handleScroll);
			});
		}
	}, [handleScroll, elements]);
	return (0, react.useMemo)(() => {
		if (elements.length) return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => add(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
		return defaultCoordinates;
	}, [elements, scrollCoordinates]);
}
function useScrollOffsetsDelta(scrollOffsets, dependencies) {
	if (dependencies === void 0) dependencies = [];
	const initialScrollOffsets = (0, react.useRef)(null);
	(0, react.useEffect)(() => {
		initialScrollOffsets.current = null;
	}, dependencies);
	(0, react.useEffect)(() => {
		const hasScrollOffsets = scrollOffsets !== defaultCoordinates;
		if (hasScrollOffsets && !initialScrollOffsets.current) initialScrollOffsets.current = scrollOffsets;
		if (!hasScrollOffsets && initialScrollOffsets.current) initialScrollOffsets.current = null;
	}, [scrollOffsets]);
	return initialScrollOffsets.current ? subtract(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}
function useSensorSetup(sensors) {
	(0, react.useEffect)(() => {
		if (!canUseDOM) return;
		const teardownFns = sensors.map((_ref) => {
			let { sensor } = _ref;
			return sensor.setup == null ? void 0 : sensor.setup();
		});
		return () => {
			for (const teardown of teardownFns) teardown?.();
		};
	}, sensors.map((_ref2) => {
		let { sensor } = _ref2;
		return sensor;
	}));
}
function useSyntheticListeners(listeners, id) {
	return (0, react.useMemo)(() => {
		return listeners.reduce((acc, _ref) => {
			let { eventName, handler } = _ref;
			acc[eventName] = (event) => {
				handler(event, id);
			};
			return acc;
		}, {});
	}, [listeners, id]);
}
function useWindowRect(element) {
	return (0, react.useMemo)(() => element ? getWindowClientRect(element) : null, [element]);
}
var defaultValue$2 = [];
function useRects(elements, measure) {
	if (measure === void 0) measure = getClientRect;
	const [firstElement] = elements;
	const windowRect = useWindowRect(firstElement ? getWindow(firstElement) : null);
	const [rects, setRects] = (0, react.useState)(defaultValue$2);
	function measureRects() {
		setRects(() => {
			if (!elements.length) return defaultValue$2;
			return elements.map((element) => isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
		});
	}
	const resizeObserver = useResizeObserver({ callback: measureRects });
	useIsomorphicLayoutEffect(() => {
		resizeObserver?.disconnect();
		measureRects();
		elements.forEach((element) => resizeObserver == null ? void 0 : resizeObserver.observe(element));
	}, [elements]);
	return rects;
}
function getMeasurableNode(node) {
	if (!node) return null;
	if (node.children.length > 1) return node;
	const firstChild = node.children[0];
	return isHTMLElement(firstChild) ? firstChild : node;
}
function useDragOverlayMeasuring(_ref) {
	let { measure } = _ref;
	const [rect, setRect] = (0, react.useState)(null);
	const resizeObserver = useResizeObserver({ callback: (0, react.useCallback)((entries) => {
		for (const { target } of entries) if (isHTMLElement(target)) {
			setRect((rect) => {
				const newRect = measure(target);
				return rect ? {
					...rect,
					width: newRect.width,
					height: newRect.height
				} : newRect;
			});
			break;
		}
	}, [measure]) });
	const [nodeRef, setRef] = useNodeRef((0, react.useCallback)((element) => {
		const node = getMeasurableNode(element);
		resizeObserver?.disconnect();
		if (node) resizeObserver?.observe(node);
		setRect(node ? measure(node) : null);
	}, [measure, resizeObserver]));
	return (0, react.useMemo)(() => ({
		nodeRef,
		rect,
		setRef
	}), [
		rect,
		nodeRef,
		setRef
	]);
}
var defaultSensors = [{
	sensor: PointerSensor,
	options: {}
}, {
	sensor: KeyboardSensor,
	options: {}
}];
var defaultData = { current: {} };
var defaultMeasuringConfiguration = {
	draggable: { measure: getTransformAgnosticClientRect },
	droppable: {
		measure: getTransformAgnosticClientRect,
		strategy: MeasuringStrategy.WhileDragging,
		frequency: MeasuringFrequency.Optimized
	},
	dragOverlay: { measure: getClientRect }
};
var DroppableContainersMap = class extends Map {
	get(id) {
		var _super$get;
		return id != null ? (_super$get = super.get(id)) != null ? _super$get : void 0 : void 0;
	}
	toArray() {
		return Array.from(this.values());
	}
	getEnabled() {
		return this.toArray().filter((_ref) => {
			let { disabled } = _ref;
			return !disabled;
		});
	}
	getNodeFor(id) {
		var _this$get$node$curren, _this$get;
		return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : void 0;
	}
};
var defaultPublicContext = {
	activatorEvent: null,
	active: null,
	activeNode: null,
	activeNodeRect: null,
	collisions: null,
	containerNodeRect: null,
	draggableNodes: /*#__PURE__*/ new Map(),
	droppableRects: /*#__PURE__*/ new Map(),
	droppableContainers: /*#__PURE__*/ new DroppableContainersMap(),
	over: null,
	dragOverlay: {
		nodeRef: { current: null },
		rect: null,
		setRef: noop
	},
	scrollableAncestors: [],
	scrollableAncestorRects: [],
	measuringConfiguration: defaultMeasuringConfiguration,
	measureDroppableContainers: noop,
	windowRect: null,
	measuringScheduled: false
};
var defaultInternalContext = {
	activatorEvent: null,
	activators: [],
	active: null,
	activeNodeRect: null,
	ariaDescribedById: { draggable: "" },
	dispatch: noop,
	draggableNodes: /*#__PURE__*/ new Map(),
	over: null,
	measureDroppableContainers: noop
};
var InternalContext = /*#__PURE__*/ (0, react.createContext)(defaultInternalContext);
var PublicContext = /*#__PURE__*/ (0, react.createContext)(defaultPublicContext);
function getInitialState() {
	return {
		draggable: {
			active: null,
			initialCoordinates: {
				x: 0,
				y: 0
			},
			nodes: /* @__PURE__ */ new Map(),
			translate: {
				x: 0,
				y: 0
			}
		},
		droppable: { containers: new DroppableContainersMap() }
	};
}
function reducer(state, action) {
	switch (action.type) {
		case Action.DragStart: return {
			...state,
			draggable: {
				...state.draggable,
				initialCoordinates: action.initialCoordinates,
				active: action.active
			}
		};
		case Action.DragMove:
			if (state.draggable.active == null) return state;
			return {
				...state,
				draggable: {
					...state.draggable,
					translate: {
						x: action.coordinates.x - state.draggable.initialCoordinates.x,
						y: action.coordinates.y - state.draggable.initialCoordinates.y
					}
				}
			};
		case Action.DragEnd:
		case Action.DragCancel: return {
			...state,
			draggable: {
				...state.draggable,
				active: null,
				initialCoordinates: {
					x: 0,
					y: 0
				},
				translate: {
					x: 0,
					y: 0
				}
			}
		};
		case Action.RegisterDroppable: {
			const { element } = action;
			const { id } = element;
			const containers = new DroppableContainersMap(state.droppable.containers);
			containers.set(id, element);
			return {
				...state,
				droppable: {
					...state.droppable,
					containers
				}
			};
		}
		case Action.SetDroppableDisabled: {
			const { id, key, disabled } = action;
			const element = state.droppable.containers.get(id);
			if (!element || key !== element.key) return state;
			const containers = new DroppableContainersMap(state.droppable.containers);
			containers.set(id, {
				...element,
				disabled
			});
			return {
				...state,
				droppable: {
					...state.droppable,
					containers
				}
			};
		}
		case Action.UnregisterDroppable: {
			const { id, key } = action;
			const element = state.droppable.containers.get(id);
			if (!element || key !== element.key) return state;
			const containers = new DroppableContainersMap(state.droppable.containers);
			containers.delete(id);
			return {
				...state,
				droppable: {
					...state.droppable,
					containers
				}
			};
		}
		default: return state;
	}
}
function RestoreFocus(_ref) {
	let { disabled } = _ref;
	const { active, activatorEvent, draggableNodes } = (0, react.useContext)(InternalContext);
	const previousActivatorEvent = usePrevious(activatorEvent);
	const previousActiveId = usePrevious(active == null ? void 0 : active.id);
	(0, react.useEffect)(() => {
		if (disabled) return;
		if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
			if (!isKeyboardEvent(previousActivatorEvent)) return;
			if (document.activeElement === previousActivatorEvent.target) return;
			const draggableNode = draggableNodes.get(previousActiveId);
			if (!draggableNode) return;
			const { activatorNode, node } = draggableNode;
			if (!activatorNode.current && !node.current) return;
			requestAnimationFrame(() => {
				for (const element of [activatorNode.current, node.current]) {
					if (!element) continue;
					const focusableNode = findFirstFocusableNode(element);
					if (focusableNode) {
						focusableNode.focus();
						break;
					}
				}
			});
		}
	}, [
		activatorEvent,
		disabled,
		draggableNodes,
		previousActiveId,
		previousActivatorEvent
	]);
	return null;
}
function applyModifiers(modifiers, _ref) {
	let { transform, ...args } = _ref;
	return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier) => {
		return modifier({
			transform: accumulator,
			...args
		});
	}, transform) : transform;
}
function useMeasuringConfiguration(config) {
	return (0, react.useMemo)(() => ({
		draggable: {
			...defaultMeasuringConfiguration.draggable,
			...config == null ? void 0 : config.draggable
		},
		droppable: {
			...defaultMeasuringConfiguration.droppable,
			...config == null ? void 0 : config.droppable
		},
		dragOverlay: {
			...defaultMeasuringConfiguration.dragOverlay,
			...config == null ? void 0 : config.dragOverlay
		}
	}), [
		config == null ? void 0 : config.draggable,
		config == null ? void 0 : config.droppable,
		config == null ? void 0 : config.dragOverlay
	]);
}
function useLayoutShiftScrollCompensation(_ref) {
	let { activeNode, measure, initialRect, config = true } = _ref;
	const initialized = (0, react.useRef)(false);
	const { x, y } = typeof config === "boolean" ? {
		x: config,
		y: config
	} : config;
	useIsomorphicLayoutEffect(() => {
		if (!x && !y || !activeNode) {
			initialized.current = false;
			return;
		}
		if (initialized.current || !initialRect) return;
		const node = activeNode == null ? void 0 : activeNode.node.current;
		if (!node || node.isConnected === false) return;
		const rectDelta = getRectDelta(measure(node), initialRect);
		if (!x) rectDelta.x = 0;
		if (!y) rectDelta.y = 0;
		initialized.current = true;
		if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
			const firstScrollableAncestor = getFirstScrollableAncestor(node);
			if (firstScrollableAncestor) firstScrollableAncestor.scrollBy({
				top: rectDelta.y,
				left: rectDelta.x
			});
		}
	}, [
		activeNode,
		x,
		y,
		initialRect,
		measure
	]);
}
var ActiveDraggableContext = /*#__PURE__*/ (0, react.createContext)({
	...defaultCoordinates,
	scaleX: 1,
	scaleY: 1
});
var Status;
(function(Status) {
	Status[Status["Uninitialized"] = 0] = "Uninitialized";
	Status[Status["Initializing"] = 1] = "Initializing";
	Status[Status["Initialized"] = 2] = "Initialized";
})(Status || (Status = {}));
var DndContext = /*#__PURE__*/ (0, react.memo)(function DndContext(_ref) {
	var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;
	let { id, accessibility, autoScroll = true, children, sensors = defaultSensors, collisionDetection = rectIntersection, measuring, modifiers, ...props } = _ref;
	const [state, dispatch] = (0, react.useReducer)(reducer, void 0, getInitialState);
	const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
	const [status, setStatus] = (0, react.useState)(Status.Uninitialized);
	const isInitialized = status === Status.Initialized;
	const { draggable: { active: activeId, nodes: draggableNodes, translate }, droppable: { containers: droppableContainers } } = state;
	const node = activeId != null ? draggableNodes.get(activeId) : null;
	const activeRects = (0, react.useRef)({
		initial: null,
		translated: null
	});
	const active = (0, react.useMemo)(() => {
		var _node$data;
		return activeId != null ? {
			id: activeId,
			data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
			rect: activeRects
		} : null;
	}, [activeId, node]);
	const activeRef = (0, react.useRef)(null);
	const [activeSensor, setActiveSensor] = (0, react.useState)(null);
	const [activatorEvent, setActivatorEvent] = (0, react.useState)(null);
	const latestProps = useLatestValue(props, Object.values(props));
	const draggableDescribedById = useUniqueId("DndDescribedBy", id);
	const enabledDroppableContainers = (0, react.useMemo)(() => droppableContainers.getEnabled(), [droppableContainers]);
	const measuringConfiguration = useMeasuringConfiguration(measuring);
	const { droppableRects, measureDroppableContainers, measuringScheduled } = useDroppableMeasuring(enabledDroppableContainers, {
		dragging: isInitialized,
		dependencies: [translate.x, translate.y],
		config: measuringConfiguration.droppable
	});
	const activeNode = useCachedNode(draggableNodes, activeId);
	const activationCoordinates = (0, react.useMemo)(() => activatorEvent ? getEventCoordinates(activatorEvent) : null, [activatorEvent]);
	const autoScrollOptions = getAutoScrollerOptions();
	const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
	useLayoutShiftScrollCompensation({
		activeNode: activeId != null ? draggableNodes.get(activeId) : null,
		config: autoScrollOptions.layoutShiftCompensation,
		initialRect: initialActiveNodeRect,
		measure: measuringConfiguration.draggable.measure
	});
	const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
	const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
	const sensorContext = (0, react.useRef)({
		activatorEvent: null,
		active: null,
		activeNode,
		collisionRect: null,
		collisions: null,
		droppableRects,
		draggableNodes,
		draggingNode: null,
		draggingNodeRect: null,
		droppableContainers,
		over: null,
		scrollableAncestors: [],
		scrollAdjustedTranslate: null
	});
	const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
	const dragOverlay = useDragOverlayMeasuring({ measure: measuringConfiguration.dragOverlay.measure });
	const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
	const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
	const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect);
	const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect);
	const windowRect = useWindowRect(draggingNode ? getWindow(draggingNode) : null);
	const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
	const scrollableAncestorRects = useRects(scrollableAncestors);
	const modifiedTranslate = applyModifiers(modifiers, {
		transform: {
			x: translate.x - nodeRectDelta.x,
			y: translate.y - nodeRectDelta.y,
			scaleX: 1,
			scaleY: 1
		},
		activatorEvent,
		active,
		activeNodeRect,
		containerNodeRect,
		draggingNodeRect,
		over: sensorContext.current.over,
		overlayNodeRect: dragOverlay.rect,
		scrollableAncestors,
		scrollableAncestorRects,
		windowRect
	});
	const pointerCoordinates = activationCoordinates ? add(activationCoordinates, translate) : null;
	const scrollOffsets = useScrollOffsets(scrollableAncestors);
	const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets);
	const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [activeNodeRect]);
	const scrollAdjustedTranslate = add(modifiedTranslate, scrollAdjustment);
	const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
	const collisions = active && collisionRect ? collisionDetection({
		active,
		collisionRect,
		droppableRects,
		droppableContainers: enabledDroppableContainers,
		pointerCoordinates
	}) : null;
	const overId = getFirstCollision(collisions, "id");
	const [over, setOver] = (0, react.useState)(null);
	const transform = adjustScale(usesDragOverlay ? modifiedTranslate : add(modifiedTranslate, activeNodeScrollDelta), (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
	const activeSensorRef = (0, react.useRef)(null);
	const instantiateSensor = (0, react.useCallback)((event, _ref2) => {
		let { sensor: Sensor, options } = _ref2;
		if (activeRef.current == null) return;
		const activeNode = draggableNodes.get(activeRef.current);
		if (!activeNode) return;
		const activatorEvent = event.nativeEvent;
		const sensorInstance = new Sensor({
			active: activeRef.current,
			activeNode,
			event: activatorEvent,
			options,
			context: sensorContext,
			onAbort(id) {
				if (!draggableNodes.get(id)) return;
				const { onDragAbort } = latestProps.current;
				const event = { id };
				onDragAbort?.(event);
				dispatchMonitorEvent({
					type: "onDragAbort",
					event
				});
			},
			onPending(id, constraint, initialCoordinates, offset) {
				if (!draggableNodes.get(id)) return;
				const { onDragPending } = latestProps.current;
				const event = {
					id,
					constraint,
					initialCoordinates,
					offset
				};
				onDragPending?.(event);
				dispatchMonitorEvent({
					type: "onDragPending",
					event
				});
			},
			onStart(initialCoordinates) {
				const id = activeRef.current;
				if (id == null) return;
				const draggableNode = draggableNodes.get(id);
				if (!draggableNode) return;
				const { onDragStart } = latestProps.current;
				const event = {
					activatorEvent,
					active: {
						id,
						data: draggableNode.data,
						rect: activeRects
					}
				};
				(0, react_dom.unstable_batchedUpdates)(() => {
					onDragStart?.(event);
					setStatus(Status.Initializing);
					dispatch({
						type: Action.DragStart,
						initialCoordinates,
						active: id
					});
					dispatchMonitorEvent({
						type: "onDragStart",
						event
					});
					setActiveSensor(activeSensorRef.current);
					setActivatorEvent(activatorEvent);
				});
			},
			onMove(coordinates) {
				dispatch({
					type: Action.DragMove,
					coordinates
				});
			},
			onEnd: createHandler(Action.DragEnd),
			onCancel: createHandler(Action.DragCancel)
		});
		activeSensorRef.current = sensorInstance;
		function createHandler(type) {
			return async function handler() {
				const { active, collisions, over, scrollAdjustedTranslate } = sensorContext.current;
				let event = null;
				if (active && scrollAdjustedTranslate) {
					const { cancelDrop } = latestProps.current;
					event = {
						activatorEvent,
						active,
						collisions,
						delta: scrollAdjustedTranslate,
						over
					};
					if (type === Action.DragEnd && typeof cancelDrop === "function") {
						if (await Promise.resolve(cancelDrop(event))) type = Action.DragCancel;
					}
				}
				activeRef.current = null;
				(0, react_dom.unstable_batchedUpdates)(() => {
					dispatch({ type });
					setStatus(Status.Uninitialized);
					setOver(null);
					setActiveSensor(null);
					setActivatorEvent(null);
					activeSensorRef.current = null;
					const eventName = type === Action.DragEnd ? "onDragEnd" : "onDragCancel";
					if (event) {
						const handler = latestProps.current[eventName];
						handler?.(event);
						dispatchMonitorEvent({
							type: eventName,
							event
						});
					}
				});
			};
		}
	}, [draggableNodes]);
	const activators = useCombineActivators(sensors, (0, react.useCallback)((handler, sensor) => {
		return (event, active) => {
			const nativeEvent = event.nativeEvent;
			const activeDraggableNode = draggableNodes.get(active);
			if (activeRef.current !== null || !activeDraggableNode || nativeEvent.dndKit || nativeEvent.defaultPrevented) return;
			const activationContext = { active: activeDraggableNode };
			if (handler(event, sensor.options, activationContext) === true) {
				nativeEvent.dndKit = { capturedBy: sensor.sensor };
				activeRef.current = active;
				instantiateSensor(event, sensor);
			}
		};
	}, [draggableNodes, instantiateSensor]));
	useSensorSetup(sensors);
	useIsomorphicLayoutEffect(() => {
		if (activeNodeRect && status === Status.Initializing) setStatus(Status.Initialized);
	}, [activeNodeRect, status]);
	(0, react.useEffect)(() => {
		const { onDragMove } = latestProps.current;
		const { active, activatorEvent, collisions, over } = sensorContext.current;
		if (!active || !activatorEvent) return;
		const event = {
			active,
			activatorEvent,
			collisions,
			delta: {
				x: scrollAdjustedTranslate.x,
				y: scrollAdjustedTranslate.y
			},
			over
		};
		(0, react_dom.unstable_batchedUpdates)(() => {
			onDragMove?.(event);
			dispatchMonitorEvent({
				type: "onDragMove",
				event
			});
		});
	}, [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]);
	(0, react.useEffect)(() => {
		const { active, activatorEvent, collisions, droppableContainers, scrollAdjustedTranslate } = sensorContext.current;
		if (!active || activeRef.current == null || !activatorEvent || !scrollAdjustedTranslate) return;
		const { onDragOver } = latestProps.current;
		const overContainer = droppableContainers.get(overId);
		const over = overContainer && overContainer.rect.current ? {
			id: overContainer.id,
			rect: overContainer.rect.current,
			data: overContainer.data,
			disabled: overContainer.disabled
		} : null;
		const event = {
			active,
			activatorEvent,
			collisions,
			delta: {
				x: scrollAdjustedTranslate.x,
				y: scrollAdjustedTranslate.y
			},
			over
		};
		(0, react_dom.unstable_batchedUpdates)(() => {
			setOver(over);
			onDragOver?.(event);
			dispatchMonitorEvent({
				type: "onDragOver",
				event
			});
		});
	}, [overId]);
	useIsomorphicLayoutEffect(() => {
		sensorContext.current = {
			activatorEvent,
			active,
			activeNode,
			collisionRect,
			collisions,
			droppableRects,
			draggableNodes,
			draggingNode,
			draggingNodeRect,
			droppableContainers,
			over,
			scrollableAncestors,
			scrollAdjustedTranslate
		};
		activeRects.current = {
			initial: draggingNodeRect,
			translated: collisionRect
		};
	}, [
		active,
		activeNode,
		collisions,
		collisionRect,
		draggableNodes,
		draggingNode,
		draggingNodeRect,
		droppableRects,
		droppableContainers,
		over,
		scrollableAncestors,
		scrollAdjustedTranslate
	]);
	useAutoScroller({
		...autoScrollOptions,
		delta: translate,
		draggingRect: collisionRect,
		pointerCoordinates,
		scrollableAncestors,
		scrollableAncestorRects
	});
	const publicContext = (0, react.useMemo)(() => {
		return {
			active,
			activeNode,
			activeNodeRect,
			activatorEvent,
			collisions,
			containerNodeRect,
			dragOverlay,
			draggableNodes,
			droppableContainers,
			droppableRects,
			over,
			measureDroppableContainers,
			scrollableAncestors,
			scrollableAncestorRects,
			measuringConfiguration,
			measuringScheduled,
			windowRect
		};
	}, [
		active,
		activeNode,
		activeNodeRect,
		activatorEvent,
		collisions,
		containerNodeRect,
		dragOverlay,
		draggableNodes,
		droppableContainers,
		droppableRects,
		over,
		measureDroppableContainers,
		scrollableAncestors,
		scrollableAncestorRects,
		measuringConfiguration,
		measuringScheduled,
		windowRect
	]);
	const internalContext = (0, react.useMemo)(() => {
		return {
			activatorEvent,
			activators,
			active,
			activeNodeRect,
			ariaDescribedById: { draggable: draggableDescribedById },
			dispatch,
			draggableNodes,
			over,
			measureDroppableContainers
		};
	}, [
		activatorEvent,
		activators,
		active,
		activeNodeRect,
		dispatch,
		draggableDescribedById,
		draggableNodes,
		over,
		measureDroppableContainers
	]);
	return react.default.createElement(DndMonitorContext.Provider, { value: registerMonitorListener }, react.default.createElement(InternalContext.Provider, { value: internalContext }, react.default.createElement(PublicContext.Provider, { value: publicContext }, react.default.createElement(ActiveDraggableContext.Provider, { value: transform }, children)), react.default.createElement(RestoreFocus, { disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false })), react.default.createElement(Accessibility, {
		...accessibility,
		hiddenTextDescribedById: draggableDescribedById
	}));
	function getAutoScrollerOptions() {
		const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
		const autoScrollGloballyDisabled = typeof autoScroll === "object" ? autoScroll.enabled === false : autoScroll === false;
		const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;
		if (typeof autoScroll === "object") return {
			...autoScroll,
			enabled
		};
		return { enabled };
	}
});
var NullContext = /*#__PURE__*/ (0, react.createContext)(null);
var defaultRole = "button";
var ID_PREFIX = "Draggable";
function useDraggable(_ref) {
	let { id, data, disabled = false, attributes } = _ref;
	const key = useUniqueId(ID_PREFIX);
	const { activators, activatorEvent, active, activeNodeRect, ariaDescribedById, draggableNodes, over } = (0, react.useContext)(InternalContext);
	const { role = defaultRole, roleDescription = "draggable", tabIndex = 0 } = attributes != null ? attributes : {};
	const isDragging = (active == null ? void 0 : active.id) === id;
	const transform = (0, react.useContext)(isDragging ? ActiveDraggableContext : NullContext);
	const [node, setNodeRef] = useNodeRef();
	const [activatorNode, setActivatorNodeRef] = useNodeRef();
	const listeners = useSyntheticListeners(activators, id);
	const dataRef = useLatestValue(data);
	useIsomorphicLayoutEffect(() => {
		draggableNodes.set(id, {
			id,
			key,
			node,
			activatorNode,
			data: dataRef
		});
		return () => {
			const node = draggableNodes.get(id);
			if (node && node.key === key) draggableNodes.delete(id);
		};
	}, [draggableNodes, id]);
	return {
		active,
		activatorEvent,
		activeNodeRect,
		attributes: (0, react.useMemo)(() => ({
			role,
			tabIndex,
			"aria-disabled": disabled,
			"aria-pressed": isDragging && role === defaultRole ? true : void 0,
			"aria-roledescription": roleDescription,
			"aria-describedby": ariaDescribedById.draggable
		}), [
			disabled,
			role,
			tabIndex,
			isDragging,
			roleDescription,
			ariaDescribedById.draggable
		]),
		isDragging,
		listeners: disabled ? void 0 : listeners,
		node,
		over,
		setNodeRef,
		setActivatorNodeRef,
		transform
	};
}
var ID_PREFIX$1 = "Droppable";
var defaultResizeObserverConfig = { timeout: 25 };
function useDroppable(_ref) {
	let { data, disabled = false, id, resizeObserverConfig } = _ref;
	const key = useUniqueId(ID_PREFIX$1);
	const { active, dispatch, over, measureDroppableContainers } = (0, react.useContext)(InternalContext);
	const previous = (0, react.useRef)({ disabled });
	const resizeObserverConnected = (0, react.useRef)(false);
	const rect = (0, react.useRef)(null);
	const callbackId = (0, react.useRef)(null);
	const { disabled: resizeObserverDisabled, updateMeasurementsFor, timeout: resizeObserverTimeout } = {
		...defaultResizeObserverConfig,
		...resizeObserverConfig
	};
	const ids = useLatestValue(updateMeasurementsFor != null ? updateMeasurementsFor : id);
	const resizeObserver = useResizeObserver({
		callback: (0, react.useCallback)(() => {
			if (!resizeObserverConnected.current) {
				resizeObserverConnected.current = true;
				return;
			}
			if (callbackId.current != null) clearTimeout(callbackId.current);
			callbackId.current = setTimeout(() => {
				measureDroppableContainers(Array.isArray(ids.current) ? ids.current : [ids.current]);
				callbackId.current = null;
			}, resizeObserverTimeout);
		}, [resizeObserverTimeout]),
		disabled: resizeObserverDisabled || !active
	});
	const [nodeRef, setNodeRef] = useNodeRef((0, react.useCallback)((newElement, previousElement) => {
		if (!resizeObserver) return;
		if (previousElement) {
			resizeObserver.unobserve(previousElement);
			resizeObserverConnected.current = false;
		}
		if (newElement) resizeObserver.observe(newElement);
	}, [resizeObserver]));
	const dataRef = useLatestValue(data);
	(0, react.useEffect)(() => {
		if (!resizeObserver || !nodeRef.current) return;
		resizeObserver.disconnect();
		resizeObserverConnected.current = false;
		resizeObserver.observe(nodeRef.current);
	}, [nodeRef, resizeObserver]);
	(0, react.useEffect)(() => {
		dispatch({
			type: Action.RegisterDroppable,
			element: {
				id,
				key,
				disabled,
				node: nodeRef,
				rect,
				data: dataRef
			}
		});
		return () => dispatch({
			type: Action.UnregisterDroppable,
			key,
			id
		});
	}, [id]);
	(0, react.useEffect)(() => {
		if (disabled !== previous.current.disabled) {
			dispatch({
				type: Action.SetDroppableDisabled,
				id,
				key,
				disabled
			});
			previous.current.disabled = disabled;
		}
	}, [
		id,
		key,
		disabled,
		dispatch
	]);
	return {
		active,
		rect,
		isOver: (over == null ? void 0 : over.id) === id,
		node: nodeRef,
		over,
		setNodeRef
	};
}
//#endregion
//#region src/activities/DroppableZone/DroppableZone.tsx
/**
* Zona circular donde el alumno puede soltar un elemento arrastrable.
* Se renderiza encima de una imagen con posicionamiento absoluto en %.
*
* Requiere estar dentro de un `<DndContext>` de @dnd-kit/core.
*
* @example
* <DndContext onDragEnd={handleDragEnd}>
*   <div style={{ position: 'relative' }}>
*     <img src="..." style={{ width: '100%' }} />
*     <DroppableZone id="zone-1" x={45} y={30} />
*   </div>
* </DndContext>
*/
function DroppableZone({ id, x, y, isOccupied = false, showResults = false, isCorrect = false }) {
	const { isOver, setNodeRef } = useDroppable({
		id,
		disabled: showResults
	});
	let borderColor = isOver ? "#FCD34D" : "#F59E0B";
	let bgColor = isOver ? "rgba(252, 211, 77, 0.75)" : isOccupied ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.65)";
	let borderStyle = isOver ? "4px solid" : "3px dashed";
	let scale = isOver ? "scale(1.4)" : "scale(1)";
	let zIndex = isOver ? 500 : 10;
	if (showResults) {
		borderColor = isCorrect ? "#10B981" : "#EF4444";
		bgColor = isCorrect ? "rgba(16, 185, 129, 0.3)" : "rgba(239, 68, 68, 0.3)";
		borderStyle = "4px solid";
	}
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		ref: setNodeRef,
		style: {
			position: "absolute",
			left: `${x}%`,
			top: `${y}%`,
			transform: `translate(-50%, -50%) ${scale}`,
			width: "46px",
			height: "46px",
			borderRadius: "50%",
			border: `${borderStyle} ${borderColor}`,
			backgroundColor: bgColor,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex,
			boxShadow: isOver ? "0 0 30px #FCD34D, 0 0 15px #F59E0B" : "0 0 15px rgba(0,0,0,0.4), inset 0 0 10px rgba(255,255,255,0.5)",
			backdropFilter: "blur(4px)",
			transition: "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s ease, border 0.2s ease, box-shadow 0.2s ease"
		},
		children: [!isOccupied && !showResults && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			style: {
				fontSize: "1.4rem",
				opacity: isOver ? 1 : .85,
				filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.5))"
			},
			children: "🎯"
		}), isOccupied && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { style: {
			width: "22px",
			height: "22px",
			background: showResults ? borderColor : "var(--magrana-primary, #FB7185)",
			borderRadius: "50%",
			boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
		} })]
	});
}
//#endregion
//#region src/activities/DraggableItem/DraggableItem.tsx
/**
* Elemento que el alumno puede arrastrar hacia una `DroppableZone`.
*
* Requiere estar dentro de un `<DndContext>` de @dnd-kit/core.
*
* @example
* <DraggableItem id="item-1" name="Bisturí" />
*/
function DraggableItem({ id, name, disabled = false }) {
	const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
		id: String(id),
		disabled
	});
	const style = transform ? {
		transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(0.92)`,
		zIndex: 9999,
		position: "relative",
		opacity: .75,
		pointerEvents: "none",
		boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
	} : { position: "relative" };
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		ref: setNodeRef,
		style: {
			...style,
			padding: "0.5rem 1rem",
			borderRadius: "var(--magrana-radius-sm, 8px)",
			background: disabled ? "rgba(255,255,255,0.05)" : "var(--magrana-glass-bg, rgba(40,40,40,0.75))",
			border: `1px solid ${disabled ? "rgba(255,255,255,0.04)" : "var(--magrana-primary, #FB7185)"}`,
			color: disabled ? "var(--magrana-text-muted, #A1A1AA)" : "var(--magrana-text, #F8FAFC)",
			fontWeight: 600,
			fontSize: "0.875rem",
			fontFamily: "var(--magrana-font, Inter, sans-serif)",
			cursor: disabled ? "default" : isDragging ? "grabbing" : "grab",
			userSelect: "none",
			transition: "box-shadow 0.2s ease, opacity 0.2s ease",
			backdropFilter: "blur(8px)"
		},
		...disabled ? {} : listeners,
		...attributes,
		children: name
	});
}
//#endregion
//#region src/activities/utils.ts
/**
* @magrana/ui — Utilidades compartidas para componentes de actividad
*/
/**
* Mezcla aleatoriamente los elementos de un array (Fisher-Yates shuffle).
* Migrado desde Actimagen/frontend/src/components/activities/utils.js
*/
function shuffleArray(array) {
	const arr = [...array];
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}
/**
* Resuelve una URL de imagen que puede ser relativa o absoluta.
* @param imageUrl - La URL guardada en base de datos
* @param baseUrl - La URL base del servidor (ej: 'https://mi-api.com'). Por defecto ''
*/
function resolveImageUrl(imageUrl, baseUrl = "") {
	if (!imageUrl) return "";
	if (imageUrl.startsWith("http") || imageUrl.startsWith("blob")) return imageUrl;
	return `${baseUrl}${imageUrl}`;
}
/**
* Calcula si un pin está dentro de la zona circular correcta de un mapa de calor.
*/
function isPinCorrect(pin, correct) {
	const dx = pin.x - correct.x;
	const dy = pin.y - correct.y;
	return Math.sqrt(dx * dx + dy * dy) <= correct.radius;
}
//#endregion
//#region src/activities/DragDropActivity/DragDropActivity.tsx
/**
* Actividad de Arrastrar y Soltar.
*
* El alumno arrastra los ítems a las zonas circulares sobre la imagen.
* Opcionalmente, si el slide tiene definiciones, el alumno también debe
* seleccionar la definición correspondiente a cada zona.
*
* Migrado y generalizado desde Actimagen/frontend.
*
* @example
* <DragDropActivity
*   slide={currentSlide}
*   onNext={(score, max, data, correct) => handleNext(score, max, data, correct)}
*   baseUrl="https://api.mi-app.com"
* />
*/
function DragDropActivity({ slide, onNext, baseUrl = "" }) {
	const [placements, setPlacements] = (0, react$1.useState)({});
	const [selectedDefs, setSelectedDefs] = (0, react$1.useState)({});
	const [showResults, setShowResults] = (0, react$1.useState)(false);
	(0, react$1.useEffect)(() => {
		setPlacements({});
		setSelectedDefs({});
		setShowResults(false);
	}, [slide]);
	const handleDragEnd = (event) => {
		if (showResults) return;
		const { active, over } = event;
		if (over && !placements[over.id]) setPlacements({
			...placements,
			[over.id]: String(active.id)
		});
	};
	const placedItemIds = Object.values(placements);
	const availableItems = slide.dropZones.filter((z) => !placedItemIds.includes(String(z.id)));
	const requireDefs = slide.definitions.length > 0;
	const allPlaced = placedItemIds.length === slide.dropZones.length;
	const allDefsSelected = !requireDefs || Object.keys(selectedDefs).length === slide.dropZones.length;
	let slideScore = 0;
	const slideTotal = slide.dropZones.length * (requireDefs ? 2 : 1);
	if (showResults) Object.entries(placements).forEach(([zoneId, itemId]) => {
		if (itemId === zoneId) slideScore++;
		if (requireDefs) {
			const origIdx = slide.originalZones.findIndex((z) => String(z.id) === zoneId);
			const correctDef = slide.originalDefs[origIdx];
			if (correctDef ? selectedDefs[zoneId] === String(correctDef.id) : true) slideScore++;
		}
	});
	const imageUrl = resolveImageUrl(slide.question.image_url, baseUrl);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DndContext, {
		onDragEnd: handleDragEnd,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			style: {
				display: "grid",
				gridTemplateColumns: "1fr 350px",
				gap: "2rem"
			},
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				style: {
					display: "flex",
					justifyContent: "center",
					alignItems: "flex-start"
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					style: {
						position: "relative",
						display: "inline-block",
						padding: 0,
						borderRadius: "16px",
						overflow: "hidden",
						background: "var(--magrana-glass-bg, rgba(40,40,40,0.75))",
						backdropFilter: "blur(16px)",
						border: "1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))",
						boxShadow: "var(--magrana-shadow-card, 0 10px 30px rgba(0,0,0,0.4))",
						maxWidth: "100%"
					},
					children: [
						imageUrl && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
							src: imageUrl,
							alt: "Actividad",
							style: {
								maxHeight: "70vh",
								maxWidth: "100%",
								width: "auto",
								display: "block",
								borderRadius: "16px"
							},
							draggable: false
						}),
						slide.originalZones.map((zone) => {
							const isOccupied = !!placements[String(zone.id)];
							const isCorrect = showResults && isOccupied && placements[String(zone.id)] === String(zone.id);
							const x = zone.x_coord !== void 0 ? zone.x_coord : zone.x ?? 0;
							const y = zone.y_coord !== void 0 ? zone.y_coord : zone.y ?? 0;
							return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DroppableZone, {
								id: String(zone.id),
								x,
								y,
								isOccupied,
								showResults,
								isCorrect
							}, zone.id);
						}),
						Object.entries(placements).map(([zoneId, itemId]) => {
							const zone = slide.originalZones.find((z) => String(z.id) === zoneId);
							const item = slide.originalZones.find((z) => String(z.id) === itemId);
							if (!zone || !item) return null;
							const itemCorrect = showResults && itemId === zoneId;
							const origIdx = slide.originalZones.findIndex((z) => String(z.id) === zoneId);
							const defCorrect = showResults && requireDefs ? slide.originalDefs[origIdx] ? selectedDefs[zoneId] === String(slide.originalDefs[origIdx].id) : true : false;
							const isFullyCorrect = requireDefs ? itemCorrect && defCorrect : itemCorrect;
							const zx = zone.x_coord !== void 0 ? zone.x_coord : zone.x ?? 0;
							const zy = zone.y_coord !== void 0 ? zone.y_coord : zone.y ?? 0;
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								style: {
									position: "absolute",
									left: `${zx}%`,
									top: `${zy}%`,
									transform: "translate(-50%, calc(-100% - 25px))",
									background: "var(--magrana-card, #141414)",
									borderRadius: "8px",
									border: `2px solid ${showResults ? isFullyCorrect ? "#10B981" : "#EF4444" : "var(--magrana-primary, #FB7185)"}`,
									zIndex: 20,
									display: "flex",
									flexDirection: "column",
									gap: "0.5rem",
									alignItems: "center",
									padding: "0.5rem",
									minWidth: "100px"
								},
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										style: {
											fontWeight: "bold",
											fontSize: "0.875rem",
											color: showResults && !itemCorrect ? "#EF4444" : "var(--magrana-text, #F8FAFC)"
										},
										children: item.item_name
									}),
									requireDefs && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										style: {
											display: "flex",
											alignItems: "center",
											gap: "0.5rem",
											width: "100%"
										},
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
											value: selectedDefs[zoneId] || "",
											onChange: (e) => !showResults && setSelectedDefs({
												...selectedDefs,
												[zoneId]: e.target.value
											}),
											disabled: showResults,
											style: {
												flex: 1,
												padding: "0.25rem",
												background: "var(--magrana-surface, #0A0A0A)",
												color: "var(--magrana-text, #F8FAFC)",
												border: "1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))",
												borderRadius: "4px",
												fontSize: "0.8rem"
											},
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: "",
												disabled: true,
												children: "Definición..."
											}), slide.definitions.map((def) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
												value: String(def.id),
												children: def.display_number ?? def.number
											}, def.id))]
										}), showResults && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: defCorrect ? "✅" : "❌" })]
									}),
									!showResults && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										onClick: () => {
											const np = { ...placements };
											delete np[zoneId];
											setPlacements(np);
											const nd = { ...selectedDefs };
											delete nd[zoneId];
											setSelectedDefs(nd);
										},
										style: {
											width: "100%",
											padding: "0.2rem",
											background: "rgba(239, 68, 68, 0.2)",
											color: "#ef4444",
											border: "none",
											borderRadius: "4px",
											cursor: "pointer",
											fontSize: "0.75rem"
										},
										children: "Quitar"
									})
								]
							}, `placed-${zoneId}`);
						})
					]
				})
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: "1.5rem"
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: {
							padding: "1.5rem",
							background: "var(--magrana-glass-bg, rgba(40,40,40,0.75))",
							backdropFilter: "blur(16px)",
							border: "1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))",
							borderRadius: "20px"
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
							style: {
								margin: 0,
								marginBottom: "1rem",
								color: "var(--magrana-text, #F8FAFC)",
								fontSize: "1rem"
							},
							children: "Elementos a arrastrar"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								flexWrap: "wrap",
								gap: "0.5rem"
							},
							children: [availableItems.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DraggableItem, {
								id: String(item.id),
								name: item.item_name,
								disabled: showResults
							}, item.id)), availableItems.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
								style: {
									color: "var(--magrana-text-muted, #A1A1AA)",
									fontSize: "0.875rem"
								},
								children: "Todos los elementos están colocados."
							})]
						})]
					}),
					requireDefs && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: {
							padding: "1.5rem",
							background: "var(--magrana-glass-bg, rgba(40,40,40,0.75))",
							backdropFilter: "blur(16px)",
							border: "1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))",
							borderRadius: "20px",
							flex: 1,
							overflowY: "auto"
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
							style: {
								margin: 0,
								marginBottom: "1rem",
								color: "var(--magrana-text, #F8FAFC)",
								fontSize: "1rem"
							},
							children: "Definiciones"
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
							style: {
								listStyle: "none",
								padding: 0
							},
							children: slide.definitions.map((def) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", {
								style: {
									marginBottom: "0.75rem",
									fontSize: "0.875rem",
									display: "flex",
									gap: "0.5rem",
									alignItems: "flex-start"
								},
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									style: {
										background: "var(--magrana-primary, #FB7185)",
										color: "white",
										padding: "0.1rem 0.45rem",
										borderRadius: "4px",
										fontWeight: "bold",
										flexShrink: 0
									},
									children: def.display_number ?? def.number
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									style: { color: "var(--magrana-text, #F8FAFC)" },
									children: def.text
								})]
							}, def.id))
						})]
					}),
					!showResults ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						onClick: () => setShowResults(true),
						disabled: !allPlaced || !allDefsSelected,
						style: {
							padding: "0.9rem 2rem",
							borderRadius: "12px",
							border: "none",
							background: allPlaced && allDefsSelected ? "var(--magrana-primary, #FB7185)" : "var(--magrana-glass-bg, rgba(40,40,40,0.75))",
							color: allPlaced && allDefsSelected ? "white" : "var(--magrana-text-muted, #A1A1AA)",
							fontWeight: 700,
							fontSize: "1rem",
							cursor: allPlaced && allDefsSelected ? "pointer" : "not-allowed",
							transition: "all 0.3s ease",
							boxShadow: allPlaced && allDefsSelected ? "0 4px 15px rgba(251,113,133,0.35)" : "none"
						},
						children: "Comprobar Resultados / Saltar"
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: {
							padding: "1.5rem",
							textAlign: "center",
							background: "rgba(16, 185, 129, 0.1)",
							border: "1px solid rgba(16, 185, 129, 0.3)",
							borderRadius: "20px"
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
							style: {
								fontSize: "1.25rem",
								fontWeight: "bold",
								marginBottom: "1rem",
								color: "#10B981"
							},
							children: [
								"Puntuación: ",
								slideScore,
								" / ",
								slideTotal
							]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							onClick: () => onNext(slideScore, slideTotal, {
								placements,
								selectedDefs
							}, slideScore === slideTotal),
							style: {
								width: "100%",
								padding: "0.75rem",
								borderRadius: "12px",
								border: "none",
								background: "var(--magrana-primary, #FB7185)",
								color: "white",
								fontWeight: 700,
								fontSize: "1rem",
								cursor: "pointer"
							},
							children: "Siguiente Diapositiva ➡️"
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region ../../node_modules/react-zoom-pan-pinch/dist/index.esm.js
/**
* Rounds number to given decimal
* eg. roundNumber(2.34343, 1) => 2.3
*/
var roundNumber = function(num, decimal) {
	return Number(num.toFixed(decimal));
};
/**
* Checks if value is number, if not it returns default value
* 1# eg. checkIsNumber(2, 30) => 2
* 2# eg. checkIsNumber(null, 30) => 30
*/
var checkIsNumber = function(num, defaultValue) {
	return typeof num === "number" ? num : defaultValue;
};
var handleCallback = function(context, event, callback) {
	if (callback && typeof callback === "function") callback(context, event);
};
/**
* Functions should return denominator of the target value, which is the next animation step.
* t is a value from 0 to 1, reflecting the percentage of animation status.
*/
var easeOut = function(t) {
	return -Math.cos(t * Math.PI) / 2 + .5;
};
var linear = function(t) {
	return t;
};
var easeInQuad = function(t) {
	return t * t;
};
var easeOutQuad = function(t) {
	return t * (2 - t);
};
var easeInOutQuad = function(t) {
	return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};
var easeInCubic = function(t) {
	return t * t * t;
};
var easeOutCubic = function(t) {
	return --t * t * t + 1;
};
var easeInOutCubic = function(t) {
	return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};
var easeInQuart = function(t) {
	return t * t * t * t;
};
var easeOutQuart = function(t) {
	return 1 - --t * t * t * t;
};
var easeInOutQuart = function(t) {
	return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
};
var easeInQuint = function(t) {
	return t * t * t * t * t;
};
var easeOutQuint = function(t) {
	return 1 + --t * t * t * t * t;
};
var easeInOutQuint = function(t) {
	return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
};
var animations = {
	easeOut,
	linear,
	easeInQuad,
	easeOutQuad,
	easeInOutQuad,
	easeInCubic,
	easeOutCubic,
	easeInOutCubic,
	easeInQuart,
	easeOutQuart,
	easeInOutQuart,
	easeInQuint,
	easeOutQuint,
	easeInOutQuint
};
var handleCancelAnimationFrame = function(animation) {
	if (typeof animation === "number") cancelAnimationFrame(animation);
};
var handleCancelAnimation = function(contextInstance) {
	if (!contextInstance.mounted) return;
	handleCancelAnimationFrame(contextInstance.animation);
	contextInstance.isAnimating = false;
	contextInstance.animation = null;
	contextInstance.velocity = null;
};
function handleSetupAnimation(contextInstance, animationName, animationTime, callback) {
	if (!contextInstance.mounted) return;
	var startTime = (/* @__PURE__ */ new Date()).getTime();
	var lastStep = 1;
	handleCancelAnimation(contextInstance);
	contextInstance.animation = function() {
		if (!contextInstance.mounted) return handleCancelAnimationFrame(contextInstance.animation);
		var frameTime = (/* @__PURE__ */ new Date()).getTime() - startTime;
		var animationProgress = frameTime / animationTime;
		var animationType = animations[animationName];
		var step = animationType(animationProgress);
		if (frameTime >= animationTime) {
			callback(lastStep);
			contextInstance.animation = null;
		} else if (contextInstance.animation) {
			callback(step);
			requestAnimationFrame(contextInstance.animation);
		}
	};
	requestAnimationFrame(contextInstance.animation);
}
function isValidTargetState(targetState) {
	var scale = targetState.scale, positionX = targetState.positionX, positionY = targetState.positionY;
	if (Number.isNaN(scale) || Number.isNaN(positionX) || Number.isNaN(positionY)) return false;
	return true;
}
function animate(contextInstance, targetState, animationTime, animationName) {
	var isValid = isValidTargetState(targetState);
	if (!contextInstance.mounted || !isValid) return;
	var setState = contextInstance.setState;
	var _a = contextInstance.state, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
	var scaleDiff = targetState.scale - scale;
	var positionXDiff = targetState.positionX - positionX;
	var positionYDiff = targetState.positionY - positionY;
	if (animationTime === 0) setState(targetState.scale, targetState.positionX, targetState.positionY);
	else handleSetupAnimation(contextInstance, animationName, animationTime, function(step) {
		if (step !== 1) contextInstance.isAnimating = true;
		else contextInstance.isAnimating = false;
		setState(scale + scaleDiff * step, positionX + positionXDiff * step, positionY + positionYDiff * step);
	});
}
function getComponentsSizes(wrapperComponent, contentComponent, newScale) {
	var wrapperWidth = wrapperComponent.offsetWidth;
	var wrapperHeight = wrapperComponent.offsetHeight;
	var contentWidth = contentComponent.offsetWidth;
	var contentHeight = contentComponent.offsetHeight;
	var newContentWidth = contentWidth * newScale;
	var newContentHeight = contentHeight * newScale;
	return {
		wrapperWidth,
		wrapperHeight,
		newContentWidth,
		newDiffWidth: wrapperWidth - newContentWidth,
		newContentHeight,
		newDiffHeight: wrapperHeight - newContentHeight
	};
}
var getBounds = function(wrapperWidth, newContentWidth, diffWidth, wrapperHeight, newContentHeight, diffHeight, centerZoomedOut) {
	var scaleWidthFactor = wrapperWidth > newContentWidth ? diffWidth * (centerZoomedOut ? .5 : 1) : 0;
	var scaleHeightFactor = wrapperHeight > newContentHeight ? diffHeight * (centerZoomedOut ? .5 : 1) : 0;
	return {
		minPositionX: wrapperWidth - newContentWidth - scaleWidthFactor,
		maxPositionX: scaleWidthFactor,
		minPositionY: wrapperHeight - newContentHeight - scaleHeightFactor,
		maxPositionY: scaleHeightFactor,
		scaleWidthFactor,
		scaleHeightFactor
	};
};
var calculateBounds = function(contextInstance, newScale) {
	var wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
	var _a = contextInstance.setup, centerZoomedOut = _a.centerZoomedOut, disablePadding = _a.disablePadding;
	if (!wrapperComponent || !contentComponent) throw new Error("Components are not mounted");
	var _b = getComponentsSizes(wrapperComponent, contentComponent, newScale), wrapperWidth = _b.wrapperWidth, wrapperHeight = _b.wrapperHeight, newContentWidth = _b.newContentWidth, newContentHeight = _b.newContentHeight, newDiffWidth = _b.newDiffWidth, newDiffHeight = _b.newDiffHeight;
	var bounds = getBounds(wrapperWidth, newContentWidth, newDiffWidth, wrapperHeight, newContentHeight, newDiffHeight, Boolean(centerZoomedOut));
	if (disablePadding && wrapperWidth >= newContentWidth && wrapperHeight >= newContentHeight && !centerZoomedOut) {
		bounds.minPositionX = 0;
		bounds.maxPositionX = 0;
		bounds.minPositionY = 0;
		bounds.maxPositionY = 0;
	}
	var _c = contextInstance.setup, propMinX = _c.minPositionX, propMaxX = _c.maxPositionX, propMinY = _c.minPositionY, propMaxY = _c.maxPositionY;
	if (propMinX != null) bounds.minPositionX = wrapperWidth * (1 - newScale) + propMinX * newScale;
	if (propMaxX != null) bounds.maxPositionX = propMaxX * newScale;
	if (propMinY != null) bounds.minPositionY = wrapperHeight * (1 - newScale) + propMinY * newScale;
	if (propMaxY != null) bounds.maxPositionY = propMaxY * newScale;
	return bounds;
};
/**
* Keeps value between given bounds, used for limiting view to given boundaries
* 1# eg. boundLimiter(2, 0, 3, true) => 2
* 2# eg. boundLimiter(4, 0, 3, true) => 3
* 3# eg. boundLimiter(-2, 0, 3, true) => 0
* 4# eg. boundLimiter(10, 0, 3, false) => 10
*/
var boundLimiter = function(value, minBound, maxBound, isActive) {
	if (!isActive) return roundNumber(value, 2);
	if (value < minBound) return roundNumber(minBound, 2);
	if (value > maxBound) return roundNumber(maxBound, 2);
	return roundNumber(value, 2);
};
var handleCalculateBounds = function(contextInstance, newScale) {
	var bounds = calculateBounds(contextInstance, newScale);
	contextInstance.bounds = bounds;
	return bounds;
};
function getMouseBoundedPosition(positionX, positionY, bounds, limitToBounds, paddingValueX, paddingValueY, wrapperComponent) {
	var minPositionX = bounds.minPositionX, minPositionY = bounds.minPositionY, maxPositionX = bounds.maxPositionX, maxPositionY = bounds.maxPositionY;
	var paddingX = 0;
	var paddingY = 0;
	if (wrapperComponent) {
		paddingX = paddingValueX;
		paddingY = paddingValueY;
	}
	return {
		x: boundLimiter(positionX, minPositionX - paddingX, maxPositionX + paddingX, limitToBounds),
		y: boundLimiter(positionY, minPositionY - paddingY, maxPositionY + paddingY, limitToBounds)
	};
}
function handleCalculateZoomPositions(contextInstance, mouseX, mouseY, newScale, bounds, limitToBounds) {
	var _a = contextInstance.state, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
	var scaleDifference = newScale - scale;
	if (typeof mouseX !== "number" || typeof mouseY !== "number") {
		console.error("Mouse X and Y position were not provided!");
		return {
			x: positionX,
			y: positionY
		};
	}
	return getMouseBoundedPosition(positionX - mouseX * scaleDifference, positionY - mouseY * scaleDifference, bounds, limitToBounds, 0, 0, null);
}
var MIN_SAFE_SCALE = 1e-7;
function checkZoomBounds(zoom, minScale, maxScale, zoomPadding, enablePadding) {
	var scalePadding = enablePadding ? zoomPadding : 0;
	var minScaleWithPadding = Math.max(minScale - scalePadding, MIN_SAFE_SCALE);
	var maxScaleWithPadding = maxScale + scalePadding;
	if (!Number.isNaN(maxScale) && zoom >= maxScaleWithPadding) return maxScaleWithPadding;
	if (!Number.isNaN(minScale) && zoom <= minScaleWithPadding) return minScaleWithPadding;
	return Math.max(zoom, MIN_SAFE_SCALE);
}
var isPanningStartAllowed = function(contextInstance, event) {
	var excluded = contextInstance.setup.panning.excluded;
	var isInitialized = contextInstance.isInitialized, wrapperComponent = contextInstance.wrapperComponent;
	var target = event.target;
	var isWrapperChild = "shadowRoot" in target && "composedPath" in event ? event.composedPath().some(function(el) {
		if (!(el instanceof Element)) return false;
		return wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.contains(el);
	}) : wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.contains(target);
	if (!(isInitialized && target && isWrapperChild)) return false;
	if (isExcludedNode(target, excluded)) return false;
	if (target.getAttribute("draggable") === "true" || target.getAttribute("contenteditable") === "true" || target.isContentEditable) return false;
	return true;
};
var isPanningAllowed = function(contextInstance) {
	var isInitialized = contextInstance.isInitialized, isPanning = contextInstance.isPanning;
	var disabled = contextInstance.setup.panning.disabled;
	if (!(isInitialized && isPanning && !disabled)) return false;
	return true;
};
var handlePanningSetup = function(contextInstance, event) {
	var _a = contextInstance.state, positionX = _a.positionX, positionY = _a.positionY;
	contextInstance.isPanning = true;
	var x = event.clientX;
	var y = event.clientY;
	contextInstance.startCoords = {
		x: x - positionX,
		y: y - positionY
	};
};
var handleTouchPanningSetup = function(contextInstance, event) {
	var touches = event.touches;
	var _a = contextInstance.state, positionX = _a.positionX, positionY = _a.positionY;
	contextInstance.isPanning = true;
	if (touches.length === 1) {
		var x = touches[0].clientX;
		var y = touches[0].clientY;
		contextInstance.startCoords = {
			x: x - positionX,
			y: y - positionY
		};
	}
};
function handlePanToBounds(contextInstance) {
	var _a = contextInstance.state, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale;
	var _b = contextInstance.setup, disabled = _b.disabled, limitToBounds = _b.limitToBounds, centerZoomedOut = _b.centerZoomedOut;
	var wrapperComponent = contextInstance.wrapperComponent;
	if (disabled || !wrapperComponent || !contextInstance.bounds) return;
	var _c = contextInstance.bounds, maxPositionX = _c.maxPositionX, minPositionX = _c.minPositionX, maxPositionY = _c.maxPositionY, minPositionY = _c.minPositionY;
	var xChanged = positionX > maxPositionX || positionX < minPositionX;
	var yChanged = positionY > maxPositionY || positionY < minPositionY;
	var _d = handleCalculateZoomPositions(contextInstance, positionX > maxPositionX ? wrapperComponent.offsetWidth : contextInstance.setup.minPositionX || 0, positionY > maxPositionY ? wrapperComponent.offsetHeight : contextInstance.setup.minPositionY || 0, scale, contextInstance.bounds, limitToBounds || centerZoomedOut), x = _d.x, y = _d.y;
	return {
		scale,
		positionX: xChanged ? x : positionX,
		positionY: yChanged ? y : positionY
	};
}
function handleNewPosition(contextInstance, newPositionX, newPositionY, paddingValueX, paddingValueY) {
	var limitToBounds = contextInstance.setup.limitToBounds;
	var wrapperComponent = contextInstance.wrapperComponent, bounds = contextInstance.bounds;
	var _a = contextInstance.state, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
	if (wrapperComponent === null || bounds === null || newPositionX === positionX && newPositionY === positionY) return;
	var _b = getMouseBoundedPosition(newPositionX, newPositionY, bounds, limitToBounds, paddingValueX, paddingValueY, wrapperComponent), x = _b.x, y = _b.y;
	contextInstance.setState(scale, x, y);
}
var getPanningClientPosition = function(contextInstance, clientX, clientY) {
	var startCoords = contextInstance.startCoords, state = contextInstance.state;
	var panning = contextInstance.setup.panning;
	var lockAxisX = panning.lockAxisX, lockAxisY = panning.lockAxisY;
	var positionX = state.positionX, positionY = state.positionY;
	if (!startCoords) return {
		x: positionX,
		y: positionY
	};
	var mouseX = clientX - startCoords.x;
	var mouseY = clientY - startCoords.y;
	return {
		x: lockAxisX ? positionX : mouseX,
		y: lockAxisY ? positionY : mouseY
	};
};
var getPaddingValue = function(contextInstance, size, explicitScale) {
	var setup = contextInstance.setup, state = contextInstance.state;
	var minScale = setup.minScale, disablePadding = setup.disablePadding, centerZoomedOut = setup.centerZoomedOut;
	var scale = explicitScale !== null && explicitScale !== void 0 ? explicitScale : state.scale;
	if (size > 0 && scale >= minScale && !disablePadding && !centerZoomedOut) return size;
	return 0;
};
var DeviceType;
(function(DeviceType) {
	DeviceType["TRACK_PAD"] = "track_pad";
	DeviceType["MOUSE"] = "mouse";
	DeviceType["TOUCH"] = "touch";
})(DeviceType || (DeviceType = {}));
var isVelocityCalculationAllowed = function(contextInstance) {
	var mounted = contextInstance.mounted, wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
	var _a = contextInstance.setup, disabled = _a.disabled, velocityAnimation = _a.velocityAnimation, limitToBounds = _a.limitToBounds;
	var scale = contextInstance.state.scale;
	if (velocityAnimation.disabled || disabled || !mounted) return false;
	if (!wrapperComponent || !contentComponent) return false;
	if (!limitToBounds) return true;
	return wrapperComponent.offsetWidth < contentComponent.offsetWidth * scale || wrapperComponent.offsetHeight < contentComponent.offsetHeight * scale;
};
var isVelocityAllowed = function(contextInstance) {
	var mounted = contextInstance.mounted, velocity = contextInstance.velocity, bounds = contextInstance.bounds;
	var _a = contextInstance.setup, disabled = _a.disabled;
	if (!(!_a.velocityAnimation.disabled && !disabled && mounted)) return false;
	if (!velocity || !bounds) return false;
	return true;
};
function getVelocityMoveTime(contextInstance, velocity) {
	var velocityAnimation = contextInstance.setup.velocityAnimation;
	var animationTime = velocityAnimation.animationTime, maxAnimationTime = velocityAnimation.maxAnimationTime, inertia = velocityAnimation.inertia;
	return Math.min(animationTime * Math.max(1, Math.abs(velocity / inertia)), maxAnimationTime);
}
function getVelocityPosition(newPosition, startPosition, currentPosition, isLocked, limitToBounds, minPosition, maxPosition, minTarget, maxTarget, step) {
	if (limitToBounds) {
		if (startPosition > maxPosition && currentPosition > maxPosition) {
			var calculatedPosition = maxPosition + (newPosition - maxPosition) * step;
			if (calculatedPosition > maxTarget) return maxTarget;
			if (calculatedPosition < maxPosition) return maxPosition;
			return calculatedPosition;
		}
		if (startPosition < minPosition && currentPosition < minPosition) {
			var calculatedPosition = minPosition + (newPosition - minPosition) * step;
			if (calculatedPosition < minTarget) return minTarget;
			if (calculatedPosition > minPosition) return minPosition;
			return calculatedPosition;
		}
	}
	if (isLocked) return startPosition;
	return boundLimiter(newPosition, minPosition, maxPosition, limitToBounds);
}
function getSizeMultiplier(wrapperComponent) {
	var defaultMultiplier = 1;
	var value = wrapperComponent.offsetWidth / window.innerWidth;
	if (Number.isNaN(value)) return defaultMultiplier;
	return Math.min(defaultMultiplier, value);
}
var getMinMaxVelocity = function(velocity, maxStrength, sensitivity) {
	var defaultMultiplier = 0;
	var value = velocity * sensitivity;
	if (Number.isNaN(value)) return defaultMultiplier;
	if (velocity < 0) return Math.max(value, -maxStrength);
	return Math.min(value, maxStrength);
};
function handleCalculateVelocity(contextInstance, position, device) {
	var _a, _b;
	if (!isVelocityCalculationAllowed(contextInstance)) return;
	var lastMousePosition = contextInstance.lastMousePosition, velocityTime = contextInstance.velocityTime, setup = contextInstance.setup;
	var wrapperComponent = contextInstance.wrapperComponent;
	var _c = setup.velocityAnimation, maxStrengthMouse = _c.maxStrengthMouse, maxStrengthTouch = _c.maxStrengthTouch, sensitivityTouch = _c.sensitivityTouch, sensitivityMouse = _c.sensitivityMouse;
	var now = Date.now();
	if (lastMousePosition && velocityTime && wrapperComponent) {
		var sizeMultiplier = getSizeMultiplier(wrapperComponent);
		var sensitivity = (_a = {}, _a[DeviceType.TOUCH] = sensitivityTouch, _a[DeviceType.MOUSE] = sensitivityMouse, _a)[device];
		var maxStrength = (_b = {}, _b[DeviceType.TOUCH] = maxStrengthTouch, _b[DeviceType.MOUSE] = maxStrengthMouse, _b)[device];
		var distanceX = position.x - lastMousePosition.x;
		var distanceY = position.y - lastMousePosition.y;
		var velocityX = getMinMaxVelocity(distanceX / sizeMultiplier, maxStrength, sensitivity);
		var velocityY = getMinMaxVelocity(distanceY / sizeMultiplier, maxStrength, sensitivity);
		var interval = now - velocityTime;
		var speed = distanceX * distanceX + distanceY * distanceY;
		contextInstance.velocity = {
			velocityX,
			velocityY,
			total: getMinMaxVelocity(Math.sqrt(speed) / interval, maxStrength, sensitivity)
		};
	}
	contextInstance.lastMousePosition = position;
	contextInstance.velocityTime = now;
}
function handleVelocityPanning(contextInstance) {
	var velocity = contextInstance.velocity, bounds = contextInstance.bounds, setup = contextInstance.setup, wrapperComponent = contextInstance.wrapperComponent;
	if (!isVelocityAllowed(contextInstance) || !velocity || !bounds || !wrapperComponent) return;
	var velocityX = velocity.velocityX, velocityY = velocity.velocityY, total = velocity.total;
	var maxPositionX = bounds.maxPositionX, minPositionX = bounds.minPositionX, maxPositionY = bounds.maxPositionY, minPositionY = bounds.minPositionY;
	var limitToBounds = setup.limitToBounds, autoAlignment = setup.autoAlignment;
	var zoomAnimation = setup.zoomAnimation, panning = setup.panning;
	var lockAxisY = panning.lockAxisY, lockAxisX = panning.lockAxisX;
	var animationType = zoomAnimation.animationType;
	var sizeX = autoAlignment.sizeX, sizeY = autoAlignment.sizeY;
	var alignAnimationTime = autoAlignment.velocityAlignmentTime;
	var moveAnimationTime = getVelocityMoveTime(contextInstance, total);
	var finalAnimationTime = Math.max(moveAnimationTime, alignAnimationTime);
	var paddingValueX = getPaddingValue(contextInstance, sizeX);
	var paddingValueY = getPaddingValue(contextInstance, sizeY);
	var paddingX = paddingValueX * wrapperComponent.offsetWidth / 100;
	var paddingY = paddingValueY * wrapperComponent.offsetHeight / 100;
	var maxTargetX = maxPositionX + paddingX;
	var minTargetX = minPositionX - paddingX;
	var maxTargetY = maxPositionY + paddingY;
	var minTargetY = minPositionY - paddingY;
	var startState = contextInstance.state;
	var startTime = (/* @__PURE__ */ new Date()).getTime();
	handleSetupAnimation(contextInstance, animationType, finalAnimationTime, function(step) {
		var _a = contextInstance.state, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
		var animationProgress = ((/* @__PURE__ */ new Date()).getTime() - startTime) / alignAnimationTime;
		var alignAnimation = animations[autoAlignment.animationType];
		var alignStep = 1 - alignAnimation(Math.min(1, animationProgress));
		var customStep = 1 - step;
		var newPositionX = positionX + velocityX * customStep;
		var newPositionY = positionY + velocityY * customStep;
		var currentPositionX = getVelocityPosition(newPositionX, startState.positionX, positionX, lockAxisX, limitToBounds, minPositionX, maxPositionX, minTargetX, maxTargetX, alignStep);
		var currentPositionY = getVelocityPosition(newPositionY, startState.positionY, positionY, lockAxisY, limitToBounds, minPositionY, maxPositionY, minTargetY, maxTargetY, alignStep);
		if (positionX !== newPositionX || positionY !== newPositionY) {
			contextInstance.setState(scale, currentPositionX, currentPositionY);
			var onPanning = contextInstance.props.onPanning;
			if (onPanning) onPanning(getContext(contextInstance), {});
		}
	});
}
function handlePanningStart(contextInstance, event) {
	var _a = contextInstance.state, scale = _a.scale;
	contextInstance.panStartPosition = {
		x: _a.positionX,
		y: _a.positionY
	};
	handleCancelAnimation(contextInstance);
	handleCalculateBounds(contextInstance, scale);
	if (window.TouchEvent !== void 0 && event instanceof TouchEvent) handleTouchPanningSetup(contextInstance, event);
	else handlePanningSetup(contextInstance, event);
}
function handleAlignToBounds(contextInstance, customAnimationTime) {
	var scale = contextInstance.state.scale;
	var _a = contextInstance.setup, minScale = _a.minScale, autoAlignment = _a.autoAlignment;
	var disabled = autoAlignment.disabled, sizeX = autoAlignment.sizeX, sizeY = autoAlignment.sizeY, animationTime = autoAlignment.animationTime, animationType = autoAlignment.animationType;
	if (disabled || scale < minScale || !sizeX && !sizeY) return;
	var targetState = handlePanToBounds(contextInstance);
	if (targetState) animate(contextInstance, targetState, customAnimationTime !== null && customAnimationTime !== void 0 ? customAnimationTime : animationTime, animationType);
}
function handlePanning(contextInstance, clientX, clientY, device) {
	var startCoords = contextInstance.startCoords;
	var _a = contextInstance.setup.autoAlignment, sizeX = _a.sizeX, sizeY = _a.sizeY;
	if (!startCoords) return;
	var _b = getPanningClientPosition(contextInstance, clientX, clientY), x = _b.x, y = _b.y;
	var paddingValueX = getPaddingValue(contextInstance, sizeX);
	var paddingValueY = getPaddingValue(contextInstance, sizeY);
	handleCalculateVelocity(contextInstance, {
		x,
		y
	}, device);
	handleNewPosition(contextInstance, x, y, paddingValueX, paddingValueY);
}
function handlePanningEnd(contextInstance, velocityDisabled) {
	if (contextInstance.isPanning) {
		var velocity = contextInstance.velocity, wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
		contextInstance.isPanning = false;
		var _a = contextInstance.state, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale;
		var start = contextInstance.panStartPosition;
		contextInstance.panStartPosition = null;
		if (start) {
			var dx = positionX - start.x;
			var dy = positionY - start.y;
			if (dx * dx + dy * dy <= 25) return;
		}
		contextInstance.isAnimating = false;
		contextInstance.animation = null;
		var wrapperWidth = (wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.offsetWidth) || 0;
		var wrapperHeight = (wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.offsetHeight) || 0;
		var contentWidth = ((contentComponent === null || contentComponent === void 0 ? void 0 : contentComponent.offsetWidth) || 0) * scale;
		var contentHeight = ((contentComponent === null || contentComponent === void 0 ? void 0 : contentComponent.offsetHeight) || 0) * scale;
		var isContentOverflowing = !contextInstance.setup.limitToBounds || wrapperWidth < contentWidth || wrapperHeight < contentHeight;
		if (!velocityDisabled && velocity && velocity.total > .1 && isContentOverflowing) handleVelocityPanning(contextInstance);
		else handleAlignToBounds(contextInstance);
	}
}
function handleZoomToPoint(contextInstance, scale, mouseX, mouseY) {
	var _a = contextInstance.setup, minScale = _a.minScale, maxScale = _a.maxScale, limitToBounds = _a.limitToBounds;
	var newScale = checkZoomBounds(roundNumber(scale, 2), minScale, maxScale, 0, false);
	var _b = handleCalculateZoomPositions(contextInstance, mouseX, mouseY, newScale, handleCalculateBounds(contextInstance, newScale), limitToBounds);
	return {
		scale: newScale,
		positionX: _b.x,
		positionY: _b.y
	};
}
function handleAlignToScaleBounds(contextInstance, mousePositionX, mousePositionY) {
	var scale = contextInstance.state.scale;
	var wrapperComponent = contextInstance.wrapperComponent;
	var _a = contextInstance.setup, minScale = _a.minScale, maxScale = _a.maxScale, limitToBounds = _a.limitToBounds, zoomAnimation = _a.zoomAnimation;
	var disabled = zoomAnimation.disabled, animationTime = zoomAnimation.animationTime, animationType = zoomAnimation.animationType;
	var isDisabled = disabled || scale >= minScale && scale <= maxScale;
	if (scale >= 1 || limitToBounds) handleAlignToBounds(contextInstance);
	if (isDisabled || !wrapperComponent || !contextInstance.mounted) return;
	var mouseX = mousePositionX || wrapperComponent.offsetWidth / 2;
	var mouseY = mousePositionY || wrapperComponent.offsetHeight / 2;
	var targetState = handleZoomToPoint(contextInstance, scale < minScale ? minScale : maxScale, mouseX, mouseY);
	if (targetState) animate(contextInstance, targetState, animationTime, animationType);
}
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function() {
	__assign = Object.assign || function __assign(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
var initialState = {
	previousScale: 1,
	scale: 1,
	positionX: 0,
	positionY: 0
};
var initialSetup = {
	disabled: false,
	minPositionX: null,
	maxPositionX: null,
	minPositionY: null,
	maxPositionY: null,
	minScale: 1,
	maxScale: 8,
	limitToBounds: true,
	centerZoomedOut: false,
	centerOnInit: false,
	disablePadding: false,
	smooth: true,
	detached: false,
	wheel: {
		step: .015,
		disabled: false,
		wheelDisabled: false,
		touchPadDisabled: false,
		activationKeys: [],
		excluded: []
	},
	trackPadPanning: {
		disabled: true,
		velocityDisabled: false,
		lockAxisX: false,
		lockAxisY: false,
		activationKeys: [],
		excluded: []
	},
	panning: {
		disabled: false,
		velocityDisabled: false,
		lockAxisX: false,
		lockAxisY: false,
		allowLeftClickPan: true,
		allowMiddleClickPan: true,
		allowRightClickPan: true,
		activationKeys: [],
		excluded: []
	},
	pinch: {
		step: 5,
		disabled: false,
		allowPanning: true,
		excluded: []
	},
	doubleClick: {
		disabled: false,
		step: .7,
		mode: "zoomIn",
		animationType: "easeOut",
		animationTime: 200,
		excluded: []
	},
	zoomAnimation: {
		disabled: false,
		size: .4,
		animationTime: 200,
		animationType: "easeOut"
	},
	autoAlignment: {
		disabled: false,
		sizeX: 100,
		sizeY: 100,
		animationTime: 200,
		velocityAlignmentTime: 400,
		animationType: "easeOut"
	},
	velocityAnimation: {
		disabled: false,
		sensitivityMouse: 1,
		sensitivityTouch: 1.2,
		maxStrengthMouse: 20,
		maxStrengthTouch: 40,
		inertia: 1,
		animationTime: 300,
		maxAnimationTime: 800,
		animationType: "easeOut"
	}
};
var baseClasses = {
	wrapperClass: "react-transform-wrapper",
	contentClass: "react-transform-component"
};
var createState = function(props) {
	var _a, _b, _c, _d, _e, _f, _g, _h, _j;
	var minScale = Math.max((_a = props.minScale) !== null && _a !== void 0 ? _a : initialSetup.minScale, 1e-7);
	var maxScale = (_b = props.maxScale) !== null && _b !== void 0 ? _b : initialSetup.maxScale;
	var rawScale = (_c = props.initialScale) !== null && _c !== void 0 ? _c : initialState.scale;
	var scale = Math.min(Math.max(rawScale, minScale), maxScale);
	return {
		previousScale: scale,
		scale,
		positionX: boundLimiter((_d = props.initialPositionX) !== null && _d !== void 0 ? _d : initialState.positionX, (_e = props.minPositionX) !== null && _e !== void 0 ? _e : -Infinity, (_f = props.maxPositionX) !== null && _f !== void 0 ? _f : Infinity, props.minPositionX != null || props.maxPositionX != null),
		positionY: boundLimiter((_g = props.initialPositionY) !== null && _g !== void 0 ? _g : initialState.positionY, (_h = props.minPositionY) !== null && _h !== void 0 ? _h : -Infinity, (_j = props.maxPositionY) !== null && _j !== void 0 ? _j : Infinity, props.minPositionY != null || props.maxPositionY != null)
	};
};
var createSetup = function(props) {
	var newSetup = __assign({}, initialSetup);
	Object.keys(props).forEach(function(key) {
		var k = key;
		var validValue = typeof props[k] !== "undefined";
		if (typeof initialSetup[k] !== "undefined" && validValue) {
			var dataType = Object.prototype.toString.call(initialSetup[k]);
			var isObject = dataType === "[object Object]";
			var isArray = dataType === "[object Array]";
			if (isObject) newSetup[k] = __assign(__assign({}, initialSetup[k]), props[k]);
			else if (isArray) newSetup[k] = __spreadArray(__spreadArray([], initialSetup[k], true), props[k], true);
			else newSetup[k] = props[k];
		}
	});
	if (newSetup.minScale <= 0) newSetup.minScale = 1e-7;
	return newSetup;
};
var handleCalculateButtonZoom = function(contextInstance, delta, step) {
	var scale = contextInstance.state.scale;
	var wrapperComponent = contextInstance.wrapperComponent, setup = contextInstance.setup;
	var maxScale = setup.maxScale, minScale = setup.minScale, zoomAnimation = setup.zoomAnimation, smooth = setup.smooth;
	var size = zoomAnimation.size;
	if (!wrapperComponent) throw new Error("Wrapper is not mounted");
	return checkZoomBounds(roundNumber(smooth ? scale * Math.exp(delta * step) : scale + delta * step, 3), minScale, maxScale, size, false);
};
function handleZoomToViewCenter(contextInstance, delta, step, animationTime, animationType) {
	var _a, _b;
	var wrapperComponent = contextInstance.wrapperComponent;
	var _c = contextInstance.state, scale = _c.scale, positionX = _c.positionX, positionY = _c.positionY;
	var zoomAnimation = contextInstance.setup.zoomAnimation;
	if (!wrapperComponent) return console.error("No WrapperComponent found");
	var effectiveAnimationTime = zoomAnimation.disabled ? 0 : animationTime;
	var wrapperWidth = wrapperComponent.offsetWidth;
	var wrapperHeight = wrapperComponent.offsetHeight;
	var mouseX = (wrapperWidth / 2 - positionX) / scale;
	var mouseY = (wrapperHeight / 2 - positionY) / scale;
	var targetState = handleZoomToPoint(contextInstance, handleCalculateButtonZoom(contextInstance, delta, step), mouseX, mouseY);
	if (!targetState) return console.error("Error during zoom event. New transformation state was not calculated.");
	var _d = contextInstance.props, onZoomStart = _d.onZoomStart, onZoom = _d.onZoom, onZoomStop = _d.onZoomStop;
	var event = new MouseEvent("mousemove", { bubbles: true });
	var ctx = getContext(contextInstance);
	handleCallback(ctx, event, onZoomStart);
	handleCallback(ctx, event, onZoom);
	animate(contextInstance, targetState, effectiveAnimationTime, animationType);
	var win = (_b = (_a = wrapperComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) !== null && _b !== void 0 ? _b : typeof window !== "undefined" ? window : null;
	if (win) win.setTimeout(function() {
		if (!contextInstance.mounted) return;
		handleCallback(getContext(contextInstance), event, onZoomStop);
	}, effectiveAnimationTime);
}
function resetTransformations(contextInstance, animationTime, animationType, onResetTransformation) {
	var _a, _b;
	var setup = contextInstance.setup, wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
	var limitToBounds = setup.limitToBounds, centerOnInit = setup.centerOnInit;
	var initialTransformation = createState(contextInstance.props);
	var _c = contextInstance.state, scale = _c.scale, positionX = _c.positionX, positionY = _c.positionY;
	if (!wrapperComponent) return;
	var targetPositionX = initialTransformation.positionX;
	var targetPositionY = initialTransformation.positionY;
	if (centerOnInit && contentComponent) {
		var centered = getCenterPosition(initialTransformation.scale, wrapperComponent, contentComponent);
		targetPositionX = centered.positionX;
		targetPositionY = centered.positionY;
	}
	var newBounds = calculateBounds(contextInstance, initialTransformation.scale);
	var boundedPositions = getMouseBoundedPosition(targetPositionX, targetPositionY, newBounds, limitToBounds, 0, 0, wrapperComponent);
	var newState = {
		scale: initialTransformation.scale,
		positionX: boundedPositions.x,
		positionY: boundedPositions.y
	};
	if (scale === initialTransformation.scale && positionX === initialTransformation.positionX && positionY === initialTransformation.positionY) return;
	onResetTransformation === null || onResetTransformation === void 0 || onResetTransformation();
	var _d = contextInstance.props, onZoomStart = _d.onZoomStart, onZoom = _d.onZoom, onZoomStop = _d.onZoomStop;
	var event = new MouseEvent("mousemove", { bubbles: true });
	var ctx = getContext(contextInstance);
	handleCallback(ctx, event, onZoomStart);
	handleCallback(ctx, event, onZoom);
	animate(contextInstance, newState, animationTime, animationType);
	var win = (_b = (_a = wrapperComponent.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) !== null && _b !== void 0 ? _b : typeof window !== "undefined" ? window : null;
	if (win) win.setTimeout(function() {
		if (!contextInstance.mounted) return;
		handleCallback(getContext(contextInstance), event, onZoomStop);
	}, animationTime);
}
function getOffset(element, wrapper, content, state) {
	var offset = element.getBoundingClientRect();
	var wrapperOffset = wrapper.getBoundingClientRect();
	var contentOffset = content.getBoundingClientRect();
	var xOff = wrapperOffset.x * state.scale;
	var yOff = wrapperOffset.y * state.scale;
	return {
		x: (offset.x - contentOffset.x + xOff) / state.scale,
		y: (offset.y - contentOffset.y + yOff) / state.scale
	};
}
function calculateZoomToNode(contextInstance, node, customZoom, customOffsetX, customOffsetY) {
	if (customOffsetX === void 0) customOffsetX = 0;
	if (customOffsetY === void 0) customOffsetY = 0;
	var wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent, state = contextInstance.state;
	var _a = contextInstance.setup, limitToBounds = _a.limitToBounds, minScale = _a.minScale, maxScale = _a.maxScale;
	if (!wrapperComponent || !contentComponent) return state;
	var wrapperRect = wrapperComponent.getBoundingClientRect();
	var nodeRect = node.getBoundingClientRect();
	var nodeOffset = getOffset(node, wrapperComponent, contentComponent, state);
	var nodeLeft = nodeOffset.x;
	var nodeTop = nodeOffset.y;
	var nodeWidth = nodeRect.width / state.scale;
	var nodeHeight = nodeRect.height / state.scale;
	var scaleX = wrapperComponent.offsetWidth / nodeWidth;
	var scaleY = wrapperComponent.offsetHeight / nodeHeight;
	var newScale = checkZoomBounds(customZoom || Math.min(scaleX, scaleY), minScale, maxScale, 0, false);
	var offsetX = (wrapperRect.width - nodeWidth * newScale) / 2;
	var offsetY = (wrapperRect.height - nodeHeight * newScale) / 2;
	var _b = getMouseBoundedPosition((wrapperRect.left - nodeLeft) * newScale + offsetX + customOffsetX, (wrapperRect.top - nodeTop) * newScale + offsetY + customOffsetY, calculateBounds(contextInstance, newScale), limitToBounds, 0, 0, wrapperComponent);
	return {
		positionX: _b.x,
		positionY: _b.y,
		scale: newScale
	};
}
var zoomIn = function(contextInstance) {
	return function(step, animationTime, animationType) {
		if (step === void 0) step = .5;
		if (animationTime === void 0) animationTime = 300;
		if (animationType === void 0) animationType = "easeOut";
		handleZoomToViewCenter(contextInstance, 1, step, animationTime, animationType);
	};
};
var zoomOut = function(contextInstance) {
	return function(step, animationTime, animationType) {
		if (step === void 0) step = .5;
		if (animationTime === void 0) animationTime = 300;
		if (animationType === void 0) animationType = "easeOut";
		handleZoomToViewCenter(contextInstance, -1, step, animationTime, animationType);
	};
};
var setTransform = function(contextInstance) {
	return function(newPositionX, newPositionY, newScale, animationTime, animationType) {
		if (animationTime === void 0) animationTime = 300;
		if (animationType === void 0) animationType = "easeOut";
		var _a = contextInstance.state, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale;
		var wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
		if (contextInstance.setup.disabled || !wrapperComponent || !contentComponent) return;
		animate(contextInstance, {
			positionX: Number.isNaN(newPositionX) ? positionX : newPositionX,
			positionY: Number.isNaN(newPositionY) ? positionY : newPositionY,
			scale: Number.isNaN(newScale) ? scale : newScale
		}, animationTime, animationType);
	};
};
var resetTransform = function(contextInstance) {
	return function(animationTime, animationType) {
		if (animationTime === void 0) animationTime = 200;
		if (animationType === void 0) animationType = "easeOut";
		resetTransformations(contextInstance, animationTime, animationType);
	};
};
var centerView = function(contextInstance) {
	return function(scale, animationTime, animationType) {
		if (animationTime === void 0) animationTime = 200;
		if (animationType === void 0) animationType = "easeOut";
		var state = contextInstance.state, wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
		if (wrapperComponent && contentComponent) animate(contextInstance, getCenterPosition(scale || state.scale, wrapperComponent, contentComponent), animationTime, animationType);
	};
};
var zoomToElement = function(contextInstance) {
	return function(node, scale, animationTime, animationType, offsetX, offsetY) {
		if (animationTime === void 0) animationTime = 600;
		if (animationType === void 0) animationType = "easeOut";
		if (offsetX === void 0) offsetX = 0;
		if (offsetY === void 0) offsetY = 0;
		handleCancelAnimation(contextInstance);
		var wrapperComponent = contextInstance.wrapperComponent;
		var target = typeof node === "string" ? document.getElementById(node) : node;
		if (wrapperComponent && target && wrapperComponent.contains(target)) animate(contextInstance, calculateZoomToNode(contextInstance, target, scale, offsetX, offsetY), animationTime, animationType);
	};
};
var getControls = function(contextInstance) {
	return {
		instance: contextInstance,
		state: contextInstance.state,
		zoomIn: zoomIn(contextInstance),
		zoomOut: zoomOut(contextInstance),
		setTransform: setTransform(contextInstance),
		resetTransform: resetTransform(contextInstance),
		centerView: centerView(contextInstance),
		zoomToElement: zoomToElement(contextInstance)
	};
};
var getState = function(contextInstance) {
	return {
		instance: contextInstance,
		state: contextInstance.state
	};
};
var getContext = function(contextInstance) {
	var ref = {};
	Object.assign(ref, getState(contextInstance));
	Object.assign(ref, getControls(contextInstance));
	return ref;
};
var passiveSupported = false;
function makePassiveEventOption() {
	try {
		return { get passive() {
			passiveSupported = true;
			return false;
		} };
	} catch (err) {
		passiveSupported = false;
		return passiveSupported;
	}
}
var matchPrefix = ".".concat(baseClasses.wrapperClass);
var isExcludedNode = function(node, excluded) {
	return excluded.some(function(exclude) {
		return node.matches("".concat(matchPrefix, " ").concat(exclude, ", ").concat(matchPrefix, " .").concat(exclude, ", ").concat(matchPrefix, " ").concat(exclude, " *, ").concat(matchPrefix, " .").concat(exclude, " *"));
	});
};
var cancelTimeout = function(timeout) {
	if (timeout) clearTimeout(timeout);
};
/** Drop binary float noise on scale (e.g. 1.5000000000000002) without clipping real zoom values. */
var roundScaleForTransform = function(scale) {
	return Number.parseFloat(scale.toFixed(8));
};
var getTransformStyles = function(x, y, scale) {
	var s = roundScaleForTransform(scale);
	return "translate(".concat(x, "px, ").concat(y, "px) scale(").concat(s, ")");
};
var getCenterPosition = function(scale, wrapperComponent, contentComponent) {
	var contentWidth = contentComponent.offsetWidth * scale;
	var contentHeight = contentComponent.offsetHeight * scale;
	return {
		scale,
		positionX: (wrapperComponent.offsetWidth - contentWidth) / 2,
		positionY: (wrapperComponent.offsetHeight - contentHeight) / 2
	};
};
function assignRef(ref, value) {
	if (ref == null) return;
	if (typeof ref === "function") ref(value);
	else ref.current = value;
}
function mergeRefs(refs) {
	return function(value) {
		refs.forEach(function(ref) {
			if (typeof ref === "function") ref(value);
			else if (ref != null) ref.current = value;
		});
	};
}
var isWheelAllowed = function(contextInstance, event) {
	var _a = contextInstance.setup.wheel, disabled = _a.disabled, wheelDisabled = _a.wheelDisabled, touchPadDisabled = _a.touchPadDisabled, excluded = _a.excluded;
	var isInitialized = contextInstance.isInitialized, isPanning = contextInstance.isPanning;
	var target = event.target;
	if (!(isInitialized && !isPanning && !disabled && target)) return false;
	if (wheelDisabled && !event.ctrlKey) return false;
	if (touchPadDisabled && event.ctrlKey) return false;
	if (isExcludedNode(target, excluded)) return false;
	if (!contextInstance.isPressingKeys(contextInstance.setup.wheel.activationKeys)) return false;
	return true;
};
var isWheelPanningAllowed = function(contextInstance, event) {
	var _a = contextInstance.setup, disabled = _a.disabled, trackPadPanning = _a.trackPadPanning;
	var activationKeys = trackPadPanning.activationKeys, excluded = trackPadPanning.excluded;
	if (!contextInstance.wrapperComponent || !contextInstance.contentComponent) return false;
	if (disabled || trackPadPanning.disabled || event.ctrlKey) return false;
	if (isWheelAllowed(contextInstance, event)) return false;
	var target = event.target;
	if (isExcludedNode(target, excluded)) return false;
	if (!contextInstance.isPressingKeys(activationKeys)) return false;
	return true;
};
var getDeltaY = function(event) {
	if (event) return event.deltaY < 0 ? 1 : -1;
	return 0;
};
function getDelta(event, customDelta) {
	return checkIsNumber(customDelta, getDeltaY(event));
}
function getMousePosition(event, contentComponent, scale) {
	var contentRect = contentComponent.getBoundingClientRect();
	var mouseX = 0;
	var mouseY = 0;
	if ("clientX" in event) {
		mouseX = (event.clientX - contentRect.left) / scale;
		mouseY = (event.clientY - contentRect.top) / scale;
	} else {
		var touch = event.touches[0];
		mouseX = (touch.clientX - contentRect.left) / scale;
		mouseY = (touch.clientY - contentRect.top) / scale;
	}
	if (Number.isNaN(mouseX) || Number.isNaN(mouseY)) console.error("No mouse or touch offset found");
	return {
		x: mouseX,
		y: mouseY
	};
}
var handleCalculateWheelZoom = function(contextInstance, delta, step, disable, getTarget) {
	var scale = contextInstance.state.scale;
	var wrapperComponent = contextInstance.wrapperComponent, setup = contextInstance.setup;
	var maxScale = setup.maxScale, minScale = setup.minScale, zoomAnimation = setup.zoomAnimation, disablePadding = setup.disablePadding;
	var size = zoomAnimation.size, disabled = zoomAnimation.disabled;
	if (!wrapperComponent) throw new Error("Wrapper is not mounted");
	var targetScale = scale + delta * step;
	if (getTarget) return targetScale;
	return checkZoomBounds(targetScale, minScale, maxScale, size, (disable ? false : !disabled) && !disablePadding);
};
var handleWheelZoomStop = function(contextInstance, event) {
	var previousWheelEvent = contextInstance.previousWheelEvent;
	var scale = contextInstance.state.scale;
	var _a = contextInstance.setup, maxScale = _a.maxScale, minScale = _a.minScale;
	if (!previousWheelEvent) return false;
	if (scale < maxScale || scale > minScale) return true;
	if (Math.sign(previousWheelEvent.deltaY) !== Math.sign(event.deltaY)) return true;
	if (previousWheelEvent.deltaY > 0 && previousWheelEvent.deltaY < event.deltaY) return true;
	if (previousWheelEvent.deltaY < 0 && previousWheelEvent.deltaY > event.deltaY) return true;
	if (Math.sign(previousWheelEvent.deltaY) !== Math.sign(event.deltaY)) return true;
	return false;
};
var isPinchStartAllowed = function(contextInstance, event) {
	var _a = contextInstance.setup.pinch, disabled = _a.disabled, excluded = _a.excluded;
	var isInitialized = contextInstance.isInitialized;
	var target = event.target;
	if (!(isInitialized && !disabled && target)) return false;
	if (isExcludedNode(target, excluded)) return false;
	return true;
};
var isPinchAllowed = function(contextInstance) {
	var disabled = contextInstance.setup.pinch.disabled;
	var isInitialized = contextInstance.isInitialized, pinchStartDistance = contextInstance.pinchStartDistance;
	if (!(isInitialized && !disabled && pinchStartDistance !== null)) return false;
	return true;
};
var calculateTouchMidPoint = function(event, scale, contentComponent) {
	var contentRect = contentComponent.getBoundingClientRect();
	var touches = event.touches;
	var firstPointX = touches[0].clientX - contentRect.left;
	var firstPointY = touches[0].clientY - contentRect.top;
	var secondPointX = touches[1].clientX - contentRect.left;
	var secondPointY = touches[1].clientY - contentRect.top;
	return {
		x: (firstPointX + secondPointX) / 2 / scale,
		y: (firstPointY + secondPointY) / 2 / scale
	};
};
var getTouchDistance = function(event) {
	return Math.sqrt(Math.pow(event.touches[0].pageX - event.touches[1].pageX, 2) + Math.pow(event.touches[0].pageY - event.touches[1].pageY, 2));
};
var DEFAULT_PINCH_STEP = 5;
var calculatePinchZoom = function(contextInstance, currentDistance) {
	var pinchStartScale = contextInstance.pinchStartScale, pinchStartDistance = contextInstance.pinchStartDistance, setup = contextInstance.setup;
	var maxScale = setup.maxScale, minScale = setup.minScale, zoomAnimation = setup.zoomAnimation, disablePadding = setup.disablePadding, pinch = setup.pinch;
	var size = zoomAnimation.size, disabled = zoomAnimation.disabled;
	var step = pinch.step;
	if (!pinchStartScale || pinchStartDistance === null) throw new Error("Pinch touches distance was not provided");
	if (currentDistance < 0) return contextInstance.state.scale;
	var computed = pinchStartScale + (currentDistance / pinchStartDistance * pinchStartScale - pinchStartScale) * (step / DEFAULT_PINCH_STEP);
	return checkZoomBounds(computed === Infinity ? 0 : roundNumber(computed, 10), minScale, maxScale, size, !disabled && !disablePadding);
};
var wheelStopEventTime = 160;
var wheelAnimationTime = 100;
var handleWheelStart = function(contextInstance, event) {
	var _a = contextInstance.props, onWheelStart = _a.onWheelStart, onZoomStart = _a.onZoomStart;
	if (!contextInstance.wheelStopEventTimer) {
		handleCancelAnimation(contextInstance);
		handleCallback(getContext(contextInstance), event, onWheelStart);
		handleCallback(getContext(contextInstance), event, onZoomStart);
	}
};
var handleWheelZoom = function(contextInstance, event) {
	var _a = contextInstance.props, onWheel = _a.onWheel, onZoom = _a.onZoom;
	var contentComponent = contextInstance.contentComponent, setup = contextInstance.setup;
	var scale = contextInstance.state.scale;
	var limitToBounds = setup.limitToBounds, centerZoomedOut = setup.centerZoomedOut, zoomAnimation = setup.zoomAnimation, wheel = setup.wheel, disablePadding = setup.disablePadding, smooth = setup.smooth;
	var size = zoomAnimation.size, disabled = zoomAnimation.disabled;
	var step = wheel.step;
	if (!contentComponent) throw new Error("Component not mounted");
	event.preventDefault();
	event.stopPropagation();
	var newScale = handleCalculateWheelZoom(contextInstance, getDelta(event, null), smooth ? step * Math.abs(event.deltaY) : step, !event.ctrlKey);
	if (scale === newScale) return;
	var bounds = handleCalculateBounds(contextInstance, newScale);
	var mousePosition = getMousePosition(event, contentComponent, scale);
	var isLimitedToBounds = limitToBounds && (disabled || size === 0 || centerZoomedOut || disablePadding);
	var _b = handleCalculateZoomPositions(contextInstance, mousePosition.x, mousePosition.y, newScale, bounds, isLimitedToBounds), x = _b.x, y = _b.y;
	contextInstance.previousWheelEvent = event;
	contextInstance.setState(newScale, x, y);
	handleCallback(getContext(contextInstance), event, onWheel);
	handleCallback(getContext(contextInstance), event, onZoom);
};
var handleWheelStop = function(contextInstance, event) {
	var _a = contextInstance.props, onWheelStop = _a.onWheelStop, onZoomStop = _a.onZoomStop;
	cancelTimeout(contextInstance.wheelAnimationTimer);
	contextInstance.wheelAnimationTimer = setTimeout(function() {
		if (!contextInstance.mounted) return;
		handleAlignToScaleBounds(contextInstance, event.x, event.y);
		contextInstance.wheelAnimationTimer = null;
	}, wheelAnimationTime);
	if (handleWheelZoomStop(contextInstance, event)) {
		cancelTimeout(contextInstance.wheelStopEventTimer);
		contextInstance.wheelStopEventTimer = setTimeout(function() {
			if (!contextInstance.mounted) return;
			contextInstance.wheelStopEventTimer = null;
			handleCallback(getContext(contextInstance), event, onWheelStop);
			handleCallback(getContext(contextInstance), event, onZoomStop);
		}, wheelStopEventTime);
	}
};
var handleWheelPanningStart = function(contextInstance, event) {
	var _a = contextInstance.props, onWheelStart = _a.onWheelStart, onPanningStart = _a.onPanningStart;
	if (!contextInstance.wheelStopEventTimer) {
		handleCancelAnimation(contextInstance);
		handleCallback(getContext(contextInstance), event, onWheelStart);
		handleCallback(getContext(contextInstance), event, onPanningStart);
	}
};
var handleWheelPanningStop = function(contextInstance, event) {
	var _a = contextInstance.props, onWheelStop = _a.onWheelStop, onPanningStop = _a.onPanningStop;
	cancelTimeout(contextInstance.wheelAnimationTimer);
	contextInstance.wheelAnimationTimer = setTimeout(function() {
		if (!contextInstance.mounted) return;
		handleAlignToScaleBounds(contextInstance, event.x, event.y);
		contextInstance.wheelAnimationTimer = null;
	}, wheelAnimationTime);
	if (handleWheelZoomStop(contextInstance, event)) {
		cancelTimeout(contextInstance.wheelStopEventTimer);
		contextInstance.wheelStopEventTimer = setTimeout(function() {
			if (!contextInstance.mounted) return;
			contextInstance.wheelStopEventTimer = null;
			handleCallback(getContext(contextInstance), event, onWheelStop);
			handleCallback(getContext(contextInstance), event, onPanningStop);
		}, wheelStopEventTime);
	}
};
var getTouchCenter = function(event) {
	var totalX = 0;
	var totalY = 0;
	for (var i = 0; i < 2; i += 1) {
		totalX += event.touches[i].clientX;
		totalY += event.touches[i].clientY;
	}
	return {
		x: totalX / 2,
		y: totalY / 2
	};
};
var handlePinchStart = function(contextInstance, event) {
	var distance = getTouchDistance(event);
	contextInstance.pinchStartDistance = distance;
	contextInstance.lastDistance = distance;
	contextInstance.pinchStartScale = contextInstance.state.scale;
	contextInstance.isPanning = false;
	contextInstance.isPinching = true;
	contextInstance.pinchPreviousCenter = getTouchCenter(event);
	handleCancelAnimation(contextInstance);
};
var handlePinchZoom = function(contextInstance, event) {
	var contentComponent = contextInstance.contentComponent, pinchStartDistance = contextInstance.pinchStartDistance, wrapperComponent = contextInstance.wrapperComponent, pinchPreviousCenter = contextInstance.pinchPreviousCenter;
	var scale = contextInstance.state.scale;
	var _a = contextInstance.setup, limitToBounds = _a.limitToBounds, centerZoomedOut = _a.centerZoomedOut, zoomAnimation = _a.zoomAnimation, autoAlignment = _a.autoAlignment, pinch = _a.pinch, panning = _a.panning;
	var disabled = zoomAnimation.disabled, size = zoomAnimation.size;
	var allowPanning = pinch.allowPanning;
	if (pinchStartDistance === null || !contentComponent) return;
	var midPoint = calculateTouchMidPoint(event, scale, contentComponent);
	if (!Number.isFinite(midPoint.x) || !Number.isFinite(midPoint.y)) return;
	var currentDistance = getTouchDistance(event);
	var newScale = calculatePinchZoom(contextInstance, currentDistance);
	var center = getTouchCenter(event);
	var scaleDiff = scale / newScale;
	var panX = (center.x - ((pinchPreviousCenter === null || pinchPreviousCenter === void 0 ? void 0 : pinchPreviousCenter.x) || 0)) * scaleDiff;
	var panY = (center.y - ((pinchPreviousCenter === null || pinchPreviousCenter === void 0 ? void 0 : pinchPreviousCenter.y) || 0)) * scaleDiff;
	if (newScale === scale && panX === 0 && panY === 0) return;
	contextInstance.pinchPreviousCenter = center;
	var bounds = handleCalculateBounds(contextInstance, newScale);
	var isLimitedToBounds = limitToBounds && (disabled || size === 0 || centerZoomedOut);
	var _b = handleCalculateZoomPositions(contextInstance, midPoint.x, midPoint.y, newScale, bounds, isLimitedToBounds), x = _b.x, y = _b.y;
	contextInstance.pinchMidpoint = midPoint;
	contextInstance.lastDistance = currentDistance;
	if (panning.disabled || !allowPanning) contextInstance.setState(newScale, x, y);
	else {
		var sizeX = autoAlignment.sizeX, sizeY = autoAlignment.sizeY;
		var paddingValueX = getPaddingValue(contextInstance, sizeX, newScale);
		var paddingValueY = getPaddingValue(contextInstance, sizeY, newScale);
		var _c = getMouseBoundedPosition(x + panX, y + panY, bounds, limitToBounds, paddingValueX, paddingValueY, wrapperComponent), finalX = _c.x, finalY = _c.y;
		contextInstance.setState(newScale, finalX, finalY);
	}
};
var handlePinchStop = function(contextInstance) {
	var pinchMidpoint = contextInstance.pinchMidpoint;
	contextInstance.velocity = null;
	contextInstance.lastDistance = null;
	contextInstance.pinchMidpoint = null;
	contextInstance.pinchStartScale = null;
	contextInstance.pinchStartDistance = null;
	contextInstance.isPinching = false;
	handleAlignToScaleBounds(contextInstance, pinchMidpoint === null || pinchMidpoint === void 0 ? void 0 : pinchMidpoint.x, pinchMidpoint === null || pinchMidpoint === void 0 ? void 0 : pinchMidpoint.y);
};
var handleDoubleClickStop = function(contextInstance, event) {
	var onZoomStop = contextInstance.props.onZoomStop;
	var animationTime = contextInstance.setup.doubleClick.animationTime;
	cancelTimeout(contextInstance.doubleClickStopEventTimer);
	contextInstance.doubleClickStopEventTimer = setTimeout(function() {
		contextInstance.doubleClickStopEventTimer = null;
		handleCallback(getContext(contextInstance), event, onZoomStop);
	}, animationTime);
};
var handleDoubleClickResetMode = function(contextInstance, event) {
	var _a = contextInstance.props, onZoomStart = _a.onZoomStart, onZoom = _a.onZoom;
	var _b = contextInstance.setup.doubleClick, animationTime = _b.animationTime, animationType = _b.animationType;
	handleCallback(getContext(contextInstance), event, onZoomStart);
	resetTransformations(contextInstance, animationTime, animationType, function() {
		return handleCallback(getContext(contextInstance), event, onZoom);
	});
	handleDoubleClickStop(contextInstance, event);
};
function getDoubleClickScale(mode, scale) {
	if (mode === "toggle") return scale === 1 ? 1 : -1;
	return mode === "zoomOut" ? -1 : 1;
}
function handleDoubleClick(contextInstance, event) {
	var setup = contextInstance.setup, doubleClickStopEventTimer = contextInstance.doubleClickStopEventTimer, state = contextInstance.state, contentComponent = contextInstance.contentComponent;
	var scale = state.scale;
	var _a = contextInstance.props, onZoomStart = _a.onZoomStart, onZoom = _a.onZoom;
	var _b = setup.doubleClick, disabled = _b.disabled, mode = _b.mode, step = _b.step, animationTime = _b.animationTime, animationType = _b.animationType;
	if (disabled) return;
	if (doubleClickStopEventTimer) return;
	if (mode === "reset") return handleDoubleClickResetMode(contextInstance, event);
	if (!contentComponent) return console.error("No ContentComponent found");
	var newScale = handleCalculateButtonZoom(contextInstance, getDoubleClickScale(mode, contextInstance.state.scale), step);
	if (scale === newScale) return;
	handleCallback(getContext(contextInstance), event, onZoomStart);
	var mousePosition = getMousePosition(event, contentComponent, scale);
	var targetState = handleZoomToPoint(contextInstance, newScale, mousePosition.x, mousePosition.y);
	if (!targetState) return console.error("Error during zoom event. New transformation state was not calculated.");
	handleCallback(getContext(contextInstance), event, onZoom);
	animate(contextInstance, targetState, animationTime, animationType);
	handleDoubleClickStop(contextInstance, event);
}
var isDoubleClickAllowed = function(contextInstance, event) {
	var isInitialized = contextInstance.isInitialized, setup = contextInstance.setup, wrapperComponent = contextInstance.wrapperComponent;
	var _a = setup.doubleClick, disabled = _a.disabled, excluded = _a.excluded;
	var target = event.target;
	var isWrapperChild = wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.contains(target);
	if (!(isInitialized && target && isWrapperChild && !disabled)) return false;
	if (isExcludedNode(target, excluded)) return false;
	return true;
};
var ZoomPanPinch = function() {
	function ZoomPanPinch(props) {
		var _this = this;
		this.mounted = true;
		this.onChangeCallbacks = /* @__PURE__ */ new Set();
		this.onInitCallbacks = /* @__PURE__ */ new Set();
		this.onTransformCallbacks = /* @__PURE__ */ new Set();
		this.wrapperComponent = null;
		this.contentComponent = null;
		this.isInitialized = false;
		this.bounds = null;
		this.previousWheelEvent = null;
		this.wheelStopEventTimer = null;
		this.wheelAnimationTimer = null;
		this.isPanning = false;
		this.isWheelPanning = false;
		this.startCoords = null;
		this.panStartPosition = null;
		this.lastTouch = null;
		this.isPinching = false;
		this.distance = null;
		this.lastDistance = null;
		this.pinchStartDistance = null;
		this.pinchStartScale = null;
		this.pinchMidpoint = null;
		this.pinchPreviousCenter = null;
		this.doubleClickStopEventTimer = null;
		this.velocity = null;
		this.velocityTime = null;
		this.lastMousePosition = null;
		this.isAnimating = false;
		this.animation = null;
		this.pressedKeys = {};
		this.mount = function() {
			_this.initializeWindowEvents();
		};
		this.unmount = function() {
			_this.cleanupWindowEvents();
		};
		this.update = function(newProps) {
			_this.props = newProps;
			if (_this.wrapperComponent && _this.contentComponent) handleCalculateBounds(_this, _this.state.scale);
			_this.setup = createSetup(newProps);
		};
		this.initializeWindowEvents = function() {
			var _a, _b, _c, _d;
			var passive = makePassiveEventOption();
			var currentDocument = (_a = _this.wrapperComponent) === null || _a === void 0 ? void 0 : _a.ownerDocument;
			var currentWindow = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.defaultView;
			(_b = _this.wrapperComponent) === null || _b === void 0 || _b.addEventListener("wheel", _this.onWheelPanning, passive);
			(_c = _this.wrapperComponent) === null || _c === void 0 || _c.addEventListener("keyup", _this.setKeyUnPressed, passive);
			(_d = _this.wrapperComponent) === null || _d === void 0 || _d.addEventListener("keydown", _this.setKeyPressed, passive);
			currentWindow === null || currentWindow === void 0 || currentWindow.addEventListener("mousedown", _this.onPanningStart, passive);
			currentWindow === null || currentWindow === void 0 || currentWindow.addEventListener("mousemove", _this.onPanning, passive);
			currentWindow === null || currentWindow === void 0 || currentWindow.addEventListener("mouseup", _this.onPanningStop, passive);
			currentDocument === null || currentDocument === void 0 || currentDocument.addEventListener("mouseleave", _this.clearPanning, passive);
			currentWindow === null || currentWindow === void 0 || currentWindow.addEventListener("keyup", _this.setKeyUnPressed, passive);
			currentWindow === null || currentWindow === void 0 || currentWindow.addEventListener("keydown", _this.setKeyPressed, passive);
			currentWindow === null || currentWindow === void 0 || currentWindow.addEventListener("blur", _this.handleWindowBlur);
		};
		this.cleanupWindowEvents = function() {
			var _a, _b, _c, _d, _e;
			var passive = makePassiveEventOption();
			var currentDocument = (_a = _this.wrapperComponent) === null || _a === void 0 ? void 0 : _a.ownerDocument;
			var currentWindow = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.defaultView;
			currentWindow === null || currentWindow === void 0 || currentWindow.removeEventListener("mousedown", _this.onPanningStart, passive);
			currentWindow === null || currentWindow === void 0 || currentWindow.removeEventListener("mousemove", _this.onPanning, passive);
			currentWindow === null || currentWindow === void 0 || currentWindow.removeEventListener("mouseup", _this.onPanningStop, passive);
			currentDocument === null || currentDocument === void 0 || currentDocument.removeEventListener("mouseleave", _this.clearPanning, passive);
			currentWindow === null || currentWindow === void 0 || currentWindow.removeEventListener("keyup", _this.setKeyUnPressed, passive);
			currentWindow === null || currentWindow === void 0 || currentWindow.removeEventListener("keydown", _this.setKeyPressed, passive);
			currentWindow === null || currentWindow === void 0 || currentWindow.removeEventListener("blur", _this.handleWindowBlur);
			document.removeEventListener("mouseleave", _this.clearPanning, passive);
			(_b = _this.wrapperComponent) === null || _b === void 0 || _b.removeEventListener("wheel", _this.onWheelPanning, passive);
			(_c = _this.wrapperComponent) === null || _c === void 0 || _c.removeEventListener("keyup", _this.setKeyUnPressed, passive);
			(_d = _this.wrapperComponent) === null || _d === void 0 || _d.removeEventListener("keydown", _this.setKeyPressed, passive);
			handleCancelAnimation(_this);
			(_e = _this.observer) === null || _e === void 0 || _e.disconnect();
		};
		this.handleInitializeWrapperEvents = function(wrapper) {
			var passive = makePassiveEventOption();
			wrapper.addEventListener("wheel", _this.onWheelZoom, passive);
			wrapper.addEventListener("dblclick", _this.onDoubleClick, passive);
			wrapper.addEventListener("touchstart", _this.onTouchPanningStart, passive);
			wrapper.addEventListener("touchmove", _this.onTouchPanning, passive);
			wrapper.addEventListener("touchend", _this.onTouchPanningStop, passive);
		};
		this.handleInitialize = function(contentComponent) {
			var centerOnInit = _this.setup.centerOnInit;
			_this.applyTransformation();
			_this.onInitCallbacks.forEach(function(callback) {
				return callback(getContext(_this));
			});
			if (centerOnInit) {
				_this.setCenter();
				_this.observer = new ResizeObserver(function() {
					var _a;
					var currentWidth = contentComponent.offsetWidth;
					var currentHeight = contentComponent.offsetHeight;
					if (currentWidth > 0 || currentHeight > 0) {
						_this.onInitCallbacks.forEach(function(callback) {
							return callback(getContext(_this));
						});
						_this.setCenter();
						(_a = _this.observer) === null || _a === void 0 || _a.disconnect();
					}
				});
				setTimeout(function() {
					var _a;
					(_a = _this.observer) === null || _a === void 0 || _a.disconnect();
				}, 5e3);
				_this.observer.observe(contentComponent);
			}
		};
		this.onWheelZoom = function(event) {
			if (_this.setup.disabled) return;
			_this.syncModifierKeys(event);
			if (!isWheelAllowed(_this, event)) return;
			handleWheelStart(_this, event);
			handleWheelZoom(_this, event);
			handleWheelStop(_this, event);
		};
		this.onWheelPanning = function(event) {
			var onPanning = _this.props.onPanning;
			var trackPadPanning = _this.setup.trackPadPanning;
			var lockAxisX = trackPadPanning.lockAxisX, lockAxisY = trackPadPanning.lockAxisY;
			_this.syncModifierKeys(event);
			if (!isWheelPanningAllowed(_this, event)) return;
			event.preventDefault();
			event.stopPropagation();
			var _a = _this.state, positionX = _a.positionX, positionY = _a.positionY;
			var mouseX = positionX - event.deltaX;
			var mouseY = positionY - event.deltaY;
			var newPositionX = lockAxisX ? positionX : mouseX;
			var newPositionY = lockAxisY ? positionY : mouseY;
			var _b = _this.setup.autoAlignment, sizeX = _b.sizeX, sizeY = _b.sizeY;
			var paddingValueX = getPaddingValue(_this, sizeX);
			var paddingValueY = getPaddingValue(_this, sizeY);
			if (newPositionX === positionX && newPositionY === positionY) return;
			handleWheelPanningStart(_this, event);
			handleNewPosition(_this, newPositionX, newPositionY, paddingValueX, paddingValueY);
			handleCallback(getContext(_this), event, onPanning);
			handleWheelPanningStop(_this, event);
		};
		this.onPanningStart = function(event) {
			var disabled = _this.setup.disabled;
			var onPanningStart = _this.props.onPanningStart;
			if (disabled) return;
			_this.syncModifierKeys(event);
			if (!isPanningStartAllowed(_this, event)) return;
			if (!_this.isPressingKeys(_this.setup.panning.activationKeys)) return;
			if (event.button === 0 && !_this.setup.panning.allowLeftClickPan) return;
			if (event.button === 1 && !_this.setup.panning.allowMiddleClickPan) return;
			if (event.button === 2 && !_this.setup.panning.allowRightClickPan) return;
			event.preventDefault();
			event.stopPropagation();
			handleCancelAnimation(_this);
			handlePanningStart(_this, event);
			handleCallback(getContext(_this), event, onPanningStart);
		};
		this.onPanning = function(event) {
			var disabled = _this.setup.disabled;
			var onPanning = _this.props.onPanning;
			if (disabled) return;
			_this.syncModifierKeys(event);
			if (_this.isPanning && event.buttons === 0) {
				_this.clearPanning(event);
				return;
			}
			if (!isPanningAllowed(_this)) return;
			if (!_this.isPressingKeys(_this.setup.panning.activationKeys)) return;
			event.preventDefault();
			event.stopPropagation();
			handlePanning(_this, event.clientX, event.clientY, DeviceType.MOUSE);
			handleCallback(getContext(_this), event, onPanning);
		};
		this.onPanningStop = function(event) {
			var velocityDisabled = _this.setup.panning.velocityDisabled;
			var onPanningStop = _this.props.onPanningStop;
			if (_this.isPanning) {
				handlePanningEnd(_this, velocityDisabled);
				handleCallback(getContext(_this), event, onPanningStop);
			}
		};
		this.onPinchStart = function(event) {
			var disabled = _this.setup.disabled;
			var onPinchStart = _this.props.onPinchStart;
			if (disabled) return;
			if (!isPinchStartAllowed(_this, event)) return;
			handlePinchStart(_this, event);
			handleCancelAnimation(_this);
			handleCallback(getContext(_this), event, onPinchStart);
		};
		this.onPinch = function(event) {
			var disabled = _this.setup.disabled;
			var onPinch = _this.props.onPinch;
			if (disabled) return;
			if (!isPinchAllowed(_this)) return;
			event.preventDefault();
			event.stopPropagation();
			handlePinchZoom(_this, event);
			handleCallback(getContext(_this), event, onPinch);
		};
		this.onPinchStop = function(event) {
			var onPinchStop = _this.props.onPinchStop;
			if (_this.pinchStartScale) {
				handlePinchStop(_this);
				handleCallback(getContext(_this), event, onPinchStop);
			}
		};
		this.onTouchPanningStart = function(event) {
			var _a = _this.setup, disabled = _a.disabled, doubleClick = _a.doubleClick;
			var onPanningStart = _this.props.onPanningStart;
			if (disabled) return;
			var isDoubleTapAllowed = !(doubleClick === null || doubleClick === void 0 ? void 0 : doubleClick.disabled);
			var isDoubleTap = _this.lastTouch && +/* @__PURE__ */ new Date() - _this.lastTouch < 200;
			if (isDoubleTapAllowed && isDoubleTap && event.touches.length === 1) _this.onDoubleClick(event);
			else {
				_this.lastTouch = +/* @__PURE__ */ new Date();
				handleCancelAnimation(_this);
				var touches = event.touches;
				var isPanningAction = touches.length === 1;
				var isPinchAction = touches.length === 2;
				var isAllowed = isPanningStartAllowed(_this, event);
				if (isPanningAction) {
					if (!isAllowed) return;
					handleCancelAnimation(_this);
					handlePanningStart(_this, event);
					handleCallback(getContext(_this), event, onPanningStart);
				}
				if (isPinchAction) _this.onPinchStart(event);
			}
		};
		this.onTouchPanning = function(event) {
			var disabled = _this.setup.disabled;
			var onPanning = _this.props.onPanning;
			if (_this.isPanning && event.touches.length === 1) {
				if (disabled) return;
				if (!isPanningAllowed(_this)) return;
				if (event.cancelable) event.preventDefault();
				event.stopPropagation();
				var touch = event.touches[0];
				handlePanning(_this, touch.clientX, touch.clientY, DeviceType.TOUCH);
				handleCallback(getContext(_this), event, onPanning);
			} else if (event.touches.length > 1) _this.onPinch(event);
		};
		this.onTouchPanningStop = function(event) {
			_this.onPanningStop(event);
			_this.onPinchStop(event);
		};
		this.onDoubleClick = function(event) {
			if (_this.setup.disabled) return;
			if (!isDoubleClickAllowed(_this, event)) return;
			handleDoubleClick(_this, event);
		};
		this.clearPanning = function(event) {
			if (_this.isPanning) _this.onPanningStop(event);
		};
		this.handleWindowBlur = function() {
			_this.pressedKeys = {};
			if (_this.isPanning) {
				_this.isPanning = false;
				_this.startCoords = null;
			}
		};
		this.syncModifierKeys = function(event) {
			var ctrlKey = event.ctrlKey, metaKey = event.metaKey, shiftKey = event.shiftKey, altKey = event.altKey;
			if (typeof ctrlKey === "boolean") _this.pressedKeys.Control = ctrlKey;
			if (typeof metaKey === "boolean") _this.pressedKeys.Meta = metaKey;
			if (typeof shiftKey === "boolean") _this.pressedKeys.Shift = shiftKey;
			if (typeof altKey === "boolean") _this.pressedKeys.Alt = altKey;
		};
		this.setKeyPressed = function(e) {
			_this.pressedKeys[e.key] = true;
		};
		this.setKeyUnPressed = function(e) {
			_this.pressedKeys[e.key] = false;
		};
		this.isPressingKeys = function(keys) {
			if (typeof keys === "function") return keys(Object.entries(_this.pressedKeys).filter(function(_a) {
				return _a[1];
			}).map(function(_a) {
				return _a[0];
			}));
			if (!keys.length) return true;
			return Boolean(keys.every(function(key) {
				return _this.pressedKeys[key];
			}));
		};
		this.setCenter = function() {
			if (_this.wrapperComponent && _this.contentComponent) {
				var targetState = getCenterPosition(_this.state.scale, _this.wrapperComponent, _this.contentComponent);
				_this.setState(targetState.scale, targetState.positionX, targetState.positionY);
			}
		};
		this.handleTransformStyles = function(x, y, scale) {
			if (_this.props.customTransform) return _this.props.customTransform(x, y, scale);
			return getTransformStyles(x, y, scale);
		};
		this.getContext = function() {
			return getContext(_this);
		};
		this.applyTransformation = function() {
			if (!_this.mounted || !_this.contentComponent) return;
			var _a = _this.state, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
			var transform = _this.handleTransformStyles(positionX, positionY, scale);
			if (!_this.props.detached) _this.contentComponent.style.transform = transform;
			_this.onTransformCallbacks.forEach(function(callback) {
				return callback({
					scale,
					positionX,
					positionY,
					previousScale: _this.state.previousScale,
					ref: getContext(_this)
				});
			});
		};
		this.setState = function(scale, positionX, positionY) {
			var onTransform = _this.props.onTransform;
			if (!Number.isNaN(scale) && !Number.isNaN(positionX) && !Number.isNaN(positionY)) {
				var safeScale = Math.max(scale, 1e-7);
				if (safeScale !== _this.state.scale) {
					_this.state.previousScale = _this.state.scale;
					_this.state.scale = safeScale;
				}
				_this.state.positionX = positionX;
				_this.state.positionY = positionY;
				_this.applyTransformation();
				var ctx_1 = getContext(_this);
				_this.onChangeCallbacks.forEach(function(callback) {
					return callback(ctx_1);
				});
				handleCallback(ctx_1, {
					scale: _this.state.scale,
					positionX,
					positionY
				}, onTransform);
			} else console.error("Detected NaN set state values");
		};
		/**
		* Hooks
		*/
		this.onTransform = function(callback) {
			if (!_this.onTransformCallbacks.has(callback)) _this.onTransformCallbacks.add(callback);
			return function() {
				_this.onTransformCallbacks.delete(callback);
			};
		};
		this.onChange = function(callback) {
			if (!_this.onChangeCallbacks.has(callback)) _this.onChangeCallbacks.add(callback);
			return function() {
				_this.onChangeCallbacks.delete(callback);
			};
		};
		this.onInit = function(callback) {
			if (!_this.onInitCallbacks.has(callback)) _this.onInitCallbacks.add(callback);
			return function() {
				_this.onInitCallbacks.delete(callback);
			};
		};
		/**
		* Initialization
		*/
		this.init = function(wrapperComponent, contentComponent) {
			_this.cleanupWindowEvents();
			_this.wrapperComponent = wrapperComponent;
			_this.contentComponent = contentComponent;
			handleCalculateBounds(_this, _this.state.scale);
			_this.handleInitializeWrapperEvents(wrapperComponent);
			_this.handleInitialize(contentComponent);
			_this.initializeWindowEvents();
			_this.isInitialized = true;
			var ctx = getContext(_this);
			handleCallback(ctx, void 0, _this.props.onInit);
			assignRef(_this.props.ref, ctx);
		};
		this.props = props;
		this.setup = createSetup(this.props);
		this.state = createState(this.props);
	}
	return ZoomPanPinch;
}();
var Context = react.default.createContext(null);
var getContent = function(children, ctx) {
	if (typeof children === "function") return children(ctx);
	return children;
};
var TransformWrapper = react.default.forwardRef(function(props, ref) {
	var instance = (0, react.useRef)(new ZoomPanPinch(props)).current;
	var content = getContent(props.children, getControls(instance));
	(0, react.useImperativeHandle)(ref, function() {
		return getControls(instance);
	}, [instance]);
	(0, react.useEffect)(function() {
		instance.update(props);
	}, [instance, props]);
	return (0, react_jsx_runtime.jsx)(Context.Provider, __assign({ value: instance }, { children: content }));
});
react.default.forwardRef(function(props, ref) {
	var localRef = (0, react.useRef)(null);
	var instance = (0, react.useContext)(Context);
	(0, react.useEffect)(function() {
		return instance.onChange(function(ctx) {
			if (localRef.current) {
				var positionX = 0;
				var positionY = 0;
				localRef.current.style.transform = instance.handleTransformStyles(positionX, positionY, 1 / ctx.instance.state.scale);
			}
		});
	}, [instance]);
	return (0, react_jsx_runtime.jsx)("div", __assign({}, props, { ref: mergeRefs([localRef, ref]) }));
});
function styleInject(css, ref) {
	if (ref === void 0) ref = {};
	var insertAt = ref.insertAt;
	if (!css || typeof document === "undefined") return;
	var head = document.head || document.getElementsByTagName("head")[0];
	var style = document.createElement("style");
	style.type = "text/css";
	if (insertAt === "top") if (head.firstChild) head.insertBefore(style, head.firstChild);
	else head.appendChild(style);
	else head.appendChild(style);
	if (style.styleSheet) style.styleSheet.cssText = css;
	else style.appendChild(document.createTextNode(css));
}
var css_248z = ".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n  transform: translate3d(0, 0, 0);\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n.transform-component-module_infiniteGrid__Z-aP3 {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-image: radial-gradient(\n    circle,\n    rgba(0, 0, 0, 0.12) 1px,\n    transparent 1px\n  );\n  background-size: 20px 20px;\n  background-position: 0 0;\n}\n";
var styles = {
	"wrapper": "transform-component-module_wrapper__SPB86",
	"content": "transform-component-module_content__FBWxo",
	"infiniteGrid": "transform-component-module_infiniteGrid__Z-aP3"
};
styleInject(css_248z);
var TransformComponent = function(_a) {
	var children = _a.children, _b = _a.wrapperClass, wrapperClass = _b === void 0 ? "" : _b, _c = _a.contentClass, contentClass = _c === void 0 ? "" : _c, wrapperStyle = _a.wrapperStyle, contentStyle = _a.contentStyle, _d = _a.wrapperProps, wrapperProps = _d === void 0 ? {} : _d, _e = _a.contentProps, contentProps = _e === void 0 ? {} : _e, _f = _a.infinite, infinite = _f === void 0 ? false : _f;
	var instance = (0, react.useContext)(Context);
	var init = instance.init, cleanupWindowEvents = instance.cleanupWindowEvents;
	var wrapperRef = (0, react.useRef)(null);
	var contentRef = (0, react.useRef)(null);
	var gridRef = (0, react.useRef)(null);
	(0, react.useEffect)(function() {
		var wrapper = wrapperRef.current;
		var content = contentRef.current;
		if (wrapper !== null && content !== null && init) init === null || init === void 0 || init(wrapper, content);
		return function() {
			cleanupWindowEvents === null || cleanupWindowEvents === void 0 || cleanupWindowEvents();
		};
	}, []);
	(0, react.useEffect)(function() {
		if (!infinite) return;
		var grid = gridRef.current;
		if (!grid) return;
		var sync = function() {
			var _a = instance.state, positionX = _a.positionX, positionY = _a.positionY;
			grid.style.backgroundPosition = "".concat(positionX, "px ").concat(positionY, "px");
		};
		sync();
		return instance.onChange(sync);
	}, [infinite, instance]);
	return (0, react_jsx_runtime.jsxs)("div", __assign({}, wrapperProps, {
		ref: wrapperRef,
		className: "".concat(baseClasses.wrapperClass, " ").concat(styles.wrapper, " ").concat(wrapperClass),
		style: wrapperStyle
	}, { children: [infinite && (0, react_jsx_runtime.jsx)("div", {
		ref: gridRef,
		className: styles.infiniteGrid,
		"aria-hidden": true
	}), (0, react_jsx_runtime.jsx)("div", __assign({}, contentProps, {
		ref: contentRef,
		className: "".concat(baseClasses.contentClass, " ").concat(styles.content, " ").concat(contentClass),
		style: __assign(__assign({}, contentStyle), { transform: getTransformStyles(instance.state.positionX, instance.state.positionY, instance.state.scale) })
	}, { children }))] }));
};
/**
* Compute the overlap area between two axis-aligned rectangles.
* Returns 0 when the rectangles do not intersect.
*/
function getOverlapArea(a, b) {
	return Math.max(0, Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x)) * Math.max(0, Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y));
}
/**
* Determine whether an element's content-space bounding box is visible
* in the current viewport, accounting for transform, margin, and threshold.
*/
function isElementVisible(opts) {
	var elementX = opts.elementX, elementY = opts.elementY, elementWidth = opts.elementWidth, elementHeight = opts.elementHeight, scale = opts.scale, positionX = opts.positionX, positionY = opts.positionY, viewportWidth = opts.viewportWidth, viewportHeight = opts.viewportHeight, _a = opts.margin, margin = _a === void 0 ? 0 : _a, _b = opts.threshold, threshold = _b === void 0 ? 0 : _b;
	var viewport = {
		x: -margin,
		y: -margin,
		width: viewportWidth + 2 * margin,
		height: viewportHeight + 2 * margin
	};
	var element = {
		x: elementX * scale + positionX,
		y: elementY * scale + positionY,
		width: elementWidth * scale,
		height: elementHeight * scale
	};
	if (threshold <= 0) {
		var intersectsX = element.x < viewport.x + viewport.width && element.x + element.width > viewport.x;
		var intersectsY = element.y < viewport.y + viewport.height && element.y + element.height > viewport.y;
		return intersectsX && intersectsY;
	}
	var elementArea = element.width * element.height;
	if (elementArea <= 0) return false;
	return getOverlapArea(viewport, element) / elementArea >= threshold;
}
react.default.forwardRef(function(_a, ref) {
	var x = _a.x, y = _a.y, width = _a.width, height = _a.height, _b = _a.margin, margin = _b === void 0 ? 0 : _b, _c = _a.threshold, threshold = _c === void 0 ? 0 : _c, _d = _a.placeholder, placeholder = _d === void 0 ? null : _d, onShow = _a.onShow, onHide = _a.onHide, children = _a.children, className = _a.className, style = _a.style;
	var instance = (0, react.useContext)(Context);
	var _e = (0, react.useState)(false), visible = _e[0], setVisible = _e[1];
	var visibleRef = (0, react.useRef)(false);
	var onShowRef = (0, react.useRef)(onShow);
	var onHideRef = (0, react.useRef)(onHide);
	onShowRef.current = onShow;
	onHideRef.current = onHide;
	(0, react.useEffect)(function() {
		var check = function() {
			var _a, _b;
			var wrapper = instance.wrapperComponent;
			if (!wrapper) return;
			var nowVisible = isElementVisible({
				elementX: x,
				elementY: y,
				elementWidth: width,
				elementHeight: height,
				scale: instance.state.scale,
				positionX: instance.state.positionX,
				positionY: instance.state.positionY,
				viewportWidth: wrapper.offsetWidth,
				viewportHeight: wrapper.offsetHeight,
				margin,
				threshold
			});
			if (nowVisible !== visibleRef.current) {
				visibleRef.current = nowVisible;
				setVisible(nowVisible);
				if (nowVisible) (_a = onShowRef.current) === null || _a === void 0 || _a.call(onShowRef);
				else (_b = onHideRef.current) === null || _b === void 0 || _b.call(onHideRef);
			}
		};
		check();
		var unsubChange = instance.onChange(check);
		var unsubInit;
		if (!instance.wrapperComponent) unsubInit = instance.onInit(function() {
			return check();
		});
		return function() {
			unsubChange();
			unsubInit === null || unsubInit === void 0 || unsubInit();
		};
	}, [
		instance,
		x,
		y,
		width,
		height,
		margin,
		threshold
	]);
	if (!visible) return placeholder ? (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: placeholder }) : null;
	return (0, react_jsx_runtime.jsx)("div", __assign({
		ref,
		className,
		style
	}, { children }));
});
//#endregion
//#region src/activities/HeatmapActivity/HeatmapActivity.tsx
/**
* Actividad de Mapa de Calor.
*
* El alumno puede hacer zoom en la imagen y luego colocar un pin
* en la zona que considera correcta.
*
* Migrado y generalizado desde Actimagen/frontend.
*
* @example
* <HeatmapActivity
*   slide={currentSlide}
*   onNext={(score, max, data, correct) => handleNext(score, max, data, correct)}
*   baseUrl="https://api.mi-app.com"
* />
*/
function HeatmapActivity({ slide, onNext, baseUrl = "" }) {
	const [pin, setPin] = (0, react$1.useState)(null);
	const [mode, setMode] = (0, react$1.useState)("zoom");
	const [showResults, setShowResults] = (0, react$1.useState)(false);
	const imageRef = (0, react$1.useRef)(null);
	(0, react$1.useEffect)(() => {
		setPin(null);
		setMode("zoom");
		setShowResults(false);
	}, [slide]);
	const handleImageClick = (e) => {
		if (!imageRef.current || showResults) return;
		const rect = imageRef.current.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width * 100;
		const y = (e.clientY - rect.top) / rect.height * 100;
		setPin({
			x,
			y
		});
	};
	const targetRadius = slide.question.radius ?? 10;
	const isCorrect = !!(showResults && pin && slide.question.correct_x !== null && slide.question.correct_y !== null && isPinCorrect(pin, {
		x: slide.question.correct_x,
		y: slide.question.correct_y,
		radius: targetRadius
	}));
	const imageUrl = resolveImageUrl(slide.question.image_url, baseUrl);
	const panelStyle = {
		background: "var(--magrana-glass-bg, rgba(40,40,40,0.75))",
		backdropFilter: "blur(16px)",
		border: "1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))",
		borderRadius: "20px",
		boxShadow: "var(--magrana-shadow-card, 0 10px 30px rgba(0,0,0,0.4))",
		padding: "1rem",
		width: "100%",
		maxWidth: "800px"
	};
	const modeButtonStyle = (active, activeColor) => ({
		padding: "0.5rem 1rem",
		borderRadius: "8px",
		border: "none",
		fontWeight: 600,
		cursor: "pointer",
		transition: "all 0.2s ease",
		background: active ? activeColor : "var(--magrana-glass-bg, rgba(40,40,40,0.75))",
		color: active ? "white" : "var(--magrana-text, #F8FAFC)",
		boxShadow: active ? `0 4px 12px ${activeColor}55` : "none"
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		style: {
			display: "flex",
			flexDirection: "column",
			gap: "1.5rem",
			alignItems: "center"
		},
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			style: panelStyle,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					gap: "1rem",
					marginBottom: "1rem",
					justifyContent: "center"
				},
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					onClick: () => setMode("zoom"),
					style: modeButtonStyle(mode === "zoom", "#8b5cf6"),
					children: "🔍 Zoom"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					onClick: () => setMode("pin"),
					style: modeButtonStyle(mode === "pin", "#EF4444"),
					children: "📍 Poner Pin"
				})]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				style: {
					position: "relative",
					width: "100%",
					background: "#111",
					borderRadius: "12px",
					overflow: "hidden",
					height: "60vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				},
				children: mode === "zoom" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TransformWrapper, {
					minScale: 1,
					maxScale: 6,
					centerZoomedOut: true,
					wheel: { step: .1 },
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(TransformComponent, {
						wrapperStyle: {
							width: "100%",
							height: "100%"
						},
						contentStyle: {
							width: "100%",
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						},
						children: imageUrl && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
							src: imageUrl,
							alt: "Mapa de calor",
							style: {
								maxHeight: "100%",
								maxWidth: "100%",
								objectFit: "contain"
							},
							draggable: false
						})
					})
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					style: {
						position: "relative",
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					},
					children: [
						imageUrl && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
							ref: imageRef,
							src: imageUrl,
							alt: "Mapa de calor — modo pin",
							onClick: handleImageClick,
							style: {
								maxHeight: "100%",
								maxWidth: "100%",
								objectFit: "contain",
								cursor: showResults ? "default" : "crosshair"
							},
							draggable: false
						}),
						pin && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { style: {
							position: "absolute",
							left: `${pin.x}%`,
							top: `${pin.y}%`,
							transform: "translate(-50%, -50%)",
							width: "20px",
							height: "20px",
							background: showResults ? isCorrect ? "#10B981" : "#EF4444" : "rgba(255,255,255,0.8)",
							borderRadius: "50%",
							border: "3px solid white",
							boxShadow: "0 0 0 2px rgba(0,0,0,0.5)",
							pointerEvents: "none",
							transition: "background 0.3s ease"
						} }),
						showResults && slide.question.correct_x !== null && slide.question.correct_y !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { style: {
							position: "absolute",
							left: `${slide.question.correct_x}%`,
							top: `${slide.question.correct_y}%`,
							transform: "translate(-50%, -50%)",
							width: `${targetRadius * 2}%`,
							height: `${targetRadius * 2}%`,
							aspectRatio: "1 / 1",
							borderRadius: "50%",
							border: "3px dashed #10B981",
							backgroundColor: "rgba(16, 185, 129, 0.25)",
							boxShadow: "0 0 15px rgba(16, 185, 129, 0.4)",
							pointerEvents: "none"
						} })
					]
				})
			})]
		}), !showResults ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
			onClick: () => setShowResults(true),
			style: {
				padding: "1rem 3rem",
				fontSize: "1.2rem",
				borderRadius: "12px",
				border: "none",
				background: "var(--magrana-primary, #FB7185)",
				color: "white",
				fontWeight: 700,
				cursor: "pointer",
				boxShadow: "0 4px 15px rgba(251,113,133,0.35)",
				transition: "all 0.2s ease"
			},
			children: "Comprobar / Saltar"
		}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			style: {
				padding: "1.5rem",
				textAlign: "center",
				background: isCorrect ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)",
				border: `1px solid ${isCorrect ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}`,
				borderRadius: "20px",
				backdropFilter: "blur(16px)",
				maxWidth: "500px",
				width: "100%"
			},
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
				style: {
					color: isCorrect ? "#10B981" : "#EF4444",
					marginBottom: "1rem"
				},
				children: isCorrect ? "¡Correcto! ✅" : "Incorrecto ❌"
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				onClick: () => onNext(isCorrect ? 1 : 0, 1, { pin }, isCorrect),
				style: {
					padding: "0.75rem 2rem",
					borderRadius: "12px",
					border: "none",
					background: "var(--magrana-primary, #FB7185)",
					color: "white",
					fontWeight: 700,
					fontSize: "1rem",
					cursor: "pointer"
				},
				children: "Siguiente Diapositiva ➡️"
			})]
		})]
	});
}
//#endregion
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.DragDropActivity = DragDropActivity;
exports.DraggableItem = DraggableItem;
exports.DroppableZone = DroppableZone;
exports.HeatmapActivity = HeatmapActivity;
exports.isPinCorrect = isPinCorrect;
exports.resolveImageUrl = resolveImageUrl;
exports.shuffleArray = shuffleArray;

//# sourceMappingURL=index.cjs.map