Page({
  data: {
    //   这个一般是通过爬虫得到的
    richString: "<h1>标签内容</h1><hr/><h2>h2标签</h2>",
    // 解析一段html后，得到一个格式
    nodesArray: [
      {
        name: "h3",
        type: "node",
        attrs: {
          color: "#008c8c",
        },
        children: [
          {
            type: "text",
            text: "节点列表标题",
          },
        ],
      },
    ],
  },
});
