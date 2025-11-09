// plugin.ts

import process from 'process';
import webito, { emailCreate_input } from 'webito-plugin-sdk'
import nodemailer from 'nodemailer';

const starter = new webito.WebitoPlugin('starter');

starter.registerHook(
    webito.hooks.emailCreate,
    async ({ variables, data }: { variables: { host: string, port: number, username: string, password: string }, data: emailCreate_input }) => {
        try {
            const smtp = nodemailer.createTransport({
                host: variables.host,
                port: variables.port,
                auth: {
                    user: variables.username,
                    pass: variables.password
                }
            });
            const result = await smtp.sendMail({
                from: variables.username,
                to: data.email,
                subject: data.subject || '',
                html: data.html || data.message || '',
            });

            return {
                status: result.accepted.length > 0,
                data: result
            };
        } catch (error) {
            return {
                status: false,
                data: JSON.stringify(error)
            };
        }
    });

const runPlugin = async (inputData: { hook: string; data: any }) => {
    const result = await starter.executeHook(inputData.hook, inputData.data);
    return result;
};


process.stdin.on('data', async (input) => {
    const msg = JSON.parse(input.toString());
    const result: any = await runPlugin(msg);
    starter.response({ status: result?.status, data: result?.data })
});