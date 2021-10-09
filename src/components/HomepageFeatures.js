import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Esse duis do eiusmod est veniam dolor labore nostrud.',
    Svg: require('../../static/img/image_placeholder.svg').default,
    description: (
      <>
        Labore laborum reprehenderit incididunt deserunt ipsum minim ea eiusmod ad qui exercitation nisi. Adipisicing voluptate in ad laborum ea consequat anim reprehenderit duis laborum ut amet. Sunt in laborum ut dolor ad cupidatat ad tempor irure Lorem. Exercitation culpa enim est aute ullamco dolor deserunt nostrud magna aliqua proident amet.
      </>
    ),
  },
  {
    title: 'Ea ut reprehenderit mollit id reprehenderit quis labore.',
    Svg: require('../../static/img/image_placeholder.svg').default,
    description: (
      <>
        Deserunt eiusmod labore culpa dolor sint labore fugiat quis do amet minim anim velit. Commodo non sit nulla Lorem ex amet eu anim. Ullamco culpa et excepteur aute enim deserunt deserunt sit adipisicing pariatur enim pariatur duis. Lorem tempor qui deserunt consectetur culpa officia voluptate laboris est anim incididunt. Cupidatat occaecat ut tempor incididunt anim est magna eu sunt consectetur proident fugiat. Ut voluptate reprehenderit nulla laborum.
      </>
    ),
  },
  {
    title: 'Aliquip in exercitation magna sit dolor sit consectetur.',
    Svg: require('../../static/img/image_placeholder.svg').default,
    description: (
      <>
        Sunt et pariatur non consequat. Excepteur consectetur reprehenderit quis laboris velit nisi cupidatat id ut ea culpa. Ut ullamco dolor eiusmod minim consequat aliquip dolor fugiat veniam adipisicing. Ea dolor commodo nostrud ut quis consequat cillum do nulla occaecat reprehenderit. Irure nulla voluptate ea labore laboris eiusmod deserunt aute deserunt dolore amet laboris. Est non incididunt veniam do amet aliqua et enim. Culpa magna deserunt labore nostrud do Lorem ipsum sint tempor magna sunt.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
