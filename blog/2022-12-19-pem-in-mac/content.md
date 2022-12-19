---
slug: ssh pem
title: pem을 이용하여 ssh 접속하기
authors: andes
tags: [ssh, pem, ppk, putty, keygen]
---

## pem이란

- Privacy Enhanced Mail Certificate
- 1993 IETF 표준 세트를 기반으로 암호화 키, 인증서 및 기타 데이터를 저장하고 보내기 위한 사실상의 파일 형식
- 이메일용으롤 만들어 졌으나, 리눅스 접속 파일로 많이 쓰임

#

## ppk로 변경

- ### mac

  ```
  brew install putty
  ```

  - xcode-select --install 이라는 에러 발생시 xcode 설치

  ```
  puttygen key.pem -o key.ppk
  ```

  - 위의 명령어를 사용해 pem을 ppk 방식으로 변경후 putty를 통해 접속
  - auth에 ppk 등록후 기존의 putty 사용법처럼 접속

- ### window

  - puttygen 실행(없으면 설치)
  - ppm 파일 load(모든파일로 필터 변경할것)
  - save private key 선택

  - auth에 ppk 등록후 ssh 접속

## terminal

- pem을 사용하여 바로 접속도 가능

```
ssh -i key.ppm user@host
```

- key.ppm: ppm파일
- user@host: 서버 접속 아이디 및 주소
