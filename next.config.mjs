/** @type {import('next').NextConfig} */
const nextConfig={
images:{remotePatterns:[{protocol:'https',hostname:'*.supabase.co'}]}};
typescript:{ignorebuilderrors:true };
eslint:{ignoreduringbuilds:true} ;
};
export default nextConfig;
