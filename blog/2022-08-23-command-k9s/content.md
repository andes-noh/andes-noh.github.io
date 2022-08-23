---
slug: k9s command
title: 우분투에 k3s 설치해서 kubernetes 환경 구축하고 살펴보기(4/4)
authors: andes
tags: [ubuntu, k8s, kubernetes, k3s, k9s, 쿠버네티스]
---

## k9s로 k8s 주요 명령어 확인

---

- ### `ns`

  - namespace
  - 쿠버네티스 오브젝트를 묶는 하나의 가상공간 또는 그룹

- ### `pod`

  - pod
  - 컨테이너를 하나 이상 모아 놓은 것으로, 쿠버네티스 애플리케이션의 최소 단위

- ### `deploy`

  - deployment
  - 애플리케이션 단위를 관리하는 Controller이며, Kubernetes의 최소 유닛인 Pod에 대한 기준 spec을 정의한 Object

- ### `serivce`

  - service
  - pod의 논리적 집합이며 어떻게 접근할지에 대한 정책은 정의해놓은 것
  - 즉 각 Pod의 IP로는 외부에서 접근이 불가능하지만, 서비스는 이를 가능하게 허용

- ### `ingress`

  - 클러스터 외부에서 내부 서비스로 접근하는 HTTP, HTTPS 요청들을 어떻게 처리할지 정의해둔 규칙들의 모음
  - 클러스터 외부에서 접근가능한 URL을 사용할 수 있게 하며, 트래픽을 로드밸런싱도 해주고, SSL 인증서 처리를 해주고, 도메인 기반으로 가상 호스팅을 제공
  - 전제조건으로 인그레스 컨트롤러가 있어야 인그레스를 충족(AWS, GCE, Nginx, Treafik)
  - 인그레스 컨트롤러(ingress controller)는 자동으로 실행되지 않으며 클러스터에 가장 적합한 컨트롤러를 선택하여 구현
  - [k3s + nginx ingress controller(no traefik)][link]
    [link]: https://blog.thenets.org/how-to-create-a-k3s-cluster-with-nginx-ingress-controller/ 'k3s + nginx ingress controller'
  - [Reference][ubu]
    [ubu]: https://twofootdog.tistory.com/23 'Reference'

- ### `secret`

  - 비밀번호, OAuth 토큰, ssh 키 같은 민감한 정보들을 저장하는 용도

- ### `Storageclasses`
  - 관리자가 제공하는 스토리지의 "classes"를 설명할 수 있는 방법을 제공
