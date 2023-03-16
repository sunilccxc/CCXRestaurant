public class SendWhatsappMessage {
    @AuraEnabled
    public static String send(String mobileno, String message){
        String account=Label.Twilio_username;
        String token=Label.Twilio_token;
        
        HttpRequest req = new HttpRequest();
        //add https://api.twilio.com/ in Remote Site Settings
        req.setEndpoint('https://api.twilio.com/2010-04-01/Accounts/'+account+'/Messages.json');
        req.setMethod('POST'); 
        req.setHeader('Content-Type','application/json');
        req.setHeader('Content-Type','application/x-www-form-urlencoded');
        
        
        Blob headerValue = Blob.valueOf(account + ':' + token);
        String authorizationHeader = 'BASIC ' + EncodingUtil.base64Encode(headerValue);
        req.setHeader('Authorization', authorizationHeader);
        string jsonString='From='+EncodingUtil.urlEncode('whatsapp:+14155238886', 'UTF-8')+'&Body='+EncodingUtil.urlEncode(message, 'UTF-8')+'&To='+EncodingUtil.urlEncode('whatsapp:'+mobileno+'', 'UTF-8')+'';
        req.setBody(jsonString);
        
        Http http = new Http();
        HTTPResponse res = http.send(req);
        System.debug('status'+res.getStatusCode());
        System.debug(res.getBody());
        
        return String.valueOf(res.getStatusCode());
        
    }
}