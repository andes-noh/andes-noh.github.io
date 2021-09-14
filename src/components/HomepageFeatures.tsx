/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import clsx from 'clsx'
import React from 'react'
import styles from './HomepageFeatures.module.css'

type FeatureItem = {
  title: string
  image: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '스칼라',
    image: 'img/scala.svg',
    description: <>FP/OOP 멀티패러다임 프로그래밍 언어</>,
  },
  {
    title: 'Akka',
    image: 'img/akka.svg',
    description: <>액터 모델 기반, 동시성 및 분산 처리 도구</>,
  },
  {
    title: 'Apache Spark',
    image: 'img/Apache_Spark_logo.svg',
    description: <>분산 컴퓨팅 프레임워크</>,
  },
  {
    title: 'Kubernetes',
    image: 'img/kubernetes.svg',
    description: <>컨테이너 오케스트레이션 도구</>,
  },
  {
    title: 'AWS',
    image: 'img/aws.svg',
    description: <>퍼블릭 클라우드 서비스</>,
  },
]

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx(`col col--4`)}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <br />
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
