---
slug: reduce ubuntu booting time
title: 우분투 부팅 시간 단축 (with network setting)
authors: andes
tags: [booting time, network, ubuntu]
---

네트워크 세팅 관련 우분투 부팅 시간 줄이는법

1. 네트워크 설정 파일 위치

- `/etc/netplan/~.yaml` 파일
- `optional: true` 설정 추가
- 인터페이스 연결 여부를 확인 하지않기 때문에 부팅시간 단축 효과
- 미설정시 default는 `false`

2. 변경전

![asis](./asis.png)

3. 변경후

![tobe](./tobe.png)
