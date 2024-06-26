import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Input, Form } from "antd";
import { GITEE_IMAGE_HOSTING } from "../../utils/constant";

const formItemLayout = {
  labelCol: {
    xs: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 16 }
  }
};

@inject("imageHosting")
@observer
class Gitee extends Component {
  constructor(props) {
    super(props);
    // 从localstorage里面读取
    const imageHosting = JSON.parse(localStorage.getItem(GITEE_IMAGE_HOSTING));
    this.state = {
      imageHosting
    };
  }

  usernameChange = e => {
    const { imageHosting } = this.state;
    imageHosting.username = e.target.value;
    this.setState({ imageHosting });
    localStorage.setItem(GITEE_IMAGE_HOSTING, JSON.stringify(imageHosting));
  };

  repoChange = e => {
    const { imageHosting } = this.state;
    imageHosting.repo = e.target.value;
    this.setState({ imageHosting });
    localStorage.setItem(GITEE_IMAGE_HOSTING, JSON.stringify(imageHosting));
  };

  tokenChange = e => {
    const { imageHosting } = this.state;
    imageHosting.token = e.target.value;
    this.setState({ imageHosting });
    localStorage.setItem(GITEE_IMAGE_HOSTING, JSON.stringify(imageHosting));
  };

  render() {
    const { username, repo, token } = this.state.imageHosting;
    return (
      <Form {...formItemLayout}>
        <Form.Item label="用户名" style={style.formItem}>
          <Input
            value={username}
            onChange={this.usernameChange}
            placeholder="例如：mdnice"
          />
        </Form.Item>
        <Form.Item label="仓库名" style={style.formItem}>
          <Input
            value={repo}
            onChange={this.repoChange}
            placeholder="例如：picture"
          />
        </Form.Item>
        <Form.Item label="token" style={style.formItem}>
          <Input
            value={token}
            onChange={this.tokenChange}
            placeholder="例如：qweASDF1234zxcvb"
          />
        </Form.Item>
        <Form.Item label="提示" style={style.formItem}>
          <span>配置后请在右上角进行切换，</span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://preview.mdnice.com/article/developer/gitee-image-hosting/"
          >
            Gitee 图床配置文档
          </a>
        </Form.Item>
      </Form>
    );
  }
}

const style = {
  formItem: {
    marginBottom: "10px"
  }
};

export default Gitee;
