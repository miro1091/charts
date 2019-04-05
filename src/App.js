import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "antd/dist/antd.css";
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
              <NavLink to="/amcharts">
                <Icon type="upload" />
                <span className="nav-text">AmCharts</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="/plotly">
                <Icon type="upload" />
                <span className="nav-text">Plotly</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="5">
              <NavLink to="/high-charts">
                <Icon type="upload" />
                <span className="nav-text">HighCharts</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="6">
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
                <Route
                  exact
                  path="/"
                  render={() => (
                    <LazyComponent from={import("./charts/Chart")} />
                  )}
                />
                <Route
                  path="/apex-charts"
                  render={() => (
                    <LazyComponent from={import("./charts/ApexCharts")} />
                  )}
                />
                <Route
                  path="/charts-maps"
                  render={() => (
                    <LazyComponent from={import("./charts/ChartsMaps")} />
                  )}
                />
                <Route
                    path="/amcharts"
                    render={() => (
                        <LazyComponent from={import("./charts/ChartsMaps")} />
                    )}
                />
                <Route
                  path="/high-charts"
                  render={() => (
                    <LazyComponent from={import("./charts/HighCharts")} />
                  )}
                />
                <Route
                  path="/plotly"
                  render={() => (
                    <LazyComponent from={import("./charts/Plotly")} />
                  )}
                />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>©2019 Charts</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export function LazyComponent({ from }) {
  const Component = React.lazy(() =>
    from.then(null, err => ({
      default: () => <div>{err.message}</div>
    }))
  );
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

export default App;
