function download(nst)
{
	var rnm = 'input[name=st' + nst + ']';
	var shr = ".dld" + nst;
	var mode = $(rnm).val();
	if (mode == 0)
	{
		$(shr).show('slow');
		$(rnm).val(1);
	}
	else if (mode == 1)
	{
		$(shr).hide('slow');
		$(rnm).val(0);
	}
}