import { 
    NEXTPAGE,
    PREVPAGE
} from './index'

export function nextPageList(firstPage, nextPage){
	return {
		type: NEXTPAGE,
		payload: {
			first: firstPage,
			offset: nextPage
		}
	}
}

export function prevPageList(firstPage, nextPage){
	return {
		type: PREVPAGE,
		payload: {
			first: firstPage,
			offset: nextPage
		}
	}
}