/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['pokeapi.co'],
  }
}
  
module.exports = nextConfig
// https://pokeapi.co/api/v2/pokemon?limit=200