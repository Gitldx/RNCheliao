package com.carchat.service;

import android.support.annotation.Nullable;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

/**
 * Created by Administrator on 2018-08-23.
 */

public class CarChatCommunication extends ReactContextBaseJavaModule {

    public CarChatCommunication(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @Override
    public String getName() {
        return "CarChatCommunication";
    }

    @ReactMethod
    public void notify(final String eventName){
        Log.d("ldx","HHHHHHHHHHHHHHHHHHHHHH~~~~~~~~~~~~~~~~~~~~~~~~~~~~TTTTTTTTTTTTTTTTTTTTTTTTT");

        CarChatCommunication.this.getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName,null);

    }

    @ReactMethod
    public void login(String userName, String pwd, Callback successCallback,Callback errorCallback){
        Log.d("ldx",userName + pwd);
        successCallback.invoke("hello world");
    }

}
