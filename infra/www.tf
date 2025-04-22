
resource "bunnynet_pullzone" "www" {
  name         = "${var.service_name}-www"
  cors_enabled = false

  origin {
    type = "OriginUrl"
    url  = "http://${var.web_server}"
  }

  routing {
    tier  = "Standard"
    zones = ["AF", "ASIA", "EU", "SA", "US"]
  }
}

resource "bunnynet_pullzone_hostname" "bunnynet_web" {
  pullzone    = bunnynet_pullzone.cdn.id
  name        = "${var.service_name}-web.b-cdn.net"
  tls_enabled = true
  force_ssl   = true
}

resource "bunnynet_pullzone_hostname" "cdn" {
  pullzone    = bunnynet_pullzone.cdn.id
  name        = "www.${data.bunnynet_dns_zone.dns.domain}"
  tls_enabled = true
  force_ssl   = true
}

resource "bunnynet_pullzone_edgerule" "redirect_pullzone_domain" {
  enabled     = true
  pullzone    = bunnynet_pullzone.cdn.id
  description = "Redirect pullzone domain to cdn domain."

  actions = [
    {
      type       = "Redirect"
      parameter1 = "https://${bunnynet_pullzone_hostname.cdn.name}"
      parameter2 = "301"
      parameter3 = null
    }
  ]

  match_type = "MatchAny"
  triggers = [
    {
      type       = "Url"
      match_type = "MatchAny"
      patterns   = [
        "https://${bunnynet_pullzone_hostname.bunnynet.name}/*"
      ]
      parameter1 = null
      parameter2 = null
    }
  ]
}