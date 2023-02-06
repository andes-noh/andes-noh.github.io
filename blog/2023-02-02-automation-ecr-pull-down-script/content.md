---
slug: ecr
title: linux(macOS) AWS docker 토큰 & k8s secret 자동 갱신 스크립트
authors: andes
tags: [ecr, aws token, aws]
---

## 선행조건

- k8s설치
- ns 생성
- aws profile 등록

#

## aws profile 등록 방법

- 프로필 구성

  ```
  aws configure
  ```

- 프로필 구성 데이터 설정(아래와 같이 따로 지정 혹은 터미널을 확인하면 값 입력)

  ```
  aws configure set aws_access_key_id XXXXXXXXXXX \
  aws configure set aws_secret_access_key XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX \
  aws configure set region ap-northeast-2 \
  aws configure set output json
  ```

- 이름 설정이 필요할때는 --profile 옵션을 추가로 준다

```
aws configure --profile TESTUSER
```

#

## Script

- default aws configure

```
ACCOUNT=xxxxxxxxxxxx
REGION=xx-xxxx-x
SECRET_NAME=${REGION}-ecr-registry
EMAIL=email@email.com
NAMESPACE=xxxx

#

# ~/.docker/config.json 생성

aws ecr get-login-password --region REGION | docker login --username AWS --password-stdin \
 ACCOUNT.dkr.ecr.REGION.amazonaws.com

#

# Create or replace registry secret

#

kubectl create secret SECRET_NAME aws -n NAMESPACE \
 --from-file=.dockerconfigjson=$home.docker/config.json \
 --type=kubernetes.io/dockerconfigjson
```

- 특정 프로필로 자동 갱신 및 시크릿 생성 경우

```
ACCOUNT=xxxxxxxxxxxx
REGION=xx-xxxx-x
SECRET_NAME=${REGION}-ecr-registry
EMAIL=email@email.com
NAMESPACE=xxxx

#

# ~/.docker/config.json 생성

aws ecr get-login-password --region REGION --profile NAME | docker login --username AWS --password-stdin \
 ACCOUNT.dkr.ecr.REGION.amazonaws.com

#

# Create or replace registry secret

#

kubectl create secret SECRET_NAME aws -n NAMESPACE \
 --from-file=.dockerconfigjson=$home.docker/config.json \
 --type=kubernetes.io/dockerconfigjson
```

## crontab

- 12시간마다 토큰이 만료되기때문에 crontab로 위의 스크립트를 등록시켜 토큰 자동 갱신 및 시크릿 재생성
