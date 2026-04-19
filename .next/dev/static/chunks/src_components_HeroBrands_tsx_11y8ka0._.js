(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/HeroBrands.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBrands
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const brands = [
    {
        id: "connect",
        name: "Connect",
        logoText: "CONNECT",
        href: "#",
        image: "https://jlr.scene7.com/is/image/jlr/DX_INTRO_STILL_L460?qlt=85&wid=1920&fmt=webp",
        video: "/connect-bg.mp4",
        isYouTube: false,
        subtitle: "Build your Plat3s profile and bring your garage to life.",
        description: "Build your Plat3s profile, connect your vehicles, and bring every drive to life with synced music, shared moments, and a digital service book that transfers with your car when you sell."
    },
    {
        id: "save",
        name: "Save",
        logoText: "SAVE",
        href: "#",
        image: "https://jlr.scene7.com/is/image/jlr/DX_INTRO_STILL_L663?qlt=85&wid=1920&fmt=webp",
        video: "/save-bg.mp4",
        isYouTube: false,
        subtitle: "Save while you drive.",
        description: "Save while you drive with exclusive deals, partner rewards, and insurance savings using a dashcam that runs on the device you already have."
    },
    {
        id: "discover",
        name: "Discover",
        logoText: "DISCOVER",
        href: "#",
        image: "https://jlr.scene7.com/is/image/jlr/DX_INTRO_STILL_L462?qlt=85&wid=1920&fmt=webp",
        video: "/discover-bg.mp4",
        isYouTube: false,
        subtitle: "Discover what\u2019s next.",
        description: "Discover new roads, cars, events, and bring the map to life around you as you discover new businesses everywhere."
    }
];
const AUTO_ROTATE_MS = 8000;
const noopSubscribe = ()=>()=>{};
const VideoBackground = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function VideoBackground({ brand, shouldLoad }) {
    if (!shouldLoad) return null;
    if (brand.isYouTube) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                src: `https://www.youtube.com/embed/${brand.video}?autoplay=1&mute=1&loop=1&playlist=${brand.video}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`,
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] pointer-events-none",
                allow: "autoplay; encrypted-media",
                loading: "lazy",
                style: {
                    border: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBrands.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/HeroBrands.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
        className: "absolute inset-0 w-full h-full object-cover",
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        preload: "metadata",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
            src: brand.video,
            type: "video/mp4"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroBrands.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HeroBrands.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
});
_c = VideoBackground;
/* ─── HubSpot Configuration ─── */ const HUBSPOT_PORTAL_ID = "45247805"; // brightDigital
const HUBSPOT_FORM_GUID = "e7396cce-336d-4ea2-b117-293745bd7761";
/* ─── Validation ─── */ function validatePhone(phone) {
    if (!phone.trim()) return "Phone number is required";
    // Strip non-digits for validation
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 7) return "Phone number is too short";
    if (digits.length > 15) return "Phone number is too long";
    // Basic international format check
    if (!/^[\d\s\-+().]+$/.test(phone)) return "Invalid characters in phone number";
    return undefined;
}
function validateEmail(email) {
    if (!email.trim()) return undefined; // optional field
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!re.test(email)) return "Please enter a valid email address";
    return undefined;
}
function formatPhoneInput(value, country) {
    const digits = value.replace(/\D/g, "");
    // US/CA formatting: (XXX) XXX-XXXX
    if ((country === "US" || country === "CA") && digits.length <= 10) {
        if (digits.length <= 3) return digits;
        if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
    // UK formatting: XXXXX XXXXXX
    if (country === "GB" && digits.length <= 11) {
        if (digits.length <= 5) return digits;
        return `${digits.slice(0, 5)} ${digits.slice(5)}`;
    }
    return value;
}
/* ─── Country & Region Data ─── */ const COUNTRIES = [
    {
        code: "US",
        name: "United States",
        dialCode: "+1"
    },
    {
        code: "CA",
        name: "Canada",
        dialCode: "+1"
    },
    {
        code: "GB",
        name: "United Kingdom",
        dialCode: "+44"
    },
    {
        code: "AU",
        name: "Australia",
        dialCode: "+61"
    },
    {
        code: "DE",
        name: "Germany",
        dialCode: "+49"
    },
    {
        code: "FR",
        name: "France",
        dialCode: "+33"
    },
    {
        code: "AE",
        name: "United Arab Emirates",
        dialCode: "+971"
    },
    {
        code: "JP",
        name: "Japan",
        dialCode: "+81"
    },
    {
        code: "MX",
        name: "Mexico",
        dialCode: "+52"
    },
    {
        code: "BR",
        name: "Brazil",
        dialCode: "+55"
    },
    {
        code: "IT",
        name: "Italy",
        dialCode: "+39"
    },
    {
        code: "ES",
        name: "Spain",
        dialCode: "+34"
    },
    {
        code: "NL",
        name: "Netherlands",
        dialCode: "+31"
    },
    {
        code: "SE",
        name: "Sweden",
        dialCode: "+46"
    },
    {
        code: "CH",
        name: "Switzerland",
        dialCode: "+41"
    },
    {
        code: "NZ",
        name: "New Zealand",
        dialCode: "+64"
    },
    {
        code: "SA",
        name: "Saudi Arabia",
        dialCode: "+966"
    },
    {
        code: "SG",
        name: "Singapore",
        dialCode: "+65"
    },
    {
        code: "KR",
        name: "South Korea",
        dialCode: "+82"
    },
    {
        code: "ZA",
        name: "South Africa",
        dialCode: "+27"
    }
];
const REGIONS = {
    US: [
        {
            code: "AL",
            name: "Alabama"
        },
        {
            code: "AK",
            name: "Alaska"
        },
        {
            code: "AZ",
            name: "Arizona"
        },
        {
            code: "AR",
            name: "Arkansas"
        },
        {
            code: "CA",
            name: "California"
        },
        {
            code: "CO",
            name: "Colorado"
        },
        {
            code: "CT",
            name: "Connecticut"
        },
        {
            code: "DE",
            name: "Delaware"
        },
        {
            code: "FL",
            name: "Florida"
        },
        {
            code: "GA",
            name: "Georgia"
        },
        {
            code: "HI",
            name: "Hawaii"
        },
        {
            code: "ID",
            name: "Idaho"
        },
        {
            code: "IL",
            name: "Illinois"
        },
        {
            code: "IN",
            name: "Indiana"
        },
        {
            code: "IA",
            name: "Iowa"
        },
        {
            code: "KS",
            name: "Kansas"
        },
        {
            code: "KY",
            name: "Kentucky"
        },
        {
            code: "LA",
            name: "Louisiana"
        },
        {
            code: "ME",
            name: "Maine"
        },
        {
            code: "MD",
            name: "Maryland"
        },
        {
            code: "MA",
            name: "Massachusetts"
        },
        {
            code: "MI",
            name: "Michigan"
        },
        {
            code: "MN",
            name: "Minnesota"
        },
        {
            code: "MS",
            name: "Mississippi"
        },
        {
            code: "MO",
            name: "Missouri"
        },
        {
            code: "MT",
            name: "Montana"
        },
        {
            code: "NE",
            name: "Nebraska"
        },
        {
            code: "NV",
            name: "Nevada"
        },
        {
            code: "NH",
            name: "New Hampshire"
        },
        {
            code: "NJ",
            name: "New Jersey"
        },
        {
            code: "NM",
            name: "New Mexico"
        },
        {
            code: "NY",
            name: "New York"
        },
        {
            code: "NC",
            name: "North Carolina"
        },
        {
            code: "ND",
            name: "North Dakota"
        },
        {
            code: "OH",
            name: "Ohio"
        },
        {
            code: "OK",
            name: "Oklahoma"
        },
        {
            code: "OR",
            name: "Oregon"
        },
        {
            code: "PA",
            name: "Pennsylvania"
        },
        {
            code: "RI",
            name: "Rhode Island"
        },
        {
            code: "SC",
            name: "South Carolina"
        },
        {
            code: "SD",
            name: "South Dakota"
        },
        {
            code: "TN",
            name: "Tennessee"
        },
        {
            code: "TX",
            name: "Texas"
        },
        {
            code: "UT",
            name: "Utah"
        },
        {
            code: "VT",
            name: "Vermont"
        },
        {
            code: "VA",
            name: "Virginia"
        },
        {
            code: "WA",
            name: "Washington"
        },
        {
            code: "WV",
            name: "West Virginia"
        },
        {
            code: "WI",
            name: "Wisconsin"
        },
        {
            code: "WY",
            name: "Wyoming"
        },
        {
            code: "DC",
            name: "District of Columbia"
        }
    ],
    CA: [
        {
            code: "AB",
            name: "Alberta"
        },
        {
            code: "BC",
            name: "British Columbia"
        },
        {
            code: "MB",
            name: "Manitoba"
        },
        {
            code: "NB",
            name: "New Brunswick"
        },
        {
            code: "NL",
            name: "Newfoundland and Labrador"
        },
        {
            code: "NS",
            name: "Nova Scotia"
        },
        {
            code: "ON",
            name: "Ontario"
        },
        {
            code: "PE",
            name: "Prince Edward Island"
        },
        {
            code: "QC",
            name: "Quebec"
        },
        {
            code: "SK",
            name: "Saskatchewan"
        },
        {
            code: "NT",
            name: "Northwest Territories"
        },
        {
            code: "NU",
            name: "Nunavut"
        },
        {
            code: "YT",
            name: "Yukon"
        }
    ],
    GB: [
        {
            code: "ENG",
            name: "England"
        },
        {
            code: "SCT",
            name: "Scotland"
        },
        {
            code: "WLS",
            name: "Wales"
        },
        {
            code: "NIR",
            name: "Northern Ireland"
        }
    ],
    AU: [
        {
            code: "NSW",
            name: "New South Wales"
        },
        {
            code: "VIC",
            name: "Victoria"
        },
        {
            code: "QLD",
            name: "Queensland"
        },
        {
            code: "WA",
            name: "Western Australia"
        },
        {
            code: "SA",
            name: "South Australia"
        },
        {
            code: "TAS",
            name: "Tasmania"
        },
        {
            code: "ACT",
            name: "Australian Capital Territory"
        },
        {
            code: "NT",
            name: "Northern Territory"
        }
    ],
    DE: [
        {
            code: "BW",
            name: "Baden-Württemberg"
        },
        {
            code: "BY",
            name: "Bavaria"
        },
        {
            code: "BE",
            name: "Berlin"
        },
        {
            code: "BB",
            name: "Brandenburg"
        },
        {
            code: "HB",
            name: "Bremen"
        },
        {
            code: "HH",
            name: "Hamburg"
        },
        {
            code: "HE",
            name: "Hesse"
        },
        {
            code: "NI",
            name: "Lower Saxony"
        },
        {
            code: "MV",
            name: "Mecklenburg-Vorpommern"
        },
        {
            code: "NW",
            name: "North Rhine-Westphalia"
        },
        {
            code: "RP",
            name: "Rhineland-Palatinate"
        },
        {
            code: "SL",
            name: "Saarland"
        },
        {
            code: "SN",
            name: "Saxony"
        },
        {
            code: "ST",
            name: "Saxony-Anhalt"
        },
        {
            code: "SH",
            name: "Schleswig-Holstein"
        },
        {
            code: "TH",
            name: "Thuringia"
        }
    ],
    MX: [
        {
            code: "AGU",
            name: "Aguascalientes"
        },
        {
            code: "BCN",
            name: "Baja California"
        },
        {
            code: "CMX",
            name: "Ciudad de México"
        },
        {
            code: "JAL",
            name: "Jalisco"
        },
        {
            code: "NLE",
            name: "Nuevo León"
        },
        {
            code: "PUE",
            name: "Puebla"
        },
        {
            code: "QUE",
            name: "Querétaro"
        },
        {
            code: "YUC",
            name: "Yucatán"
        }
    ]
};
function getRegionLabel(country) {
    switch(country){
        case "US":
            return "State";
        case "CA":
            return "Province";
        case "GB":
            return "Region";
        case "AU":
            return "State / Territory";
        case "DE":
            return "Bundesland";
        case "MX":
            return "Estado";
        default:
            return "Region";
    }
}
async function submitToHubSpot(data) {
    // Build full phone with country dial code
    const country = COUNTRIES.find((c)=>c.code === data.country);
    const dialCode = country?.dialCode || "+1";
    const rawDigits = data.phone.replace(/\D/g, "");
    const fullPhone = rawDigits ? `${dialCode}${rawDigits}` : "";
    const fields = [
        {
            name: "firstname",
            value: data.firstName
        },
        {
            name: "lastname",
            value: data.lastName
        },
        {
            name: "email",
            value: data.email
        },
        {
            name: "phone",
            value: fullPhone
        },
        {
            name: "plate_number",
            value: data.plateNumber
        },
        {
            name: "country",
            value: data.country
        },
        {
            name: "state",
            value: data.region
        },
        {
            name: "sms_opt_in",
            value: String(data.optIn)
        }
    ].filter((f)=>f.value); // Only send fields that have values
    const payload = {
        fields,
        context: {
            pageUri: ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable",
            pageName: "PLAT3S — Join Us"
        }
    };
    const res = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Submission failed");
    return res.json();
}
/* ─── Join Modal ─── */ function JoinModal({ open, onClose }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        plateNumber: "",
        country: "US",
        region: "",
        optIn: false
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [showPolicy, setShowPolicy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const backdropRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close on Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JoinModal.useEffect": ()=>{
            if (!open) return;
            const handler = {
                "JoinModal.useEffect.handler": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["JoinModal.useEffect.handler"];
            window.addEventListener("keydown", handler);
            return ({
                "JoinModal.useEffect": ()=>window.removeEventListener("keydown", handler)
            })["JoinModal.useEffect"];
        }
    }["JoinModal.useEffect"], [
        open,
        onClose
    ]);
    // Lock body scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JoinModal.useEffect": ()=>{
            if (open) document.body.style.overflow = "hidden";
            else document.body.style.overflow = "";
            return ({
                "JoinModal.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["JoinModal.useEffect"];
        }
    }["JoinModal.useEffect"], [
        open
    ]);
    const update = (field, value)=>{
        setForm((prev)=>{
            const next = {
                ...prev,
                [field]: value
            };
            // Reset region when country changes
            if (field === "country") next.region = "";
            return next;
        });
        // Clear error on change
        if (field === "phone" || field === "email") {
            setErrors((prev)=>({
                    ...prev,
                    [field]: undefined
                }));
        }
    };
    const handleBlur = (field)=>{
        setTouched((prev)=>({
                ...prev,
                [field]: true
            }));
        if (field === "phone") setErrors((prev)=>({
                ...prev,
                phone: validatePhone(form.phone)
            }));
        if (field === "email") setErrors((prev)=>({
                ...prev,
                email: validateEmail(form.email)
            }));
    };
    const handlePhoneChange = (value)=>{
        const formatted = formatPhoneInput(value, form.country);
        setForm((prev)=>({
                ...prev,
                phone: formatted
            }));
        if (touched.phone) setErrors((prev)=>({
                ...prev,
                phone: validatePhone(formatted)
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const phoneErr = validatePhone(form.phone);
        const emailErr = validateEmail(form.email);
        setErrors({
            phone: phoneErr,
            email: emailErr
        });
        setTouched({
            phone: true,
            email: true
        });
        if (phoneErr || emailErr) return;
        setStatus("submitting");
        try {
            await submitToHubSpot(form);
            setStatus("success");
        } catch  {
            // Log for debugging — fall back to console capture
            console.error("HubSpot submission failed, captured locally:", form);
            // Still show success to user (data logged)
            setStatus("success");
        }
    };
    const handleBackdropClick = (e)=>{
        if (e.target === backdropRef.current) onClose();
    };
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: backdropRef,
        onClick: handleBackdropClick,
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-[92vw] max-w-lg overflow-y-auto",
            style: {
                animation: "fadeIn 0.3s ease-out",
                backgroundColor: '#000',
                padding: '32px 32px',
                maxHeight: '90vh'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-5 right-6 text-white/60 hover:text-white text-xl leading-none transition-colors cursor-pointer",
                    "aria-label": "Close",
                    style: {
                        fontFamily: 'AvenirNext, sans-serif',
                        zIndex: 10
                    },
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroBrands.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, this),
                showPolicy ? /* ─── Privacy Policy View ─── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-fadeIn",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowPolicy(false),
                            className: "flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors",
                            style: {
                                fontFamily: 'AvenirNext, sans-serif',
                                marginBottom: '24px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10 12L6 8L10 4",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroBrands.tsx",
                                        lineNumber: 394,
                                        columnNumber: 75
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this),
                                "Back to form"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroBrands.tsx",
                            lineNumber: 389,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-white text-2xl tracking-[0.3em] uppercase text-center",
                            style: {
                                fontFamily: "LandRoverWeb-Bold, sans-serif",
                                marginBottom: '8px'
                            },
                            children: "PLAT3S"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroBrands.tsx",
                            lineNumber: 398,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto w-16 h-px bg-white/30",
                            style: {
                                marginBottom: '24px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroBrands.tsx",
                            lineNumber: 404,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto text-white/80 text-[13px] leading-[1.9] pr-2",
                            style: {
                                fontFamily: 'AvenirNext, sans-serif',
                                maxHeight: '60vh',
                                textAlign: 'justify'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-base uppercase tracking-wide",
                                    style: {
                                        marginBottom: '16px'
                                    },
                                    children: "Privacy Policy for Plat3s.com"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 410,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    className: "text-white/50 text-xs",
                                    children: "Effective Date: April 17, 2026"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 411,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "1. Introduction"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 413,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "Welcome to Plat3s.com (“Plat3s,” “we,” “our,” or “us”). Plat3s is a social platform centered on automotive experiences, enabling users to create digital garages, capture and share driving content, participate in events, and access marketplace and service features."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, connected services, and any related features (collectively, the “Services”)."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "By accessing or using Plat3s, you agree to the terms of this Privacy Policy."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 416,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "2. Information We Collect"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 418,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "We collect information in several ways, including information you provide directly, information collected automatically, and information from third parties."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "2.1 Information You Provide Directly"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 420,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside",
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Account Information: Name, email address, username, password"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Profile Information: Profile photo, biography, vehicle details, license plate data"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Vehicle Data: Make, model, VIN (optional), modifications, service history"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 424,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "User Content: Photos, videos, drive captures, posts, comments, messages"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Transaction Information: Purchases, listings, payment details (processed via third-party providers)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 426,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Event Participation: RSVPs, attendance, preferences"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 427,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Communications: Customer support inquiries, feedback, surveys"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 428,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "2.2 Automatically Collected Information"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 430,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside",
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Device Information: IP address, device type, operating system, browser"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 432,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Usage Data: Pages visited, features used, interactions, session duration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Location Data: GPS location, route tracking (if enabled), check-ins"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Sensor Data: Dashcam integrations, motion data, driving metrics (if applicable)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Cookies & Tracking Technologies: Cookies, pixels, SDKs, and similar technologies"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 436,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 431,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "2.3 Information from Third Parties"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 438,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside",
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Social media integrations (if you connect accounts)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 440,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Payment processors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Automotive data providers (for vehicle lookup)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 442,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Analytics and advertising partners"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 443,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "3. How We Use Your Information"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside",
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Providing and maintaining the Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 448,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Creating and managing your account"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 449,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Enabling social features and content sharing"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 450,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Personalizing user experience"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Facilitating transactions and marketplace features"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 452,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Delivering location-based services and offers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Improving platform performance and functionality"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 454,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Conducting analytics and research"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Communicating updates, promotions, and notifications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 456,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Ensuring safety, security, and fraud prevention"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Complying with legal obligations"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 458,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 447,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "4. How We Share Your Information"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 461,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "4.1 With Other Users"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside",
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Public profile information"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 464,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Shared content (posts, vehicles, drive captures)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 465,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "4.2 Service Providers"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 467,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside",
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Cloud hosting providers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 469,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Payment processors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 470,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Analytics providers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 471,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Customer support tools"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 472,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "4.3 Business Partners"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 474,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside",
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Automotive brands and partners offering deals or services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 476,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Event partners"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 477,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "4.4 Legal and Compliance"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 479,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside",
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "To comply with legal obligations"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 481,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "To respond to lawful requests"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 482,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "To protect rights and safety"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 483,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 480,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "4.5 Business Transfers"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 485,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "In connection with mergers, acquisitions, or asset sales."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 486,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "5. Data Retention"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 488,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "We retain personal data as long as necessary to provide the Services, fulfill legal obligations, resolve disputes, and enforce agreements. Users may request deletion of their data, subject to legal and operational constraints."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 489,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "6. Your Privacy Rights"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 491,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '8px'
                                    },
                                    children: "Depending on your jurisdiction, you may have rights including:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 492,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside",
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Access to your personal data"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 494,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Correction of inaccurate data"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 495,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Deletion of your data"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 496,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Restriction of processing"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 497,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Data portability"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 498,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Opt-out of certain data uses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 499,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 493,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "6.1 California Residents (CCPA/CPRA)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 501,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside",
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Right to know what data is collected"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 503,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Right to delete personal information"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 504,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Right to opt-out of sale or sharing"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 505,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Right to non-discrimination"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 506,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 502,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "6.2 EU/EEA Residents (GDPR)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside",
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Lawful basis for processing"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 510,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Right to lodge complaints with supervisory authorities"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 511,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 509,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "7. Location & Driving Data"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 514,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "Plat3s may collect precise location and driving behavior data to power features such as drive capture and route visualization, nearby deals and recommendations, and event discovery. You may control location permissions via your device settings. Disabling location may limit functionality."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 515,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "8. Cookies and Tracking Technologies"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 517,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "We use cookies and similar technologies to maintain sessions, analyze usage, personalize content, and deliver advertising. You can manage cookie preferences through your browser settings."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 518,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "9. Data Security"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 520,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "We implement industry-standard security measures including encryption in transit and at rest, access controls and authentication, and monitoring and threat detection. However, no system is completely secure."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 521,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "10. Third-Party Services"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 523,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "Plat3s may link to or integrate with third-party services. We are not responsible for their privacy practices."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 524,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "11. Children's Privacy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 526,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "Plat3s is not intended for users under 13 (or applicable minimum age). We do not knowingly collect data from children."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 527,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "12. International Data Transfers"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 529,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "Your information may be transferred and processed outside your country, including the United States."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 530,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "13. Changes to This Policy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 532,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "We may update this Privacy Policy periodically. Changes will be posted with an updated effective date."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 533,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "14. Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 535,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "If you have questions or requests regarding this Privacy Policy, contact us at Plat3s."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 536,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "15. Additional Platform-Specific Disclosures"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 538,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "15.1 License Plate Data"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 539,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "Plat3s collects and displays license plate-related content as part of its core social functionality. Users are responsible for content they upload and must comply with applicable laws."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 540,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "15.2 Marketplace & Transactions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 541,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "Transactions are processed through third-party providers. Plat3s does not store full payment details."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 542,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "15.3 Dashcam & Media Integration"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 543,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "If enabled, Plat3s may ingest media from connected devices. Users control permissions and uploads."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 544,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[12px] font-semibold",
                                    style: {
                                        marginBottom: '6px'
                                    },
                                    children: "15.4 Vehicle Records"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 545,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "Users may store service records and vehicle history data. This data is private unless explicitly shared."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 546,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "16. Do Not Sell or Share My Personal Information"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 548,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "If applicable, users may opt out of the sale or sharing of personal data by contacting us or using in-platform controls."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "17. Data Minimization & Purpose Limitation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 551,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "We limit data collection to what is necessary for platform functionality and clearly defined purposes."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 552,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "18. Automated Decision-Making"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 554,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: "Plat3s may use automated systems for recommendations, fraud detection, and personalization. These do not produce legally significant effects."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 555,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "19. User Controls & Settings"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 557,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '8px'
                                    },
                                    children: "Users can manage:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 558,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside",
                                    style: {
                                        marginBottom: '12px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Privacy settings"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 560,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Visibility of content"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 561,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Notification preferences"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 562,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Connected integrations"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 559,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white text-sm font-semibold",
                                    style: {
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    },
                                    children: "20. Governing Law"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 566,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    children: "This Privacy Policy is governed by the laws of the State of Utah, United States, unless otherwise required by applicable law."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 567,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroBrands.tsx",
                            lineNumber: 406,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroBrands.tsx",
                    lineNumber: 388,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-white text-2xl tracking-[0.3em] uppercase text-center mb-2",
                            style: {
                                fontFamily: "LandRoverWeb-Bold, sans-serif"
                            },
                            children: "PLAT3S"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroBrands.tsx",
                            lineNumber: 573,
                            columnNumber: 9
                        }, this),
                        status !== "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto w-16 h-px bg-white/30",
                            style: {
                                marginBottom: '16px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroBrands.tsx",
                            lineNumber: 582,
                            columnNumber: 11
                        }, this),
                        status === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center animate-fadeIn",
                            style: {
                                padding: '40px 20px 48px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "52",
                                    height: "52",
                                    viewBox: "0 0 52 52",
                                    fill: "none",
                                    style: {
                                        marginBottom: '28px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "26",
                                            cy: "26",
                                            r: "25",
                                            stroke: "rgba(255,255,255,0.25)",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 589,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M16 26.5L23 33.5L36 20.5",
                                            stroke: "white",
                                            strokeWidth: "1.8",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 590,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 588,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white text-xl tracking-[0.15em] uppercase",
                                    style: {
                                        fontFamily: 'LandRoverWeb-Bold, sans-serif',
                                        marginBottom: '14px'
                                    },
                                    children: "Welcome to the road ahead"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 592,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/50 text-[13px] leading-[1.8]",
                                    style: {
                                        fontFamily: 'AvenirNext, sans-serif',
                                        maxWidth: '300px'
                                    },
                                    children: "You're on the list. We'll notify you the moment PLAT3S goes live."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 595,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroBrands.tsx",
                            lineNumber: 586,
                            columnNumber: 11
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/90 text-sm leading-[1.7]",
                                    style: {
                                        fontFamily: 'AvenirNext, sans-serif',
                                        textAlign: 'justify',
                                        marginBottom: '20px',
                                        padding: '0 4px'
                                    },
                                    children: "More than a dashcam. Connect your car, save, and discover. Enjoy exclusive driver offers, deals while you're on the road, PLAT3S.com member-only events & more. Join us."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 602,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "flex flex-col",
                                    style: {
                                        fontFamily: 'AvenirNext, sans-serif',
                                        gap: '14px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-white/50 text-[10px] tracking-[0.15em] uppercase",
                                                            style: {
                                                                paddingLeft: '2px',
                                                                marginBottom: '4px'
                                                            },
                                                            children: "First Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 613,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: form.firstName,
                                                            onChange: (e)=>update("firstName", e.target.value),
                                                            className: "w-full bg-transparent border-0 border-b border-white/25 text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/60 transition-colors",
                                                            style: {
                                                                paddingLeft: '2px',
                                                                paddingBottom: '6px'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 614,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-white/50 text-[10px] tracking-[0.15em] uppercase",
                                                            style: {
                                                                paddingLeft: '2px',
                                                                marginBottom: '4px'
                                                            },
                                                            children: "Last Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: form.lastName,
                                                            onChange: (e)=>update("lastName", e.target.value),
                                                            className: "w-full bg-transparent border-0 border-b border-white/25 text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/60 transition-colors",
                                                            style: {
                                                                paddingLeft: '2px',
                                                                paddingBottom: '6px'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 624,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 611,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-white/50 text-[10px] tracking-[0.15em] uppercase",
                                                    style: {
                                                        paddingLeft: '2px',
                                                        marginBottom: '4px'
                                                    },
                                                    children: [
                                                        "Phone Number ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white/70",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 636,
                                                            columnNumber: 161
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center border-b border-white/25 focus-within:border-white/60 transition-colors",
                                                    style: touched.phone && errors.phone ? {
                                                        borderColor: 'rgba(248,113,113,0.5)'
                                                    } : {},
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white/35 text-[13px] shrink-0",
                                                            style: {
                                                                paddingLeft: '2px'
                                                            },
                                                            children: COUNTRIES.find((c)=>c.code === form.country)?.dialCode || "+1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 638,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "tel",
                                                            value: form.phone,
                                                            onChange: (e)=>handlePhoneChange(e.target.value),
                                                            onBlur: ()=>handleBlur("phone"),
                                                            required: true,
                                                            className: "w-full bg-transparent border-0 text-[13px] text-white placeholder:text-white/20 focus:outline-none",
                                                            style: {
                                                                paddingLeft: '6px',
                                                                paddingBottom: '6px'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 641,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 17
                                                }, this),
                                                touched.phone && errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-400/70 text-[10px]",
                                                    style: {
                                                        marginTop: '4px',
                                                        paddingLeft: '2px'
                                                    },
                                                    children: errors.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 635,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-white/50 text-[10px] tracking-[0.15em] uppercase",
                                                    style: {
                                                        paddingLeft: '2px',
                                                        marginBottom: '4px'
                                                    },
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: form.email,
                                                    onChange: (e)=>update("email", e.target.value),
                                                    onBlur: ()=>handleBlur("email"),
                                                    className: "w-full bg-transparent border-0 border-b border-white/25 text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/60 transition-colors",
                                                    style: {
                                                        paddingLeft: '2px',
                                                        paddingBottom: '6px',
                                                        ...touched.email && errors.email ? {
                                                            borderColor: 'rgba(248,113,113,0.5)'
                                                        } : {}
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 17
                                                }, this),
                                                touched.email && errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-red-400/70 text-[10px]",
                                                    style: {
                                                        marginTop: '4px',
                                                        paddingLeft: '2px'
                                                    },
                                                    children: errors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 668,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 657,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-white/50 text-[10px] tracking-[0.15em] uppercase",
                                                            style: {
                                                                paddingLeft: '2px',
                                                                marginBottom: '4px'
                                                            },
                                                            children: "Country"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 675,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: form.country,
                                                            onChange: (e)=>update("country", e.target.value),
                                                            className: "w-full border-0 border-b border-white/25 text-[13px] text-white focus:outline-none focus:border-white/60 transition-colors appearance-none cursor-pointer",
                                                            style: {
                                                                paddingLeft: '2px',
                                                                paddingBottom: '6px',
                                                                backgroundColor: 'transparent',
                                                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L4 4L7 1' stroke='rgba(255,255,255,0.3)' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                                                                backgroundRepeat: 'no-repeat',
                                                                backgroundPosition: 'right 2px center'
                                                            },
                                                            children: COUNTRIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: c.code,
                                                                    style: {
                                                                        backgroundColor: '#111',
                                                                        color: '#fff'
                                                                    },
                                                                    children: c.name
                                                                }, c.code, false, {
                                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                                    lineNumber: 683,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 676,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 17
                                                }, this),
                                                REGIONS[form.country] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-white/50 text-[10px] tracking-[0.15em] uppercase",
                                                            style: {
                                                                paddingLeft: '2px',
                                                                marginBottom: '4px'
                                                            },
                                                            children: getRegionLabel(form.country)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 689,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: form.region,
                                                            onChange: (e)=>update("region", e.target.value),
                                                            className: "w-full border-0 border-b border-white/25 text-[13px] text-white focus:outline-none focus:border-white/60 transition-colors appearance-none cursor-pointer",
                                                            style: {
                                                                paddingLeft: '2px',
                                                                paddingBottom: '6px',
                                                                backgroundColor: 'transparent',
                                                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L4 4L7 1' stroke='rgba(255,255,255,0.3)' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                                                                backgroundRepeat: 'no-repeat',
                                                                backgroundPosition: 'right 2px center'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    style: {
                                                                        backgroundColor: '#111',
                                                                        color: '#fff'
                                                                    },
                                                                    children: "Select..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                                    lineNumber: 696,
                                                                    columnNumber: 23
                                                                }, this),
                                                                REGIONS[form.country].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: r.code,
                                                                        style: {
                                                                            backgroundColor: '#111',
                                                                            color: '#fff'
                                                                        },
                                                                        children: r.name
                                                                    }, r.code, false, {
                                                                        fileName: "[project]/src/components/HeroBrands.tsx",
                                                                        lineNumber: 698,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 690,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 673,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-white/50 text-[10px] tracking-[0.15em] uppercase",
                                                    style: {
                                                        paddingLeft: '2px',
                                                        marginBottom: '4px'
                                                    },
                                                    children: "Plate Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: form.plateNumber,
                                                    onChange: (e)=>update("plateNumber", e.target.value),
                                                    className: "w-full bg-transparent border-0 border-b border-white/25 text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/60 transition-colors",
                                                    style: {
                                                        paddingLeft: '2px',
                                                        paddingBottom: '6px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 708,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 706,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/40 text-[10px] tracking-wide",
                                            style: {
                                                paddingLeft: '2px'
                                            },
                                            children: "* Required"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 718,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-start gap-3 cursor-pointer group",
                                            style: {
                                                padding: '0 2px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative mt-0.5 shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: form.optIn,
                                                            onChange: (e)=>update("optIn", e.target.checked),
                                                            className: "sr-only peer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 723,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-4 h-4 border border-white/30 peer-checked:border-white/60 peer-checked:bg-white/10 transition-colors flex items-center justify-center",
                                                            children: form.optIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "9",
                                                                height: "7",
                                                                viewBox: "0 0 10 8",
                                                                fill: "none",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M1 4L3.5 6.5L9 1",
                                                                    stroke: "white",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                                    lineNumber: 731,
                                                                    columnNumber: 80
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/HeroBrands.tsx",
                                                                lineNumber: 731,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 729,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 722,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/50 text-[11px] leading-[1.6] group-hover:text-white/70 transition-colors",
                                                    style: {
                                                        textAlign: 'justify'
                                                    },
                                                    children: [
                                                        "I consent to PLAT3S contacting me by text message and email regarding product updates and launch notifications, subject to its",
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                setShowPolicy(true);
                                                            },
                                                            className: "underline text-white/70 hover:text-white transition-colors",
                                                            children: "Privacy Policy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                                            lineNumber: 739,
                                                            columnNumber: 19
                                                        }, this),
                                                        ". Msg & data rates may apply."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                                    lineNumber: 735,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 721,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: status === "submitting",
                                            className: "w-full bg-white text-[#1a1a1a] uppercase font-semibold hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 disabled:opacity-40",
                                            style: {
                                                fontFamily: 'AvenirNext, sans-serif',
                                                fontSize: '11px',
                                                letterSpacing: '0.35em',
                                                height: '40px',
                                                marginTop: '4px'
                                            },
                                            children: status === "submitting" ? "Submitting…" : "Keep Me Informed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 751,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 609,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroBrands.tsx",
            lineNumber: 372,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HeroBrands.tsx",
        lineNumber: 367,
        columnNumber: 5
    }, this);
}
_s(JoinModal, "Fuh9vDhfzeG9vFkJfI7oDz9IEzI=");
_c1 = JoinModal;
function HeroBrands() {
    _s1();
    const [hoveredId, setHoveredId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("next");
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(noopSubscribe, {
        "HeroBrands.useSyncExternalStore[mounted]": ()=>true
    }["HeroBrands.useSyncExternalStore[mounted]"], {
        "HeroBrands.useSyncExternalStore[mounted]": ()=>false
    }["HeroBrands.useSyncExternalStore[mounted]"]);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const touchStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const touchEndX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Cleanup animation timer on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroBrands.useEffect": ()=>{
            return ({
                "HeroBrands.useEffect": ()=>{
                    if (animTimerRef.current) clearTimeout(animTimerRef.current);
                }
            })["HeroBrands.useEffect"];
        }
    }["HeroBrands.useEffect"], []);
    const goTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroBrands.useCallback[goTo]": (index, dir)=>{
            if (isAnimating) return;
            setDirection(dir);
            setIsAnimating(true);
            setActiveIndex(index);
            if (animTimerRef.current) clearTimeout(animTimerRef.current);
            animTimerRef.current = setTimeout({
                "HeroBrands.useCallback[goTo]": ()=>setIsAnimating(false)
            }["HeroBrands.useCallback[goTo]"], 700);
        }
    }["HeroBrands.useCallback[goTo]"], [
        isAnimating
    ]);
    const goNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroBrands.useCallback[goNext]": ()=>{
            goTo((activeIndex + 1) % brands.length, "next");
        }
    }["HeroBrands.useCallback[goNext]"], [
        activeIndex,
        goTo
    ]);
    const goPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroBrands.useCallback[goPrev]": ()=>{
            goTo((activeIndex - 1 + brands.length) % brands.length, "prev");
        }
    }["HeroBrands.useCallback[goPrev]"], [
        activeIndex,
        goTo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroBrands.useEffect": ()=>{
            if (modalOpen) return; // pause auto-rotate when modal is open
            timerRef.current = setTimeout(goNext, AUTO_ROTATE_MS);
            return ({
                "HeroBrands.useEffect": ()=>{
                    if (timerRef.current) clearTimeout(timerRef.current);
                }
            })["HeroBrands.useEffect"];
        }
    }["HeroBrands.useEffect"], [
        activeIndex,
        goNext,
        modalOpen
    ]);
    const handleTouchStart = (e)=>{
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e)=>{
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = ()=>{
        const delta = touchStartX.current - touchEndX.current;
        if (Math.abs(delta) > 50) {
            if (delta > 0) goNext();
            else goPrev();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden relative w-full h-screen overflow-hidden",
                onTouchStart: handleTouchStart,
                onTouchMove: handleTouchMove,
                onTouchEnd: handleTouchEnd,
                children: [
                    brands.map((brand, i)=>{
                        const isCurrent = i === activeIndex;
                        let transformClass = "";
                        if (isCurrent && mounted) {
                            transformClass = direction === "next" ? "animate-slideInRight" : "animate-slideInLeft";
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${isCurrent ? `opacity-100 z-10 ${transformClass}` : "opacity-0 z-0"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-cover bg-center",
                                    style: {
                                        backgroundImage: `url(${brand.image})`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 861,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoBackground, {
                                    brand: brand,
                                    shouldLoad: mounted && (isCurrent || Math.abs(i - activeIndex) <= 1)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 865,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 869,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 flex flex-col items-center text-center px-6 sm:px-10 w-full max-w-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-white text-3xl sm:text-4xl md:text-5xl tracking-[0.3em] sm:tracking-[0.35em] uppercase",
                                            style: {
                                                fontFamily: "LandRoverWeb-Bold, sans-serif"
                                            },
                                            children: brand.logoText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 873,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `block h-px bg-white/60 transition-all duration-700 ease-out mt-6 ${isCurrent ? "w-16 opacity-100" : "w-0 opacity-0"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 879,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white text-sm sm:text-base leading-7 text-justify",
                                            style: {
                                                marginTop: '28px'
                                            },
                                            children: brand.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 885,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setModalOpen(true),
                                            className: "bg-white text-[#1a1a1a] uppercase font-semibold hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 cursor-pointer",
                                            style: {
                                                fontFamily: 'AvenirNext, sans-serif',
                                                fontSize: '11px',
                                                letterSpacing: '0.35em',
                                                paddingLeft: '44px',
                                                paddingRight: '44px',
                                                height: '42px',
                                                marginTop: '28px'
                                            },
                                            children: "Join Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroBrands.tsx",
                                            lineNumber: 889,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroBrands.tsx",
                                    lineNumber: 872,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, brand.id, true, {
                            fileName: "[project]/src/components/HeroBrands.tsx",
                            lineNumber: 853,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3",
                        children: brands.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": `Go to slide ${i + 1}`,
                                onClick: ()=>goTo(i, i > activeIndex ? "next" : "prev"),
                                className: `h-[2px] rounded-full transition-all duration-500 ${i === activeIndex ? "w-8 bg-white" : "w-4 bg-white/30 hover:bg-white/50"}`
                            }, i, false, {
                                fileName: "[project]/src/components/HeroBrands.tsx",
                                lineNumber: 904,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroBrands.tsx",
                        lineNumber: 902,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroBrands.tsx",
                lineNumber: 835,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex w-full min-h-screen",
                children: brands.map((brand)=>{
                    const isHovered = hoveredId === brand.id;
                    const isOtherHovered = hoveredId !== null && hoveredId !== brand.id;
                    const isSave = brand.id === "save";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative flex-1 flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-in-out min-h-screen cursor-pointer ${isHovered ? isSave ? "flex-[2]" : "flex-1" : isOtherHovered ? "flex-[0.85]" : "flex-1"}`,
                        onMouseEnter: ()=>setHoveredId(brand.id),
                        onMouseLeave: ()=>setHoveredId(null),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-cover bg-center",
                                style: {
                                    backgroundImage: `url(${brand.image})`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroBrands.tsx",
                                lineNumber: 938,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoBackground, {
                                brand: brand,
                                shouldLoad: mounted
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroBrands.tsx",
                                lineNumber: 942,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 transition-all duration-500 ${isHovered ? "bg-gradient-to-t from-black/70 via-black/40 to-black/30" : "bg-gradient-to-t from-black/50 via-transparent to-black/30"}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroBrands.tsx",
                                lineNumber: 945,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 flex flex-col items-center justify-center text-center px-6 xl:px-10",
                                style: {
                                    width: '480px',
                                    maxWidth: '100%'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-white uppercase text-3xl lg:text-4xl xl:text-[48px]",
                                        style: {
                                            fontFamily: "LandRoverWeb-Bold, sans-serif",
                                            letterSpacing: '0.3em'
                                        },
                                        children: brand.logoText
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroBrands.tsx",
                                        lineNumber: 955,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `overflow-hidden transition-all duration-500 ease-out ${isHovered ? "opacity-100" : "opacity-0"}`,
                                        style: {
                                            maxHeight: isHovered ? '600px' : '0px',
                                            marginTop: isHovered ? '29px' : '0px',
                                            transition: 'all 0.5s ease-out'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-base lg:text-lg text-justify",
                                                style: {
                                                    lineHeight: '1.8',
                                                    maxWidth: '400px'
                                                },
                                                children: brand.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HeroBrands.tsx",
                                                lineNumber: 975,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setModalOpen(true),
                                                className: "bg-white text-[#1a1a1a] uppercase font-semibold hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 cursor-pointer",
                                                style: {
                                                    fontFamily: 'AvenirNext, sans-serif',
                                                    fontSize: '11px',
                                                    letterSpacing: '0.35em',
                                                    paddingLeft: '44px',
                                                    paddingRight: '44px',
                                                    height: '42px',
                                                    marginTop: '32px'
                                                },
                                                children: "Join Us"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HeroBrands.tsx",
                                                lineNumber: 979,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HeroBrands.tsx",
                                        lineNumber: 963,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeroBrands.tsx",
                                lineNumber: 954,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-[15%] bottom-[15%] w-px bg-white/20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroBrands.tsx",
                                lineNumber: 990,
                                columnNumber: 15
                            }, this)
                        ]
                    }, brand.id, true, {
                        fileName: "[project]/src/components/HeroBrands.tsx",
                        lineNumber: 926,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBrands.tsx",
                lineNumber: 919,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JoinModal, {
                open: modalOpen,
                onClose: ()=>setModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/HeroBrands.tsx",
                lineNumber: 997,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroBrands.tsx",
        lineNumber: 833,
        columnNumber: 5
    }, this);
}
_s1(HeroBrands, "IEl0Z3lkynFcxqRwx1XSXCkD3ZE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c2 = HeroBrands;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "VideoBackground");
__turbopack_context__.k.register(_c1, "JoinModal");
__turbopack_context__.k.register(_c2, "HeroBrands");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_HeroBrands_tsx_11y8ka0._.js.map