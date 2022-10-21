---
slug: sed command
title: jenkins pipeline에서 sed 커맨드 사용하기
authors: andes
tags: [jenkins, pipeline, kubernetes, k3s, k9s, 쿠버네티스, sed, cicd, deploy]
---

## sed 커맨드 사용하기

- sed command를 사용해서 image 변경후 deploy 재배포하기
- CR: Container Registry

---

- ### test.k8s.yaml 예시

```
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app.kubernetes.io/component: back
    app.kubernetes.io/name: test
    app.kubernetes.io/part-of: test
  name: test
  namespace: jenkins
spec:
  revisionHistoryLimit: 1
  selector:
    matchLabels:
      app.kubernetes.io/component: back
      app.kubernetes.io/name: test
      app.kubernetes.io/part-of: test
  template:
    metadata:
      labels:
        app.kubernetes.io/component: back
        app.kubernetes.io/name: test
        app.kubernetes.io/part-of: test
    spec:
      containers:
        - image: ${YOUR CR}:latest
          name: app
          ports:
            - containerPort: 3000
          resources: {}
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app.kubernetes.io/component: back
    app.kubernetes.io/name: test
    app.kubernetes.io/part-of: test
  name: test
  namespace: jenkins
spec:
  ports:
    - port: 3000
      targetPort: 3000
  selector:
    app.kubernetes.io/component: back
    app.kubernetes.io/name: test
    app.kubernetes.io/part-of: test

```

- ### image 라인 변경 sed command 예시 및 설명

```
pipeline {
    agent any

    environment {
        dockerHubRegistry = 'dockerHubRegistry'
    }

    stages {
        stage('Pull') {
            steps {
                git url: "${GIT_URL}", branch: "main", poll: true, changelog: true
            }
        }

        stage('...') {

        }
        ...

			  stage( "Deploy to Cluster" ) {
          steps {
            script {
              ...
              sh """
              #!/bin/bash
              cat test.k8s.yml | grep image
              sed -i 's|image: .*|image: "${YOUR _CR}:${YOUR _VERSION}"|' test.k8s.yaml
              cat test.k8s.yml | grep image
              """
              ...
            }
          }
				}
    }
}
```

- 첫번째 라인: test.k8s.yaml파일에서 image 라는 글자가 포함된 라인 출력 및 확인

```
image: ${YOUR CR}:latest
```

- 두번째 라인: test.k8s.yaml의 image로 시작하는 라인을 sed command로 원하는 값으로 변경후 파일에 적용

- 세번째 라인: 변경된 image 라인 출력 및 확인

```
image: ${YOUR _CR}:${YOUR _VERSION}
```
