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
      title: '标准方剂',
      dataIndex: 'name',
      copyable: true,
      ellipsis: true,
      tooltip: '标题过长会自动收缩',
    },
    {
      title: '篇章',
      dataIndex: 'chapter',
      hideInTable: true,
      filters: true,
      onFilter: true,
      ellipsis: true,
      valueType: 'select',
      valueEnum: {
        open: {
          text: '太阳篇',
          status: '1',
        },
        closed: {
          text: '太阴篇',
          status: '2',
        },
      }
    },
    {
      title: '方剂描述',
      dataIndex: 'depict',
      hideInSearch: true,
      minWidth: '200px'
    },
    {
      title: '篇章',
      dataIndex: 'chapter',
      hideInSearch: true,
    },
    {
      title: '注解',
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
        transform: (value) => {
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
        <Button type='link' href='/standardRecipeDetail'>详情</Button>
        <Button type='link'>编辑</Button>
        <Button type='link'>删除</Button>
      </div>)
    },
  ];
  const [params, setParams] = useState({ current: 1, pageSize: 20 });

  const fetchData = async (params) => {
    const { current, pageSize, sorter } = params;
    // const response = await fetch(`/api/data?current=${current}&pageSize=${pageSize}&sorter=${sorter}`);
    // const data = await response.json();
    const list = [
      { 'id': '111', 'name': '麻杏甘石汤', 'depict': '描述描述', 'chapter': '太阳篇', 'remark': '注解注解', 'createTime': '2024-06-27' },
      { 'id': '222', 'name': '麻杏甘石汤11', 'depict': '描述描222述', 'chapter': '太阳篇', 'remark': '注解注解', 'createTime': '2010-03-02' }
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
      onParamsChange={setParams}
      columns={columns}
      search={{
        labelWidth: 'auto',
      }}
    />

  </main>
  );
}