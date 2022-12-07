---
slug: ssh options
title: ssh -L 옵션
authors: andes
tags: [ssh]
---

## 환경

- A(localhost), B, C 라는 pc or 서버 or 통신기기가 존재
- A는 B에 접근 가능 (ssh 접속)
- B는 C에 접근 가능
- A는 C에 바로 접근 불가

#

## ssh 터널링

- 위와 같은 환경일때 A에서 C로 접근 가능하게 하는 옵션

#

## 사용법

```
$ ssh [USER]@[HOSTNAME] -p[port] -L [LOCAL_PORT]:[DESTINATION_IP]:[DESTINATION_PORT]
```

- local_port: A에서 사용할 포트
- destination_ip: C의 아이피
- destination_port: 연결할 C의 포트
