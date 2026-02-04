import '../styles/News.css';

// Article data model for the security intelligence feed.
type Article = {
  id: string;
  title: string;
  summary: string;
  url: string;
  source: string;
  region: 'International' | 'Local';
  topics: string[];
  origin: 'In-house' | 'External';
  isOpinion?: boolean;
  isCrimeReport?: boolean;
  isPolitical?: boolean;
  isWar?: boolean;
  isCelebrity?: boolean;
};

// Topics used to validate relevance for curated coverage.
const RELEVANT_TOPICS = [
  'Physical Security Systems',
  'Access Control Systems',
  'Surveillance and Monitoring Systems',
  'Biometrics',
  'Control Room Technology',
  'Security Risk Management',
  'Protective Services',
  'Smart Safety Technologies',
  'Corporate/Facility Security Solutions',
  'Public Safety Technology Innovations',
];

// Source list containing both in-house and external articles.
const articles: Article[] = [
  {
    id: 'int-1',
    title: 'Advances in Access Control Interoperability for Multi-site Facilities',
    summary:
      'Interoperable access control standards are enabling centralized governance across multi-site estates while improving auditability and compliance. This shift reduces system fragmentation and strengthens credential lifecycle management across enterprise deployments.',
    url: 'https://www.securitymagazine.com/',
    source: 'Security Magazine',
    region: 'International',
    topics: ['Access Control Systems', 'Corporate/Facility Security Solutions'],
    origin: 'External',
  },
  {
    id: 'int-2',
    title: 'Video Analytics for Perimeter Protection and Asset Monitoring',
    summary:
      'Modern video analytics are expanding from detection to proactive incident classification, enabling faster decision-making in control rooms. Integrations with alarms and access control improve response coordination and reduce false positives.',
    url: 'https://www.ifsecglobal.com/',
    source: 'IFSEC Global',
    region: 'International',
    topics: ['Surveillance and Monitoring Systems', 'Control Room Technology'],
    origin: 'External',
  },
  {
    id: 'int-3',
    title: 'Biometric Authentication Upgrades for High-Throughput Environments',
    summary:
      'Biometric systems are evolving to balance throughput and assurance, supporting secure access for large workforces without disrupting operational flow. Liveness detection and privacy-by-design controls remain key adoption drivers.',
    url: 'https://www.asisonline.org/',
    source: 'ASIS International',
    region: 'International',
    topics: ['Biometrics', 'Access Control Systems'],
    origin: 'External',
  },
  {
    id: 'local-1',
    title: 'South Africa Smart Safety Pilots Strengthen Public-Sector Monitoring',
    summary:
      'Local public safety pilots are modernizing monitoring capabilities with integrated command platforms and analytics. These deployments prioritize interoperability, uptime, and real-time visibility for municipal response teams.',
    url: 'https://www.itweb.co.za/',
    source: 'ITWeb',
    region: 'Local',
    topics: ['Public Safety Technology Innovations', 'Control Room Technology'],
    origin: 'External',
  },
  {
    id: 'local-2',
    title: 'Facility Security Technology Refresh Programs in the Western Cape',
    summary:
      'Regional facility operators are adopting modern perimeter and surveillance upgrades to improve resilience and compliance. The focus is on risk management, lifecycle planning, and integration with existing control room tooling.',
    url: 'https://www.engineeringnews.co.za/',
    source: 'Engineering News',
    region: 'Local',
    topics: ['Physical Security Systems', 'Security Risk Management'],
    origin: 'External',
  },
  {
    id: 'exclude-1',
    title: 'Opinion: Security Industry Growth Forecasts',
    summary: 'Market outlook commentary and analyst opinion on sector trends.',
    url: 'https://www.reuters.com/',
    source: 'Reuters',
    region: 'International',
    topics: ['Security Risk Management'],
    origin: 'External',
    isOpinion: true,
  },
  {
    id: 'exclude-2',
    title: 'Local Crime Incident Report',
    summary: 'Incident coverage related to local crime statistics.',
    url: 'https://www.news24.com/',
    source: 'News24',
    region: 'Local',
    topics: ['Public Safety Technology Innovations'],
    origin: 'External',
    isCrimeReport: true,
  },
  {
    id: 'house-1',
    title: 'Control Room Readiness: Reducing Response Friction in Multi-site Operations',
    summary:
      'Our operations teams are standardizing escalation workflows and control room tooling to shorten decision cycles. The focus is on reliable alert triage, system resilience, and consistent response orchestration across sites.',
    url: '#',
    source: 'Gubis85 Operations Desk',
    region: 'Local',
    topics: ['Control Room Technology', 'Security Risk Management'],
    origin: 'In-house',
  },
];

