import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ease of Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Here at Atlas we strive to provide the best user experience by staying
        up to date with industry standards and new releases.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Our services offer a streamlined setup to keep you and your team focused
        on your goals. We&apos;ll do the chores while you reap the rewards.
      </>
    ),
  },
  {
    title: 'Secure & Reliable',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Here at Atlas we strive to maintain our data integrity and keep your data
        out of the hands of brokers and malicious people. We do this by using state
        of the art servers with superior security, with these servers come unmatched
        reliability, we strive for a 100% uptime to ensure you and your team recieve
        the best service possible.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
