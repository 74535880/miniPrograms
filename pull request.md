# Pull Request

## 概念

"Pull Request 是一种通知机制。你修改了他人的代码，将你的修改通知原来的作者，希望他合并你的修改，这就是 Pull Request。"

> Pull Request 本质上是一种软件的合作方式，是将涉及不同功能的代码，纳入主干的一种流程。这个过程中，还可以进行讨论、审核和修改代码

## PR 流程

- 需要把别人的代码，克隆到自己的仓库。github 的术语叫做 fork（中文叫做叉子）
- 在你的仓库的修改的分支上，按下“New pull request”按钮
  > 这时，会进入一个新页面，有 Base 和 Head 两个选项。**Base 是你希望提交变更的目标，Head 是目前包含你的变更的那个分支或仓库。**
- 填写说明，帮助别人理解你的提交，然后按下"create pull request"按钮即可。
  > PR 创建后，管理者就要决定是否接受该 PR。对于非代码变更（比如文档），单单使用 Web 界面就足够了。但是，对于代码变更，Web 界面可能不够用，需要命令行验证是否可以运行。

## git am

作用：git am 命令用于将一个 patch 文件，合并进入当前代码。

> Github 对每个 PR 会自动生成一个 patch 文件。我们下载该文件，合并进本地代码，就可以在本地查看效果了。

## 创建远程仓库

另一种方法是为 PR 创建一个远程分支，追踪提交者的仓库

 <!-- 创建远程仓库，指向 PR 提交者的仓库 -->

\$ git remote add nullin git://github.com/nullin/testng.git

<!-- 从该远程仓库拉取代码 -->

\$ git fetch nullin

<!-- # 将该仓库的某个分支合并到当前分支 -->

\$ git merge kneath/error-page

<!-- # 推送到自己的仓库 -->

\$ git push origin master

也就是本地有个仓库，里面有一些代码，我们链接远程仓库，pr 的人的仓库，从 pr 的拉取代码，到本地，再把仓库的某个分支合并到当前开发的分支，然后，就可以提交了。

## cherry-pick

场景：
有时，PR 里面包含好几个 commit，但是你只想合并其中的一个或几个。

- 这时可以使用 cherry-pick 命令，挑出你感兴趣的 commit。

<!-- # 建立远程分支，追踪提交者的仓库 -->

\$ git remote add nullin git://github.com/nullin/testng.git

<!-- # 从该远程仓库拉取代码 -->

\$ git fetch nullin

<!-- # 只将感兴趣的 commit 加入当前代码 -->

$ git cherry-pick commit1
$ git cherry-pick commit2

<!-- # 推送到自己的仓库 -->

\$ git push origin master

- git cherry-pick 命令的作用，就是将指定的提交（commit）应用于其他分支。相当于当前分支多了一个commit提交
