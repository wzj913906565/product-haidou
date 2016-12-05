//验证码
$(function() {
	$('#password1').keyup(function() {
		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
		var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
		var enoughRegex = new RegExp("(?=.{6,}).*", "g");

		if(false == enoughRegex.test($(this).val())) {
			$('#pwdStrong').removeClass('pw-weak');
			$('#pwdStrong').removeClass('pw-medium');
			$('#pwdStrong').removeClass('pw-strong');
			$('#pwdStrong').addClass(' pw-defule');
			//密码小于六位的时候，密码强度图片都为灰色 
		} else if(strongRegex.test($(this).val())) {
			$('#pwdStrong').removeClass('pw-weak');
			$('#pwdStrong').removeClass('pw-medium');
			$('#pwdStrong').removeClass('pw-strong');
			$('#pwdStrong').addClass(' pw-strong');
			//密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
		} else if(mediumRegex.test($(this).val())) {
			$('#pwdStrong').removeClass('pw-weak');
			$('#pwdStrong').removeClass('pw-medium');
			$('#pwdStrong').removeClass('pw-strong');
			$('#pwdStrong').addClass('pw-medium');
			//密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
		} else {
			$('#pwdStrong').removeClass('pw-weak');
			$('#pwdStrong').removeClass('pw-medium');
			$('#pwdStrong').removeClass('pw-strong');
			$('#pwdStrong').addClass('pw-weak');
			//如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的 
		}
		return true;
	})

})


