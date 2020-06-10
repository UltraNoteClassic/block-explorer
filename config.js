var api = 'https://superblockchain.con-ip.com/api/xun';
var apiList = ["https://superblockchain.con-ip.com/api/xun"];
var blockTargetInterval = 120;
var coinUnits = 1000000;
var symbol = 'XUN';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
        "xun": [
                ["Alpha.ultranote.org", "https://alpha.ultranote.org:8119/stats"],
                //                ["Gamma.ultranote.org", "https://gamma.ultranote.org:8119/stats"],
                //                ["Delta.ultranote.org", "https://delta.ultranote.org:8119/stats"],
                ["xun.newpool.cool", "http://xun.newpool.cool:8117/stats"],
                //                ["the-miners.de/XUN/", "http://207.180.227.127:8117/stats"],
                //                ["xun.minercountry.com", "https://xun.minercountry.com/api/stats"],
                //                ["fastpool.xyz/xun", "https://fastpool.xyz:8849/stats"],
                //                ["kryptoneupool.net", "https://kryptoneupool.net:8332/stats"],
                //                ["ultranote.oieieio.xyz", "http://ultranote.oieieio.xyz:8217/stats"],

    ]
};

