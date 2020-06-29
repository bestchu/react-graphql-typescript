import * as React from 'react';
import { Button, Breadcrumb } from 'antd';
import styles from './index.module.scss';
import styles1 from './index.module.less';
import myImportedQuery from './graphql/productsQuery.graphql'

const Guide = () => {
  console.log(myImportedQuery);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>测试</h2>
      <Button>sssss</Button>
      <p className={styles.description}>This is a awesome project, enjoy it!</p>
      <div className={styles1.bgRed}>bg red</div>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.action}>
        <a
          href="https://ice.work/docs/guide/about"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: 20
          }}
        >
          使用文档
        </a>
        <a
          href="https://github.com/ice-lab/icejs"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

      </div>
    </div>
  );
};

export default Guide;
