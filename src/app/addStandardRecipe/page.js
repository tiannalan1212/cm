"use client";
import React, { useState, useEffect } from 'react';
import MyEditor from '../../../public/wangedit/wangedit'
import {
    ProForm,
    ProFormDependency,
    ProFormSelect,
    ProFormText,
  } from '@ant-design/pro-components';
import { Button, Form, Input, } from 'antd';
import styles from "../page.module.css";
import "./add.scss"
import Router from 'next/router'

export default function Deatil() {
    const [params, setParams] = useState({})
    const [form] = ProForm.useForm();
    const [fields, setFields] = useState([
        {
            name: ['name'],
            value: '',
        },
        {
            name: ['describe'],
            value: '',
        },
        {
            name: ['remark'],
            value: '',
        },
    ]);

    const getParams = (names) => {
        const params = new URLSearchParams(window.location.search)
        const result = {}
        let field = []
        names.forEach((name) => {
            result[name] = params.get(name)
            // fields.forEach(n => {
            //     console.log("n======", n, n.name[0], 'name', name)
            //     if (name == n.name[0])
            //         field = [...field, { name, value: params.get(name) }]

            // })
        })
        console.log('result', result, 'field=====', field)
        setParams({ ...result })
        // setFields([...field])
        // return field
    }

    useEffect(() => {
        getParams(['isAdd', 'name', 'describe', 'remark'])
        form.setFieldValue({...params})
    }, [window.location.search,])

    const onReset = () => {

    }
    const onChange = (newFields) => {
        setFields(newFields);
    }


    return (<div className={styles.body}>
        <div className='addTitle'>新增标准方剂详情</div>
        <div className='line'></div>
        {/* <Form
            className='addCont'
            fields={fields}
            onFieldsChange={(_, allFields) => {
                onChange(allFields);
            }}
        >
            <Form.Item label="标准方剂名称"
                name="name"
                initialValues={params.name}
                rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="标准方剂描述"
                name="describe"
                rules={[{ required: true, message: 'Please input your describe!' }]}>
                <MyEditor cont={params.describe || ''} />
            </Form.Item>

            <Form.Item label="标准方剂注解"
                name="remark">
                <MyEditor cont={params.remark || ''} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    保存
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    返回
                </Button>
            </Form.Item>
        </Form> */}
        <ProForm
            form={form}
            onFinish={async (values) => {
                // await waitTime(2000);
                console.log(values);
                message.success('提交成功');
            }}
            initialValues={params}
        >
            <ProFormText
                width="md"
                name="name"
                label="标准方剂名称"
                tooltip="最长为 24 位"
                placeholder="请输入名称"
                initialValue={params.name || ''}
            />
            <ProForm.Item name={'describe'} label="标准方剂描述" initialValue={params.describe || ''}>
                <MyEditor cont={params.describe || ''} />
            </ProForm.Item>
            <ProForm.Item name={'remark'} label="标准方剂注解"initialValue={params.remark || ''}>
                <MyEditor cont={params.remark || ''} />
            </ProForm.Item>
        </ProForm>
    </div>)
}