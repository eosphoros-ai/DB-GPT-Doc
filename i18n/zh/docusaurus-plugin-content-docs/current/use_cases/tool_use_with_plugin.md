# 使用插件工具

- DB-GPT 支持 BaiduSearch, SendEmail等各种插件。 此外，一些数据库管理平台也可以将它们的接口打包到插件中。 并使用模型实现“单句要求”的能力

## Baidu搜索插件

[草-GPT 插件](https://github.com/eosphoros-ai/DB-GPT-Plugins/blob/main/src/dbgpt_plugins/Readme.md)

- 使用 Baidu 搜索引擎  [DB-GPT-Plugins](https://github.com/eosphoros-ai/DB-GPT-Plugins) 执行搜索查询。

```bash
git clone https://github.com/csunny/DB-GPT-Plugins.git
pip install -r requirements.txt
python /DB-GPT-Plugins/src/dbgpt_plugins/db_dashboard/mock_datas.py 
cp /DB-GPT-Plugins/src/dbgpt_plugins/db_dashboard/mock_datas/db-gptest.db /DB-GPT/mock_datas/

python /DB-GPT/pilot/llmserver.py
python /DB-GPT/pilot/webserver.py
```

- 测试案例：使用直方图分析不同城市用户的总订单数量。

<p align="center">
  <img src="../../assets/dashboard.png" width="680px" />
</p>

- 更多详情见： [DB-DASHBOARD](https://github.com/eosphoros-ai/DB-GPT-Plugins/blob/main/src/dbgpt_plugins/Readme.md)
