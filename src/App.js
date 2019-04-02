import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "antd/dist/antd.css";
import {
  ApexCharts,
  Chart,
  ChartsMaps,
  HighCharts,
  PlotlyChart
} from "./charts";
import "./App.css";

const { Footer, Content, Sider } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <NavLink to="/">
                <Icon type="upload" />
                <span className="nav-text">ChartJS</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/charts-maps">
                <Icon type="upload" />
                <span className="nav-text">ChartsMaps</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/plotly">
                <Icon type="upload" />
                <span className="nav-text">Plotly</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="/high-charts">
                <Icon type="upload" />
                <span className="nav-text">HighCharts</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="5">
              <NavLink to="/apex-charts">
                <Icon type="upload" />
                <span className="nav-text">ApexCharts</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Switch>
                <Route exact path="/" component={Chart} />
                <Route path="/apex-charts" component={ApexCharts} />
                <Route path="/charts-maps" component={ChartsMaps} />
                <Route path="/high-charts" component={HighCharts} />
                <Route path="/plotly" component={PlotlyChart} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>©2019 Charts</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
