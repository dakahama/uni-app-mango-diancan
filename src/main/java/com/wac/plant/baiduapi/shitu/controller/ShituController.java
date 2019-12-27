package com.wac.plant.baiduapi.shitu.controller;

import com.wac.plant.baiduapi.shitu.utils.AuthService;
import com.wac.plant.baiduapi.shitu.utils.Base64Util;
import com.wac.plant.baiduapi.shitu.utils.HttpUtil;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.net.URLEncoder;

@RestController
public class ShituController {

    @PostMapping("/shitu")
    public String shitu(@RequestParam("pic") MultipartFile file){

        String url = "https://aip.baidubce.com/rest/2.0/image-classify/v1/plant";
        try {

            /*
            本地文件路径
            String filePath = "[本地文件路径]";
            byte[] imgData = FileUtil.readFileByBytes(filePath);
            */

            byte[] imgData = file.getBytes();
            String imgStr = Base64Util.encode(imgData);
            String imgParam = URLEncoder.encode(imgStr, "UTF-8");
            String param = "image=" + imgParam;

            // 注意这里仅为了简化编码每一次请求都去获取 access_token
            // 线上环境access_token有过期时间，客户端可自行缓存，过期后重新获取
            String accessToken = AuthService.getAuth();
            //System.out.println(accessToken);

            String result = HttpUtil.post(url, accessToken, param);
            //System.out.println(result);
            return result;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
