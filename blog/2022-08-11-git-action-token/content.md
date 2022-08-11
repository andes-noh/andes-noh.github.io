---
slug: register github actions token
title: github actions에서 사용할 token 등록하기
authors: andes
tags: [github, github action, token, access token]
---

github action을 이용한 CI/CD를 위해 yml파일에 민감한 정보가 필요한 경우(token) 어떻게 등록하는지 알아보자

## 1. github action에서 사용할 토큰 발행 방법

- ### settings 클릭

  ![setting](./1.png)

- ### Developer settings 클릭

  ![setting](./2.png)

- ### Generate new token 클릭

  ![setting](./3.png)

- ### token 사용 용도(Note), 만료 기간(Expiration), 범위(Scopes) 설정

  ![setting](./4.png)

- ### token 생성
  ![setting](./5.png)

## 2. Repository settings

- ### token을 등록할 repo로 이동후 setting 클릭

  ![setting](./6.png)

- ### 왼쪽바의 Secret - Actions 클릭

  ![setting](./7.png)

- ### New Repository Secret 클릭

  ![setting](./8.png)

- ### 이름 및 token 등록

  ![setting](./9.png)

- ### 등록완료
  ![setting](./10.png)
