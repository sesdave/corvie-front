import type { Context } from '@nuxt/types'

const DIRECTIVES: Record<string, string> = {
  'long-lived': 's-maxage=86400',
  'short-lived': 's-maxage=3600',
  static: 's-maxage=31536000',
}

export default ({ res, route }: Context) => {
  if (!res) return

  const directive = route.meta?.[0]?.cache

  if (directive in DIRECTIVES) {
    res.setHeader('Cache-Control', DIRECTIVES[directive])
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      'Unknown cache directive %s found in route: %s',
      directive,
      route.path
    )
  }
}
