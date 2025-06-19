import { index, type RouteConfig } from '@react-router/dev/routes'

import authRoutes from './modules/auth/routes'

export default [
  index('routes/home.tsx'),
  ...authRoutes
] satisfies RouteConfig
