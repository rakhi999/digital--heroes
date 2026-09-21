import type {Config} from 'tailwindcss';
const config:Config={content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{sage:'#8A9A8C',ink:'#0b0f0d',panel:'#121815',muted:'#9aa69e'},boxShadow:{glow:'0 0 40px rgba(138,154,140,.15)'}}},plugins:[]}; export default config;
