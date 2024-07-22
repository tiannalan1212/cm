"use client";
import React, { useState, useEffect,useRef } from 'react';
import MyEditor from '../../../public/wangedit/wangedit'
import { ProForm, ProFormText, ProFormRadio } from '@ant-design/pro-components';
import { Button, Form, Input } from 'antd';
import styles from "../page.module.css";
import "./add.scss"

export default function Deatil() {
    const [params, setParams] = useState({})
    const [form] = ProForm.useForm();

    const formRef = useRef();
    const getParams = (names) => {
        const params = new URLSearchParams(window.location.search)
        const result = {}
        let field = []
        names.forEach((name) => {
            result[name] = params.get(name)
        })
        console.log('result', result, 'field=====', field)
        setParams({ ...result })
        formRef?.current.setFieldsValue(result)
    }

    useEffect(() => {
        console.log('formRef?.current',formRef?.current)
        getParams(['isAdd', 'name', 'describe', 'remark'])
    }, [window.location.search,])

    const onReset = () => {

    }
    const onChange = (newFields) => {
        
    }


    return (<div className={styles.body}>
        <div className='addTitle'>新增处方</div>
        <div className='line'></div>
        <div className='formWrap'>
            <ProForm
                form={form}
                formRef={formRef}
                //layout="inline"
                onFinish={async (values) => {
                    // await waitTime(2000);
                    console.log(values);
                    message.success('提交成功');
                }}
                initialValues={params}
                fixSiderbar
                fixedHeader
            >
                <ProForm.Group title={'姓名'}>
                    <ProFormText
                        width="md"
                        name="name"
                        //label="姓名"
                        placeholder="请输入名称"
                        initialValue={params.name || ''}
                    />
                    <Button>选择已有患者</Button>
                </ProForm.Group>
                <ProFormText
                    width="md"
                    name="age"
                    label="年龄"
                    placeholder="请输入名称"
                    initialValue={params.age || ''}
                />
                <ProFormRadio.Group
                    label="性别"
                    name="sex"
                    initialValue="params.sex"
                    options={['男', '女']}
                />
                <ProForm.Item name={'narrative'} label="主诉" initialValue={params.narrative || ''}>
                    <MyEditor cont={params.narrative || ''} />
                </ProForm.Item>
                <ProForm.Item name={'diagnosis'} label="诊断"initialValue={params.diagnosis || ''}>
                    <MyEditor cont={params.diagnosis || ''} />
                </ProForm.Item>
                <ProForm.Group name={'recipe'} title="处方" initialValue={params.recipe || ''} style={{display:'flex'}}>
                    <MyEditor cont={params.recipe || ''} />
                    <Button>添加</Button>
                </ProForm.Group>
                <ProFormText
                    width="md"
                    name="num"
                    label="贴数"
                    placeholder="请输入名称"
                    initialValue={params.num || ''}
                />
                <ProForm.Item name={'note'} label="注意事项"initialValue={params.note || ''}>
                    <MyEditor cont={params.note || ''} />
                </ProForm.Item>
            </ProForm>
        </div>
    </div>)
}