import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '企业级',
    description: (
      <>
        项目框架全部采用 TypeScript 开发，强类型检查，拥有企业级的开发与维护能力
      </>
    ),
  },
  {
    title: '多租户支持',
    description: (
      <>
        支持在同一系统中支持多个租户数据库
      </>
    ),
  },
  {
    title: '读写分离',
    description: (
      <>
        支持 MySQL 读写集群，自动读写分离
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
