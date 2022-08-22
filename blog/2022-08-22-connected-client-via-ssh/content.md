---
slug: see k3s via local client
title: 우분투에 k3s 설치해서 kubernetes 환경 구축하고 살펴보기(3/4)
authors: andes
tags: [ubuntu, k8s, kubernetes, k3s, k9s, 쿠버네티스]
---

## ssh 접속을 이용해 local pc에서 remote k3s 살펴보기

---

- ### 필요 파일

  - `/etc/rancher/k3s/k3s.yaml`
  - [참조][link]

  [link]: https://andes-noh.github.io/blog/how%20to%20install%20k9s#3-k3s-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0 '참조'

- ### scp 명령어 사용해서 local 클라이언트쪽으로 `k3s.yaml` 파일 이동

  - `scp -P [포트] [원격 서버 이름]@[원격서버 아이피]:[가져올 파일 경로] [붙여넣을 경로]`
  - 포트는 추가 옵션
  - 소유자 변경 할것
    - 소유자 변경 명령(chown)은 이전 포스팅 확인

- ### 원격 서버 ssh접속

  - `ssh [원격 서버 이름]@[원격서버 아이피] -p[포트] -L 6443:localhost:6443`
  - -L: 터널링 옵션
  - A가 B에 접근가능, B가 C에 접근가능, A는 C에 접근 불가능일때 -L 사용시 A가 C에 접근가능
  - 이 경우는 k8s default 포트인 6443으로 터널링

- ### 추가 터미널 오픈

  - 위의 접속 터미널은 그대로 두고
  - 아래 명령어 실행
  - `export KUBECONFIG=[local 클라이언트쪽으로 복사해온 `k3s.yaml` 파일 경로]`

- ### k9s 실행
  - `k9s`
