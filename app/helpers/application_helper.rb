module ApplicationHelper
    def exist_file_from_url(url)
        require 'net/http'
        uri = URI(url)
        res = Net::HTTP.get_response(uri)
        return res.code.to_i == 200 ?  true : false
    end
end
