import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { Layout, Row, Col, Card, Typography, Modal, Pagination } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { range } from 'lodash';

import Header from '../Header';
import CreateListModal from '../CreateListModal';

function Lists() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const showModal = useCallback(() => {
    setModalVisible(true);
  }, [setModalVisible]);

  const hideModal = useCallback(() => {
    setModalVisible(false);
  }, [setModalVisible]);


    return (
      <Layout>
        <Header />
        <Layout.Content>
          <Row>
            <Col offset={2} span={20}>
              <div className="top-margin">
                <Typography.Title>
                  My Lists <PlusOutlined onClick={showModal} />
                </Typography.Title>
              </div>
            </Col>
          </Row>
          <Row
            gutter={8}
            align="stretch"
          >
            {range(10).map(index => (
              <Col
                key={index}
                xs={{ span: 24 }}
                sm={{ span: 8 }}
                md={{ span: 8 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
              >
                <Card
                  hoverable
                  className="top-margin"
                  actions={[<DeleteOutlined onClick={showModal} />]}
                >
                  <Typography.Title level={4}>
                    List name
                    {index}
                  </Typography.Title>
                  Description
                </Card>
              </Col>
            ))}
          </Row>
          <Row
            align='stretch'
            justify="center"
          >
            <Col>
              <Pagination
                defaultCurrent={1}
                total={50}
                className="pagination"
              />
            </Col>
          </Row>
        </Layout.Content>
        <Modal
          visible={modalVisible}
          onCancel={hideModal}
          okText="Create"
          title="Create list"
        >
          <CreateListModal />
        </Modal>
      </Layout>
    );
}

export default Lists;
