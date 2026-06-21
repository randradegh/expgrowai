import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonicalPath?: string
  ogImage?: string
  ogType?: string
}

const SITE_URL = 'https://www.expgrowai.mx'
const DEFAULT_OG_IMAGE = `${SITE_URL}/expgrowai_logo_01.png`

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Exponential Grow AI',
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  description: 'Consultoría de IA generativa para marketing y educación en México.',
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'Roberto Andrade Fonseca',
    jobTitle: 'Consultor Estratégico en IA Generativa',
    url: `${SITE_URL}/sobre-mi`,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ciudad de México',
    addressCountry: 'MX',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+52-55-2576-5962',
    contactType: 'sales',
    email: 'randradedev@gmail.com',
    availableLanguage: ['Spanish', 'English'],
  },
  sameAs: [],
  makesOffer: [
    {
      '@type': 'Service',
      name: 'Brand Brain — IA Generativa para Marketing',
      description: 'Sistema de contenido automatizado con voz de marca para agencias y departamentos de marketing.',
      provider: { '@type': 'Organization', name: 'Exponential Grow AI' },
      areaServed: { '@type': 'Country', name: 'MX' },
    },
    {
      '@type': 'Service',
      name: 'Formación en Prompt Engineering',
      description: 'Capacitación en diseño profesional de peticiones para equipos de marketing, creativos y educadores.',
      provider: { '@type': 'Organization', name: 'Exponential Grow AI' },
      areaServed: { '@type': 'Country', name: 'MX' },
    },
    {
      '@type': 'Service',
      name: 'IA Generativa para Educación',
      description: 'Diseño curricular asistido por IA y automatización de carga administrativa docente.',
      provider: { '@type': 'Organization', name: 'Exponential Grow AI' },
      areaServed: { '@type': 'Country', name: 'MX' },
    },
  ],
}

export default function SEO({
  title,
  description,
  canonicalPath = '/',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
}: SEOProps) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:site_name" content="Exponential Grow AI" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema, null, 2)}
      </script>
    </Helmet>
  )
}
