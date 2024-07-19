"use client";
import React, { useState } from 'react';
// import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { ProTable } from '@ant-design/pro-components';

export default function Home() {



  // const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  //   console.log('Success:', values);
  // };

  // const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };
  const columns = [
    {
      title: '患者名称',
      dataIndex: 'name',
      ellipsis: true,
    },
    
    {
      title: '就诊号',
      dataIndex: 'depict',
      hideInSearch: true,
      minWidth: '200px'
    },
    {
      title: '性别',
      dataIndex: 'chapter',
      hideInSearch: true,
    },
    {
      title: '年龄',
      dataIndex: 'remark',
      hideInSearch: true,
    },
    {
      title: '联系方式',
      dataIndex: 'remark',
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'showTime',
      valueType: 'date',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateRange',
      hideInTable: true,
      search: {
        transform: (value:any) => {
          return {
            startTime: value[0],
            endTime: value[1],
          };
        },
      },
    },
    {
      title: '操作',
      dataIndex: 'age',
      hideInSearch: true,
      render: () => (<div>
        <Button type='link'>详情</Button>
        <Button type='link'>编辑</Button>
        <Button type='link'>快速开方</Button>
      </div>)
    },
  ];
  const [params, setParams] = useState({ current: 1, pageSize: 20 });

  const fetchData = async (params: any) => {
    const { current, pageSize, sorter } = params;
    // const response = await fetch(`/api/data?current=${current}&pageSize=${pageSize}&sorter=${sorter}`);
    // const data = await response.json();
    const list = [
      { 'id': '111', 'name': '张三', 'depict': '描述描述', 'chapter': '太阳篇', 'remark': '注解注解', 'createTime': '2024-06-27' },
      { 'id': '222', 'name': '李四', 'depict': '描述描222述', 'chapter': '太阳篇', 'remark': '注解注解', 'createTime': '2010-03-02' }
    ]
    return {
      data: list,
      total: list.length,
      success: true,
    };
  };
  return (<main>

    <ProTable
      request={fetchData}
      params={params}
      //onParamsChange={setParams}
      columns={columns}
      search={{
        labelWidth: 'auto',
      }}
    />

  </main>
  );
}