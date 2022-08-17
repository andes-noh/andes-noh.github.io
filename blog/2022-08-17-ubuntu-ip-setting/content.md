---
slug: how  to ubuntu ip setting
title: netplan으로 우분투 ip 세팅하기(with WIFI)
authors: andes
tags: [ubuntu, netplan, 우분투 네트워크 세팅, ubuntu ip setting, ubuntu wifi setting]
---

## 1. LAN

- ### `cd /etc/netplan` 커맨드를 이용해 netplan 폴더로 이동

- ### 폴더 안에 있는 yaml파일을 확인 후 아래 형식에 맞춰 수정(우분투 버전에 따라 파일 이름은 상이)

- ### 아래 설정의 `enp3s0` 부분은 랜카드이기때문에 다를수 있음

- ### DHCP 설정

```
network:
  ethernets:
    enp3s0:
      dhcp4: true
  version: 2
```

- ### STATIC

```
network:
  ethernets:
    enp3s0:
      dhcp4: no
      addresses: [192.168.0.167/24]
      gateway4: 192.168.0.1
      nameservers:
        addresses: [8.8.8.8, 1.1.1.1]
      optional: true
  version: 2
```

## 2. WIFI

- ### 우분투 설치시 Wifi 세팅을 했다면 ~-wifi.yaml 파일 존재

- ### 파일이 없다면 만들어서 추가

- ### 혹은 디폴트 yaml 파일에 추가

- ### DHCP

```
network:
  version: 2
  wifis:
    wlp1s0:
      access-points:
        'YOUR SSID':
          password: 'YOUR PASSWORD'
    dhcp4: true
```

- ### STATIC

```
network:
  version: 2
  wifis:
    wlp1s0:
      addresses: [192.168.0.167/24]
      gateway4: 192.168.0.1
      nameservers:
        addresses: [8.8.8.8, 1.1.1.1]
      access-points:
        UNOMIC_LTS 2G:
          password: unomic12$#^21
      dhcp4: no
```