// Apply relevance filters and collect exclusion reasons.
const evaluateArticle = (article: Article) => {
  const excludedReasons = [
    article.isCrimeReport && 'Crime report',
    article.isPolitical && 'Political news',
    article.isWar && 'War update',
    article.isCelebrity && 'Celebrity incident',
    article.isOpinion && 'Opinion piece',
  ].filter(Boolean);

  const hasRelevantTopic = article.topics.some((topic) => RELEVANT_TOPICS.includes(topic));
  const isRelevant = excludedReasons.length === 0 && hasRelevantTopic;

  return {
    isRelevant,
    excludedReasons,
  };
};

// Derived collections for display sections.
const filteredArticles = articles.filter((article) => evaluateArticle(article).isRelevant);
const companyInsights = filteredArticles.filter((article) => article.origin === 'In-house');
const worldInsights = filteredArticles.filter((article) => article.origin === 'External');
const sourceReferences = Array.from(
  new Map(filteredArticles.map((article) => [article.source, article.url])).entries(),
).map(([source, url]) => ({ source, url }));

export default function News() {
  return (
    <div className="news-page">
      {/* Hero intro */}
      <section className="page-hero radar-hero">
        <div className="page-hero__content radar-hero__content">
          <p className="page-hero__eyebrow">News</p>
          <h1>Latest Updates</h1>
          <p className="page-hero__subtext">
            Security insights, company announcements, and operational briefings.
          </p>
        </div>
      </section>
      {/* Overview copy */}
      <section className="news-content">
        <h2>Latest Updates</h2>
        <p>
          Stay informed with the latest security insights, company announcements, and operational updates from
          Gubis85 Security Services.
        </p>
        <p>
          We regularly publish briefings on emerging risks, technology deployments, and community initiatives.
        </p>
      </section>
      {/* Relevance desk and curated feeds */}
      <section className="news-filter">
        <div className="news-filter__header">
          <h2>Security Intelligence Relevance Desk</h2>
          <p>
            We curate and validate security-industry coverage for operational leaders, technology decision-makers,
            and risk stakeholders. Sources are screened for professional relevance across physical security,
            protective services, and public safety technology while excluding crime reports, political content,
            war updates, celebrity incidents, and opinion pieces.
          </p>
        </div>
        <div className="news-filter__topics">
          {RELEVANT_TOPICS.map((topic) => (
            <span key={topic} className="news-filter__tag">
              {topic}
            </span>
          ))}
        </div>
        {/* In-house insights */}
        <div className="news-filter__section">
          <h3>Company Security Insights</h3>
          <div className="news-filter__grid">
            {companyInsights.map((article) => (
              <article key={article.id} className="news-card">
                <div className="news-card__meta">
                  <span>{article.region}</span>
                  <span>{article.source}</span>
                </div>
                <span className="news-card__origin news-card__origin--in">In-house</span>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <div className="news-card__topics">
                  {article.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  View source →
                </a>
              </article>
            ))}
          </div>
        </div>
        {/* External insights */}
        <div className="news-filter__section">
          <h3>World Security Insights</h3>
          <div className="news-filter__grid">
            {worldInsights.map((article) => (
              <article key={article.id} className="news-card">
                <div className="news-card__meta">
                  <span>{article.region}</span>
                  <span>{article.source}</span>
                </div>
                <span className="news-card__origin news-card__origin--out">External</span>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <div className="news-card__topics">
                  {article.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  View source →
                </a>
              </article>
            ))}
          </div>
        </div>
        {/* Source references */}
        <div className="news-filter__references">
          <h3>References</h3>
          <ul>
            {sourceReferences.map((reference) => (
              <li key={reference.source}>
                <a href={reference.url} target="_blank" rel="noopener noreferrer">
                  {reference.source}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
