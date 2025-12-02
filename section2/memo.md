### 순서

```npm init```

```npm i @types/node``` 하면 packaje.json에 @types/node 설치됨


새 파일 만든 후 tsconfig.json 으로 이름변경 

```
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "outDir": "dist",
    "strict": true,
    "moduleDetection": "force"
  },
  "include": ["src"]
}

```