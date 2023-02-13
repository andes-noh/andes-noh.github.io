---
slug: administrator privileges bat
title: 관리자 권한으로 bat 내용 실행하기
authors: andes
tags: [bat, administrator privileges]
---

## scripts

```
@echo off

>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"

if '%errorlevel%' NEQ '0' (

    echo 관리 권한을 요청 ...

    goto UACPrompt

) else ( goto gotAdmin )

:UACPrompt

    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"

    set params = %*:"=""

    echo UAC.ShellExecute "cmd.exe", "/c %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs"



    "%temp%\getadmin.vbs"

    rem del "%temp%\getadmin.vbs"

    exit /B



:gotAdmin

pushd "%CD%"

    CD /D "%~dp0"

:-------------------------

call C:\ABCD\EFG.bat or call C:\ABCD\EFG.exe
```

- 마지막 라인에 실행할 .exe파일이나 .bat파일 설정

#

## 실행

- bat파일 작성
- 실행
