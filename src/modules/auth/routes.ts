import { prefix, route, type RouteConfig } from '@react-router/dev/routes'

const getRouteModulePath = (module: string, file: string) => `./modules/${module}/routes/${file}`

export default prefix('/auth', [
  route('sign-in/*', getRouteModulePath('auth', 'sign-in.tsx')),
]) satisfies RouteConfig
