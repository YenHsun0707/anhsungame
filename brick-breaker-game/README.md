# 打磚塊遊戲 (Brick Breaker Game)

## 專案說明
本專案包含打磚塊遊戲的前端與後端系統，前端使用 HTML5 Canvas 與 JavaScript 實作遊戲邏輯，後端使用 Node.js + Express 搭配 MongoDB 管理玩家資料、遊戲進度與後台管理系統。

## 專案結構
- `frontend/`：遊戲前端程式碼
- `backend/`：後端 API 伺服器與資料庫模型

## 環境需求
- Node.js 14+
- MongoDB 4+
- npm 或 yarn

## 後端設定
1. 進入 `backend` 目錄
2. 建立 `.env` 檔案，設定以下環境變數：
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/brickbreaker
   JWT_SECRET=your_jwt_secret
   ```
3. 安裝相依套件：
   ```
   npm install
   ```
4. 啟動伺服器：
   ```
   npm start
   ```

## 前端設定
1. 進入 `frontend` 目錄
2. 直接開啟 `index.html` 即可遊玩（建議使用本機伺服器）

## 功能說明
- 遊戲核心玩法：滑鼠控制平台反彈球擊碎磚塊
- 玩家分數、生命、關卡管理
- 後端提供註冊、登入、遊戲進度儲存與讀取 API
- 後台管理磚塊類型、關卡設定、資料匯出匯入與統計報表

## 待完成
- Google 登入整合
- 後台管理介面
- 音效與音樂控制
- 難度調整功能
- 詳細測試與優化

## 測試建議
- 建議先進行重要路徑測試，確保遊戲基本功能正常
- 完成後可進行全面測試，覆蓋所有 API 與遊戲邏輯

## 聯絡
如有問題請聯絡開發者。
